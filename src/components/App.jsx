import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Movies } from './Pages/Movies/MoviesPages';
import { HeaderList } from './HeaderList/HeaderList';
import { TrendingList } from './Pages/TrendingList/TrendingListPages';

export const App = () => {
  return (
    <>
    <HeaderList/>
      <Routes>
        <Route path="/" element={<TrendingList/>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<div>selected movie</div>}></Route>
        <Route path="/movies/:id/cast" element={<div>cast of selected movies</div>}></Route>
        <Route path="/movies/:id/reviews" element={<div>reviews of selected movies</div>}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
