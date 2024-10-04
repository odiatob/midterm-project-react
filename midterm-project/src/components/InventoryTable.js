import React, { useState } from 'react';

const DisplayItems = ({ getItemsByCategory, getAllItems }) => {
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === 'All') {
      setItems(getAllItems());
    } else {
      setItems(getItemsByCategory(e.target.value));
    }
  };

  return (
    <div>
      <h2>Display Items</h2>
      
      {/* Dropdown for selecting category */}
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {/* Display table only if there are items */}
      {items.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available in this category.</p>
      )}
    </div>
  );
};

export default DisplayItems;
