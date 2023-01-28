import React from "react";
function SearchBar ({updateTag, tags}){
    return (
        <div className="search">
        {
            tags.map((tag, index) => {
                return <li onClick={(e) => {
                    updateTag(e.target.textContent.split(" ").join("_").toLowerCase())
                } } key={index}>{tag}</li>
            })
        }
        </div>
    )
}

export default SearchBar;