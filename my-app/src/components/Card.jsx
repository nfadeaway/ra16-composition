import React from 'react';

const Card = (props) => {
  console.log(1)
  return (
    <div className="card" style={{width: props.cardSettings.class.card.style.width}}>

      {props.cardSettings.photoBlock
        ? (props.cardSettings.class.cardImgTop.src
            ? <img src={props.cardSettings.class.cardImgTop.src} className="card-img-top" alt={props.cardSettings.class.cardImgTop.alt}/>
            : <div className="placeholder">Image</div>)
        : null
      }
      <div className="card-body">
        <h5 className="card-title">{props.cardSettings.class.cardTitle.text}</h5>
        <p className="card-text">{props.cardSettings.class.cardText.text}</p>
        <a href={props.cardSettings.class.btnPrimary.href} className="btn btn-primary">{props.cardSettings.class.btnPrimary.text}</a>
      </div>
    </div>
  );
};

export default Card;