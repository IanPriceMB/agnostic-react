import React from 'react';
import './index.scss';

export default ({ title, count, children }) => (
  <h2 className="section-header">
    <span className="section-header__headline">
      {title.toUpperCase()} 
      {count && <span className="section-header__count" >
        {count}
      </span>}
    </span>
    {children}
  </h2>
);