import React, { useEffect, useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.type}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
