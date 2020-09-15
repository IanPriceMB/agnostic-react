import React from 'react';
import { useForm } from 'react-hook-form';

export default ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  // This form can be used anywhere. Right now it is used for both the POST and PUT
  // methods so instead of defining on submit in the form we pass it via props.
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>User Name:</label>
      <input type="text" placeholder="name" name="userName" ref={register({
        required: 'Name is required.', 
        minLength: {
          value: 4,
          message: 'must be at least 4 characters.'
        }
      })} />
      {errors.userName && <p>{errors.userName.message}</p>}

      <label>User Type:</label>
      <select name="userType" ref={register({
        required: 'Type is required.',
      })} >
        <option value="">Select...</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="super-admin">super-admin</option>
      </select>
      {errors.userType && <p>{errors.userType.message}</p>}
      <input type="submit" />
    </form>
  );
};