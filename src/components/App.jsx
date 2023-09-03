import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Movies } from './Pages/Movies/Movies';
import { Home } from './Pages/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
