import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { getData } from '../../utils';
import { useNotificationAction } from '../useNotificationStore';

export default (endpoint, params, message) => {
  const { errorMessage } = useNotificationAction();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, toggleRefresh] = useState(true);
  
  const handleRefresh = () => toggleRefresh(!refresh);
  
  useEffect(() => {
    const query = queryString.stringify(params());
    (async() => {
      try {
        setIsLoading(true)
        const res = await getData(`${endpoint}?${query}`);
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.log(e);
        setError(true);
        errorMessage(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, params, setData, refresh, message]);

  return [data, isLoading, error, handleRefresh];
};