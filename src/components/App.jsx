import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';

const HeaderList = lazy(() => import('../components/HeaderList/HeaderList'));
const TrendingList = lazy(() => import('../components/Pages/TrendingList/TrendingListPages'));
const MoviesSearch = lazy(() => import('../components/MoviesSearch/MoviesSearchPages'));
const Movies = lazy(() => import('../components/Movies/MoviesPages'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'))
const NotFound = lazy(() => import('../components/NotFoundComponent/NotFound'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderList />}>
          <Route index element={<TrendingList />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:id" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
