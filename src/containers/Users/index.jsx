import React, { useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useUserQuery } from '../../hooks';
import useUser from '../UserContext';
import { UpdateUserPanel } from '..'
import { UsersMenu, UsersList, UsersSectionHeader } from '../../components';
import './index.scss';

export default () => {
  const { userType } = useParams();
  const user = useUser();

  // Object reference equality is always false so we use call back to memoize the value before
  // passing it to the hook. Then it is executed in hook as a function.
  const params = useCallback(() => ({ type: userType }), [userType]);
  const [refresh, users] = useUserQuery(user, `/users`, params);
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