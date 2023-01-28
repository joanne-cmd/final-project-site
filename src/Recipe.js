import React from "react";
function Recipe({recipe}){
    return (
        <div className="card">
              <img src={recipe.thumbnail_url} alt={recipe.seo_title}/>
              <div className="description">{recipe.name}</div>
        </div>
              
    )
}
export default Recipe;