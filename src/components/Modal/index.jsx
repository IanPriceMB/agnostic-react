import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

export default ({ children }) => {
  const history = useHistory();
  const handleClose = () => history.goBack();
  return (
  <div className="modal">
    <div className="modal__main">
      <div className="modal__close">
        <button onClick={handleClose}> X</button>
      </div>
      <div className="modal__contents">
        {children}
      </div>
    </div>
  </div>
)}