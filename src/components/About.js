import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub, FaDiceD20 } from 'react-icons/fa';
const About = () => {
    return (
        <div>
            
 {/* Navigation*/}
 <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3" id="mainNav">
    <div className="container-fluid">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4"><a className="navbar-brand" href="#page-top"><h2><b>CINCY TOURS</b></h2></a></div>
         <div className="col-lg-3"><a className="nav-link" href="/contact"><b>CONTACT</b></a></div>
          <div className="col-lg-3"><a className="nav-link" href="/about"><b>ABOUT</b></a></div>
          <div className="col-lg-1"><i className="bi bi-search"></i></div>
          <div className="col-lg-1"><i className="bi bi-brightness-high"></i></div>
      </div></div></div>
    </div>
  </nav>
            {/* //section one "about" landing page */}
            <section id="section-one">
                <header className="jumbotron jumbotron-fluid">
                    <div className="container-fluid text-center">
                        <br />
                        <h1 className="display-3" id="about-header">Who dey?</h1>
                        <br />
                        <a href="/about#section-two">
                            <FaArrowDown />
                        </a>
                    </div>
                </header>
            </section>
<br />
            { /* section two: info about Cincy */}
            <section id="section-two">
                <div className="container-fluid text-center" id="content-two">
                    <a href="/about#section-one">
                        <FaArrowUp />
                    </a>
                    <br />
                    <h2>Cincinnati</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque.</p>
                    <br />
                    {/* {/* dice for fun fact generator will go here (add sound effect?)  */}
                    <FaDiceD20 /> <br />
                    <a href="/about#section-three">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
<br /> <br /> <br />
            {/* //section three: info about group */}
            <section id="section-three">
                <div className="row row-cols-sm g-0 container-fluid text-center" id="card-group">
                    <a href="/about#section-two">
                        <FaArrowUp />
                    </a>
                    <h2>Capstone Team</h2>

                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Eliane Bettocchi</h5>
                            <br />
                            <div className="container" id="social">
                                <FaLinkedin />
                                <FaGithub />
                                <FaLink />
                            </div>
                        </div>
                    </div>
                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Stephanie Cueto</h5>
                            <br />
                            <div className="container" id="social">
                            <FaLinkedin />
                            <FaGithub />
                            <FaLink />
                        </div>
                        </div>
                    </div>

                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Robert Head</h5>
                            <br />
                            <div className="container" id="social">
                                <FaLinkedin />
                                <FaGithub />
                                <FaLink />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <br />
        <br />

            <footer>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-4 small text-muted">
                            CINCY TOURS <br />
                            555 Bubble St <br />
                            Blue Ash 45222 <br />
                            513-555-5555
                        </div>
                        <div className="col-4 small text-muted">
                            CONTACT <br />
                            ABOUT <br />
                            SITEMAP <br />
                            ACCESSIBILITY <br />
                        </div>
                        <div className="col-4 small text-muted">
                            Made by KableTeam <br />
                            © 2023
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default About;
