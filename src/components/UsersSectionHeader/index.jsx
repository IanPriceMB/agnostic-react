import React from 'react';
import { SectionHeader } from '..';
import { Link, useRouteMatch } from 'react-router-dom';

export default ({ count }) => {
  let match = useRouteMatch();
  return (
  <SectionHeader title="Users" count={count}>
    <Link to={`${match.url}/create`}>
      <button>
        Add Another User
      </button>
    </Link>
  </SectionHeader>
);
}