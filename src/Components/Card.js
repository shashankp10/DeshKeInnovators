import React from 'react';

const Card = ({ id, text, image }) => {
  return (
    <div className="card">
      <h3>{text}</h3>
      <img src={image}></img>
    </div>
  );
};

export default Card;
