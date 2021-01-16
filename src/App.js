import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/AsyncComponent";

const NewPostLazy = asyncComponent(() => {
    return import('./components/NewPost/NewPost');
});


class App extends Component {

 

  render() {
    console.log({NewPostLazy})
    return (
      <Router>
         <div className="App">
          
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink exact to="/new-post" activeStyle={{
              color: 'red'
            }} activeClassName="activeClass">New Post</NavLink></li>
          </ul>
          {/* <Blog /> */}
          <Switch>
          <Redirect from="new" to="new-post"></Redirect>
            <Route  path="/new-post" component={NewPostLazy}></Route>
            <Route  path="/posts"  component={Blog}></Route>
            <Route  path="/"  component={Blog}></Route>
           

           
           
           
          </Switch>
          
        </div>
      </Router>
     
    );
  }
}

export default App;
