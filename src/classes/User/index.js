import { getData, postData } from '../../utils';
import { sendErrorMessage, sendUserMessage } from '../../redux/notification/actions';

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

  async post(endpoint, body) {
    try {
      const res = await postData(endpoint, body); 
      const data = await res.json();
      if (data.error) this._dispatch(sendErrorMessage(`Error: There was an error creating the data.`));
      if (data.success) this._dispatch(sendUserMessage(`Sucessfully created!`));
      console.log(data)
    } catch (error) {
      console.error(error);
      this._dispatch(sendErrorMessage(`Error: There was an error creating the data.`));
    };
  };

  // async put(endpoint, body) {
  //   try {
  //     const res = await putData(endpoint, body); 
  //     const data = await res.json();
  //     if (data) this._dispatch(sendUserMessage(`Sucessfully updated!`));
  //   } catch (error) {
  //     console.error(error);
  //     this._dispatch(sendErrorMessage(`Error: There was an error updating the data.`));
  //   };
  // };

  // async delete(endpoint) {
  //   try {
  //     const res = await deleteData(endpoint); 
  //     const data = await res.json();
  //     if (data) this._dispatch(sendUserMessage(`Sucessfully deleted!`));
  //   } catch (error) {
  //     console.error(error);
  //     this._dispatch(sendErrorMessage(`Error: There was an error deleting the data.`));
  //   };
  // };

};