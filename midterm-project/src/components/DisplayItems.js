import { useState } from 'react';
import InventoryTable from './InventoryTable';

const DisplayItems = ({ getItemsByCategory, getAllItems }) => {
  const [category, setCategory] = useState('all');
  const [items, setItems] = useState([]);

  const handleDisplay = () => {
    if (category === 'all') {
      setItems(getAllItems());
    } else {
      setItems(getItemsByCategory(category));
    }
  };

  return (
    <div>
      <h2>Display Items</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button onClick={handleDisplay}>Display Items</button>
      <InventoryTable items={items} />
    </div>
  );
};

export default DisplayItems;
