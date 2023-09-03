import { GlobalStyle } from './GlobalStyle';
import { HeaderList } from './HeaderList/HeaderList';
import { TrendingList } from './TrendingList/TrendingList';

export const App = () => {
  return (
    <>
      <HeaderList />
      <TrendingList />
      <GlobalStyle/>
    </>
  );
};
