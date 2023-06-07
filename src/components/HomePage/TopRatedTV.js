import React, { useContext } from "react";
import SectionTitle from "../common/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import {
  TV_Top_RATED,
} from "../../utils/utils";
import Loader from "../common/Loader";
import { BookMarkedContext } from "../../context/BookMarkedContext";
import CardSlider from "../common/CardSlider";


const TopRatedTV = () => {
  const { bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
    const { data: tvTopRated, loading: tvTopRatedLoading } =
    useFetch(TV_Top_RATED);
    return (

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
    
  );
};

export default TopRatedTV;