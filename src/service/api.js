
// base da URL: https://api.themoviedb.org/3/

import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/'
    }
);

export default api;