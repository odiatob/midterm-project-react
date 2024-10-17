import { useState } from 'react';

const useInventory = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const getAllItems = () => {
    return items;
  };

  const updateItem = (id, updatedItem) => {
    setItems((prevItems) => 
      prevItems.map(item => (item.id === id ? updatedItem : item))
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const getItemById = (id) => {
    return items.find(item => item.id === id);
  };

  const getLowStockItems = () => {
    return items.filter(item => item.stock < 5);
  };

  const sortItems = (criterion) => {
    const sortedItems = [...items].sort((a, b) => a[criterion] - b[criterion]);
    setItems(sortedItems);
  };

  return {
    addItem,
    getAllItems,
    updateItem,
    removeItem,
    getItemById,
    getLowStockItems,
    sortItems,
  };
};

export default useInventory;
