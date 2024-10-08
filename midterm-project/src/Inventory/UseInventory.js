import { useCallback, useState } from 'react';

const useInventory = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  const addItem = (newItem) => {
    setItems([...items, newItem]);
    setMessage("The item was added to the inventory.");
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setMessage("The item was updated successfully.");
  };

  const removeItem = useCallback((id) => {
    console.log("Removing item: " + id);
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    setMessage("The item was removed from the inventory.");
  }, [items]);


  const getItemById = (id) => {
    const item = items.find(item => item.id === id);
    return item || null;
  };

 const getAllItems = useCallback(() => {
  return items;
 }, [items])

  const getLowStockItems = () => {
    return items.filter(item => item.quantity < 5);
  };

  const sortItems = (field) => {
    const sortedItems = [...items].sort((a, b) => a[field] > b[field] ? 1 : -1);
    setItems(sortedItems);
    setMessage("Items sorted successfully.");
  };

  const clearMessage = () => setMessage('');

  return {
    addItem,
    updateItem,
    removeItem,
    getItemById,
    getAllItems,
    getLowStockItems,
    sortItems,
    message,
    clearMessage,
  };
};

export default useInventory;
