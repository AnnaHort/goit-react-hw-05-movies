import { useLocation } from 'react-router-dom';
import {
  LinkElement,
  ListElementStyle,
  ListStyle,
} from './SearchigMovies.styled';

export const SearchingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <ListStyle>
      {trendingMovies.map(movie => {
        if (!movie.title) {
          return null;
        }
        return (
          <ListElementStyle key={movie.id}>
            <LinkElement to={{
                pathname: `/movies/${movie.id}`,
              }} state={{from: location}}>{movie.title}</LinkElement>
          </ListElementStyle>
        );
      })}
    </ListStyle>
  );
};
