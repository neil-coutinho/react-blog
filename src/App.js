import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
          <Blog />

          <Route  path="/" exact>/</Route>
          <Route  path="/new-post">/new-post</Route>
        </div>
      </Router>
     
    );
  }
}

export default App;
