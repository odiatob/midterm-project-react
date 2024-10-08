import React, { useState } from 'react';

const SearchItem = ({ getItemById }) => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);

  const handleSearch = () => {
    const foundItem = getItemById(id);
    setItem(foundItem || null);
  };

  return (
    <div className="section">
      <h2>Search Item</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Item ID"
      />
      <button onClick={handleSearch}>Search</button>
      {item && (
        <div>
          <h3>Item Found:</h3>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      )}
      {item === null && id && <p>Item not found.</p>}
    </div>
  );
};

export default SearchItem;
