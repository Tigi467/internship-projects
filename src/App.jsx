import { useState } from "react";
import "./App.css";

function App() {
  // ---- HOOK: useState creates a piece of state + a setter function ----
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // ---- EVENT HANDLING: plain functions called when an event fires ----
  const increment = () => {
    setCount(count + 1); // STATE UPDATE -> triggers a RE-RENDER
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // ---- PROPAGATION: an event on a child bubbles up to its parent ----
  const handleParentClick = () => {
    alert("Parent div was clicked (event bubbled up)");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // stops the click from bubbling to the parent
    alert("Child button was clicked (propagation stopped here)");
  };

  return (
    // RENDERING: className changes based on state, so the whole app
    // re-renders with a different look whenever darkMode changes
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>React Basics Demo</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <section>
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </section>

      <section>
        <h2>Event Propagation</h2>
        <div className="parent" onClick={handleParentClick}>
          Parent div (click outside the button)
          <button onClick={handleChildClick}>Click me (stops propagation)</button>
        </div>
      </section>
    </div>
  );
}

export default App;