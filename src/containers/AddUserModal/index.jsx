import React, { useContext } from 'react';
import { Modal, UserForm } from '../../components';
import { UserContext } from '../UserContext';
import { useHistory, useParams } from 'react-router-dom';

export default () => {
  const { userType } = useParams();
  const history = useHistory();
  const user = useContext(UserContext);
  const handleSubmit = (data) => { user.post(`/users?access=${user._userType}`, data);  history.goBack(); };
  
  return (
    <Modal closeUrl={`/${userType}`}>
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}