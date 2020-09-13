import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => {
  return (
    <div>
      <Link to="/users">
        <button>
          Users
        </button>
      </Link>
      {(user._userType === 'admin' || user._userType === 'superAdmin') && (
        <Link to="/admins">
          <button>
            Admins
          </button>
        </Link>
      )}
      {user._userType === 'superAdmin' && (
        <Link to="/super-admins">
          <button>
            Super Admins
          </button>
        </Link>
      )}
    </div>
  )
}