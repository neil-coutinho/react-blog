import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import NewPost from "./components/NewPost/NewPost";
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";



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

          <Route  path="/" exact component={Blog}></Route>
          <Route  path="/new-post" component={NewPost}></Route>
        </div>
      </Router>
     
    );
  }
}

export default App;
