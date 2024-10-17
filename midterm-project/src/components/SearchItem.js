import React, { useState } from 'react';

const SearchItem = ({ getAllItems }) => {
  const [searchId, setSearchId] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const items = getAllItems();
    const foundItem = items.find((item) => item.id === searchId);
    if (foundItem) {
      setSearchedItem(foundItem);
      setNotFound(false);
    } else {
      setSearchedItem(null);
      setNotFound(true);
    }
  };

  return (
    <div>
      <h2>Search Item</h2>
      <input
        type="text"
        placeholder="Enter Item ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchedItem ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{searchedItem.id}</td>
              <td>{searchedItem.name}</td>
              <td>{searchedItem.quantity}</td>
              <td>{searchedItem.price}</td>
              <td>{searchedItem.category}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        notFound && <p>Item not found!</p>
      )}
    </div>
  );
};

export default SearchItem;
