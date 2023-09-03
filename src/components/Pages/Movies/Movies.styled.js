import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 0 20px 20px 40px;
`;

export const TitleStyled = styled.h2`
  margin-bottom: 8px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
`;

export const ButtonStyled = styled.button`
padding: 3px 6px;
display: flex;
align-items: center;
border: 1px solid lightgray;
border-radius: 4px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
&:hover:focus{
    background-color: lightgray;
    border: 1px solid lightgray;
    color: red;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`
