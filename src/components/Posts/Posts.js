
import React, {Component} from "react";
import axios from "axios";
import Post from "../Post/Post";
import {Link} from "react-router-dom";
class Posts extends Component {

    state = {
        posts: [],
       //selectedPost: null,
    }

    async componentDidMount() {

        let {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = posts.slice(0,5);
        this.setState({posts});
    }

    // onPostClick(id) {
    //     this.setState({selectedPost: id})
    // }


    render() {
        const posts = this.state.posts.map(
            ({title, id}, index) => 
                <Link key={id} to={`posts/${id}`}>
                     <Post title={title}/>
                </Link>
               
            );
        return (
        <section className="Posts">
            { posts }
        </section>)
    }
}

export default Posts