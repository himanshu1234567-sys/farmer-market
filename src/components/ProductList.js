// ProductList.js
import React from 'react';

const ProductList = ({ products, deleteProduct, updateProduct }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div className="product-info">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  <button onClick={() => updateProduct(product)}>Update</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
