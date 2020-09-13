import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeNotificationBanner } from '../../redux/notification/actions';
import './index.scss';

/**
 * Handle all user notifications
 */
export default () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector(({ notification }) => notification);
  
  const handleClose = () => dispatch(closeNotificationBanner())

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
        onClick={handleClose}
      >close</button>
    </div>
  );
};