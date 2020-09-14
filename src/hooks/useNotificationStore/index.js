import { makeStore, actionFactory } from '../../utils';
import {
  ERROR_MESSAGE,
  USER_MESSAGE,
  CLOSE_NOTIFICATION_BANNER,
} from './enums';

 const initialState = {
  type: null,
  message: undefined,
};

const notificationReducer = (state, { type, payload }) => {
  switch(type) {
    case ERROR_MESSAGE:
      return {
        type: 'ERROR',
        message: payload,
      };
    case USER_MESSAGE:
      return {
        type: 'USER',
        message: payload,
      };
    case CLOSE_NOTIFICATION_BANNER:
      return {
        ...initialState,
      }
    default:
      return state;
  };
};

const [
  NotificationProvider,
  useNotificationStore,
  useNotificationDispatch,
] = makeStore(notificationReducer, initialState);

const useNotificationAction = () => {
  const dispatch = useNotificationDispatch();

  const errorMessage = (payload) => dispatch(actionFactory(ERROR_MESSAGE)(payload));
      
  const successMessage = (payload) => dispatch(actionFactory(USER_MESSAGE)(payload));

  const closeBanner = () => dispatch(actionFactory(CLOSE_NOTIFICATION_BANNER)());

  return { errorMessage, successMessage, closeBanner };
};

export { NotificationProvider, useNotificationStore, useNotificationAction };