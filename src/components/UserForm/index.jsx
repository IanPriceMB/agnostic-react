import React from 'react';
import { useForm } from 'react-hook-form';

export default ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <option value="superAdmin">SuperAdmin</option>
      </select>
      {errors.userType && <p>{errors.userType.message}</p>}
      <input type="submit" />
    </form>
  );
};