import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <div className="heading"><h2>Welcome to Star Wars</h2></div>
               <hr />
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;