import React, { useState } from 'react';

const RemoveItem = ({ removeItem, getAllItems }) => {
  const [id, setId] = useState('');
  const [removed, setRemoved] = useState(false);
  const items = getAllItems();

  const handleRemove = () => {
    removeItem(id);
    setId('');
    setRemoved(true);
  };

  if (items.length === 0 && !removed) {
    return (
      <div className="section">
        <h1>No items to remove!</h1>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>Remove Item</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Item ID"
      />
      <button onClick={handleRemove}>Remove Item</button>

      {removed && <h2>Item removed successfully.</h2>}
    </div>
  );
};

export default RemoveItem;
