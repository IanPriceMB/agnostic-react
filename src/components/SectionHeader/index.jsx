import React from 'react';

export default ({ title, count, children }) => (
  <h3>{title} <span>{count}</span>
    {children}
  </h3>
);