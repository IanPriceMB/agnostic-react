import {
  SET_USER,
  SET_USER_LOADING,
} from './enums';

export const initialState = {
  isLoading: false,
  userName: 'Ian',
  userId: 1234,
  userType: 'super-admin',
};

export default (state, { type, payload }) => {
  switch(type) {
    case SET_USER:
      return {
        ...state,
        ...payload,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  };
};