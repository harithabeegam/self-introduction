import { useState } from "react";
import "./Task4.css";
function Task4() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "task4 dark" : "task4"}>
      <div className="header">
        <h1>Counter & Theme Switcher</h1>
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <div className="counter-card">
        <p className="label">Current Count</p>
        <h2>{count}</h2>
        <div className="buttons">
 <button className="increment" onClick={() => setCount(count + 1)}> +Increment</button>
 <button className="decrement" onClick={() => setCount(count - 1)}> - Decrement</button>
 <button className="reset" onClick={()=> setCount(0)}> Reset</button> 
        </div>
      </div>
    </div>
  );
}
export default Task4;
