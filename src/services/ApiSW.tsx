import axios from 'axios';
import { urlApiSW } from '../../app.json';

const apiSW = axios.create({
    baseURL: urlApiSW,
});

export default apiSW;