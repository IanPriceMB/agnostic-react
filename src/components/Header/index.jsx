import React from 'react';
import { NotificationBanner } from '../../containers';
import './index.scss';

export default () => (
  <div className="header">
    <h1 className="header__title">Agnostic React CRUD</h1>  
    <NotificationBanner />
  </div>
)