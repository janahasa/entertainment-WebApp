import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import SearchBar from "../components/Search/SearchBar";
import { useFetch } from "../hooks/useFetch";
import {
  API_TRENDING_URL,
  deboune,
  MULTI_SEARCH_API,
} from "../utils/utils";
import Loader from "../components/common/Loader";
import { BookMarkedContext } from "../context/BookMarkedContext";
import HomeSearchResult from "../components/Search/HomeSearchResult";
import Pagination from "../components/common/Pagination";
import NowPlaying from "../components/HomePage/NowPlaying";
import TopRatedMovie from "../components/HomePage/TopRatedMovie";
import TvSeries from "../components/HomePage/TVSeries";
import TopRatedTV from "../components/HomePage/TopRatedTV";
import Trending from "../components/HomePage/Trending";

const Home = () => {
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const [displayedTrending, setDisplayedTrending] = useState([]);
  const [displayedSearch, setDisplayedSearch] = useState(null);
  const { data: trending, loading: trendingLoading } =
    useFetch(API_TRENDING_URL);
  const { bookMarkedMovies, bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);

 

  const [searchInput, setSearchInput] = useState("");
  const {
    data: search,
    loading: searchLoading,
    error: fetchError,
  } = useFetch(
    searchInput &&
      `${MULTI_SEARCH_API}${searchInput.toLowerCase()}&page=${pageNumberSearch}`
  );
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (trending) {
      setDisplayedTrending(trending.results);
    }
  }, [trending]);

  useEffect(() => {
    searchMovie();
  }, [search, fetchError]);

  const onSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInput = deboune(onSearch, 500);
  const searchMovie = () => {
    if (searchInput.trim() && search) {
      setDisplayedSearch((search && search.results) || []);
      setPageCount((search && Number(search.total_pages)) || 0);
    } else {
      setDisplayedSearch(null);
      setPageCount(0);
    }
  };
   const handlePageClick = ({ selected }) => {
     if (searchInput && search) {
       setPageNumberSearch(Number(selected) + 1);
     } else {
       setPageNumberSearch( 1);
     }
   };

  return (
    <main>
      <div className="container">
        <SearchBar
          placeHolder="Search for movies or TV series"
          handleSearchInput={handleSearchInput}
        ></SearchBar>
        {!displayedSearch && !searchInput ? (
          <>
           <Trending/>
            <TopRatedTV/>
            <TvSeries/>
            <TopRatedMovie/>
            <NowPlaying/>
          </>
        ) : searchLoading ? (
          <div className="loader-wrapper">
            <Loader></Loader>
          </div>
        ) : (
          displayedSearch && (
            <>
              <SectionTitle
                className="section-title"
                content={`Found ${search.total_results} results for '${searchInput}'`}
              />
              <HomeSearchResult
                result={displayedSearch}
                bookMarkedMovies={bookMarkedMovies}
                bookMarkedTVs={bookMarkedTVs}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
              ></HomeSearchResult>
            </>
          )
        )}
        {
          <Pagination
            className={""}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        }
      </div>
    </main>
  );
};

export default Home;
