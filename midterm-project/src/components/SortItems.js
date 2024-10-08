import React from 'react';

const SortItems = ({ sortItems }) => {
  const handleSort = (field) => {
    sortItems(field);
  };

  return (
    <div className="section">
      <h2>Sort Items</h2>
      <button onClick={() => handleSort('name')}>Sort by Name</button>
      <button onClick={() => handleSort('quantity')}>Sort by Quantity</button>
    </div>
  );
};

export default SortItems;
