import StatisticLine from "./StatisticLine";
import "./index.css";

const Statistics = ({ all, positive, avg, good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {all ? (
        <div>
          <table className="statistics-table">
            <tbody>
              <tr>
                <StatisticLine text="Good" value={good} />
              </tr>
              <tr>
                <StatisticLine text="Neutral" value={neutral} />
              </tr>
              <tr>
                <StatisticLine text="Bad" value={bad} />
              </tr>
              <tr>
                <StatisticLine text="All" value={all} />
              </tr>
              <tr>
                <StatisticLine text="Average" value={avg ? avg : 0} />
              </tr>
              <tr>
                <StatisticLine
                  text="Positive"
                  value={positive ? `${positive}%` : 0}
                />
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

export default Statistics;
