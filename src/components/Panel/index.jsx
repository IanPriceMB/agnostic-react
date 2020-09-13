import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default ({ children, closeUrl }) => (
  <div className="panel">
    <div className="panel__close">
      <Link to={closeUrl}><button >X</button></Link>
    </div>
    <div className="panel__contents">
      {children}
    </div>
  </div>
)