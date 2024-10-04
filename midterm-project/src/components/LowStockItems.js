import { useEffect, useState } from 'react';
import InventoryTable from './InventoryTable';

const LowStockItems = ({ getLowStockItems }) => {
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    setLowStockItems(getLowStockItems());
  }, [getLowStockItems]);

  return (
    <div>
      <h2>Low Stock Items</h2>
      <InventoryTable items={lowStockItems} />
    </div>
  );
};

export default LowStockItems;
