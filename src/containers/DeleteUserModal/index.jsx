import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../components';
import { useUserDelete } from '../../hooks';

export default () => {
  const history = useHistory();
  const onConfirm = useUserDelete();
  
  // Here we use history.goBack() because modals block a user from being able to select anything else on the screen.
  // This means it is safe to use a go back as they will always return  to the right location.
  const handleCancel = () => history.goBack();
  const handleConfirm = () => { onConfirm(); history.goBack(); };

  return (
    <Modal>
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