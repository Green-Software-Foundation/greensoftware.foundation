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
} from "react-instantsearch-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

// Components
import Spinner from "./spinner";

// Assets
import SearchIcon from "../assets/icons/search.inline.svg";
import AlgoliaLogo from "../assets/icons/search-by-algolia-light-background.inline.svg";
import CloseCircleIcon from "../assets/icons/x-circle.inline.svg";
import CloseIcon from "../assets/icons/close.inline.svg";

// Styles
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
  ({ allSearchResults, searchState, isSearchStalled, children }) => {
    const hasResults =
      allSearchResults &&
      Object.values(allSearchResults).some((results) => results.nbHits > 0);
    if (!(searchState && searchState.query)) return <></>;
    if (isSearchStalled) return <></>;
    return !hasResults ? (
      <div>
        <div className="no-result-wrapper">
          No results in articles, projects or working groups
        </div>
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
    <a
      href=" https://algolia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="algolia-logo"
    >
      <AlgoliaLogo />
    </a>
    <input
      className="search-input"
      placeholder="Search Articles and Projects... "
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <span className="search-icon">
      <SearchIcon />
    </span>

    {currentRefinement && (
      <button
        className="reset-btn"
        onClick={(e) => {
          e.preventDefault();
          refine("");
        }}
      >
        <CloseCircleIcon />
      </button>
    )}
    {isSearchStalled ? (
      <div style={{ marginTop: "1rem" }} className="flex-center-center">
        <Spinner />
      </div>
    ) : (
      ""
    )}
  </form>
);

const SearchBox = connectSearchBox(CustomSearchBox);

const Search = ({ pageContentEl, close }) => {
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
      <div className="search-widget container">
        <div className="main-close-btn">
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <div>
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
      <div className="search-footer flex-center-between">
        <button onClick={close} className="close-btn flex-center-between">
          <CloseIcon />
          Close
        </button>
        <a
          href=" https://algolia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="algolia-logo"
        >
          <AlgoliaLogo />
        </a>
      </div>
    </div>
  );
};

export default Search;
