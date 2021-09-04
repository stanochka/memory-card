import { allCards } from '../allCards.js';

function Card(props) {

  const currentCard = allCards.filter(card => card.id === props.id)[0];

  const handleClick = () => {
    props.sendToBoard(currentCard.id);
  }

  return <div className="Card" onClick={handleClick}>
          <img className="cardImg" src={currentCard.img} alt={currentCard.name} />
          <div className="cardName">{currentCard.name}</div>
         </div>
}

export default Card;
