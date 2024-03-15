// FarmerDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import ProductList from '../ProductList';
import AddProductForm from '../AddProductForm';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    // Include the image property in the new product
    const updatedProduct = { ...newProduct, image: 'url_to_your_image' };
    setProducts([...products, updatedProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/farmer/profile">My Profile</Link></li>
            <li><Link to="/farmer/notifications">Notifications</Link></li>
          </ul>
        </nav>
      </header>
      <div className="sidebar">
        <ul>
          <li><Link to="/farmer/products">My Products</Link></li>
          <li><Link to="/farmer/products/add">Upload Product</Link></li>
          <li><Link to="/farmer/sale-history">Sale History</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <ProductList products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
        <AddProductForm addProduct={addProduct} />
      </div>
    </div>
  );
}

export default FarmerDashboard;
