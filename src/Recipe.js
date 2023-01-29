
function Recipe({recipe, setId, setView}){
    

    function handleclickcard(){
        // alert(recipe.idMeal)
        setId(recipe.idMeal)
        setView("details")
    }
    return (
        <div onClick={handleclickcard} className="card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
              <div className="description">{recipe.strMeal}</div>
        </div>
              
    )
}
export default Recipe;