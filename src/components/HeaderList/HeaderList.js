import { HeaderListStyled, LinkElementStyle } from './HeaderList.styled';

export const HeaderList = () => {
  return (
    <HeaderListStyled>
      <li>
        <LinkElementStyle href="#">Home</LinkElementStyle>
      </li>
      <li>
        <LinkElementStyle href="#">Movies</LinkElementStyle>
      </li>
    </HeaderListStyled>
  );
};
