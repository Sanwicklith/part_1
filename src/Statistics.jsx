const Statistics = ({ all, positive, avg, good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {all ? (
        <div>
          <p>Good {good}</p>
          <p>Neutral {neutral} </p>
          <p>Bad {bad} </p>
          <p>All {all} </p>
          <p>Average {avg ? avg : 0} </p>
          <p>Positive {positive ? positive : 0}% </p>
        </div>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

export default Statistics;
