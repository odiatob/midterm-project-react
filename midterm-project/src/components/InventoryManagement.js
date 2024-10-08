import React, { useState } from 'react';

function InventoryManagement() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity && newItem.price) {
      setItems([...items, newItem]);
      setNewItem({ name: '', quantity: '', price: '' });
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      
      <form onSubmit={addItem}>
        <input 
          type="text" 
          name="name" 
          value={newItem.name} 
          onChange={handleInputChange} 
          placeholder="Item Name" 
        />
        <input 
          type="number" 
          name="quantity" 
          value={newItem.quantity} 
          onChange={handleInputChange} 
          placeholder="Quantity" 
        />
        <input 
          type="number" 
          name="price" 
          value={newItem.price} 
          onChange={handleInputChange} 
          placeholder="Price" 
        />
        <button type="submit">Add Item</button>
      </form>

      <h2>Inventory List</h2>
      {items.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in inventory</p>
      )}
    </div>
  );
}

export default InventoryManagement;
