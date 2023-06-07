import React from "react";

const YoutubeEmbed = ({ embedId  }) => {
 
  return (
   
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

  );
};

export default YoutubeEmbed