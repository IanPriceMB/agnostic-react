import {
  SET_USER,
  SET_USER_LOADING,
} from './enums';

const initialState = {
  isLoading: false,
  userName: 'Ian',
  userId: 1234,
  userType: 'superAdmin',
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_USER:
      return {
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