import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../components';
import { useUserDelete } from '../../hooks';

export default () => {
  const history = useHistory();
  const onConfirm = useUserDelete();

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