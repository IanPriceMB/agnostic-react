import React, { useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useGet, useUserStore } from '../../hooks';
import { UpdateUserPanel } from '..'
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import './index.scss';

export default () => {
  const { userType } = useParams();
  const user = useUserStore();

  // Object reference equality is always false so we use call back to memoize the value before
  // passing it to the hook. Then it is executed in hook as a function.
  const params = useCallback(() => ({ type: userType }), [userType]);
  const [users, isLoading, error, refresh] = useGet(`/users`, params, 'Failed to load users data.');

  // The useGet hook returns us a built in refresh function which we can use outside of the hook like so.
  const handleRefresh = () => refresh();

  // We handle conditional rendering based on the returned values from the useGet hook
  if (error) {
    return 'Error div goes here.';
  };
  
  if (isLoading) return 'Loading user data...';
  
  return (
    <>
      <div className="users">
        <UsersMenu user={user} />
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