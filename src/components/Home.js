import { React, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

import './Home.css';
import Loader from './Loader.js';



function Home(props) {

  const location  = useLocation();
  
  // const searchParams = new URLSearchParams(location.search);
  const category=  location.pathname
  console.log(category, 'category')
  const [NewsData, setNewsData] = useState([]);
  const [spinner, setspinner] = useState(false);



  useEffect(() => {
    const url = `https://inshortsapi.vercel.app/news?category=${location.pathname}`
    console.log(url)
    fetch('https://inshortsapi.vercel.app/news?category=all')
    
      .then((res) => res.json())
      .then((result) => {
        setNewsData(result.data);
        setspinner(true);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>

      <div className='wrapper'>



        <div className='row text-center'><h1 id="Grace_news_id">Grace News</h1></div>
        <div className='row'>
          <nav className="navbar navbar-expand-md navbar-light ">
            <div className="container-fluid ">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Trending">News & Trending</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Fashion_and_Lifestyle">Fashion & Lifestyle</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Business">Business & Economy</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Healthy_Life">Healthy Life</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact_us">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />
        <br />
        <div className='container'>
          <div className='wrapper d-flex justify-content-center'>
            {spinner ? <div className='row d-flex justify-content-center'>
              {
                NewsData.map((item, index) => {
                  return (
                    <div className='col-12  col-lg-4  mt-4' key={index} >
                      <Card className="card" style={{ borderStyle: 'solid', borderColor: 'black' }}>
                        <Card.Img variant="top" src={item.imageUrl} className='cardimg' />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text className='Card_text'>
                            {item.content}
                          </Card.Text>
                          <a href={item.url}>Learn more...</a>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                }
                )
              }
            </div> : <Loader />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;  