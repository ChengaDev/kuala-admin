import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3100/',
    baseURL: 'https://kuala-api.herokuapp.com/',
    timeout: 3000
});
