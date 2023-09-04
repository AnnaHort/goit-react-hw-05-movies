import { Outlet, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { HeaderList } from './HeaderList/HeaderList';
import { TrendingList } from './Pages/TrendingList/TrendingListPages';
import { MoviesSearch } from './MoviesSearch/MoviesSearchPages';
import { Movies } from './Pages/Movies/MoviesPages';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderList />}>
          <Route index element={<TrendingList />}/>
          <Route path="movies" element={<MoviesSearch />}/>
          <Route path="movies/:id" element={<Movies />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
