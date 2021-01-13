import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import NewPost from "./components/NewPost/NewPost";
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";
import FullPost from './components/FullPost/FullPost';

import asyncComponent from "./components/AsyncComponent/AsyncComponent";
const NewPostLazy = asyncComponent(() => {
    return import('./components/NewPost/NewPost');
});


class App extends Component {

 

  render() {
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
