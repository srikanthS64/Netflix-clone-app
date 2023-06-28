import React from "react";
import "./assets/Banner.css";


function Banner () {
    return (
        <header className="Banner">
            <div className="Banner_contents">
                 <h1 className="Banner_tittle">Unlimited movies, TV shows and more</h1>
                 <h3>Watch anywhere. Cancel anytime.</h3>
                 <p>Ready to watch? Enter your email to create or restart your membership.</p>
                 <div className="email_signup">
                    <form>
                        <input type="email" placeholder="Email Address" required></input>
                        <button type="submited">Get started</button>
                    </form>
                 </div>
                

            </div>
        </header>
    )
};


export default Banner;  