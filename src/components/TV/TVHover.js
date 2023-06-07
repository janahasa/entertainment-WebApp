import React from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../common/YoutubeEmbed";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, DETAILS_API } from "../../utils/utils";


const TVHover = ({TvId}) => {
    const { id=TvId } = useParams();
    const { data: videos } = useFetch(
      `${DETAILS_API}/tv/${id}/videos${API_KEY}`
    );

    return (          
        <YoutubeEmbed
          embedId={videos && videos.results[0].key}
        />
 
          )};


export default TVHover;
