import { React, useEffect, useState } from 'react';


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";





function Header() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://inshortsapi.vercel.app/news?category=business')
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
      <div className='row d-flex justify-content-center'>

        {
          data.map((item, index) => {
            return (
              <div className='col-4'>
                <Card >
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                    <Button variant="primary" url={item.url}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          }
          )
        }
      </div>
    </>
  );
}

export default Header;  