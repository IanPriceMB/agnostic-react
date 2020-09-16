import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, UserForm } from '../../components';
import { useUserPost } from '../../hooks';


export default () => {
  const history = useHistory();
  const [onSubmit] = useUserPost();
  
  const handleSubmit = (data) => { onSubmit(data); history.goBack(); };
  
  return (
    <Modal >
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}