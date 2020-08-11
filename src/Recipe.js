import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <p>{calories.toFixed(0)}</p>
            <img src={image} className={style.image}/>
            <ol>{ingredients.map(ingredient => (
                ingredient.text
            ))}</ol>
        </div>
    )
}

export default Recipe;