import * as React from "react";
import { Link } from "gatsby";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  Index,
  Hits,
  Highlight,
  connectSearchBox,
  connectStateResults,
  //   SearchBox,
} from "react-instantsearch-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

// Assets
import SearchIcon from "../assets/icons/search.inline.svg";
import AlgoliaLogo from "../assets/icons/search-by-algolia-light-background.inline.svg";

import "../styles/components/search.scss";

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);
const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};
const AllResults = connectStateResults(
  ({ allSearchResults, searchState, children }) => {
    const hasResults =
      allSearchResults &&
      Object.values(allSearchResults).some((results) => results.nbHits > 0);
    if (!(searchState && searchState.query)) return <></>;
    return !hasResults ? (
      <div>
        <div>No results in articles, projects or working groups</div>
        <Index indexName="Articles" />
        <Index indexName="Projects" />
      </div>
    ) : (
      children
    );
  }
);

const IndexResults = connectStateResults(
  ({ searchState, searchResults, title, children }) =>
    searchState &&
    searchState.query &&
    searchResults &&
    searchResults.nbHits !== 0 ? (
      <div className="results-wrapper">
        <div className="results-header flex-center-between">
          <h1 className="green-uppercase-title">{title}</h1>
          <span>{searchResults.nbHits} results</span>
        </div>
        {children}
      </div>
    ) : (
      <></>
    )
);

const ArticlesHit = ({ hit, ...props }) => {
  console.log(hit);
  return (
    <div className="article-hit">
      <Link to={`/articles/${hit.slug}`}>
        <img src={hit.image} alt={hit.title} />
        <Highlight className="title" hit={hit} attribute="title" />
        <Highlight className="summary" hit={hit} attribute="summary" />
      </Link>
    </div>
  );
};

const ProjectsHit = ({ hit, ...props }) => {
  return (
    <div className="project-hit ">
      <Link to={`/projects/${hit.slug}`}>
        <img src={hit.image} alt={hit.title} />
        <div>
          <Highlight className="title" hit={hit} attribute="title" />
          <Highlight
            className="summary"
            hit={hit}
            attribute="shortDescription"
          />
        </div>
      </Link>
    </div>
  );
};
const CustomSearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate role="search" className="search-form ">
    <input
      className="search-input"
      placeholder="Search Articles, Projects and Groups..."
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <span className="search-icon">
      <SearchIcon />
    </span>
    {/* <button
      onClick={(e) => {
        e.preventDefault();
        refine("");
      }}
    >
      Reset query
    </button>
    {isSearchStalled ? "My search is stalled" : ""} */}
  </form>
);

const SearchBox = connectSearchBox(CustomSearchBox);

const Search = ({ pageContentEl }) => {
  const searchEl = React.useRef(null);
  React.useEffect(() => {
    disableBodyScroll(searchEl.current);
    const pageContentElement = pageContentEl.current;
    if (pageContentElement) pageContentElement.style.filter = "blur(6px)";
    return () => {
      clearAllBodyScrollLocks();
      pageContentElement.style.filter = "";
    };
  }, [pageContentEl]);
  return (
    <div ref={searchEl} className="search-wrapper ">
      <div className="search-widget">
        <div className="algolia-logo">
          <a
            href=" https://algolia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AlgoliaLogo />
          </a>
        </div>
        <InstantSearch searchClient={searchClient} indexName="Articles">
          <SearchBox />
          <AllResults>
            <div className="hits-wrapper">
              <Index indexName="Articles">
                <IndexResults title="Articles">
                  <Hits hitComponent={ArticlesHit} />
                </IndexResults>
              </Index>
              <Index indexName="Projects">
                <IndexResults title="Projects">
                  <Hits hitComponent={ProjectsHit} />
                </IndexResults>
              </Index>
            </div>
          </AllResults>
        </InstantSearch>
      </div>
    </div>
  );
};

export default Search;
