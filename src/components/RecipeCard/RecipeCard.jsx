import { Card, Title, Info } from './RecipeCard.styled';
import { Difficulty } from '../Difficulty/Difficulty';

export const RecipeCard = ({ recipe }) => {
  return (
    <Card $difficulty={recipe.difficulty}>
      <Title>{recipe.title}</Title>

      <Info>⏱ {recipe.time} min</Info>
      <Info>🍽 {recipe.servings} servings</Info>
      <Info>🔥 {recipe.calories} calories</Info>

       <Difficulty difficulty={recipe.difficulty} />
    </Card>
  );
};