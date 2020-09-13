import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendErrorMessage } from '../../redux/notification/actions';

export default (userMethod, endpoint, cb) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      try {
        if(typeof userMethod === 'function' ) {
          const data = await userMethod(endpoint); 
          if (cb) cb(data); 
        }
      } catch (error) {
        console.log(error);
        dispatch(sendErrorMessage(`Error: There was an error processing the data.`));
      }
    })();
  }, [userMethod, endpoint, cb, dispatch]);

};