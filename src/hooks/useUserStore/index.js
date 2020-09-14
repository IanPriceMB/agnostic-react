import { makeStore, actionFactory } from '../../utils';
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

const userReducer = (state, { type, payload }) => {
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

const [
  UserProvider,
  useUserStore,
  useUserDispatch,
] = makeStore(userReducer, initialState);

const useUserAction =  () => {
  const dispatch = useUserDispatch();

  const setUser = (payload) => dispatch(actionFactory(SET_USER)(payload));
      
  const setLoading = (payload) => dispatch(actionFactory(SET_USER_LOADING)(payload));

  return { setUser, setLoading };
};

export { UserProvider, useUserStore, useUserAction };