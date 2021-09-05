function Score(props) {
  return <div className="Score">
          <div>Current score: {props.currentScore}</div>
          <div>Best score: {props.bestScore}</div>
         </div>
}

export default Score;
