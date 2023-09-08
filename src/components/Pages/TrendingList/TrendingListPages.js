import { useEffect, useState } from 'react';
import {
  Container,
  LinkElement,
  ListElementStyle,
  TitleStyle,
} from './TrendingList.styled';
import { getMovies } from 'components/API';

 const TrendingList = () => {
  const adress = '/trending/all/day';
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies(adress);
        setTrendingMovies(moviesData.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <TitleStyle>Trending today</TitleStyle>
      <ul>
        {trendingMovies.map(movie => {
          if (!movie.title) {
            return null;
          }
          return (
            <ListElementStyle key={movie.id}>
              <LinkElement to={`/movies/${movie.id}`}>
                {movie.title}
              </LinkElement>
            </ListElementStyle>
          );
        })}
      </ul>
    </Container>
  );
};

export default TrendingList;
