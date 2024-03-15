// ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
