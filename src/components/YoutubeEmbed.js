import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../utils/utils';



const YoutubeEmbed = ({ embedId ,className }) => {
  return (
    <div className={className}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed
