import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

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
      <h2>Give feedback</h2>
      <div className="btn-container" style={{ display: "flex" }}>
        <Button value={good} setValue={setGood} text="Good" />
        <Button value={neutral} setValue={setNeutral} text="Neutral" />
        <Button value={bad} setValue={setBad} text="Bad" />
      </div>

      <Statistics
        all={all}
        avg={avg}
        positive={positive}
        bad={bad}
        good={good}
        neutral={neutral}
      />
    </div>
  );
};

export default App;
