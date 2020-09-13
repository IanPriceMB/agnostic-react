import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendErrorMessage } from '../../redux/notification/actions';

export default (user, endpoint, cb) => {
  const dispatch = useDispatch();
  const [refresh, toggleRefresh] = useState(true);

  const handleRefresh = () => toggleRefresh(!refresh);

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
  }, [user, endpoint, cb, dispatch, refresh]);

  return handleRefresh;
};