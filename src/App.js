import {React} from 'react';
import './App.css';
import Home from './viewPages/Home';
import Admin from './viewPages/Admin';

import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
<Router>
<Switch>
<Route exact path ="/" component={Home}/>
<Route exact path ="/Admin" component={Admin}/>
</Switch>
</Router>
    
  );
}

export default App;
