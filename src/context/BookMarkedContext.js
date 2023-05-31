import { createContext, useEffect } from "react";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { isBookMarked } from "../utils/utils";

const BookMarkedContext = createContext({});
const BookMarkedContextProvider = (props) => {
  const [bookMarkedMovies, setBookMarkedMovies] = useLocalStorage(
    "bookMarkedMovies",
    []
  );
   const [bookMarkedTVs, setBookMarkedTVS] = useLocalStorage(
     "bookMarkedTVS",
     []
   );

  const handleDeleteBookedMarked = (id,mediaType) => {
     let bookMarks=[]
    if (mediaType == "movie") {
      bookMarks = bookMarkedMovies.filter((item) => {
        return item.id !== id;
      });
      setBookMarkedMovies(bookMarks);
    } else {
      bookMarks = bookMarkedTVs.filter((item) => {
        return item.id !== id;
      });
      setBookMarkedTVS(bookMarks);
    }
    
  };

  const handleAddBookedMarked = (item,mediaType) => {
    if (mediaType == "movie") {
      setBookMarkedMovies((prevState) => [...prevState, item]);
    } else {
      setBookMarkedTVS((prevState) => [...prevState, item]);
    }
      
  };

  const indicateBookedMarkedBtn = (element, mediaType) => {
    if (
      isBookMarked(element.id, bookMarkedMovies) ||
      isBookMarked(element.id, bookMarkedTVs)
    ) {
      handleDeleteBookedMarked(element.id, mediaType);
    } else {
      handleAddBookedMarked(element, mediaType);
    }
  };

  useEffect(() => {
    
  });
  return (
    <BookMarkedContext.Provider
      value={{
        bookMarkedMovies,
        bookMarkedTVs,
        indicateBookedMarkedBtn,
      }}
    >
      {props.children}
    </BookMarkedContext.Provider>
  );
};
export { BookMarkedContextProvider, BookMarkedContext };
