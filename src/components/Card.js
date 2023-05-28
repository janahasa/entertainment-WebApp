import React, { useState , useEffect} from "react";
import Image from "../components/common/Image";
import { API_IMG } from "../utils/utils";
import FilmIcon from "./common/FilmIcon";
import TVIcon from "./common/TVIcon";
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../utils/utils';

const Card = ({
  element,
  className,
  backdrop_path,
  title,
  media_type,
  release_date,
  first_air_date,
  poster_path,
  isBookedMarked,
  indicateBookedMarkedBtn,
  to,
  type,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const { id } = useParams();
  const { data: videos } = useFetch(`${DETAILS_API}/${type}/${id}/videos${API_KEY}`);
  const embedId = videos && videos.results[0].key;
 

 return (
    <Link to={to}>
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       {isHovered ? (
         
          <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          />
        ) : (
          <Image src={API_IMG + poster_path || API_IMG + backdrop_path} />
          )}
        <div className="card-txtContainer">
          
          <p>
            {(release_date && release_date.substring(0, 4)) ||
              (first_air_date && first_air_date.substring(0, 4))}
          </p>
          
          <span></span>
          {media_type === "movie" ? <FilmIcon /> : <TVIcon />}
          <p>{media_type}</p>
          <span></span>
          <div className="rating">
            <i className="fa fa-star"></i>
            <p>{element.vote_average}</p>
          </div>
           
        </div>
        <h3>{title}</h3>
        <button
          className="card-bookedMark"
          onClick={(event) => {
            event.preventDefault();
            indicateBookedMarkedBtn(element, media_type);
          }} 
        >     
          <i
            className={`${isBookedMarked ? "fas" : "far"} fa-bookmark`}
            aria-hidden="true"
          ></i>
        </button>
        <div className="play-container">
          <button>
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    </Link>

  );
};

export default Card;
