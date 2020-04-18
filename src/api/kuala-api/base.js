import axios from 'axios';

export default axios.create({
    baseURL: 'https://kuala-api.herokuapp.com/',
    timeout: 3000
});
