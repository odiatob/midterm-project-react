import { useState } from 'react';

const RemoveItem = ({ removeItem }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = () => {
    const result = removeItem(id);
    setMessage(result);
  };

  return (
    <div>
      <h2>Remove Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleRemove}>Remove Item</button>
      <p>{message}</p>
    </div>
  );
};

export default RemoveItem;
