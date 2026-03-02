import { useState } from "react";
import "./App.css";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ goodCount, neutralCount, badCount, totalCount }) => {
  return goodCount !== 0 || neutralCount !== 0 || badCount !== 0 ? (
    <table style={{ textAlign: "left" }}>
      <StatisticLine text="good" value={goodCount} />
      <StatisticLine text="neutral" value={neutralCount} />
      <StatisticLine text="bad" value={badCount} />
      <StatisticLine text="all" value={totalCount} />
      <StatisticLine
        text="average"
        value={parseFloat(totalCount / 3).toPrecision(3)}
      />
      <StatisticLine
        text="positive"
        value={`${(parseFloat(goodCount / totalCount).toFixed(3) || 0) * 100} %`}
      />
    </table>
  ) : (
    <div>No feedback given</div>
  );
};

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const totalCount = goodCount + neutralCount + badCount;

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGoodCount(goodCount + 1)} />
      <Button
        text="neutral"
        onClick={() => setNeutralCount(neutralCount + 1)}
      />
      <Button text="bad" onClick={() => setBadCount(badCount + 1)} />
      <h1>statistics</h1>
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
        totalCount={totalCount}
      />
    </>
  );
}

export default App;
