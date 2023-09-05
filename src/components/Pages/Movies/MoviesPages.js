import { BsArrowBarLeft } from 'react-icons/bs';
import {
  ContainerInfo,
  ContainerStyled,
  GoBackStyle,
  MovieInfoStyle,
  TitleStyled,
} from './Movies.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'components/API';

export const Movies = () => {
  const [, setData] = useState({});
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const location = useLocation();
  const parts = location.pathname.split('/');
  const id = parts[parts.length - 1];
  const adress = `/movie/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovies(adress);
        setData(movieData);
        console.log(movieData);

        const movieTitle = movieData.original_title;
        setTitle(movieTitle);
        const movieVote = movieData.vote_average;
        setVote(movieVote);
        const overView = movieData.overview;
        setOverview(overView);

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
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchData();
  }, [adress]);

  const usesrScore = (vote * 10).toFixed(0);

  return (
    <ContainerStyled>
      <TitleStyled>Movies</TitleStyled>
      <GoBackStyle to="/">
        <BsArrowBarLeft />
        Go back
      </GoBackStyle>
      <MovieInfoStyle>
        <h2>{title}</h2>
        <p>User score: {usesrScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </MovieInfoStyle>
      <ContainerInfo>
        <Link to="">Cast</Link>
        <Link to="">Reviews</Link>
      </ContainerInfo>
      <Outlet />
    </ContainerStyled>
  );
};
