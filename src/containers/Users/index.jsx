import React from 'react';
import { Route } from 'react-router-dom';
import { useUsers } from '../../hooks';
import { UpdateUserPanel } from '..'
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import './index.scss';

export default () => {
  const [users, isLoading, error, refresh] = useUsers();

  const handleRefresh = () => refresh();

  if (error) return 'Error div goes here.';

  if (isLoading) return 'Loading user data...';
  
  return (
    <>
      <div className="users">
        <UsersMenu />
        <div className="users__info">
          <UsersSectionHeader count={users && users.count}/>
          <button onClick={handleRefresh} className="users__refresh">Refresh</button>
          <UsersList users={users && users.users} />
        </div>
      </div>
      <div className="users__panel">
        <Route path={`/:userType/update/:userId`} component={UpdateUserPanel} />
      </div>
    </>
  )
}