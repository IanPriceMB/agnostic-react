import { useDispatch } from 'react-redux';
import { closeNotificationBanner, sendErrorMessage, sendUserMessage } from '../../redux/notification/actions';

export default () => {
  const dispatch = useDispatch();

  const error = (message) => dispatch(sendErrorMessage(message));
      
  const success = (message) => dispatch(sendUserMessage(message));

  const close = () => dispatch(closeNotificationBanner());

  return { error, success, close }
};