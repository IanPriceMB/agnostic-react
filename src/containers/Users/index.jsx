import React from 'react';
import { Route } from 'react-router-dom';
import { useUsers } from '../../hooks';
import { UpdateUserPanel } from '..'
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import './index.scss';

export default () => {
  const [isLoading, error, users] = useUsers();

  if (isLoading) return 'Loading user data...';

  if (error) return 'Error div goes here.';
  
  return (
    <>
      <div className="users">
        <UsersMenu />
        <div className="users__info">
          <UsersSectionHeader count={users && users.count} />
          <UsersList users={users && users.users} />
        </div>
      </div>
      <div className="users__panel">
        <Route path={`/:userType/update/:userId`} component={UpdateUserPanel} />
      </div>
    </>
  );
};