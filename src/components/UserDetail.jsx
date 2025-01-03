import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate(-1)} // This navigates to the previous page
          className="back-button"
        >
          &#8592; Back 
        </button>

        {/* Profile Header */}
        <div className="profile-header">
          <img
            className="profile-pic"
            src="https://via.placeholder.com/150" // Replace with an actual profile picture URL if available
            alt={`${user.name}'s Profile`}
          />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="username">@{user.username}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p>
            <strong>Website:</strong>{' '}
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </p>
        </div>

        {/* Address Information */}
        <div className="section">
          <h2>Address</h2>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>

        {/* Company Information */}
        <div className="section">
          <h2>Company</h2>
          <p><strong>{user.company.name}</strong></p>
          <p><em>{user.company.catchPhrase}</em></p>
          <p>{user.company.bs}</p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <h2>Connect with {user.name}</h2>
          <a href={`https://twitter.com/${user.username}`} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={`https://www.linkedin.com/in/${user.username}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDetail;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/userDetail.css'; // Import User Detail styles

// const UserDetail = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   }, [id]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img
//             src={`https://i.pravatar.cc/150?img=${id}`}
//             alt="Profile"
//             className="profile-pic"
//           />
//           <div className="profile-info">
//             <h1>{user.name}</h1>
//             <p className="username">@{user.username}</p>
//           </div>
//         </div>
//         <div className="section">
//           <h2>Contact Information</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
//         </div>
//         <div className="section">
//           <h2>Company</h2>
//           <p>{user.company.name}</p>
//           <p>{user.company.catchPhrase}</p>
//         </div>
//         <div className="social-links">
//           <h2>Follow Me</h2>
//           <a href={`https://twitter.com/${user.username}`}>Twitter</a>
//           <a href={`https://facebook.com/${user.username}`}>Facebook</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetail;
