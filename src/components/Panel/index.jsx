import React from 'react';
import { Link } from 'react-router-dom';

export default ({ children, closeUrl }) => (
  <div>
    <Link to={closeUrl}><button>X</button></Link>
    {children}
  </div>
)