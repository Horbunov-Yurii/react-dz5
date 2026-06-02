import { GlobalStyle } from './styles/GlobalStyle';
import { RecipeList } from './components/RecipeList/RecipeList';
import { recipes } from './data/recipes';

function App() {
  return (
    <>
      <GlobalStyle />

      <div style={{ padding: '30px' }}>
        <h1 style={{ textAlign: 'center' }}>Recipes</h1>

        <RecipeList recipes={recipes} />
      </div>
    </>
  );
}

export default App;
