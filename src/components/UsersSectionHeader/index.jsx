import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { SectionHeader } from '..';
import './index.scss';

export default ({ count }) => {
  const match = useRouteMatch();
  return (
  <SectionHeader title="Users" count={count}>
    <Link to={`${match.url}/create`}>
      <button className="users-section-header__add">
        Add Another User
      </button>
    </Link>
  </SectionHeader>
);
}