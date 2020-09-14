import React, { createContext, useContext, useReducer } from 'react';

export default (userReducer, initialState, key) => {
  const storeContext = createContext();
  const dispatchContext = createContext();

  try {
    if (key) {
      initialState = JSON.parse(localStorage.getItem(key)) || initialState;
    }
  } catch {}

  const reducer = (state, action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  }

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

  return [StoreProvider, useStore, useDispatch];
};

