import {
  LinkElement,
  ListElementStyle,
  ListStyle,
} from './SearchigMovies.styled';

export const SearchingMoviesList = ({ trendingMovies }) => {
  return (
    <ListStyle>
      {trendingMovies.map(movie => {
        if (!movie.title) {
          return null;
        }
        return (
          <ListElementStyle key={movie.id}>
            <LinkElement to={`/movies/${movie.id}`}>{movie.title}</LinkElement>
          </ListElementStyle>
        );
      })}
    </ListStyle>
  );
};
