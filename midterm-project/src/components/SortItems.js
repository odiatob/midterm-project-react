import { useState } from 'react';
import InventoryTable from './InventoryTable';

const SortItems = ({ sortItems }) => {
  const [field, setField] = useState('quantity');
  const [order, setOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState([]);

  const handleSort = () => {
    const result = sortItems(field, order);
    setSortedItems(result);
  };

  return (
    <div>
      <h2>Sort Items</h2>
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <button onClick={handleSort}>Sort Items</button>
      <InventoryTable items={sortedItems} />
    </div>
  );
};

export default SortItems;
