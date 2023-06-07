import React, { useContext } from "react";
import SectionTitle from "../common/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import {
  TV_LATEST_API,
} from "../../utils/utils";
import Loader from "../common/Loader";
import { BookMarkedContext } from "../../context/BookMarkedContext";
import CardSlider from "../common/CardSlider";


const TvSeries = () => {
  const { bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
    const { data: tvLatest, loading: tvLatestLoading } = useFetch(TV_LATEST_API);
    return (
      <main>
   <section>
              <SectionTitle
                className="section-title"
                content="Airing Today TV Series"
              />
              {tvLatestLoading ? (
                <Loader></Loader>
              ) : (
                tvLatest && (
                  <div className="home-slider">
                    <CardSlider
                      items={tvLatest.results}
                      className="card"
                      bookMarked={bookMarkedTVs}
                      indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                      media_type="tv"
                    ></CardSlider>
                  </div>
                )
              )}
            </section>
</main>
  );
};

export default TvSeries;