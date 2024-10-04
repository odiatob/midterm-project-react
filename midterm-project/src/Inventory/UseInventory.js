import { useState } from 'react';

const UseInventory = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (id, newValues) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, ...newValues } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const getItemById = (id) => items.find(item => item.id === id);

  const getItemsByCategory = (category) => items.filter(item => item.category === category);

  const getAllItems = () => items;

  const getLowStockItems = () => items.filter(item => item.quantity <= 5);

  const sortItems = (key, order) => {
    const sortedItems = [...items].sort((a, b) => 
      order === 'asc' ? a[key] - b[key] : b[key] - a[key]
    );
    setItems(sortedItems);
  };

  return {
    addItem,
    updateItem,
    removeItem,
    getItemById,
    getItemsByCategory,
    getAllItems,
    getLowStockItems,
    sortItems,
  };
};

export default UseInventory;
