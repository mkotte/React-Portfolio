import React from "react";
import Overview from "./Overview.js";
import Bio from "./Bio.js"

function AboutMe(){
    return(
    <>
        <section class="about-me">
            <Overview />
            <Bio />
        </section>  

        <section>
            <div class="about-me-lists">
                <div class="interests">
                    <h3>Interests</h3>
                    <ul>    
                        <li>Software Engineering</li>
                        <li>Web Developement</li>
                        <li>Cloud Computing</li>
                        <li>Artificial Intelligence</li>
                        <li>Internet of Things (IoT)</li>
                        <li>CyberSecurity</li>
                    </ul>
                </div>  
                <div class="education">
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <i class="fas fa-graduation-cap"></i>
                            <p class="program">Fullstack Web Developement Bootcamp</p>
                            <p class="school">The Ohio State University: College of Engineering</p>
                        </li>
                        <li>
                            <i class="fas fa-graduation-cap"></i>
                            <p class="program">B.S. Computer Science, 2019-Present</p>
                            <p class="school">Western Governors University</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
    )
};

export default AboutMe;