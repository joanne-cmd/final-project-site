import React, { useEffect, useState } from "react";
function Recipe({recipe, setId, setView}){
    

    function handleclickcard(){
        // alert(recipe.idMeal)
        setId(recipe.idMeal)
        setView("details")
    }
    return (
      
              
    )
}
export default Recipe;