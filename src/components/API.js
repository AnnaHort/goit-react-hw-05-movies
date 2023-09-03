import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=59f23bf3edf8dd1db2f82c1080b57f0d';

export const getMovies = async() => {
    try {
        const response = await axios.get(`${API_KEY}`);
        return console.log(response)
    } catch (error) {
        console.error("Request execution error:",error);
    }
}