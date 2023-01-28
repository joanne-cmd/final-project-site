import React ,{useEffect, useState}from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
 function  Recipes () {
    const tags  = ["Brazilian", "Chinese", "Comfort Food", "Dairy Free", "Healthy", "5 Ingredients Or Less", "Under 30 Minutes", "Thanksgiving", "Appetizers", "Snacks", "Bbq", "Broiler", "Food Processor", "Freezer", "Stove Top", "One Pot Or Pan", "Bakery Goods", "Licensed Video", "Cheese Grater", "Parchment Paper", "Peeler", "Strainer", "Baking Kit", "Cooling Rack", "Measuring Spoons", "Microplane", "One Top App Dessert", "Holiday Cookie Hacks", "Walmart Holiday Bundle", "Pressure Cooker", "Contains Alcohol", "Tasty S 5th Birthday Sweet", "Tasty Ewd Family", "Snickers", "Deeply Blood Orange", "For Real Grapefruit", "Sparkling Rose", "Tasty Holiday Nye", "Tasty Holiday Festive Favorites", "Frank S Vegetarian Snacks", "Nynm Protein", "Tips Pros", "Spring Holiday", "Budget Plans", "Budget Expert", "Budget Shop", "Cinco De Mayo", "Filipino", "Laotian", "Dominican", "Summer Sides", "Fourth Picks", "Fourth Desserts", "Shoppable Recipes Family Dinner", "Shoppable Recipes Desserts", "Thanksgiving Sides", "Thanksgiving Desserts", "Shoppable Recipes Thanksgiving", "Shoppable Recipes Holiday Dinners", "Live Shop All", "Live Upcoming", "Franks Spicy Bites", "Charcuterie Inspiration", "Charcuterie Sweetchuterie", "Under 1 Hour", "Mccormick World Vegetarian", "Mccormick World Desserts", "Walmart Meal Planning", "Dole Sweet Treats", "Mccormick Holiday Mains", "Nigeria African Cuisine", "South Africa African Cuisine", "American", "German", "Middle Eastern", "Vietnamese", "Gluten Free", "Easter", "Halloween", "Valentines Day", "Drinks", "Kid Friendly", "Lunch", "Bake", "Winter", "Dutch Oven", "Microwave", "Big Batch", "Stuffed", "Paper Plates", "Tupperware", "Baking Pan", "Chefs Knife", "Kitchen Shears", "Rolling Pin", "Sieve", "Spider", "One Top App Veggies", "One Top App Sauces", "Ice Cream Social", "African", "Black History Month", "Mccormick Seasoned Pro", "Instant Pot", "Mccormick Game Day", "Qfp Recipes", "Tasty S 5th Birthday Recipe", "Light Bites", "Tasty S 5th Birthday Savory", "Tasty Ewd Tips", "Every Occasion", "Nynm Veggie", "Mc Breakfast Sweet", "Mc Breakfast Savory", "Mc Breakfast Healthy", "Tips Basics", "Spring Eat", "Budget Four", "Air Fryer", "Hawaiian", "Swedish", "Haitian", "Indigenous", "Mccormick Ugc One Pot Pasta", "Summer Drink", "Summer Desserts", "Fourth Drink", "Shoppable Recipes Seasonal Desserts", "Live Jasmine And Tucker", "Live Past Lives", "Shoppable Recipes Holiday Appetizers", "Franks Dips", "Franks Handheld Bites", "Butterfinger Winner", "Charcuterie Dips", "Low Sugar", "High Fiber", "Mccormick World Sides", "Dole Easy Appetizers", "Mccormick Holiday Sides", "Dole Desserts", "Kings Hawaiian Roll Sliders", "Kings Hawaiian Finger Foods", "Dr African Cuisine", "Latin American", "Vegetarian", "Easy", "Brunch", "Sides", "Deep Fry", "Game Day", "Happy Hour", "Weeknight", "Tasty Junior Cookbook", "Hand Mixer", "Oven", "Slow Cooker", "Indulgent Sweets", "Mashup", "Pan Fry", "Cake Pan", "Colander", "Lollipop Sticks", "Paper Napkins", "Plastic Utensils", "Spatula", "Zipper Freezer Bags", "Cooking Kit", "Mixing Bowl", "Offset Spatula", "One Top Friendly", "One Top App Seafood", "One Top App Sides", "Chop Champ", "Holiday Cookie Recipe", "Holiday Cookie Howto", "Caribbean", "Qfp Baking", "Eko Video", "Best Of Tasty", "Srsly Sauv Blanc", "Tasty Ewd Fifteen", "Almond Joy", "Peppermint Pattie", "Raspberry Rose", "Nynm Meal Prep", "St Patrick S Day", "Passover", "Tasty Ewd Comfort", "South African", "West African", "Lebanese", "Puerto Rican", "Soul Food", "Venezuelan", "Mccormick Ugc One Pot Others", "Summer Eat", "Summer Holiday", "Fourth Sides", "Shoppable Recipes Meal Prep", "Uber Game Day Ribs", "Uber Game Day Sliders", "Thanksgiving Vegetarian", "Butterfinger Runner Up Cookies", "Butterfinger Runner Up Bark", "Keto", "Dole Morning Starters", "Mccormick Holiday Desserts", "Homemade Holiday", "Kings Hawaiian Delectable Dips", "Capeverde African Cuisine", "Trinidad African Cuisine", "Jamaica African Cuisine", "Brazil African Cuisine", "Pr African Cuisine", "British", "Italian", "Seafood", "Vegan", "Christmas", "Grill", "Steam", "Cast Iron Pan", "No Bake Desserts", "Cupcake Pan", "Ice Cube Tray", "Paper Bowls", "Pie Dish", "Wax Paper", "Whisk", "Wooden Spoon", "Baking Cups", "Cutting Board", "Fish Spatula", "Liquid Measuring Cup", "One Top App Main Feed", "One Top App Eggs", "Pescatarian", "Schwartz Seasoned Pro", "Sponsored Recipe", "Oh So Rose", "Tasty Ewd Healthy", "Tasty Ewd Fall", "Walmart Plus Holiday 2020", "Holiday Treats", "3 Musketeers", "Tasty Dinner Kits", "Tasty Holiday Christmas", "Tasty Holiday Snacks", "Frank S Chicken Bites", "Frank S Cheesy Apps", "Nynm Desserts", "Spring Drink", "Spring Kitchen", "Budget 10", "Mothers Day", "Ethiopian", "Kenyan", "Taiwanese", "Persian", "Peruvian", "Cuban", "Mccormick Ugc One Pot Winners", "Uber Game Day Appetizers", "Thanksgiving Classics", "Thanksgiving Slow", "Franks Nachos", "Charcuterie Tips", "Tasty Charcuterie Quizzes", "Low Calorie", "High Protein", "Low Fat", "Mccormick World Hearty", "Juneteenth", "Rainbow", "Dole Crowd Pleasers", "Mccormick Holiday Drinks", "Mccormick Holiday Appetizers", "Dole Snacks", "Dole Beverages", "Kings Hawaiian Savory Wings", "Ethiopia African Cuisine", "Ghana African Cuisine", "Kenya African Cuisine", "Haiti African Cuisine", "Cuba African Cuisine", "West Africa African Cuisine", "French", "Greek", "Indian", "Japanese", "Korean", "Mexican", "Thai", "Low Carb", "Fourth Of July", "Breakfast", "Desserts", "Dinner", "Date Night", "Casual Party", "Tasty Cookbook", "Fall", "Spring", "Summer", "Fusion", "Blender", "Wok", "Meal Prep", "Special Occasion", "Bread Pan", "Ice Cream Scoop", "Oven Mitts", "Paper Cups", "Plastic Wrap", "Pyrex", "Sauce Pan", "Saute Pan", "Tongs", "Zipper Storage Bags", "Dry Measuring Cups", "Epoca Walmart", "One Top App Meat", "One Top App Grains", "One Top App Steak", "Asian Pacific American Heritage Month", "Pride Month", "Club House Seasoned Pro", "Tastyjunior", "Mccormick Easy Dinner", "Beyond Red Blend", "Hershey S", "Lil Brut", "Perf Pinot Noir", "Tasty Holiday Thanksgiving", "Tasty Holiday Hanukkah", "Nynm Money", "Nynm Expert", "Nynm Instant Pot", "Lunar New Year", "Mc Breakfast Easy", "Tips Viral", "Tips Culinary", "Spring Sides", "Jamaican", "Mccormick Ugc One Pot Slow", "Fourth Eat", "Latinx Heritage Month", "Uber Game Day Dips", "Thanksgiving Sips", "Butterfinger Other Recipes", "Charcuterie Recipes", "Charcuterie Appetizers", "Charcuterie Breakfast", "Under 15 Minutes", "Under 45 Minutes", "Blue", "Red", "Pink", "Green", "Dole Hearty Meals", "Cuisines", "Kings Hawaiian Desserts", "Southernus African Cuisine", "East Africa African Cuisine"]

    const [recipes,setRecipes]= useState([])
    const [tag, setTag] = useState("under_30_minutes")

    const [search, setSearch] = useState("")


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '331e2e5528msh359af8eba556c39p1f4f97jsnc49ba6e5c8b1',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };
        
        // fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`, options)
        fetch(`http://localhost:4000/recipes`, options)
            .then(response => response.json())
            .then(response => setRecipes(response))
        //     .catch(err => console.error(err));
    }, [tag])

    function updateTag(newTag) {
        // alert(newTag)
        setTag(newTag)
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
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
            </nav>
            <div className="main">
                <SearchBar updateTag={updateTag} tags={tagsToDisplay} />
                <div className="recipes">
                    {
                        recipes.map((recipe , index)=>{
                            return  <Recipe key={index} recipe={recipe} />
                        })
                    }
                </div>
            </div>
        </>
        
    )
 }

 export default Recipes;