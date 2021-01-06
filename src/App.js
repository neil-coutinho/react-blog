import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import NewPost from "./components/NewPost/NewPost";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={{
              pathname: 'new-post'
            }}>New Post</Link></li>
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
