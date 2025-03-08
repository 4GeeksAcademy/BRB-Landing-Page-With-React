import React from "react";


const Card = ({card}) => {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={card.image} className="card-img-top" alt={card.title} />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};




export default Card; 