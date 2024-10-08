import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItems from './components/DisplayItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import LowStockItems from './components/LowStockItems';
import useInventory from './Inventory/UseInventory';
import './styles.css';

function App() {
  const {
    addItem,
    updateItem,
    removeItem,
    getItemById,
    getAllItems,
    getLowStockItems,
    sortItems,
  } = useInventory();

  const [selectedComponent, setSelectedComponent] = useState('');

  useEffect(() => {
    window.location.href = "#/" + selectedComponent;
  }, [selectedComponent]);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'AddItem':
        return <AddItem addItem={addItem} />;
      case 'UpdateItem':
        return <UpdateItem updateItem={updateItem} getItemById={getItemById} getAllItems={getAllItems} />;
      case 'RemoveItem':
        return <RemoveItem removeItem={removeItem} getAllItems={getAllItems} />;
      case 'DisplayItems':
        return <DisplayItems getAllItems={getAllItems} />;
      case 'SearchItem':
        return <SearchItem getItemById={getItemById} />;
      case 'SortItems':
        return <SortItems sortItems={sortItems} />;
      case 'LowStockItems':
        return <LowStockItems getLowStockItems={getLowStockItems} />;
      default:
        return <p>Select an action to get started.</p>;
    }
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <h3>made by Arvin Zoleta</h3>

      <div className="button-container">
        <button onClick={() => setSelectedComponent('AddItem')}>Add Item</button>
        <button onClick={() => setSelectedComponent('UpdateItem')}>Update Item</button>
        <button onClick={() => setSelectedComponent('RemoveItem')}>Remove Item</button>
        <button onClick={() => setSelectedComponent('DisplayItems')}>Display Items</button>
        <button onClick={() => setSelectedComponent('SearchItem')}>Search Item</button>
        <button onClick={() => setSelectedComponent('SortItems')}>Sort Items</button>
        <button onClick={() => setSelectedComponent('LowStockItems')}>Low Stock Items</button>
      </div>


      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
