import { useEffect, useState, useRef } from 'react';
import queryString from 'query-string';
import { getData } from '../../utils';
import { useNotificationAction } from '../useNotificationStore';

export default (endpoint, params, message) => {
  // The way error message is defined it will recreate the function on every render cycle
  // by binding it to a reference it will be memoized for the full duration of this hooks lifetime.
  // This avoids otherwise infinite rerenders.
  const { errorMessage } = useNotificationAction();
  const errorMessageRef = useRef();
  errorMessageRef.current = errorMessage;

  // Each state is returned from the custom hook for use in ANY component/container
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, toggleRefresh] = useState(true);
  
  // We add a boolean to the dependancy array and by toggling it cause the useEffect to retrigger
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
        errorMessageRef.current(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, params, setData, refresh, message, errorMessageRef]);


  // Array of useable states and functions exposed by the hook for use in ANY component/container
  return [data, isLoading, error, handleRefresh];
};