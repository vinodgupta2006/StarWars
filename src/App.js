import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Pages/Search';
import Login from './Pages/Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <div class="heading"><h2>Welcome to Star Wars</h2></div>
               {/* <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul> */}
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/Login' component={Login} />
                  {/* <Route exact path='/' component={Search} /> */}
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;