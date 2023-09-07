import { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { getMovies } from 'components/API';
import { SearchingMoviesList } from 'components/Pages/SearchigMovies/SearchigMovies';
import {
  InputStyled,
  SearchButtonStyled,
  SearchForm,
} from './MoviesSearchPages.style';
import { BiSearchAlt2 } from 'react-icons/bi';

export const MoviesSearch = () => {
  const adress = '/search/movie';
  const [inputValue, setInputValue] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = searchParams.get('query');

        if (query) {
          const moviesData = await getMovies(`${adress}?query=${query}`);
          setTrendingMovies(moviesData.results);
          const result = moviesData.results;

          if (result.length === 0) {
            setSearchParams('');
            return alert('sorry there are no movies with this name');
          }
        } else {
          setTrendingMovies([]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [setSearchParams, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue) {
      return alert('You did not write any movie :(');
    }
    setSearchParams({ query: inputValue });
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
      <SearchingMoviesList trendingMovies={trendingMovies} />
    </>
  );
};
