import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useNotificationAction, useUserStore } from '../../hooks';
import { Modal } from '../../components';
import { Delete } from '../../classes';

export default () => {
  const history = useHistory();
  const { userId, userType } = useParams();
  const user = useUserStore();
  const { errorMessage, successMessage } = useNotificationAction();
  const deleteMethod = new Delete(`/users/${userId}`, { access: user.userType }, errorMessage, successMessage );
  
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