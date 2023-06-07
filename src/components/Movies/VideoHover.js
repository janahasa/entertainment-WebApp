import React from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../common/YoutubeEmbed";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, DETAILS_API } from "../../utils/utils";


const VideoHover = ({videoId}) => {

  const { id = videoId} = useParams();
  const { data: videos } = useFetch(
    `${DETAILS_API}/movie/${id}/videos${API_KEY}`
  );

   return (
           <YoutubeEmbed
             embedId={videos && videos.results[0].key} />
         )   
};

export default VideoHover;
