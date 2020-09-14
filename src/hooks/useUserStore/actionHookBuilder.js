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

/**
 * A few notes: 
 * actionFactory is a utility function that in short hand crates a function that with return a { type: ENUM, payload } object
 * this is the standard Redux pattern but is also followed in my makeStore util reducer set up as well. It's also just the general
 * standard practice.
 * 
 * the ()() at the end is called currying basically the returned function from actionFactory can take arguments as well; in this case payload.
 * 
 * These functions are dynamically rerendred on every cycle (which is completely fine and expected with hooks) however if they need to be used as a 
 * useEffect dependancy they have to be memoized to a useRef see ./src/hooks/useGet
 */