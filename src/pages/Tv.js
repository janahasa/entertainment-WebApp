import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";
import SectionTitle from "../components/common/SectionTitle";
import SearchBar from "../components/SearchBar";
import TVSection from "../components/TVSection";
import { BookMarkedContext } from "../context/BookMarkedContext";
import { useFetch } from "../hooks/useFetch";
import { API_POPULAR_TV, deboune, SEARCH_TVS_API } from "../utils/utils";
const Tv = () => {
  const [pageNumberTvs, setPageNumberTvs] = useState(1);
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const [displayedTVs, setDisplayedTVs] = useState([]);
  const { data: tvs, loading: tvsLoading } = useFetch(
    `${API_POPULAR_TV} ${pageNumberTvs}`
  );
  const { bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const [searchInput, setSearchInput] = useState("");
  const {
    data: tvSearch,
    loading: searchLoading,
    error: fetchError,
  } = useFetch(
    searchInput &&
      `${SEARCH_TVS_API}${searchInput.toLowerCase()}&page=${pageNumberSearch}`
  );

  const [pageCount, setPageCount] = useState(tvs && tvs.total_pages);

  useEffect(() => {
    if (tvs) {
      setDisplayedTVs(tvs.results);
      setPageCount(tvs.total_pages);
    }
  }, [tvs]);

  useEffect(() => {
    searchTvs();
  }, [tvSearch, fetchError]);

  const onSearch = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const handleSearchInput = deboune(onSearch, 500);

  const searchTvs = () => {
    if (searchInput.trim() && tvSearch) {
      setDisplayedTVs((tvSearch && tvSearch.results) || []);
      setPageCount((tvSearch && tvSearch.total_pages) || 0);
    } else {
      setDisplayedTVs(tvs && tvs.results);
      setPageCount(tvs && tvs.total_pages);
    }
  };

  const handlePageClick = ({ selected }) => {
    if (searchInput && searchTvs) {
      setPageNumberSearch(Number(selected) + 1);
    } else {
      setPageNumberTvs(Number(selected) + 1);
    }
  };

  return (
    <main>
      <div className="container">
        <SearchBar
          placeHolder="Search for TV series"
          handleSearchInput={handleSearchInput}
        ></SearchBar>
        <section>
          {tvSearch ? (
            <SectionTitle
              className="section-title"
              content={`Found ${tvSearch.total_results} results for '${searchInput}'`}
            />
          ) : (
            <SectionTitle className="section-title" content="TV Series" />
          )}
          {tvsLoading ? (
            <div className="loader-wrapper">
              <Loader></Loader>
            </div>
          ) : (
            displayedTVs && (
              <TVSection
                className="card-container card-container-margin"
                tvs={displayedTVs}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                bookMarked={bookMarkedTVs}
              ></TVSection>
            )
          )}
        </section>
        <Pagination
          className={""}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      </div>
    </main>
  );
};

export default Tv;
