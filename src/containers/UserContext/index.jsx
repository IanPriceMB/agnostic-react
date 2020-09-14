import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../classes';

export const context = createContext();

export const UserContext = ({ children }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  
  const [user, setUser] = useState();
  useEffect(() => { setUser(new User(userInfo, dispatch)); }, [userInfo, dispatch]);

  return <context.Provider value={user}>{children}</context.Provider>
};

export default function useUser() {
    return useContext(context);
}