import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=773bd9c1f33f5c74843b83d098bce1cb&language=pt-BR

const api= axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;