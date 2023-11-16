import React from 'react'
import Header from '../components/Header'
import { my_recipe } from '../recipe'

const RecipePage = () => {
    let recipe_id=window.location.pathname.split('/'[2])
  return (
    <div>
    <Header/>
    </div>
  )
}

export default RecipePage