import React from 'react';

function Notification({ message, clearMessage }) {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={clearMessage}>Dismiss</button>
    </div>
  );
}

export default Notification;
