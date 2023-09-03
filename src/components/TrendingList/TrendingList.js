import { useEffect } from "react";
import { Container, TitleStyle } from "./TrendingList.styled";
import { getMovies } from "components/API";


export const TrendingList = () => {

  return (
    <Container>
      <TitleStyle>Trending today</TitleStyle>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </Container>
  );
};
