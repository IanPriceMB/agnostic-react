import React from 'react';
import { useNotificationAction, useNotificationStore } from '../../hooks';
import './index.scss';

export default () => {
  const { message, type } = useNotificationStore();
  const { closeBanner } = useNotificationAction();

  if (!message) return null;
  return (
    <div
      className={`notification-banner ${type === 'ERROR' ? 'notification-banner--error' : 'notification-banner--other'}`}
      id="NotificationBanner"
      role="alert"
    >
      {message}
      <button 
        className="notification-banner__close-button" 
        id="NotificationBannerCloseButton"
        onClick={closeBanner}
      >close</button>
    </div>
  );
};