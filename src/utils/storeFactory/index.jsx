import React, { createContext, useContext, useReducer } from 'react';

// The god mode hook
// This replaces the need for Redux in the application by making single reducer <context.Provider>s
// More dynamic and super reuseable!
export default (userReducer, initialState, key) => {
  const storeContext = createContext();
  const dispatchContext = createContext();

  // If initialized with a localStorage.key() we can bind state to the local storage.
  // Meaning that we can then refresh the page and still have our state.
  try {
    if (key) {
      initialState = JSON.parse(localStorage.getItem(key)) || initialState;
    }
  } catch {}

  // Here we establish our reducer pattern using native react and set it to localStorage.
  const reducer = (state, action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  // This is just like every other React component it returns a <context.Provider> that takes children
  // The double contexts are so that we avoid unessessary rerenders. By only linking dispatch or store
  // to a component we can assure that updates to the other dont trigger rerenders of the whole tree.
  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
    );
  };

  const useStore = () => useContext(storeContext);

  const useDispatch = () => useContext(dispatchContext);

  // The goods. An array of hooks and the Provider to wrap the app with 
  // See ./src/hooks/useUserStore for an example of what the implementation of this util looks like
  return [StoreProvider, useStore, useDispatch];
};

