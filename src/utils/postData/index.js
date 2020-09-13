import { basicFetch } from '..';

export default (endpoint, data) => {
  return basicFetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }) 
}
