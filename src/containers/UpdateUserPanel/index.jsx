import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../UserContext';
import { Panel, UserForm } from '../../components';

export default () => {
  const { userId, userType } = useParams();
  const user = useUser();
  
  const handleSubmit = (data) => { user.put(`/users/${userId}?access=${user._userType}`, data) };
  
  return (
    <Panel closeUrl={`/${userType}`}>
      <h3>Update an Existing User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Panel>
  )
}