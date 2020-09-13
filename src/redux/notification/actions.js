import {
  ERROR_MESSAGE,
  USER_MESSAGE,
  CLOSE_NOTIFICATION_BANNER,
} from './enums';
import { actionFactory } from '../../utils';

export const sendErrorMessage = actionFactory(ERROR_MESSAGE);

export const sendUserMessage = actionFactory(USER_MESSAGE);

export const closeNotificationBanner = actionFactory(CLOSE_NOTIFICATION_BANNER);
