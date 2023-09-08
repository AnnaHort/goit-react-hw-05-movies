import { Outlet } from 'react-router-dom';
import { HeaderListStyled, LinkStyle } from './HeaderList.styled';
import { Suspense } from 'react';

const HeaderList = () => {
  return (
    <>
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
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
 
    </>
  );
};

export default HeaderList;
