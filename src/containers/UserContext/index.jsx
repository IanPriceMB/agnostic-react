import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, Admin, SuperAdmin } from '../../classes';

export const UserContext = createContext();

export default ({ children }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const [user, setUser] = useState();

  // ********* SUPER IMPORTANT LOCATION *************
  // This is where all the magic happens by determining the type of user
  useEffect(() => {
    switch (userInfo.userType) {
      case 'user': 
        setUser(new User(userInfo, dispatch));
        break;
      case 'admin':
        setUser(new Admin(userInfo, dispatch));
        break;
      case 'superAdmin':
        setUser(new SuperAdmin(userInfo, dispatch));
        break;
      default:
        setUser(new User(userInfo, dispatch));
        break;
    };
  }, [userInfo]);


  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};