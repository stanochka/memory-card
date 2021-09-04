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

  let initValue = randomize();
  const [renderedCards, setRenderedCards] = useState(initValue);

  useEffect(() => {
    console.log(renderedCards);
  }, [renderedCards])

  return <div className="Board">
          {renderedCards.map(cardId => <Card key={cardId} id={cardId} />)}
         </div>
}

export default Board;
