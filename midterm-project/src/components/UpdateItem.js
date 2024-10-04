import { useState } from 'react';

const UpdateItem = ({ updateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    const result = updateItem(id, field, Number(newValue));
    setMessage(result);
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleUpdate}>Update Item</button>
      <p>{message}</p>
    </div>
  );
};

export default UpdateItem;
