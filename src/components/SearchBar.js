import React from 'react'

const SearchBar = ({ placeHolder, handleSearchInput }) => {
  return (
    <div className="search-bar">
      <i className="fa fa-search"></i>
      <input placeholder={placeHolder} onChange={handleSearchInput} />
    </div>
  );
};

export default SearchBar
