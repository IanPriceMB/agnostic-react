import React from 'react';
import './index.scss';

export default ({ title, count, children }) => (
  <h3 className="section-header">
    <span className="section-header__headline">
      {title} 
      <span className="section-header__count" >
        {count}
      </span>
    </span>
    {children}
  </h3>
);