import React, { useState } from 'react';

const UpdateItem = ({ updateItem, getItemById, getAllItems }) => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  const items = getAllItems();

  const handleSearch = () => {
    const foundItem = getItemById(id);
    if (foundItem) {
      setItem(foundItem);
    } else {
      alert("Item not found.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (item) {
      setItem({ ...item, [name]: name === 'quantity' ? Number(value) : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      updateItem(item);
      setItem(null);
      setId('');
    }
  };


  if (items.length === 0) {
    return (
      <div className='section'>
        <h1>No items to update.</h1>
      </div>
    )
  }
  return (
    <div className="section">
      <h2>Update Item</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Item ID"
      />
      <button onClick={handleSearch}>Search</button>
      {item && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={item.name} onChange={handleChange} />
          <label>Quantity:</label>
          <input type="number" name="quantity" value={item.quantity} onChange={handleChange} />
          <button type="submit">Update Item</button>
        </form>
      )}
    </div>
  );
};

export default UpdateItem;
