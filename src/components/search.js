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

import "../styles/components/search.scss";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const IndexResults = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchState &&
    searchState.query &&
    searchResults &&
    searchResults.nbHits !== 0 ? (
      children
    ) : (
      <></>
    )
);

const ArticlesHit = ({ hit, ...props }) => {
  return (
    <div className="article-hit">
      <Link to={`/articles/${hit.slug}`}>
        <Highlight hit={hit} attribute="title" />
        <Highlight hit={hit} attribute="summary" />
      </Link>
    </div>
  );
};

const ProjectsHit = ({ hit, ...props }) => {
  return (
    <>
      <Link to={`/projects/${hit.slug}`}>
        <Highlight hit={hit} attribute="title" />
      </Link>
    </>
  );
};
const CustomSearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search" className="search-form ">
    <input
      className="search-input"
      placeholder="Search Articles, Projects and Groups..."
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      autoFocus
    />
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

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-widget">
        <InstantSearch searchClient={searchClient} indexName="Articles">
          <SearchBox />
          <div className="hits-wrapper">
            <Index indexName="Articles">
              <IndexResults>
                <h2>Articles</h2>
                <Hits hitComponent={ArticlesHit} />
              </IndexResults>
            </Index>
            <Index indexName="Projects">
              <IndexResults>
                <h2>Projects</h2>
                <Hits hitComponent={ProjectsHit} />
              </IndexResults>
            </Index>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

export default Search;
