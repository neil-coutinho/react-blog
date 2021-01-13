import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
//import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";
import Posts from "../../components/Posts/Posts";


class Blog extends Component {

    constructor(props) {
        super(props)

    }

   
 
   
    render () {


        


        return (
            <div>
                <Posts />



                {/* <section className="Posts">
                   { posts }
                </section>
                <section>
                    <FullPost postId={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;