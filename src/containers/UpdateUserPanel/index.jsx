import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Panel, UserForm } from '../../components';
import { UserContext } from '../UserContext';

export default () => {
  const { userId, userType } = useParams();
  const user = useContext(UserContext);
  const handleSubmit = (data) => { user.put(`/users/${userId}?access=${user._userType}`, data) };
  
  return (
    <Panel closeUrl={`/${userType}`}>
      <h3>Update an Existing User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Panel>
  )
}