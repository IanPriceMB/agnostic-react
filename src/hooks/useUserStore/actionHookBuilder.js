import {
  SET_USER,
  SET_USER_LOADING,
} from './enums';
import { actionFactory } from '../../utils';

export default (useUserDispatch) => { return  () => {
    const dispatch = useUserDispatch();
  
    const setUser = (payload) => dispatch(actionFactory(SET_USER)(payload));
        
    const setLoading = (payload) => dispatch(actionFactory(SET_USER_LOADING)(payload));
  
    return { setUser, setLoading };
  };
};