import React, { useEffect, useState } from "react";
import "./assets/Nav.css";


function Nav () {
    const [show, handleshow] = useState(false);

    const transitionNavBar = () => {
        if (window.scroll > 100) {
            handleshow(true);
        }else {
            handleshow(false);
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll",transitionNavBar);
        return() => window.removeEventListener("scroll",transitionNavBar);
    }, []);
    return (
        <div className={'nav ${show && "nav_black"}'}>
            <div className="nav_contents">
            <img 
            className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" 
                alt=""
            />
            <div>
            <button className="lang_btn">English <img src="./images/down-icon.png"/></button>
            <button>Sign In</button>
            </div>


            </div>
            
        </div>
    )
};

export default Nav;