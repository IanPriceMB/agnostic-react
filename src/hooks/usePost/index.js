import React from 'react'
import { useNotificationAction } from '..';
import { Post } from '../../classes';

export default (endpoint, params) => {
  // Hooks can only be called in the body of react functions. In order to use the notification banner Provider
  // we call theerror and success handlers here and then pass them to the class instance for use.
  const { errorMessage, successMessage } = useNotificationAction();
  const post = new Post(endpoint, params, errorMessage, successMessage); 

  return post;
};