import queryString from 'query-string';
import { putData } from '../../utils';

export default class Put {
  constructor(endpoint, params, errorHandler, successHandler) {
    this._endpoint = endpoint;
    this._params = params;
    this._errorHandler = errorHandler;
    this._successHandler = successHandler;
  }

  validate() {
    if (!this._params.access) {
      this._errorHandler('Error: Pre PUT validation failed.')
      return false
    } else {
      return true;
    }
  }

  async exec(body) {
    try {
      if(this.validate()) {
        const query = queryString.stringify(this._params);
        const res = await putData(`${this._endpoint}${this._params && `?${query}`}`, body); 
        const data = await res.json();
        if (data.error) this._errorHandler(`Error: ${data.error}`);
        if (data.success) this._successHandler(`Sucessfully updated!`);
      }
    } catch (error) {
      console.error(error);
      this._errorHandler(`Error: There was an error updating the data.`);
    };
  };
}