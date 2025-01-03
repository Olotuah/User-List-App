import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
  <div className="container">
    <h1>User List</h1>
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => openModal(user)}>View Details</button>
              <Link to={`/user/${user.id}`} style={{ marginLeft: '10px' }}>
                <span className = 'no-wrap'>Go to Profile</span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  

      {/* Modal for User Details */}
      {isModalOpen && selectedUser && (
        <Modal user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
};

export default UserList;

