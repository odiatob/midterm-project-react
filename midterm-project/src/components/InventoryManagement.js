import React, { useState } from 'react';
import SortItems from './SortItems';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });
  const [sortMessage, setSortMessage] = useState(''); // State to store the sorting message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity && newItem.price) {
      setItems((prevItems) => [
        ...prevItems,
        { ...newItem, quantity: parseInt(newItem.quantity), price: parseFloat(newItem.price) },
      ]);
      setNewItem({ name: '', quantity: '', price: '' });
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const sortItems = (field) => {
    const sortedItems = [...items].sort((a, b) => {
      if (field === 'name') {
        return a.name.localeCompare(b.name);
      } else if (field === 'quantity') {
        return a.quantity - b.quantity;
      } else if (field === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setItems(sortedItems);
    setSortMessage(`Items are sorted by ${field}`); // Update the sorting message
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
          required
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          required
        />
        <input
          type="number"
          step="0.01"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <SortItems sortItems={sortItems} />

     
      {sortMessage && <p>{sortMessage}</p>}

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
};

export default InventoryManagement;
