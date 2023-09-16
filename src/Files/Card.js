import React from 'react';

function Card({ recipe, onItemClick }) {
  return (
    <div className="row">
      {recipe.map((item, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className="card">
            <img
              src={item.recipe.image}
              className="card-img-top"
              alt={item.recipe.label}
            />
            <div className="card-body">
              <h5 className="card-title">{item.recipe.label}</h5>
              <button
                className="btn btn-primary"
                onClick={() => onItemClick(item)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
