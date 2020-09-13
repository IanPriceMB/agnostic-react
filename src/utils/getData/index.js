import { basicFetch } from '..';

export default (endpoint, config) => basicFetch(endpoint, { method: 'GET', ...config }) 