import React, { useState, useContext } from 'react';
import { Menu, Grid, SectionHeader } from '../../components';
import { UserContext } from '../UserContext';
import { useUserMethod } from '../../hooks';
import { useParams } from 'react-router-dom';
import { UserForm } from '..';

export default () => {
  const user = useContext(UserContext);
  const { userType } = useParams();
  const [users, setUsers] = useState();
  useUserMethod(user && user.get, `/users?type=${userType}`, setUsers);

  if (!user) return 'Loading user...'
  return (
    <div>
      <Menu user={user}/>
      <SectionHeader count={users ? users.count : null}/>
      <UserForm />
      <Grid users={users ? users.users : []}/>
    </div>
  )
}