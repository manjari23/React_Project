import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from './components/Detail';
import Home from './components/Home';

function App() {
  
  return (
    <div >
      <Router>
      <Switch>
        
        <Route exact path='/' ><Home key= 'General' category= "all" /></Route>
        <Route exact path='/Trending' ><Home key= 'Trending' category= "Trending" /></Route>
        <Route exact path='/Fashion_and_Lifestyle' ><Home key= 'Fashion_and_Lifestyle' category= "Fashion_and_Lifestyle" /></Route>
        <Route exact path='/Business' ><Home key= 'Business' category= "Business" /></Route>
        <Route exact path='/Healthy_Life' ><Home key= 'Healthy_Life' category= "Healthy_Life" /></Route>
        <Route exact path='/Contact_us' ><Home key= 'Contact_us' category= "Contact_us" /></Route>

        
       
      </Switch >
      </Router>
    </div>
  );
}

export default App;
