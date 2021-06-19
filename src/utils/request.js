import axios from 'axios';
import * as constants from './constant';

const headerConfig = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};
const request = axios.create({
    baseURL: constants.ROOT_API,
    headers: headerConfig,
});

export default request;
