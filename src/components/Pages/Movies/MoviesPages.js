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
      <Link>
        <BsArrowBarLeft />
        Go back
      </Link>
      <MovieInfoStyle>info about movie</MovieInfoStyle>
      <ContainerInfo>
        <Link>Cast</Link>
        <Link>Reviews</Link>
      </ContainerInfo>
    </ContainerStyled>
  );
};
