import React from 'react'

const Home = () => {
  return (
    <div>
   <div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container px-4 px-lg-5">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <a href="#page-top"><img width="40px" src="favicon.ico" alt /></a>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <a className="navbar-brand" href="#page-top">CINCY TOURS</a>
        <ul className="navbar-nav ms-auto my-2 my-lg-0">
          <li className="nav-item"><a className="nav-link" href="#about">CONTACT</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">ABOUT</a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container px-4 px-lg-5 h-100">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" id="masthead">
        <div className="col-lg-8 align-self-end">
        </div>
      </div>
    </div>
  </header>
  {/* Portfolio*/}
  <div id="portfolio">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://elianebettocchi.github.io/incorporais/" target="_blank" title="Incorporeal Ludonarratives">
            <img className="img-fluid" src="portfolio/thumbnails/1.jpg" alt="Incorporeal Ludonarratives" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Illustration, Game, Graphic &amp; Web Design</div>
              <div className="project-name">Incorporeal Ludonarratives</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://www.instagram.com/coletivodescolonia/" target="_blank" rel="noopener noreferrer" title="Decolonial Collective">
            <img className="img-fluid" src="portfolio/thumbnails/2.jpg" alt="Decolonial Collective" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Teaching</div>
              <div className="project-name">Decolonial Collective</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://www.google.com/url?q=https://drive.google.com/file/d/17r04moN5SNtrMTY2WN4XgyGUWaiptjqm/view?usp%3Dshare_link&sa=D&source=editors&ust=1674786484952749&usg=AOvVaw300WqFrd0C8z47ScwetaXQ" target="_blank" title="Terra Nova">
            <img className="img-fluid" src="portfolio/thumbnails/3.jpg" alt="Terra Nova" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Research</div>
              <div className="project-name">Terra Nova Minecraft Resource Pack</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://elianebettocchi.github.io/brdrums/" target="_blank" title="Brazilian Drums">
            <img className="img-fluid" src="portfolio/thumbnails/7.jpg" alt="Brazilian Drums" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Drum Kit with JavaScrpit</div>
              <div className="project-name">Brazilian Drums</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://www.instagram.com/designeculturadosjogosonline/" target="_blank" title="Concept Art classes">
            <img className="img-fluid" src="portfolio/thumbnails/5.jpg" alt="Concept Art classes" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Teaching</div>
              <div className="project-name">Concept Art classes</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://elianebettocchi.github.io/siara/" target="_blank" title="Siara">
            <img className="img-fluid" src="portfolio/thumbnails/6.jpg" alt="Siara" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">Research</div>
              <div className="project-name">Siara: poetic-critic design for a female character of League of Legends</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://elianebettocchi.github.io/petstore/" target="_blank" title="Pet Love">
            <img className="img-fluid" src="portfolio/thumbnails/9.jpg" alt="Pet Love" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">Web Design</div>
              <div className="project-name">Pet Love: project for a fictional pet shop</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://drive.google.com/drive/folders/1DVShqmK2TVRokmDtefn52fbJvCk1JOWI?usp=share_link" target="_blank" title="Decolonia Game Design Course">
            <img className="img-fluid" src="portfolio/thumbnails/8.jpg" alt="Decolonia Game Design Course" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">Teaching</div>
              <div className="project-name">Decolonial Game Design Honors Course at UC</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="https://elianebettocchi.github.io/funfacts/" target="_blank" title="BEFacts">
            <img className="img-fluid" src="portfolio/thumbnails/10.jpg" alt="BEFacts" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">Web Development</div>
              <div className="project-name">BRFacts: fun facts using React</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Contact*/}
  <section className="page-section" id="contact">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-12 text-center">
          <h2 className="mt-0">Contact</h2>
          <hr className="divider" />
          <p className="text-muted mb-5 text-center">I am open to work! Here is my <a href="https://drive.google.com/file/d/1-2h1OPynDkkXCQiPJFSauXFPy8tDLMIk/view?usp=share_link" target="_blank" rel="noopener noreferrer">RESUME</a>.</p>
          <div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciq-SO9TzYR2vWEewp0qzOWnzKR0m5QW1ffLJwC9famiw5HQ/viewform?embedded=true" width="100%" height={820} frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* comment */}
  {/* Footer*/}
  <footer className="bg-light py-5">
    <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright © 2023 - <a href="#">Eliane Bettocchi</a>
        <a href="https://www.linkedin.com/in/lilith/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BLV7adt43SzOdqzrqfb67Uw%3D%3D" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
      </div></div>
  </footer>
</div>

    </div>
  )
}

export default Home