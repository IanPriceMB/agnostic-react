import React from 'react';
import { useParams } from 'react-router-dom';
import { Panel, UserForm } from '../../components';
import { useUserPut } from '../../hooks';

export default () => {
  const { userType } = useParams();
  const onSubmit = useUserPut();
  
  const handleSubmit = (data) => onSubmit(data);
  
  return (
    <Panel closeUrl={`/${userType}`}>
      <h3>Update an Existing User!</h3>
      <UserForm onSubmit={handleSubmit} />
    </Panel>
  )
}