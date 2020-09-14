import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, UserForm } from '../../components';
import { usePost } from '../../hooks';


export default () => {
  const history = useHistory();
  const post = usePost(`/users`);
  
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