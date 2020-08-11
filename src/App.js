import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import APP_KEY  from './env';

const App = () => {
  const APP_ID = '220b0437';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  useEffect(() => { // our useEffect only runs when our query changes, and not every single time we type
    getRecipes()
  }, [query])


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          placeholder={'Search recipes'}
          onChange={updateSearch} />
        <button classsName='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
