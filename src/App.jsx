import RecipeCard from"./components/RecipeCard";
import recipes from"./data/recipes";

function App(){
  return(
    <div>
      <h1>Cookbook</h1>

      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          name={recipe.name}
          cuisine={recipe.cuisine}
          description={recipe.description}
        />
      ))}
   </div>
  );
}

export default App;