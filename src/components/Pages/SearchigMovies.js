import { Link } from 'react-router-dom';

export const SearchingMoviesList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(movie => {
        if (!movie.title) {
          return null;
        }
        return (
          <li key={movie.id}>
            <Link to=''>{movie.title}</Link>
            {/* <Link to={`/movie/${movie.id}`}>{movie.title}</Link> */}
          </li>
        );
      })}
    </ul>
  );
};
