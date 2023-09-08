import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWYyM2JmM2VkZjhkZDFkYjJmODJjMTA4MGI1N2YwZCIsInN1YiI6IjY0ZjM4NjkyOWU0NTg2MDBlMzhiMjE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRHO-QvChRhFa42AX0FafiwKHDKfuWOdZYL0ALGF2JI',
  },
};

export const getMovies = async (adress) => {
  try {
    const response = await axios.get(adress, options);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Request execution error:', error);
    return [];
  }
};

