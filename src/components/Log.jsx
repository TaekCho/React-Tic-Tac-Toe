export default function Log({ turns }) {
  //   const logList = [];

  //   logList.push(<li>{`${turnLog} has played!`}</li>);
  //   console.log(turnLog);
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
