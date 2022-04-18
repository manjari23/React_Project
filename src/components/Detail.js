import { React, useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import { useParams} from "react-router-dom";






function Detail() {

  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch('https://inshortsapi.vercel.app/news?category=Business')
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
              <div className='col-4 mt-4'>
                <Card className='card'>
                  <Card.Img variant="top" src={item.imageUrl} className='cardimg'/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                   <a href={item.url}> Read more</a>
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

export default Detail;  