import React from "react";
import Homepageimg from "../images/homepageimage.png";
import Footer from "./footer";
import Header from "./header";

const Homepage = () =>{
    return(
        <div className="homepage">

            <Header />

            <div className="homepageContent">
                <div id="main"> An all in one job market place</div>
                <div id="sub">Bringing all job vacancies to one place</div>
                <div className="findJobBtn"> Get Started </div>
                <div style={{ margin:'0 5%'}}>
                    <img src={Homepageimg} alt="homepage Logo" style={{ width:'300px'}}/>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default Homepage;