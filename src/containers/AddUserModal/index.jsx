import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Modal, UserForm } from '../../components';
import { Post } from '../../classes';

export default () => {
  const history = useHistory();
  const user = useUserStore();
  const { errorMessage, successMessage } = useNotificationAction();
  const post = new Post(`/users`, { access: user.userType }, errorMessage, successMessage); 

  const handleSubmit = (data) => { post.call(data); history.goBack(); };
  
  return (
    <Modal >
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}