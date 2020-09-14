import queryString from 'query-string';
import { postData } from '../../utils';

export default class Post {
  constructor(endpoint, params, errorHandler, successHandler) {
    this._endpoint = endpoint;
    this._params = params;
    this._errorHandler = errorHandler;
    this._successHandler = successHandler;
  }

  validate() {
    if (!this._params.access) {
      this._errorHandler('Error: Pre POST validation failed.')
      return false
    } else {
      return true
    }
  }

  async exec(body) {
    try {
      if(this.validate()) {
        const query = queryString.stringify(this._params);
        const res = await postData(`${this._endpoint}${this._params && `?${query}`}`, body); 
        const data = await res.json();
        if (data.error) this._errorHandler(`Error: ${data.error}`);
        if (data.success) this._successHandler(`Sucessfully created!`);
      }
    } catch (error) {
      console.error(error);
      this._errorHandler(`Error: There was an error creating the data.`);
    };
  };
}