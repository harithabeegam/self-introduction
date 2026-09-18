import { NavLink, Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="users-page">

      <h1>Our Users</h1>

      <p className="users-description">
        Manage and explore user information from one place.
      </p>

      <div className="users-content">

        <div className="users-menu">
          <h2>User Management</h2>

          <NavLink to="/users" end>
            User List
          </NavLink>

          <NavLink to="/users/profile">
            User Profile
          </NavLink>

          <NavLink to="/users/settings">
            User Settings
          </NavLink>
        </div>

        <div className="users-display">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Users;