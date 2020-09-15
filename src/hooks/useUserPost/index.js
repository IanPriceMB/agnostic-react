import { useMutation, queryCache } from 'react-query';
import { postData } from '../../utils';
import { useUserStore } from '../useUserStore';

export default () => {
  const user = useUserStore();
  const endpoint = `/users?access=${user.userType}`
  const [onsubmit] = useMutation(async (body) => await (await postData(endpoint, body)).json(), {
    onMutate: newUser => {
      const type = `${newUser.userType}s`

      queryCache.cancelQueries(['users', type])

      const previousValue = queryCache.getQueryData(['users', type])

      queryCache.setQueryData(['users', type], (old) => ({
        ...old,
        users: [...old.users, newUser]
      }))

      return previousValue
    },
    onError: (error, { userType }, previousValue) => queryCache.setQueryData(['users', `${userType}s`], previousValue),
    onSettled: (data, error, { userType }) =>queryCache.invalidateQueries(['users', `${userType}s`])
  })

  return [onsubmit];
}