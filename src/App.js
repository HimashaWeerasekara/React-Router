import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Home from './Home';
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
<Router> 
   <div className="App">
     <Route>
        <NavBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
     </Route>
    </div>
  </Router>
   
  );
}

export default App;
