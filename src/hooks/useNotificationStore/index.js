import { makeStore } from '../../utils';
import notificationReducer, { initialState } from './reducer';
import actionHookBuilder from './actionHookBuilder';

const [
  NotificationProvider,
  useNotificationStore,
  useNotificationDispatch,
] = makeStore(notificationReducer, initialState);

const useNotificationAction = actionHookBuilder(useNotificationDispatch);

export { NotificationProvider, useNotificationStore, useNotificationAction };