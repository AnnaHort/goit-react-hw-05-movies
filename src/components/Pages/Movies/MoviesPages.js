import { BsArrowBarLeft } from 'react-icons/bs';
import {
  ContainerInfo,
  ContainerStyled,
  MovieInfoStyle,
  TitleStyled,
} from './Movies.styled';
import { Link, Outlet } from 'react-router-dom';

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
        <Link to=''>Cast</Link>
        <Link to=''>Reviews</Link>
      </ContainerInfo>
      <Outlet/>
    </ContainerStyled>
  );
};
