import React from 'react';

const LowStockItems = ({ getLowStockItems }) => {
  const lowStockItems = getLowStockItems();

  return (
    <div className="section">
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
        <ul>
          {lowStockItems.map(item => (
            <li key={item.id}>{item.name} (Quantity: {item.quantity})</li>
          ))}
        </ul>
      ) : (
        <p>No low stock items.</p>
      )}
    </div>
  );
};

export default LowStockItems;
