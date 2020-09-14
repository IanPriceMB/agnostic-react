import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Modal, UserForm } from '../../components';
import { Post } from '../../classes';

export default () => {
  const history = useHistory();
  const user = useUserStore();

  // Hooks can only be called in the body of react functions. In order to use the notification banner Provider
  // we call theerror and success handlers here and then pass them to the class instance for use.
  const { errorMessage, successMessage } = useNotificationAction();
  const post = new Post(`/users`, { access: user.userType }, errorMessage, successMessage); 

  // Here we use history.goBack() because modals block a user from being able to select anything else on the screen.
  // This means it is safe to use a go back as they will always return  to the right location.
  const handleSubmit = (data) => { post.call(data); history.goBack(); };
  
  return (
    <Modal >
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}