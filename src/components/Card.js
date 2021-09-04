function Card(props) {

  const allCards = [
    {id: 1, name: 'Mouse', img: './images/001-mouse.svg'},
    {id: 2, name: 'Cow', img: './images/002-cow.svg'},
    {id: 3, name: 'Kangaroo', img: './images/003-kangaroo.svg'},
    {id: 4, name: 'Bear', img: './images/004-bear.svg'},
    {id: 5, name: 'Flamingo', img: './images/005-flamingo.svg'},
    {id: 6, name: 'Fox', img: './images/006-fox.svg'},
    {id: 7, name: 'Bat', img: './images/007-bat.svg'},
    {id: 8, name: 'Crab', img: './images/008-crab.svg'},
    {id: 9, name: 'Lion', img: './images/009-lion.svg'},
    {id: 10, name: 'Frog', img: './images/010-frog.svg'},
    {id: 11, name: 'Bee', img: './images/011-bee.svg'},
    {id: 12, name: 'Koala', img: './images/012-koala.svg'},
    {id: 13, name: 'Tiger', img: './images/013-tiger.svg'},
    {id: 14, name: 'Rhino', img: './images/014-rhino.svg'},
    {id: 15, name: 'Squirrel', img: './images/015-squirrel.svg'},
    {id: 16, name: 'Whale', img: './images/016-whale.svg'},
    {id: 17, name: 'Duck', img: './images/017-duck.svg'},
    {id: 18, name: 'Camel', img: './images/018-camel.svg'},
    {id: 19, name: 'Shark', img: './images/019-shark.svg'},
    {id: 20, name: 'Bird', img: '../images/020-bird.svg'},
    {id: 21, name: 'Rabbit', img: './images/021-rabbit.svg'},
    {id: 22, name: 'Llama', img: './images/022-llama.svg'},
    {id: 23, name: 'Cat', img: './images/023-cat.svg'},
    {id: 24, name: 'Hedgehog', img: './images/024-hedgehog.svg'},
    {id: 25, name: 'Octopus', img: './images/025-octopus.svg'},
    {id: 26, name: 'Snail', img: './images/026-snail.svg'},
    {id: 27, name: 'Giraffe', img: './images/027-giraffe.svg'},
    {id: 28, name: 'Manta Ray', img: './images/028-manta-ray.svg'},
    {id: 29, name: 'Wolf', img: './images/029-wolf.svg'},
    {id: 30, name: 'Penguin', img: '../images/030-penguin.svg'},
    {id: 31, name: 'Panther', img: './images/031-panther.svg'},
    {id: 32, name: 'Elephant', img: './images/032-elephant.svg'},
    {id: 33, name: 'Reindeer', img: './images/033-reindeer.svg'},
    {id: 34, name: 'Chameleon', img: './images/034-chameleon.svg'},
    {id: 35, name: 'Crocodile', img: './images/035-crocodile.svg'},
    {id: 36, name: 'Butterfly', img: './images/036-butterfly.svg'},
    {id: 37, name: 'Owl', img: './images/037-owl.svg'},
    {id: 38, name: 'Turtle', img: './images/038-turtle.svg'},
    {id: 39, name: 'Snake', img: './images/039-snake.svg'},
    {id: 40, name: 'Polar Bear', img: '../images/040-polar-bear.svg'},
    {id: 41, name: 'Monkey', img: './images/041-monkey.svg'},
    {id: 42, name: 'Chicken', img: './images/042-chicken.svg'},
    {id: 43, name: 'Sloth', img: './images/043-sloth.svg'},
    {id: 44, name: 'Dog', img: './images/044-dog.svg'},
    {id: 45, name: 'Dolphin', img: './images/045-dolphin.svg'},
    {id: 46, name: 'Pig', img: './images/046-pig.svg'},
    {id: 47, name: 'Hippopotamus', img: './images/047-hippopotamus.svg'},
    {id: 48, name: 'Parrot', img: './images/048-parrot.svg'},
    {id: 49, name: 'Clownfish', img: './images/049-clownfish.svg'},
    {id: 50, name: 'Horse', img: '../images/050-horse.svg'},
  ];

  const currentCard = allCards.filter(card => card.id === props.id)[0];

  return <div className="Card">
          <img className="cardImg" src={currentCard.img} alt={currentCard.name} />
          <div className="cardName">{currentCard.name}</div>
         </div>
}

export default Card;
