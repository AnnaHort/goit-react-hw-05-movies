import { getMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const adress = `/movie/${id}/credits`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actorData = await getMovies(adress);
        setLoading(false);

        const castArray = actorData.cast;
        setCast(castArray); 

      } catch (error) {
        console.error('Error fetching movie:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [adress]);


  if (loading) {
   return <Circles />;
  }
  return (
    <>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
          {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.original_name}
              />
            ) : (
              <p>No image available</p>
            )}
            <p>{actor.original_name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
