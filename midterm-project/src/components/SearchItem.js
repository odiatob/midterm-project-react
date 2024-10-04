import { useState } from 'react';

const SearchItem = ({ getItemById }) => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    const foundItem = getItemById(id);
    if (foundItem) {
      setItem(foundItem);
      setMessage('');
    } else {
      setMessage('Item not found!');
      setItem(null);
    }
  };

  return (
    <div>
      <h2>Search Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {message && <p>{message}</p>}
      {item && (
        <div>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
