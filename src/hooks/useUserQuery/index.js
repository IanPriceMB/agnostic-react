import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useNotification } from '..';

export default (user, endpoint, params) => {
  const [data, setData] = useState();
  const { error } = useNotification();
  
  const [refresh, toggleRefresh] = useState(true);
  const handleRefresh = () => toggleRefresh(!refresh);
  
  useEffect(() => {
    const query = queryString.stringify(params());
    (async() => {
      try {
        if (user) {
          const res = await user.get(`${endpoint}?${query}`); 
          setData(res);
        }
      } catch (e) {
        console.log(e);
        error(`Error: There was an error processing the data.`);
      }
    })();
  }, [user, endpoint, params, setData, refresh]);

  return [handleRefresh, data];
};