import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getData } from '../../utils';

export default () => {
  const { userType } = useParams();
  const endpoint = `/users?type=${userType}`
  const { isLoading, error, data } = useQuery(['users', userType], async() => await (await getData(endpoint)).json())

  return [isLoading, error, data];
}