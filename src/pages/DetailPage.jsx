import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="img-fluid"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="recipe-title mb-4">{recipe.name}</h1>
          <p className="recipe-ingredients"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p className="recipe-instructions"><strong>Instructions:</strong> {recipe.instructions}</p>
          <p className="recipe-cuisine"><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p className="recipe-cuisine"><strong>Cooking Time:</strong> {recipe.prepTimeMinutes} Mins</p>
          <p className="recipe-servings"><strong>Servings:</strong> {recipe.servings}</p>
          <p className="recipe-rating"><strong>Rating:</strong> {recipe.rating} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
