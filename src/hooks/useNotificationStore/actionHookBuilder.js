import {
  ERROR_MESSAGE,
  USER_MESSAGE,
  CLOSE_NOTIFICATION_BANNER,
} from './enums';
import { actionFactory } from '../../utils';

export default (useNotificationDispatch) => { 
  return () => {
    const dispatch = useNotificationDispatch();

    const errorMessage = (payload) => dispatch(actionFactory(ERROR_MESSAGE)(payload));
        
    const successMessage = (payload) => dispatch(actionFactory(USER_MESSAGE)(payload));

    const closeBanner = () => dispatch(actionFactory(CLOSE_NOTIFICATION_BANNER)());

    return { errorMessage, successMessage, closeBanner };
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