import { HeaderListStyled, LinkStyle } from './HeaderList.styled';

export const HeaderList = () => {
  return (
    <nav>
          <HeaderListStyled>
      <li>
        <LinkStyle to="/">Home</LinkStyle>
      </li>
      <li>
        <LinkStyle to="/movies">Movies</LinkStyle>
      </li>
    </HeaderListStyled>
    </nav>

  );
};
