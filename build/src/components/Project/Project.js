import React from "react";
import Cards from "./Cards"
import { Card } from 'semantic-ui-react';

function Project(){
    const projectInfo = [
        {
            name: 'Covid Woke',
            image: '',
            description: 'COVID Woke seeks to elevate the public information environment by presenting necessary information that is accessible and easy to understand.',
            repo: '/CovidWoke',
            app: 'https://mkotte.github.io/COVIDwoke/'
        },
        {
            name: 'eCommerce Back-End',
            image: '',
            description: 'Back end, E-Commerce project using Express.js, MySQL and Sequelize.',
            repo: '/eCommerce-back-end',
            app: 'none'
        },
        {
            name: 'Employee Tracker',
            image: '',
            description: 'CLI application using MYSQL, Express.js and Node.js used to view and manipulate an employee database.',
            repo: '/Employee-Tracker',
            app: 'none'
        },
        {
            name: 'Team Profile Generator',
            image: '',
            description: 'CLI application using Node.js used to create an generated Team Profile html page.',
            repo: '/Team-Profile-Generator',
            app: 'none'
        },
        {
            name: 'Weather Dashboard',
            image: '',
            description: 'Simple weather dashboard unsing fetch working with OpenWeather APIs.',
            repo: '/homework06',
            app: 'https://mkotte.github.io/homework06/'
        },
        {
            name: 'Budget Tracker',
            image: '',
            description: 'PWA budget tracker deployed to Heroku using MongoDB Atlas, Node.js, and Express featuring offline accessibility.',
            repo: '/CovidWoke',
            app: 'https://ancient-everglades-37448.herokuapp.com/'
        }]

    return(
        <>
            <div id="project-wrapper">
                <Cards />
            </div>
        </>
    )
};

export default Project;