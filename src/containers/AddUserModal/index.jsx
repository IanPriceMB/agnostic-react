import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Modal, UserForm } from '../../components';

export default () => {
  const history = useHistory();
  const { userType } = useParams();
  const user = useContext(UserContext);

  const handleSubmit = (data) => { user.post(`/users?access=${user._userType}`, data);  history.goBack(); };
  
  return (
    <Modal closeUrl={`/${userType}`}>
      <h3>Create a New User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Modal>
  )
}