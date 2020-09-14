import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Modal } from '../../components';
import { Delete } from '../../classes';

export default () => {
  const history = useHistory();
  const { userId, userType } = useParams();
  const user = useUserStore();

  // Hooks can only be called in the body of react functions. In order to use the notification banner Provider
  // we call theerror and success handlers here and then pass them to the class instance for use.
  const { errorMessage, successMessage } = useNotificationAction();
  const deleteMethod = new Delete(`/users/${userId}`, { access: user.userType }, errorMessage, successMessage );
  
  // Here we use history.goBack() because modals block a user from being able to select anything else on the screen.
  // This means it is safe to use a go back as they will always return  to the right location.
  const handleCancel = () => history.goBack();
  const handleConfirm = () => { deleteMethod.call(); history.goBack(); };

  return (
    <Modal closeUrl={`/${userType}`}>
      <h3>Are you sure you want to delete this user?</h3>
      <button onClick={handleCancel}>
        Cancel
      </button>
      <button onClick={handleConfirm}>
        Confirm
      </button>
    </Modal>
  );
};