import  { useState, useEffect } from "react";
import Card from './Card';

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

  useEffect(() => {
    console.log(clickedCards);
  }, [clickedCards])

  const getData = (data) => {
    clickedCards.indexOf(data) === -1 ?
    updateClickedCards([...clickedCards, data]) :
    updateClickedCards([]);

    cardsValue = randomize();
    setRenderedCards(cardsValue);
  }

  return <div className="Board">
          {renderedCards.map(cardId => <Card key={cardId} id={cardId} sendToBoard={getData} />)}
         </div>
}

export default Board;
