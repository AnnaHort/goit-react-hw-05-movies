import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { HeaderList } from './HeaderList/HeaderList';
import { TrendingList } from './Pages/TrendingList/TrendingListPages';
import { MoviesSearch } from './MoviesSearch/MoviesSearchPages';
import { Movies } from './Pages/Movies/MoviesPages';

export const App = () => {
  return (
    <>
    <HeaderList/>
      <Routes>
        <Route path="/" element={<TrendingList/>}></Route>
        <Route path="/movies" element={<MoviesSearch />}></Route>
        <Route path="/movies/:id" element={<Movies/>}></Route>
        <Route path="/movies/:id/cast" element={<div>cast of selected movies</div>}></Route>
        <Route path="/movies/:id/reviews" element={<div>reviews of selected movies</div>}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
