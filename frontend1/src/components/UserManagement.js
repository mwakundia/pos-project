import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserManagement = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
