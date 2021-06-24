import React from "react";
import AboutMe from "../components/About/AboutMe";

function Home() {
    return (
    <main>           
        <AboutMe />
    
        <section class="skills" id="skills">
            <div class="skills-header">
                <h3>Skills</h3>
            </div>
            <div class="skills-ids">
                <div>
                    <i class="fab fa-html5 fa-8x"></i>
                    <h4>HTML5/CSS</h4>
                    <p>Bootstrap, Materialize</p>
                </div>
                <div>
                    
                    <i class="fas fa-database fa-8x"></i>
                    <h4>Databases</h4>
                    <p>MongoDB, MySQL</p>
                </div>
                <div>
                    <i class="fab fa-js-square fa-8x"></i>
                    <h4>JavaScript</h4>
                    <p>Express.js, jQuery, Node.js, React</p>
                </div>
            </div>
        </section>
    </main>
    )
};

export default Home;