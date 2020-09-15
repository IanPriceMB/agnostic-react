import { useMutation, queryCache } from 'react-query';
import { useParams} from 'react-router-dom';
import { deleteData } from '../../utils';
import { useUserStore } from '../useUserStore';

export default () => {
  const { userType, userId } = useParams();
  const user = useUserStore();
  const endpoint = `/users/${userId}?access=${user.userType}`
  const [onConfirm] = useMutation(async () => await (await deleteData(endpoint)).json(), {
    onMutate: values => {

      queryCache.cancelQueries(['users', userType])

      const previousValue = queryCache.getQueryData(['users', userType])

      queryCache.setQueryData(['users', userType], (old) => ({
        ...old,
        users: [...old.users.filter(ele => ele.userId !== userId)]
      }))

      return previousValue
    },
    onError: (error, values, previousValue) => queryCache.setQueryData(['users', userType], previousValue),
    onSettled: (data, error, values) => queryCache.invalidateQueries(['users', userType])
  })

  return onConfirm;
}