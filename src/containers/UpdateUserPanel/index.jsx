import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Put } from '../../classes';
import { Panel, UserForm } from '../../components';

export default () => {
  const { userId, userType } = useParams();
  const user = useUserStore();

  // Hooks can only be called in the body of react functions. In order to use the notification banner Provider
  // we call theerror and success handlers here and then pass them to the class instance for use.
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