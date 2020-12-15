import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";

class Blog extends Component {

    constructor(props) {
        super(props)

       this.state = {
           posts: [],
           selectedPost: null
       }
    }

   async componentDidMount() {

        const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({posts})
    }
 
    onPostClick(id) {
        this.setState({selectedPost: id})
    }

    render () {


        const posts = this.state.posts.map(({title}, index) => <Post title={title} key={index} onClickHandler={() => this.onPostClick(index)}/>);


        return (
            <div>
                <section className="Posts">
                   { posts }
                </section>
                <section>
                    <FullPost postId={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;