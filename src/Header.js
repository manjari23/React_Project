import React from 'react';
import './Header.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Header() {

  return (
    <>
      <header className='header'>
        <div className="row">
          <div className="col-1" id='Trendings_div'>Trendings</div>
          <div className='col-6' id=''>Please find the latest news update here!</div>
          <div className='col-4' id=''>  
           <a href="#" class="fa fa-facebook" style={{ color: 'white',margin:"5px" }}></a>
            <a href="#" class="fa fa-twitter" style={{ color: 'white',margin:"5px"  }}></a>
            <a href="#" class="fa fa-google" style={{ color: 'white',margin:"5px"  }}></a>
            <a href="#" class="fa fa-linkedin" style={{ color: 'white',margin:"5px"  }}></a>
            </div>


        </div>
      </header>
    </>
  );
}

export default Header;  