import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import SearchBar from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import {
  API_TRENDING_URL,
  deboune,
  MULTI_SEARCH_API,
  TV_Top_RATED,
} from "../utils/utils";
import TrendingSection from "../components/TrendingSection";
import Loader from "../components/common/Loader";
import { BookMarkedContext } from "../context/BookMarkedContext";
import CardSlider from "../components/common/CardSlider";
import HomeSearchResult from "../components/HomeSearchResult";
import Pagination from "../components/common/Pagination";

const Home = () => {
  const [pageNumberSearch, setPageNumberSearch] = useState(1);
  const [displayedTrending, setDisplayedTrending] = useState([]);
  const [displayedSearch, setDisplayedSearch] = useState(null);
  const { data: trending, loading: trendingLoading } =
    useFetch(API_TRENDING_URL);
  const { bookMarkedMovies, bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const { data: tvTopRated, loading: tvTopRatedLoading } =
    useFetch(TV_Top_RATED);
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
            <section>
              <SectionTitle className="section-title" content="Trending" />
              {trendingLoading ? (
                <Loader></Loader>
              ) : (
                displayedTrending && (
                  <TrendingSection
                    trending={displayedTrending}
                    bookMarkedMovies={bookMarkedMovies}
                    bookMarkedTVs={bookMarkedTVs}
                    indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                  ></TrendingSection>
                )
              )}
            </section>
            <section>
              <SectionTitle
                className="section-title"
                content="Top Rated TV Series"
              />
              {tvTopRatedLoading ? (
                <Loader></Loader>
              ) : (
                tvTopRated && (
                  <div className="home-slider">
                    <CardSlider
                      items={tvTopRated.results}
                      className="card"
                      bookMarked={bookMarkedTVs}
                      indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                      media_type="tv"
                    ></CardSlider>
                  </div>
                )
              )}
            </section>
     
           
        
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
