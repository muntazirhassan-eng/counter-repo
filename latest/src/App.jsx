
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-card">
        <h1>My Counter</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button
            className="increase"
            onClick={() => setCount(count + 1)}
          >
            Increase +
          </button>

          <button
            className="decrease"
            onClick={() =>
              setCount(Math.max(0, count - 1))
            }
          >
            Decrease -
          </button>
        </div>

        <button
          className="reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
