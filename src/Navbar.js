import React from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate= useNavigate()
        return(
            <div className="form-space">
                        <div className="form-img">
                            <img src="https://cdn.pixabay.com/photo/2016/07/12/19/05/pancakes-1512834__340.jpg" alt="cookies"/>
                        </div>
                <form className="details" onSubmit={(e)=>{
                    e.preventDefault()
                    navigate("/recipes")
                }}>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> Enter Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
           
        )
    }


function Navbar(){


    const navigate = useNavigate()
    function handleSignup() {
        navigate("/signup")
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark  " data-bs-theme="dark">
                <div className=" items container-fluid">
                    <a className=" logo navbar-brand" href="/">Tasty plans</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className=" topbar navbar-nav">
                            <a className=" meals nav-link " aria-current="page" href="/">Home</a>
                            <a className=" meals nav-link" href="/recipes">Recipies</a>
                            <a className=" meals nav-link " href="/mealguides">MealGudies</a>
                            <div className="btn">
                                <div className=" bti d-grid gap-2 d-md-flex justify-content-md-end">
                                   <button className="btn btn-primary" type="button" onClick={handleSignup}>Sign Up</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar, Signup}