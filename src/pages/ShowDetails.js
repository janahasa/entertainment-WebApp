import React from 'react'
import { useParams } from 'react-router-dom';
import ShowDetailsSection from '../components/ShowDetailsSection';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../utils/utils';

const ShowDetails = ({type}) => {
    const { id } = useParams();
    const { data: details, loading: detailsLoading } =
        useFetch(`${DETAILS_API}/${type}/${id}${API_KEY}`);
     const { data: videos } = useFetch(
       `${DETAILS_API}/${type}/${id}/videos${API_KEY}`
     );
     
  return (
    <main>
      <div className="container">
        <YoutubeEmbed
          embedId={videos && videos.results[0].key}
          className="video-responsive"
        />
        <section>
          <ShowDetailsSection showDetails={details&&details} />
        </section>
      </div>
    </main>
  );
}

export default ShowDetails
