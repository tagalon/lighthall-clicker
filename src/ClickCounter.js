import React, { useState, useEffect } from "react";
import "./index.css";

function ClickCounter() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("clickCount")) || 0
  );

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    localStorage.setItem("clickCount", count);
  }, [count]);

  return (
    <div className="component-wrapper">
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default ClickCounter;