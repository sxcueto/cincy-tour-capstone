import React from "react";
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
const About = () => {
    return (

        //navbar to be added

        //section one about landing page
        <div className="container">
            <section id="section-one">
                <h2 className="about-header">Who dey?</h2>
                <a href="/about#section-two">
                <FaArrowDown />
                </a>
            </section>

            {/* section two: info about Cincy */}
            <section id="section-two">
            <a href="/about#section-one">
                <FaArrowUp />
                </a>
                <h3>Cincinnati</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque.</p>
                {/* dice for fun fact generator will go here */}
                <a href="/about#section-three">
                <FaArrowDown />
                </a>
            </section>

            {/* //section three: info about group */}
            <section id="section-three">
            <a href="/about#section-two">
                <FaArrowUp />
                </a>
                <h3>Capstone Team</h3>

                <img src="/" alt="temp" />
                <h5>Eliane Bettocchi</h5>
                {/* insert social icons */}

                <img src="/" alt="temp" />
                <h5>Stephanie Cueto</h5>
                {/* insert social icons */}

                <img src="/" alt="temp" />
                <h5>Robert Head</h5>
                {/* insert social icons */}



                {/* footer to be added*/}
            </section>

        </div>
    )
}
export default About;
