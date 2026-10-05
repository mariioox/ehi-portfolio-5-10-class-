import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main id="center" aria-labelledby="counter-heading">
        <h1 id="counter-heading">Counter</h1>
        <p aria-live="polite">Current count: {count}</p>
        <div>
          <button type="button" onClick={() => setCount((value) => value - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Increase
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
