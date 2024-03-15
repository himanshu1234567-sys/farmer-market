// AddProductForm.js (Placeholder component)
import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    addProduct({ id: Date.now(), name, quantity: parseInt(quantity) });
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
