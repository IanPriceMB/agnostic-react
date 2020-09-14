import {
  ERROR_MESSAGE,
  USER_MESSAGE,
  CLOSE_NOTIFICATION_BANNER,
} from './enums';
import { actionFactory } from '../../utils';

export default (useNotificationDispatch) => { return () => {
  const dispatch = useNotificationDispatch();

  const errorMessage = (payload) => dispatch(actionFactory(ERROR_MESSAGE)(payload));
      
  const successMessage = (payload) => dispatch(actionFactory(USER_MESSAGE)(payload));

  const closeBanner = () => dispatch(actionFactory(CLOSE_NOTIFICATION_BANNER)());

  return { errorMessage, successMessage, closeBanner };
};}