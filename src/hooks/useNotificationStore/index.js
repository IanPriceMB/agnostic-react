import { storeFactory } from '../../utils';
import notificationReducer, { initialState } from './reducer';
import actionHookBuilder from './actionHookBuilder';

const [
  NotificationProvider,
  useNotificationStore,
  useNotificationDispatch,
] = storeFactory(notificationReducer, initialState);

const useNotificationAction = actionHookBuilder(useNotificationDispatch);

export { NotificationProvider, useNotificationStore, useNotificationAction };

// These store hooks are quite complex
// TL;DR
// We are creating a <context.Provider> to wrap ANY part of our applicaiton we want
// The Provider is passed a reducer (just like Redux) 
// and we get a dispatch function to send actions to the reducer (just like Redux)!

/**
 * This hook is made from the storeFactory utility function. It returns a <context.Provider> in the shape of a React.useReducer
 * this means that this hook is essentially ONE Redux reducer in mini form that we can use where ever we want in our App!
 * This particular Provider is wrapping the whole applicaiton meaning we can dispatch and recieve notification data at/from any location.
 * 
 * I took the liberty of extending the pattern even further by taking the dispatch function that is return from the storeFactory utility, 
 * and then passing it to a 'builder' function for another custom hoook. It has to be a 'builder function because react hooks can only be
 * called inside the body of a React component. By following this pattern I am able to create a custom hook that contains all of the 
 * actions that can be dispatched to this reducer in one location but then be accesed from ANYWHERE!
 * 
 * Pretty nifty I think, checkout ./actionHookBuilder to see the pattern continued.
 */