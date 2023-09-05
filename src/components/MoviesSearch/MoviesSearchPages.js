import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchButtonStyled,
  InputStyled,
  SearchForm,
} from './MoviesSearchPages.style';
import { useState } from 'react';
import { getMovies } from 'components/API';
import { SearchingMoviesList } from 'components/Pages/SearchigMovies/SearchigMovies';
import { useSearchParams } from 'react-router-dom';




export const MoviesSearch = () => {
  const adress = '/search/movie';
  const [inputValue, setInputValue] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [, setSearchParams] = useSearchParams('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!inputValue) {
      return alert('You did not write any movie :(');
    }

    try {
      const moviesData = await getMovies(`${adress}?query=${inputValue}`);
      setTrendingMovies(moviesData.results);
      setSearchParams({ query: inputValue });

    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    e.target.reset();
  };


  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <InputStyled
          className="input"
          type="text"
          name="filter"
          placeholder="Search"
          onChange={handleInputChange}
        ></InputStyled>
        <SearchButtonStyled type="submit">
          <BiSearchAlt2 />
        </SearchButtonStyled>
      </SearchForm>
     
      <SearchingMoviesList trendingMovies={trendingMovies}/>
     
    </>
  );
};
