import StatisticLine from "./StatisticLine";

const Statistics = ({ all, positive, avg, good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {all ? (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={avg ? avg : 0} />
          <StatisticLine
            text="Positive"
            value={positive ? `${positive}%` : 0}
          />
        </div>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

export default Statistics;
