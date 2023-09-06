import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 20px 20px 20px 40px;
`;

export const TitleStyled = styled.h2`
  margin-bottom: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
`;

export const GoBackStyle = styled(Link)`
padding: 3px 9px 3px 3px;
border: 1px solid rgba(0, 0, 0, 0.3);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
color: black;
text-decoration: none;
&:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
`

export const MovieInfoStyle = styled.div`
padding: 50px;
display: flex;
`

export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
`

export const PosterContainerStyle = styled.div`
margin-right: 20px;
`

export const MovieInfoContainer = styled.div`
padding-top: 60px;
display: flex;
flex-direction: column;
gap: 30px;
`