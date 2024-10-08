import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    if (!id || !name || !quantity || !price || !category) {
      setMessage('Please fill out all fields.');
      return;
    }

    if (parseInt(quantity) <= 0) {
      setMessage('Quantity must be greater than 0.');
      return;
    }

    if (parseFloat(price) <= 0) {
      setMessage('Price must be greater than 0.');
      return;
    }

    const newItem = {
      id,
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      category,
    };

    addItem(newItem);
    setMessage('Item added successfully!');
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('');
  };

  return (
    <div>
      <label>ID:</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Quantity:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <div>
      </div>
      <button onClick={handleAdd}>Add Item</button>
      <p>{message}</p>
    </div>
  );
};

export default AddItem;
