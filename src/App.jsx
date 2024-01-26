import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <div className="btn-container">
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral} </p>
        <p>Bad {bad} </p>
        <p>All {all} </p>
        <p>Average {avg} </p>
        <p>Positive {positive}% </p>
      </div>
    </div>
  );
};

export default App;
