import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '..';

export default () => {
  const { userType } = useParams();

  // Object reference equality is always false so we use call back to memoize the value before
  // passing it to the hook. Then it is executed in hook as a function.
  const params = useCallback(() => ({ type: userType }), [userType]);
  const [users, isLoading, error, refresh] = useGet(`/users`, params, 'Failed to load users data.');

  return [users, isLoading, error, refresh];
}