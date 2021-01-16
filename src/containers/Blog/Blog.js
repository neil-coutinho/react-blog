import React, { Component } from 'react';
import './Blog.css';

import Posts from "../../components/Posts/Posts";


class Blog extends Component {

    constructor(props) {
        super(props)

    }

   
 
   
    render () {


        


        return (
            <div>
                <Posts />
            </div>
        );
    }
}

export default Blog;