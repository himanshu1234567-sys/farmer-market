import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/user/login">Login</Link></p>
    </div>
  );
}

export default UserSignup;
