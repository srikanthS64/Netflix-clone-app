import React from "react";
import "./assets/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Features from "./Features";
import Features2 from "./Features2";
import Features3 from "./Features3";
import Questions from "./Questions";
import Footer from "./Footer";

function HomeScreen () {
    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Features />
            <Features2 />
            <Features3 />
            <Questions />
            <Footer />
        </div>
    );
}

export default HomeScreen;