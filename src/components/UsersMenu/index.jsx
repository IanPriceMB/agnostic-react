import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '..';
import { useUserStore } from '../../hooks';
import './index.scss';

export default () => {
  const { userType } = useUserStore();

  // Here we do a simple 'Authorization' check for what menu options to render.
  return (
    <Menu>
      <div className="user-menu__item">
        <Link to="/users">
          <button>
            Users
          </button>
        </Link>
      </div>
      {(userType === 'admin' || userType === 'superAdmin') && (
        <div className="user-menu__item">
          <Link to="/admins">
            <button>
              Admins
            </button>
          </Link>
        </div>
      )}
      {userType === 'superAdmin' && (
        <div className="user-menu__item">
          <Link to="/super-admins">
            <button>
              Super Admins
            </button>
          </Link>
        </div>
      )}
    </Menu>
  );
};
