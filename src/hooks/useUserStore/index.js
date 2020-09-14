import { makeStore } from '../../utils';
import userReducer, { initialState } from './reducer';
import actionHookBuilder from './actionHookBuilder';

const [
  UserProvider,
  useUserStore,
  useUserDispatch,
] = makeStore(userReducer, initialState);

const useUserAction = actionHookBuilder(useUserDispatch);

export { UserProvider, useUserStore, useUserAction };