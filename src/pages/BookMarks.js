import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import EmptyBookMarked from './EmptyBookMarked';
import MoviesSection from '../components/Movies/MoviesSection';
import SearchBar from '../components/Search/SearchBar';
import TVSection from '../components/TV/TVSection';
import { BookMarkedContext } from '../context/BookMarkedContext';

const BookMarks = () => {
  const { bookMarkedMovies, bookMarkedTVs, indicateBookedMarkedBtn } = useContext(BookMarkedContext);
  const [isEmptyBookMarked, setIsEmptyBookMarked] = useState(bookMarkedMovies.length <= 0 && bookMarkedTVs.length <= 0);
  const [searchInput, setSearchInput] = useState('');
  const [moviesResult, setMoviesResult] = useState(bookMarkedMovies);
  const [tvsResult, setTvsResult] = useState(bookMarkedTVs);

  useEffect(() => {
    setIsEmptyBookMarked(bookMarkedMovies.length <= 0 && bookMarkedTVs.length <= 0);
  }, [bookMarkedMovies, bookMarkedTVs]);

  useEffect(() => {
    searchBookMarkedShow();
  }, [searchInput, bookMarkedMovies, bookMarkedTVs]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchBookMarkedShow = () => {
    if (searchInput.trim().toLowerCase()) {
      const searchMoviesRes = bookMarkedMovies.filter((item) => item.title && item.title.toLowerCase().includes(searchInput));
      const searchTvsRes = bookMarkedTVs.filter((item) => item.name && item.name.toLowerCase().includes(searchInput));
      setMoviesResult(searchMoviesRes);
      setTvsResult(searchTvsRes);
    } else {
      setMoviesResult(bookMarkedMovies);
      setTvsResult(bookMarkedTVs);
    }
  };

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
              <SectionTitle className="section-title" content="BookMarked Movies" />
            )}

            <MoviesSection
              className="card-container"
              movies={moviesResult}
              indicateBookedMarkedBtn={indicateBookedMarkedBtn}
              bookMarked={bookMarkedMovies}
            ></MoviesSection>
          </section>
        ) : null}

        {bookMarkedTVs.length ? (
          <section>
            {searchInput ? (
              <SectionTitle
                className="section-title"
                content={`Found ${tvsResult.length} results for '${searchInput}' in tv series bookmarked`}
              />
            ) : (
              <SectionTitle className="section-title" content="BookMarked TV Series" />
            )}
            <TVSection
              className="card-container"
              tvs={tvsResult}
              indicateBookedMarkedBtn={indicateBookedMarkedBtn}
              bookMarked={bookMarkedTVs}
            ></TVSection>
          </section>
        ) : null}

        {isEmptyBookMarked ? <EmptyBookMarked /> : null}
      </div>
    </main>
  );
};

export default BookMarks;
