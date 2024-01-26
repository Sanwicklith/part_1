import "./index.css";
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <td>{text}</td>
      <td>{value}</td>
    </div>
  );
};

export default StatisticLine;
