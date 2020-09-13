import React, { useContext } from 'react';
import { Modal } from '../../components';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default () => {
  const history = useHistory();
  const { userId, userType } = useParams();
  const user = useContext(UserContext);
  const handleCancel = () => history.goBack();
  const handleConfirm = () => { user.delete(`/users/${userId}?access=${user._userType}`); history.goBack(); };

  return (
    <Modal closeUrl={`/${userType}`}>
      <h3>Are you sure you want to delete this user?</h3>
      <button
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </Modal>
  );
};