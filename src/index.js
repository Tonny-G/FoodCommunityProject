import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

const router=createBrowserRouter([
  {
    path:'/',
    element:<IndexPage/>,
  },{
    path:'/recipe',
    element:<RecipeListPage/>
  },{
    path:'/recipe/:recipe_id',
    element:<RecipePage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
  
);
