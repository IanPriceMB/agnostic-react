import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../classes';

export const UserContext = createContext();

export default ({ children }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  
  const [user, setUser] = useState();
  useEffect(() => { setUser(new User(userInfo, dispatch)); }, [userInfo]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
};