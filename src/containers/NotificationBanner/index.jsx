import React from 'react';
import { useSelector } from 'react-redux';
import { useNotification } from '../../hooks';
import './index.scss';

export default () => {
  const { message, type } = useSelector(({ notification }) => notification);
  const { close } = useNotification();

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
        onClick={close}
      >close</button>
    </div>
  );
};