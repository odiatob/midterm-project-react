import React, { useState } from 'react';

const RemoveItem = ({ removeItem, getAllItems }) => {
  const [id, setId] = useState('');
  const [removedMessage, setRemovedMessage] = useState('');
  const items = getAllItems();

  const handleRemove = () => {
    const itemId = Number(id);
    const itemExists = items.some(item => item.id === itemId);

    if (!itemExists) {
      setRemovedMessage('Item not found.');
      return;
    }

    removeItem(itemId);
    setId('');
    setRemovedMessage('Item removed successfully.');
  };

  if (items.length === 0) {
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
      {removedMessage && <h2>{removedMessage}</h2>}
    </div>
  );
};

export default RemoveItem;
