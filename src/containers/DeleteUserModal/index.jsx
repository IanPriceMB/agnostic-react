import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDelete, useUserStore } from '../../hooks';
import { Modal } from '../../components';

export default () => {
  const history = useHistory();
  const { userId } = useParams();
  const user = useUserStore();
  const deleteMethod = useDelete(`/users/${userId}`, { access: user.userType });
  
  // Here we use history.goBack() because modals block a user from being able to select anything else on the screen.
  // This means it is safe to use a go back as they will always return  to the right location.
  const handleCancel = () => history.goBack();
  const handleConfirm = () => { deleteMethod.call(); history.goBack(); };

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