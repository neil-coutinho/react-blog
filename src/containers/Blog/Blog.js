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

        let {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = posts.slice(0,5);
        this.setState({posts})
    }
 
    onPostClick(id) {
        this.setState({selectedPost: id})
    }

    render () {


        const posts = this.state.posts.map(({title, id}, index) => <Post title={title} key={id} onClickHandler={() => this.onPostClick(id)}/>);


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