import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 5px;
  padding: 0 20px 20px 40px;
`;

export const InputStyled = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  &:hover {
    outline: none;
    border: 1px solid lightgray;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border: 1px solid lightgray;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchButtonStyled = styled.button`
  padding: 3px 6px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 3px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  &:hover:focus {
    background-color: lightgray;
    border: 1px solid lightgray;
    color: red;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    outline: none;
    border: 1px solid lightgray;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;
