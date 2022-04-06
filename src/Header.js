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
            <a href="#" class="fa fa-facebook" ></a>
            <a href="#" class="fa fa-twitter" ></a>
            <a href="#" class="fa fa-google" ></a>
            <a href="#" class="fa fa-linkedin" ></a>
          </div>
        </div>
      </header>
      <div className='row text-center'><h1 id="Grace_news_id">Grace News</h1></div>
      <div className='row text-center'><p >Lorem ipsum dummy fames ac ante text</p></div>
      <div className='row'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid ">
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News & Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fashion & Lifestyle</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Business & Economy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Healthy Life</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact us</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;  