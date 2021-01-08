import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import NewPost from "./components/NewPost/NewPost";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import FullPost from './components/FullPost/FullPost';



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
            <Route  path="/" exact component={Blog}></Route>
            <Route  path="/new-post" component={NewPost}></Route>
            <Route  path="/posts/:id" component={FullPost}></Route>
          </Switch>
          
        </div>
      </Router>
     
    );
  }
}

export default App;
