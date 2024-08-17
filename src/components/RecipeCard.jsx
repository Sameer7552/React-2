import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card position-relative">
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="btn btn-custom">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
