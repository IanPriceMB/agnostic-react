import {
  SET_USER,
  SET_USER_LOADING,
} from './enums';
import { actionFactory } from '../../utils';

export const setUser = actionFactory(SET_USER);

export const setUserLoading = actionFactory(SET_USER_LOADING);



