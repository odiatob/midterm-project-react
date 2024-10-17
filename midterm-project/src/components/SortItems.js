import React, { useState } from 'react';

const SortItems = ({ sortItems }) => {
  const [sortOption, setSortOption] = useState('');
  const [message, setMessage] = useState('');

  const handleSort = () => {
    if (!sortOption) {
      setMessage('Please select a sort option.');
      return;
    }

    sortItems(sortOption);
    setMessage(`Items have been sorted by ${sortOption}.`);
  };

  return (
    <div>
      <h2>Sort Items</h2>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Select Sort Option</option>
        <option value="name">Name</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
        <option value="category">Category</option>
      </select>
      <button onClick={handleSort}>Sort</button>

      {message && <div className="notification">{message}</div>}
    </div>
  );
};

export default SortItems;
