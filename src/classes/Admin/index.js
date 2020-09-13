import { User } from '..';
import { getData } from '../../utils';

export default class Admin extends User {
  constructor(username, id, userType, dispatch) {
    super(username, id, userType, dispatch);
  };

  // I would not ever recommend handeling an admin check in params
  // but it works well for the demo
  
  // We are following REST patterns and then letting the sever handle sending back the proper info
  // per route based on the users credentials

  // By handeling all Method calls as part of a set of classes we dont have to have seperate logic
  // in the components which makes them agnostic to all the logic their actually implementing.
  async get(endpoint){
    const res = await getData(`${endpoint}?type=admin`);
    const data = await res.json();
    return data;
  };
}