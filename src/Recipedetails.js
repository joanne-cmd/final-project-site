import React,{useEffect, useState} from "react";
import { IoArrowBack } from "react-icons/io5";

function Recipedetials({id, setView}){
    const[meal, setMeal]=useState(null)
        useEffect(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(r=>r.json())
            .then(data=>setMeal(data.meals[0]))

        },[id])
    return(

        <div className="recipesdetails">
        <button  onClick={()=>{
            setView("recipes")

        }}><IoArrowBack /></button>
       {
        meal
        ? <>
             <h1>{meal.strMeal}</h1>
             <h2>{meal.strArea} {meal.strCategory}</h2>
             
             <div className="ingredients-img">
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
                <div className="ingredients">
                    {
                        Object.keys(meal).filter(key=>{
                            return key.startsWith("strIngredient")
                        }).map(key=>{
                            if(meal[key]){
                                return (
                                    <div className="ingredient">
                                        <img src={`https://www.themealdb.com/images/ingredients/${meal[key]}.png`} alt={meal[key]}/>
                                        <p>{meal[`strMeasure${key.slice(-1)}`]}</p>

                                    </div>


                                )
                            }
                        })
                        
                    }
                </div>  
             </div>
             <div className="instructions">{meal.strInstructions.split(".").map(sentence => {
                return <div className="sentences">{sentence}</div>
             })}</div>
        </>
        : null
       }

        </div>
    )

}
export default Recipedetials;