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
        <Route path='/Detail' component={ Detail } />
        <Route path='/Home' component={ Home } />
        
       
      </Switch >
      </Router>
    </div>
  );
}

export default App;
