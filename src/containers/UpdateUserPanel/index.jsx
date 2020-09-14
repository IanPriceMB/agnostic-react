import React from 'react';
import { useParams } from 'react-router-dom';
import { usePut, useUserStore } from '../../hooks';
import { Panel, UserForm } from '../../components';

export default () => {
  const { userId, userType } = useParams();
  const user = useUserStore();
  const put = usePut(`/users/${userId}`, { access: user.userType });
  
  const handleSubmit = (data) => put.call(data);
  
  return (
    <Panel closeUrl={`/${userType}`}>
      <h3>Update an Existing User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Panel>
  )
}