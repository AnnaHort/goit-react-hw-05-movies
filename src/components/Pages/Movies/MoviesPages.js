import { BsArrowBarLeft } from 'react-icons/bs';
import {
  ContainerInfo,
  ContainerStyled,
  MovieInfoStyle,
  TitleStyled,
} from './Movies.styled';
import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Movies</TitleStyled>
      <Link to='/'>
        <BsArrowBarLeft />
        Go back
      </Link>
      <MovieInfoStyle>info about movie</MovieInfoStyle>
      <ContainerInfo>
        <Link to='/movies/:id/cast'>Cast</Link>
        <Link to='/movies/:id/reviews'>Reviews</Link>
      </ContainerInfo>
    </ContainerStyled>
  );
};
