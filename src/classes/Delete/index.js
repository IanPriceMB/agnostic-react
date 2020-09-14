import queryString from 'query-string';
import { deleteData } from '../../utils';

export default class Put {
  constructor(endpoint, params, errorHandler, successHandler) {
    this._endpoint = endpoint;
    this._params = params;
    this._errorHandler = errorHandler;
    this._successHandler = successHandler;
  }

  validate() {
    if (!this._params.access) {
      this._errorHandler('Error: Pre DELETE validation failed.')
      return false
    } else {
      return true;
    }
  }

  async exec() {
    try {
      if (this.validate()) {
        const query = queryString.stringify(this._params);
        const res = await deleteData(`${this._endpoint}${this._params && `?${query}`}`); 
        const data = await res.json();
        if (data.error) this._errorHandler(`Error: ${data.error}`);
        if (data.success) this._successHandler(`Sucessfully deleted!`);
      }
    } catch (error) {
      console.error(error);
      this._errorHandler(`Error: There was an error deleting the data.`);
    };
  };
}