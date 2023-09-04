import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchButtonStyled,
  InputStyled,
  SearchForm,
} from './MoviesSearchPages.style';
import { useState } from 'react';

export const MoviesSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
      return alert('You did not write any movie :(');
    }
    console.log(inputValue);
    e.target.reset();
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
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
  );
};
