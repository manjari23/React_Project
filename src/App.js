import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';

function App() {
  
  return (
    <div >
      <Router>
      <Switch>
        <Route path='/header' component={ Header } />
       
      </Switch >
      </Router>
    </div>
  );
}

export default App;
