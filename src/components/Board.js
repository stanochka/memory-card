import  { useState } from "react";
import Card from './Card';
import Score from './Score';

function Board(props) {

  const randomize = () => {
    const a = new Set();
    while(a.size !== 8) {
      a.add(Math.floor(Math.random() * 50 + 1));
    }
    return [...a];
  }

  let cardsValue = randomize();

  const [renderedCards, setRenderedCards] = useState(cardsValue);
  const [clickedCards, updateClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const getData = (data) => {
    if (clickedCards.indexOf(data) === -1){
      updateClickedCards([...clickedCards, data]);
      setCurrentScore(currentScore + 1);
      if (bestScore < currentScore + 1) setBestScore(currentScore + 1);
    } else {
      updateClickedCards([]);
      if (bestScore < currentScore) setBestScore(currentScore);
      setCurrentScore(0);
    }
    cardsValue = randomize();
    setRenderedCards(cardsValue);
  }

  return <div className="Board">
          <Score currentScore={currentScore} bestScore={bestScore} />
          <div className="allCards">
            {renderedCards.map(cardId => <Card key={cardId} id={cardId} sendToBoard={getData} />)}
          </div>
         </div>
}

export default Board;
