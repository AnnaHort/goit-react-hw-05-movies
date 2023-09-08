import { BsArrowBarLeft } from 'react-icons/bs';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovies } from 'components/API';
import {Circles} from 'react-loader-spinner';
import { LinkElement, ListElementStyle } from '../Pages/TrendingList/TrendingList.styled';
import {
  AdditionalInfoStyle,
  ContainerInfo,
  ContainerStyled,
  GoBackStyle,
  ListStyle,
  MovieInfoContainer,
  MovieInfoStyle,
  PosterContainerStyle,
  TitleStyled,
} from './Movies.styled';

 const Movies = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const {id} = useParams();

  const adress = `/movie/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovies(adress);
        setData(movieData);

        const movieTitle = movieData.original_title;
        setTitle(movieTitle);
        const movieVote = movieData.vote_average;
        setVote(movieVote);
        const overView = movieData.overview;
        setOverview(overView);
        const moviePoster = movieData.poster_path;
        setPoster(moviePoster);

        const movieGenresInfo = movieData.genres;

        let movieGenre = [];

        movieGenresInfo.forEach(genres => {
          const ganreName = genres.name;
          if (!movieGenre.includes(ganreName)) {
            movieGenre.push(ganreName);
          }
          return;
        });

        setGenres(movieGenre.join(', '));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [adress]);

  const usesrScore = (vote * 10).toFixed(0);

  if(loading && data){
    return <Circles/>
  }
  return (
    <>
     <ContainerStyled>
      <TitleStyled>Movies</TitleStyled>
      <GoBackStyle to={backLocation.current}>
        <BsArrowBarLeft />
        Go back
      </GoBackStyle>
      <MovieInfoStyle>
        <PosterContainerStyle>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster}`}
            alt={`poster of movie - "${title}"`}
          />
        </PosterContainerStyle>
        <MovieInfoContainer>
          <h2>{title}</h2>
          <p>User score: {usesrScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </MovieInfoContainer>
      </MovieInfoStyle>
      </ContainerStyled>
      <ContainerInfo>
        <AdditionalInfoStyle>Additional Information</AdditionalInfoStyle>
        <ListStyle>
          <ListElementStyle>
          <LinkElement to={`/movies/${id}/cast`}>Cast</LinkElement>
          </ListElementStyle>
          <ListElementStyle>
          <LinkElement to={`/movies/${id}/reviews`}>Reviews</LinkElement>
          </ListElementStyle>
        </ListStyle>
        
      </ContainerInfo>
      <Outlet />
    </>
  );
};
export default Movies;