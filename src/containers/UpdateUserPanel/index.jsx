import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Put } from '../../classes';
import { Panel, UserForm } from '../../components';

export default () => {
  const { userId, userType } = useParams();
  const user = useUserStore();
  const { errorMessage, successMessage } = useNotificationAction();
  const put = new Put(`/users/${userId}`, { access: user.userType }, errorMessage, successMessage)
  
  const handleSubmit = (data) => put.call(data);
  
  return (
    <Panel closeUrl={`/${userType}`}>
      <h3>Update an Existing User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Panel>
  )
}