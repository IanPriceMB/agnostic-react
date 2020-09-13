import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default ({ children, closeUrl }) => (
  <div className="modal">
    <div className="modal__main">
      <div className="modal__close">
        <Link to={closeUrl}><button>X</button></Link>
      </div>
      <div className="modal__contents">
        {children}
      </div>
    </div>
  </div>
)