import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendErrorMessage } from '../../redux/notification/actions';

export default (user, endpoint) => {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const [refresh, toggleRefresh] = useState(true);

  const handleRefresh = () => toggleRefresh(!refresh);

  useEffect(() => {
    (async() => {
      try {
        if(user) {
          const data = await user.get(endpoint); 
          setState(data);
        }
      } catch (error) {
        console.log(error);
        dispatch(sendErrorMessage(`Error: There was an error processing the data.`));
      }
    })();
  }, [user, endpoint, setState, dispatch, refresh]);

  return [handleRefresh, state];
};