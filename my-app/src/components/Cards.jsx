import React from 'react';
import {Children} from 'react';

const Cards = ({children}) => {
  return (
    <div className="cards-wrapper">
      {Children.map(children, child => child)}
    </div>
  );
};

export default Cards;