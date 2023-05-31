import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import EmptyBookMarked from "../components/EmptyBookMarked";
import MoviesSection from "../components/MoviesSection";
import SearchBar from "../components/SearchBar";
import TVSection from "../components/TVSection";
import { BookMarkedContext } from "../context/BookMarkedContext";

const BookMarks = () => {
  const { bookMarkedMovies, bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const [isEmptyBookMarked, setIsEmptyBookMarked] = useState(
    bookMarkedMovies.length <= 0 && bookMarkedTVs.length <= 0
  );
  const [searchInput, setSearchInput] = useState("");
  const [moviesResult, setMoviesResult] = useState(bookMarkedMovies);
  const [tvsResult, setTvsResult] = useState(bookMarkedTVs);

  useEffect(() => {
    if (bookMarkedMovies.length <= 0 && bookMarkedTVs.length <= 0) {
      setIsEmptyBookMarked(true);
    } else {
      setIsEmptyBookMarked(false);
    }
  });

  useEffect(() => {
    searchBookMarkedShow();
  }, [searchInput, bookMarkedMovies, bookMarkedTVs]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchBookMarkedShow = () => {
    if (searchInput.trim().toLowerCase()) {
      let searchMoviesRes = bookMarkedMovies.filter((item) => {
        return item.title && item.title.toLowerCase().includes(searchInput);
      });
      let searchTvsRes = bookMarkedTVs.filter((item) => {
        return item.name && item.name.toLowerCase().includes(searchInput);
      });
      setMoviesResult(searchMoviesRes);
      setTvsResult(searchTvsRes);
    } else {
      setMoviesResult(bookMarkedMovies);
      setTvsResult(bookMarkedTVs);
    }
  };

  if (!isEmptyBookMarked) {
    return (
      <main>
        <div className="container">
          <SearchBar
            placeHolder="Search for BookMarked shows"
            handleSearchInput={handleSearchInput}
          ></SearchBar>
          {bookMarkedMovies.length ? (
            <section>
              {searchInput ? (
                <SectionTitle
                  className="section-title"
                  content={`Found ${moviesResult.length} results for '${searchInput}' in movies bookmarked`}
                />
              ) : (
                <SectionTitle
                  className="section-title"
                  content="BookMarked Movies"
                />
              )}

              <MoviesSection
                className="card-container"
                movies={moviesResult}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                bookMarked={bookMarkedMovies}
              ></MoviesSection>
            </section>
          ) : (
            ""
          )}
          {bookMarkedTVs.length ? (
            <section>
              {searchInput ? (
                <SectionTitle
                  className="section-title"
                  content={`Found ${tvsResult.length} results for '${searchInput}' in tv series bookmarked`}
                />
              ) : (
                <SectionTitle
                  className="section-title"
                  content="BookMarked TV Series"
                />
              )}
              <TVSection
                className="card-container"
                tvs={tvsResult}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                bookMarked={bookMarkedTVs}
              ></TVSection>
            </section>
          ) : (
            ""
          )}
        </div>
      </main>
    );
  } else {
    return <EmptyBookMarked />
  }
};

export default BookMarks;
