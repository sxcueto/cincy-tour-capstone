import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
    return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3" id="mainNav">
      <div className="container-fluid">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
          <a className="navbar-brand" href="/"><h2><b>CINCY TOURS</b></h2></a> 
          </div><div className="col-lg-2">
          <NavDropdown id="nav-dropdown-dark-example"
              title="Browse Categories"
              menuVariant="dark">
              <NavDropdown.Item href="/artsmusic">Arts & Music</NavDropdown.Item>
              <NavDropdown.Item href="/familyfun">Family Fun</NavDropdown.Item>
              <NavDropdown.Item href="/fooddrink">Food & Drink</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Heritage & History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Outdoors</NavDropdown.Item>
            </NavDropdown>
          </div>
           <div className="col-lg-3"><a className="nav-link" href="/contact"><h4><b>CONTACT</b></h4></a></div>
            <div className="col-lg-3"><a className="nav-link" href="/about"><h4><b>ABOUT</b></h4></a></div>
            <div className="col-lg-1"><h4><i className="bi bi-search"></i></h4></div>
            <div className="col-lg-1"><h4><i className="bi bi-brightness-high"></i></h4></div>
        </div></div></div>
      </div>
    </nav>
    </div>
      )
    }
    
    export default Navbar