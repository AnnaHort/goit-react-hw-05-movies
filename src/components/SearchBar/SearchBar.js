import { getMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchMovies = () => {
  const adress = '/search/movie';
  const [favoritesMovie, setFavoritesMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies(adress);
        setFavoritesMovie(moviesData.results);
      } catch (error) {
        console.error('Error searching for the desired movie:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {favoritesMovie.map(movie => {
        if (!movie.title) {
          return null;
        }
        return (
          <ul>
            <li key={movie.id}>
              <Link>{movie.title}</Link>
            </li>
          </ul>
        );
      })}
    </ul>
  );
};
