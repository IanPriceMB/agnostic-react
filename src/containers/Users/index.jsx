import React, { useState, useContext } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useUserQuery } from '../../hooks';
import { UserContext } from '../UserContext';
import { UpdateUserPanel } from '..'
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import './index.scss';

export default () => {
  let { userType } = useParams();
  const user = useContext(UserContext);

  const [users, setUsers] = useState();
  const refresh = useUserQuery(user, `/users?type=${userType}`, setUsers);

  const handleRefresh = () => refresh();

  if (!user) return 'Loading user...'
  return (
    <>
      <div className="users">
        <UsersMenu user={user}/>
        <div className="users__info">
          <UsersSectionHeader count={users ? users.count : null}/>
          <button onClick={handleRefresh} className="users__refresh">Refresh</button>
          <UsersList users={users ? users.users : []} user={user} />
        </div>
      </div>
      <div className="users__panel">
        <Route path={`/:userType/update/:userId`} component={UpdateUserPanel} />
      </div>
    </>
  )
}