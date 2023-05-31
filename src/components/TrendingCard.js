import React from 'react'
import Image from "../components/common/Image";
import iconCategoryMovie from "../assets/icon-category-movie.svg"

const TrendingCard = ({ image,className }) => {
  return (
    <div className={className}>
      <Image src={image}></Image>
      <div className="card-txtContainer">
        <p>2019</p>
        <span></span>
        <img src={iconCategoryMovie} />
        <p>Movies</p>
        <span></span>
        <p>PG</p>
      </div>
      <h3>Bottom Gear</h3>
      <button className="card-bookedMark">
        <i class="far fa-bookmark" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default TrendingCard
