// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/farmer/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/farmer/products">My Products</Link>
        </li>
        <li>
          <Link to="/farmer/products/add">Add Product</Link>
        </li>
        <li>
          <Link to="/farmer/sales">Sale History</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
