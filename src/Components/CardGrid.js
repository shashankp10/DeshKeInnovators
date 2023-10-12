import React from 'react';
import Card from '../Components/Card';
import '../css/cardgrid.css'
import card1 from '../assests/card1.webp'
import card2 from '../assests/card2.webp'
import card3 from '../assests/card3.webp'
import card4 from '../assests/card4.webp'
import card5 from '../assests/card5.webp'
import card6 from '../assests/card6.webp'


const cardData = [
  { id: 1, text:'Learn', image: card1},
  { id: 2, text:'Practice', image: card2},
  { id: 3, text:'Mentorships', image: card3},
  { id: 4, text:'Compete', image: card4},
  { id: 5, text:'Jobs', image: card5},
  { id: 6, text:'Blogs', image: card6},
];

const CardGrid = () => {
  const rows = [];
  for (let i = 0; i < cardData.length; i += 3) {
    const rowCards = cardData.slice(i, i + 3);
    rows.push(
      <div className="card-row" key={i / 3}>
        {rowCards.map(card => (
          <Card key={card.id} text={card.text} image={card.image} />
        ))}
      </div>
    );
  }

  return <div className="card-grid">{rows}</div>;
};

export default CardGrid;
