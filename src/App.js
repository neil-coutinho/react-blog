import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">New Post</a></li>
          </ul>
          <Blog />
        </div>
      </Router>
     
    );
  }
}

export default App;
