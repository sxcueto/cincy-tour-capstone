import React from 'react'
//New comment
const Home = () => {
  return (
    <div>
   <div>
  {/* another comment */}
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
          <a className="portfolio-box" href="" target="_blank" title="">
            <img className="img-fluid" src="portfolio/thumbnails/1.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="" target="_blank" rel="noopener noreferrer" title="">
            <img className="img-fluid" src="portfolio/thumbnails/2.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="" target="_blank" title="">
            <img className="img-fluid" src="portfolio/thumbnails/3.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="" target="_blank" title="">
            <img className="img-fluid" src="portfolio/thumbnails/4.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="" target="_blank" title="">
            <img className="img-fluid" src="portfolio/thumbnails/5.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="" target="_blank" title="">
            <img className="img-fluid" src="portfolio/thumbnails/6.jpg" alt="" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50"></div>
              <div className="project-name"></div>
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
          <h2 className="mt-0"></h2>
          <hr className="divider" />
          <p className="text-muted mb-5 text-center"></p>
          
        </div>
      </div>
    </div>
  </section>
  {/* comment */}
  {/* Footer*/}
  <footer className="bg-light py-5">
    <div className="container px-4 px-lg-5">
    <div className="small text-center text-muted">
      </div></div>
  </footer>
</div>

    </div>
  )
}

export default Home