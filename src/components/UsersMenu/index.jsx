import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '..';
import './index.scss';

export default ({ user }) => (
  <Menu>
    <div className="user-menu__item">
      <Link to="/users">
        <button>
          Users
        </button>
      </Link>
    </div>
    {(user._userType === 'admin' || user._userType === 'superAdmin') && (
      <div className="user-menu__item">
        <Link to="/admins">
          <button>
            Admins
          </button>
        </Link>
      </div>
    )}
    {user._userType === 'superAdmin' && (
      <div className="user-menu__item">
        <Link to="/super-admins">
          <button>
            Super Admins
          </button>
        </Link>
      </div>
    )}
  </Menu>
)
