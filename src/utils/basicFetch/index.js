const { REACT_APP_API_ENDPOINT } = process.env;

export default (endpoint, config) => fetch(`${REACT_APP_API_ENDPOINT}${endpoint}`, config);