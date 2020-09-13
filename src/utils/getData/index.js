import { basicFetch } from '..';

export default (endpoint) => basicFetch(endpoint, { method: 'GET' }) 