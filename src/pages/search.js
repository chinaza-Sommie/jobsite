import React from "react";
import Homepageimg from "../images/homepageimage.png";
import Footer from "./footer";
import Header from "./header";

const Homepage = () =>{
    return(
        <div className="homepage">

            <Header />

            <div className="homepageContent">
                <div id="main"> Your next role is one Search away </div>
                <div id="sub">Search Now</div>
                
                <form id='searchForm'>
                    <div className='inputFields'>
                        <input type='text' placeholder=' Enter role'/>
                        <input type='text' placeholder=' Enter location'/>
                    </div>

                    <input type='submit' value='search' />
                </form>

                <div className='searchTerms'>
                    <div>Frontend Engineer</div>
                    <div>Software Engineer</div>
                    <div>AI Engineer</div>
                </div>
            </div>

            <div style={{padding:'0 5%', margin:'5%'}}>
                <div className='eachjob-container' style={{}}>
                    <div id='datePosted'> Posted 3 days ago</div>
                    <div className='jobtitle'> Python Developer </div>
                    <div id='company'> OpenAI </div>
                    <div id='location'> London, UK</div>
                    <ul>
                        <li>30,000 - 40,000</li>
                        <li>python</li>
                        <li>kubernetes</li>
                        <li>Docker</li>
                    </ul>
                    <div className='button'> Apply Now </div>
                </div>
            </div>
            {/* <Footer/> */}
            
        </div>
    )
}

export default Homepage;