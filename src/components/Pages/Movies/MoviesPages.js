import { BsArrowBarLeft } from 'react-icons/bs';
import { ButtonStyled, ContainerStyled, TitleStyled } from './Movies.styled';

export const Movies = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Movies</TitleStyled>
      <ButtonStyled type="button">
        <BsArrowBarLeft />
        Go back
      </ButtonStyled>
    </ContainerStyled>
  );
};
