import {
  ERROR_MESSAGE,
  USER_MESSAGE,
  CLOSE_NOTIFICATION_BANNER,
} from './enums';

const initialState = {
  type: null,
  message: undefined,
};

export default function(state = initialState, { type, payload }) {
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