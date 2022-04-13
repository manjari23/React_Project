import { React, useEffect, useState } from 'react';
import { useHistory ,Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Home.css';
import Loader from './Loader.js';



function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const goToReceiver = () => {
      history.push("/Detail");
    }
  

  useEffect(() => {
    fetch('https://inshortsapi.vercel.app/news?category=all')
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setLoading(true);
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
  
    <div className='wrapper'>
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
  
      <div className='container'>
    
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
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Trending">News & Trending</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fashion_and_Lifestyle">Fashion & Lifestyle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Business" onClick={goToReceiver}>Business & Economy</Link>
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
      <div className='wrapper d-flex justify-content-center'>
      { loading ? <div className='row d-flex justify-content-center'>
       {
          data.map((item) => {
            return (
              <div className='col-12  col-lg-4  mt-4' >
                <Card className="card" style = {{borderStyle:'solid',borderColor:'black'}}>
                  <Card.Img variant="top" src={item.imageUrl} className='cardimg'/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text  className='Card_text'>
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
      </div>: <Loader/>}
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;  