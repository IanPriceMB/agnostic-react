import React, { useState, useContext } from 'react';
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import { AddUserModal, UpdateUserPanel, DeleteUserModal } from '..'
import { UserContext } from '../UserContext';
import { useUserQuery } from '../../hooks';
import { Route, useParams } from 'react-router-dom';

export default () => {
  const user = useContext(UserContext);
  let { userType } = useParams();
  const [users, setUsers] = useState();
  const [refresh, toggleRefresh] = useUserQuery(user, `/users?type=${userType}`, setUsers);
  const handleRefresh = () => toggleRefresh(!refresh);

  if (!user) return 'Loading user...'
  return (
    <div>
      <UsersMenu user={user}/>
      <UsersSectionHeader count={users ? users.count : null}/>
      <button onClick={handleRefresh}>Refresh</button>
      <UsersList users={users ? users.users : []} user={user} />
      <Route path={`/:userType/create`} component={AddUserModal} />
      <Route path={`/:userType/update/:userId`} component={UpdateUserPanel} />
      <Route path={`/:userType/delete/:userId`} component={DeleteUserModal} />
    </div>
  )
}