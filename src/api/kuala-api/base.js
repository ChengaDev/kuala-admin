import axios from 'axios';

const baseKualaApiRequest = (token = '') => {
    return axios.create({
        // baseURL: 'http://localhost:3100/',
        baseURL: 'https://kuala-api.herokuapp.com/',
        timeout: 3000,
        headers: {
            Authorization: token
        }
    });
};

export default baseKualaApiRequest;
