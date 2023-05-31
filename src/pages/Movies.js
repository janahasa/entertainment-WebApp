import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";
import SectionTitle from "../components/common/SectionTitle";
import MoviesSection from "../components/MoviesSection";
import SearchBar from "../components/SearchBar";
import { BookMarkedContext } from "../context/BookMarkedContext";
import { useFetch } from "../hooks/useFetch";
import { API_POPULAR_MOVIES, deboune, SEARCH_MOVIES_API } from "../utils/utils";

const Movies = () => {
  const [pageNumberMovies, setPageNumberMovies] = useState(1);
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const { data: movies, loading: moviesLoading } = useFetch(
    `${API_POPULAR_MOVIES} ${pageNumberMovies}`
  );
  const { bookMarkedMovies, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const [searchInput, setSearchInput] = useState("");
  const {
    data: moviesSearch,
    loading: searchLoading,
    error: fetchError,
  } = useFetch(
    searchInput &&
      `${SEARCH_MOVIES_API}${searchInput.toLowerCase()}&page=${pageNumberSearch}`
  );
  const [pageCount, setPageCount] = useState(movies && movies.total_pages);

  useEffect(() => {
    if (movies) {
      setDisplayedMovies(movies.results);
      setPageCount(movies && movies.total_pages);
    }
  }, [movies]);

  useEffect(() => {
    searchMovie();
  }, [moviesSearch, fetchError]);

  const onSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInput = deboune(onSearch, 500);
  const searchMovie = () => {
    if (searchInput.trim() && moviesSearch) {
      setDisplayedMovies((moviesSearch && moviesSearch.results) || []);
      setPageCount((moviesSearch && Number(moviesSearch.total_pages)) || 0);
    } else {
      setDisplayedMovies(movies && movies.results);
      setPageCount(movies && Number(movies.total_pages));
    }
  };

  const handlePageClick = ({ selected }) => {
    if(searchInput && searchMovie){
       setPageNumberSearch(Number(selected) + 1);
    }else{
      setPageNumberMovies(Number(selected) + 1);
    }
    
  };

  return (
    <main>
      <div className="container">
        <SearchBar
          placeHolder="Search for movies"
          handleSearchInput={handleSearchInput}
        ></SearchBar>
        <section>
          {moviesSearch ? (
            <SectionTitle
              className="section-title"
              content={`Found ${moviesSearch.total_results} results for '${searchInput}'`}
            />
          ) : (
            <SectionTitle className="section-title" content="Movies" />
          )}
          {moviesLoading ? (
            <div className="loader-wrapper">
              <Loader></Loader>
            </div>
          ) : (
            displayedMovies && (
              <MoviesSection
                className="card-container card-container-margin"
                movies={displayedMovies}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                bookMarked={bookMarkedMovies}
              ></MoviesSection>
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

export default Movies;
