import React from 'react'
import { Link } from 'react-router-dom'
import { my_recipe } from '../recipe'
import Header from '../components/Header'

const RecipeListPage = () => {
  return (
    <div>
    <Header/>
    <div className='container'>
        <div style={{marginTop:'100px'}} className='inner-container'>
            <h1>Our Recipies</h1>
            <div className='recipe-list'>
            {Object.keys(my_recipe).map((recipe)=>{
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/recipe/${recipe}`}
                  >
                    <div className="recipe">
                      <h2>{my_recipe[recipe].name}</h2>
                      <div className="sub-section">
                        <p>{my_recipe[recipe].preparation_time}</p>
                        <p>{my_recipe[recipe].servings} Servings</p>
                      </div>
                    </div>
                  </Link>
                );
            })}
            </div>
        </div>
    </div>
    </div>
  )
}

export default RecipeListPage