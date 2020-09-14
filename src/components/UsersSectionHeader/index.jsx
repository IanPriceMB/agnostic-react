import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { SectionHeader } from '..';
import './index.scss';

export default ({ count }) => {
  const match = useRouteMatch();
  const { userType } = useParams();
  return (
  <SectionHeader title={userType} count={count}>
    <Link to={`${match.url}/create`}>
      <button className="users-section-header__add">
        Add Another User
      </button>
    </Link>
  </SectionHeader>
);
}