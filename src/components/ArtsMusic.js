import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
  return (
    <div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-3" id="mainNav">
    <div className="container-fluid">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-4"><a className="navbar-brand" href="/"><h2><b>CINCY TOURS</b></h2></a></div>
         <div className="col-lg-3"><a className="nav-link" href="/contact"><h4><b>CONTACT</b></h4></a></div>
          <div className="col-lg-3"><a className="nav-link" href="/about"><h4><b>ABOUT</b></h4></a></div>
          <div className="col-lg-1"><h4><i className="bi bi-search"></i></h4></div>
          <div className="col-lg-1"><h4><i className="bi bi-brightness-high"></i></h4></div>
      </div>
      </div>
      </div>
    </div>
  </nav>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1HwK89GrdGYYzEobGaNivJ7pTn69hZGwt"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="secondary">FEATURED ATTRACTIONS</Button>{' '}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1X60jHSz3fv2DwlVCfHM93hh1c4_ezT4g"
          alt="Second slide"
        />

        <Carousel.Caption>
        <a href="https://www.theabercrumbiegroup.com/blackmusic" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1xH_OYPRCfXAQXhPIFnLG4q2B61Qk7ut9"
          alt="Third slide"
        />

        <Carousel.Caption>
        <a href="https://www.artonvinecincy.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
   <div className="container-fluid bg-info">
    <div className="row">
      <div className="col-12 text-center">

    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        <h4>Browse Attractions:</h4> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://www.artworkscincinnati.org/public-art/murals/all-murals/" target="_blank">ArtWorks Murals</Dropdown.Item>
        <Dropdown.Item href="https://www.21cmuseumhotels.com/cincinnati/" target="_blank">21c Museum Hotel</Dropdown.Item>
        <Dropdown.Item href="https://www.americansignmuseum.org/" target="_blank">American Sign Museum</Dropdown.Item>
        <Dropdown.Item href="https://bradymusiccenter.com/" target="_blank">Andrew J Brady Music Center</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiarts.org/aronoff-center-home" target="_blank">Aronoff Center for the Arts</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiartmuseum.org/" target="_blank">Cincinnati Art Museum</Dropdown.Item>
        <Dropdown.Item href="https://cballet.org/" target="_blank">Cincinnati Ballet</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiarts.org/music-hall" target="_blank">Cincinnati Music Hall</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiopera.org/" target="_blank">Cincinnati Opera</Dropdown.Item>
        <Dropdown.Item href="https://www.contemporaryartscenter.org/" target="_blank">Contemporary Arts Center</Dropdown.Item>
        <Dropdown.Item href="https://freedomcenter.org/" target="_blank">National Underground Railroad Freedom Center</Dropdown.Item>
        <Dropdown.Item href="https://www.taftmuseum.org/" target="_blank">Taft Museum of Art</Dropdown.Item>
        <Dropdown.Item href="https://tafttheatre.org/" target="_blank">Taft Theatre</Dropdown.Item>
        <Dropdown.Item href="https://thecarnegie.com/" target="_blank">The Carnegie</Dropdown.Item>
        <Dropdown.Item href="https://www.visitcincy.com/" target="_blank">More options at Visit Cincy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    
    </div>
    </div>
   </div>

  {/* Footer*/}
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
      </div></div>
  </footer>

</div>
  )
}

export default Home