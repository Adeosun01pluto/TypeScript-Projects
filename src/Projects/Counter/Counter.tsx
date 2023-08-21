import React, { useState } from 'react'
import "./counter.css"
function Counter() {
// Use the `useState` hook to manage the counter value.
  // The `count` state will hold the current counter value, and `setCount` is a function to update it.
  const [count, setCount] = useState<number>(0)
  // Event handler to increment the counter.
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // Event handler to decrement the counter.
  const handleDecrement = () => {
    // Ensure the counter doesn't go below 0.
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter-container">
      <h1>Beautiful Counter App</h1>
      <div className="counter">{count}</div>
      <div className="button-container">
        <button className={`button ${count === 0 ? 'disabled' : ''}`} onClick={handleDecrement}>
          Decrement
        </button>
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
    )
}

export default Counter