import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
    
  {/* Masthead*/}
  <header className="masthead ">
    <div className="container-fluid px-4 px-lg-5 h-100">
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
          <a className="portfolio-box" href="/artsmusic" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1KI7zlpBG8AX7tEhREiB8AQjttZjNQr3c" alt="arts and music" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">ARTS & MUSIC:</div>
              <div className="project-name">museums, art galleries, concert halls, theatre, shows</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="#" rel="noopener noreferrer" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1h4OQXJAqD55vBM7dbI_0RIBfU4V7eF2C" alt="family fun" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">FAMILY FUN:</div>
              <div className="project-name">parks, games, entertainment for children</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="#" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1SYjAps7nUzu7ibU_PmNDso-hjaEuuAou" alt="food and drink" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">FOOD & DRINK:</div>
              <div className="project-name">restaurants, markets, breweries, pubs, night life</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="#" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1rBc_lu75ywji4jpJ1Nr_sDC7Oe0rxlmi" alt="history and heritage" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">HERITAGE & HISTORY:</div>
              <div className="project-name">museums, monuments, houses, villages</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="#" title="">
           <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=14GSBgAMF6AZY2iMd-hrMBYirkird01T3" alt="sports" /> 
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">SPORTS:</div>
              <div className="project-name">games, competions, recreation</div>
            </div>
            </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="#" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1yAM5l1O76fwtjDluHP-lNW16ky8Jtxqu" alt="outdoors" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">OUTDOORS:</div>
              <div className="project-name">zoo and botanical garden, parks, swimming, sightseeing</div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  </div>
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1cs4ypfp8uS5oDm_MBwEhsg6oKGsrQS7I"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="secondary">FEATURED ATTRACTIONS</Button>{' '}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1gHLBmuq_94VUm_29IrBg7RxONXKiENV6"
          alt="Second slide"gi
        />

        <Carousel.Caption>
        <a href="https://www.theabercrumbiegroup.com/blackmusic" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1jr18bKnKTxrM0XZrnwicjPVS5jEWHEkm"
          alt="Third slide"
        />

        <Carousel.Caption>
        <a href="https://www.artonvinecincy.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://drive.google.com/uc?export=view&id=1cs4ypfp8uS5oDm_MBwEhsg6oKGsrQS7I" className="d-block w-100" alt="highlights" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div></div>
          <div className="carousel-item">
            <img src="https://drive.google.com/uc?export=view&id=1gHLBmuq_94VUm_29IrBg7RxONXKiENV6" className="d-block w-100" alt="highlights" />
            <div className="carousel-caption d-none d-md-block">
              <a href="https://www.theabercrumbiegroup.com/blackmusic" target="_blank" rel="noopener noreferrer"><button className='button'>VISIT WEBSITE</button></a>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://drive.google.com/uc?export=view&id=1jr18bKnKTxrM0XZrnwicjPVS5jEWHEkm" className="d-block w-100" alt="highlights" />
            <div className="carousel-caption d-none d-md-block">
            <a href="https://www.artonvinecincy.com/" target="_blank" rel="noopener noreferrer"><button className='button'>VISIT WEBSITE</button></a>
            </div>
          </div>
        <div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div> */}
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
      </div>
      </div>
  </footer>

</div>
  )
}

export default Home