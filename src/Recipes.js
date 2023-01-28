import React ,{useEffect, useState}from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
 function  Recipes ({setId,setView }) {

    const tags  = ["Beef","Chicken","Dessert","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian","Breakfast","Goat"]

    const [recipes,setRecipes]= useState([])
     const[categories, setCategories]=useState("Beef")


    const [search, setSearch] = useState("")


    useEffect(()=>{
        
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
            .then(response => response.json())
            .then(response => setRecipes(response.meals))
        //     .catch(err => console.error(err));
    }, [categories])

    function updateTag(newTag) {
        // alert(newTag)
        setCategories(newTag)
    }

    const tagsToDisplay = tags.filter(tg => {
        if(search === "") {
            return true
        } else {
            return tg.toLowerCase().includes(search.toLowerCase())
        }
    })
    
    return(
        <>
            <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                        <input value={search} onInput={(e) => {
                            setSearch(e.target.value)
                        }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <p>{ categories.toUpperCase()}</p>
                        </form>
                        
                    </div>
            </nav>
            <div className="main">
                <SearchBar updateTag={updateTag} tags={tagsToDisplay} />
                <div className="recipes">
                    {
                        recipes.map((recipe , index)=>{
                            return  <Recipe key={index} setId={setId} setView={setView} recipe={recipe} />
                        })
                    }
                </div>
            </div>
        </>
        
    )
 }

 export default Recipes;