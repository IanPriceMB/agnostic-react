import { getData } from '../../utils';

export default class User {
  constructor({ username, id, userType }, dispatch) {
    this._username = username;
    this._id = id;
    this._userType = userType;
    this._dispatch = dispatch;
  };

  // The try catch for error handleing happens at the top level
  // See src/hooks/useUserMethod
  async get(endpoint){
    const res = await getData(endpoint);
    const data = await res.json();
    return data;
  };

};