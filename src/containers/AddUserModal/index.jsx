import React, { useContext } from 'react';
import { Modal, UserForm } from '../../components';
import { UserContext } from '../UserContext';

export default () => {
  const user = useContext(UserContext);
  const handleSubmit = (data) => { user.post(`/users?access=${user._userType}`, data) };
  
  return (
    <Modal>
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}