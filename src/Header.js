import React from 'react';
import './Header.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Header() {

  return (
    <>
      <header className='header'>
        <div className="row text-center">
          <div className="col-1 text-right"></div>
          <div className="col-1 text-right" id='Trendings_div'>Trendings</div>
          <div className='col-8 text-center' id='header_col'>Please find the latest news update here!</div>
          <div className='col-2' >
            <a href="#" className="fa fa-facebook" ></a>
            <a href="#" className="fa fa-twitter" ></a>
            <a href="#" className="fa fa-google" ></a>
            <a href="#" className="fa fa-linkedin" ></a>
          </div>
        </div>
      </header>
      <div className='row text-center'><h1 id="Grace_news_id">Grace News</h1></div>
      <div className='row text-center'><p >Lorem ipsum dummy fames ac ante text</p></div>
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">News & Trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Fashion & Lifestyle</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Business & Economy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Healthy Life</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact us</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        {/* nav ends */}
        {/* card starts */}
        <div className='row'>
          </div>
      </div>
    </>
  );
}

export default Header;  