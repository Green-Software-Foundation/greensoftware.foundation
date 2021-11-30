import * as React from "react";
import { Link } from "gatsby";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom";

import "../styles/components/search.scss";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Hit = ({ hit, ...props }) => {
  return (
    <>
      <Link to={`/articles/${hit.slug}`}>
        <Highlight hit={hit} attribute="title" />
      </Link>
    </>
  );
};
const Search = () => {
  return (
    <div className="search-wrapper">
      <InstantSearch searchClient={searchClient} indexName="Articles">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

export default Search;
