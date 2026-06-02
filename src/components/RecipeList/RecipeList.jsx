import { RecipeCard } from '../RecipeCard/RecipeCard';

export const RecipeList = ({ recipes }) => {
  return (
    <ul
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};