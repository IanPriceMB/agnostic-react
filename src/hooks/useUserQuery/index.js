import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendErrorMessage } from '../../redux/notification/actions';

export default (user, endpoint, cb) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      try {
        if(user) {
          const data = await user.get(endpoint); 
          cb(data);
        }
      } catch (error) {
        console.log(error);
        dispatch(sendErrorMessage(`Error: There was an error processing the data.`));
      }
    })();
  }, [user, endpoint, cb, dispatch]);

};