import React, { useState } from "react";
import { isBookMarked } from "../../utils/utils";
import Card from "./Card";

const CardSlider = ({
  items,
  className,
  indicateBookedMarkedBtn,
  bookMarked,
  media_type,
}) => {
  const [itemsPerSlide, setItemsPerSlide] = useState([...items]);
  const [index, setIndex] = useState(0);
  const slideCount = Math.ceil(items.length);

  const nextSlide = () => {
    if (index < slideCount-1) {
      const elements = [...items.slice(index + 1)];
      setIndex(prev => prev + 1);
      setItemsPerSlide([...elements]);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      const elements = [...items.slice(index - 1)];
      setIndex(prev => prev - 1);
      setItemsPerSlide([...elements]);
    }
  };

  return (
    <div className="slider-wrapper">
      <i className="fa-solid fa-angle-left next" onClick={prevSlide}></i>
      <div className="carousel">
        {itemsPerSlide &&
          itemsPerSlide.map((item) => {
            const { id } = item;
            const isBookedMarked = isBookMarked(id, bookMarked);
            const detailsPageType = media_type === "movie" ? "movies" : "series";
            return (
              <Card
                className={className}
                title={item.original_title || item.name}
                poster_path={item.poster_path}
                release_date={item.first_air_date || item.release_date}
                isBookedMarked={isBookedMarked}
                indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                key={item.id}
                element={item}
                media_type={media_type}
                to={`/${detailsPageType}/${item.id}`}
                id={item.id}
              ></Card>
            );
          })}
      </div>
      <i className="fa-solid fa-angle-right prev" onClick={nextSlide}></i>
    </div>
  );
};

export default CardSlider;
