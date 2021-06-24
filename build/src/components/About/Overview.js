import React from "react";

function Overview(){
    return(
        <div class="about-me-overview">
                <img src="./profilePhotoSquare.jpeg" alt="headshot of C. Michael Kotte" class="float-left profile-photo"/>
                <h2>C. Michael Kotte</h2>
                <h3>Bootcamp Graduate & CS Student</h3>
                
                <div class="contact"> 
                    <section class="contact-me">
                            <ul>
                                <li>
                                    <a href="https://github.com/mkotte">
                                            <i class="fab fa-github-square fa-3x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:michaelkotte1@gmail.com">
                                            <i class="fas fa-envelope fa-3x"></i>
                                    </a>       
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/c-michael-kotte-85a662186/">
                                            <i class="fab fa-linkedin fa-3x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="./assets/resume/my_resume.PDF" target="./assets/resume/my_resume.PDF">
                                            <i class="fas fa-file-download fa-3x"></i>
                                    </a>
                                </li>
                            </ul>
                    </section>
                </div>              
            </div>);
};

export default Overview;