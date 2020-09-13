import React, { useState, useContext } from 'react';
import { Menu, Grid, SectionHeader } from '../../components';
import { UserContext } from '../UserContext';
import { useUserMethod } from '../../hooks';

export default () => {
  const user = useContext(UserContext);
  const [users, setUsers] = useState();
  useUserMethod(user && user.get, '/users', setUsers);

  if (!user) return 'Loading user...'
  return (
    <div>
      <Menu user={user}/>
      <SectionHeader count={users ? users.count : null}/>
      <Grid users={users ? users.users : []}/>
    </div>
  )
}