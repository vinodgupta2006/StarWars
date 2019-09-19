import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Welcome to Star Wars</h2>
               {/* <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul> */}
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/Login' component={Login} />
                  {/* <Route exact path='/' component={Home} /> */}
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;