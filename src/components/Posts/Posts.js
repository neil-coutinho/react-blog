
import React, {Component} from "react";
import axios from "axios";
import Post from "../Post/Post";
import {Link, withRouter} from "react-router-dom";
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
    newPost = () => {
        console.log(this.props)
        //this.props.history.push('new-post')
        this.props.history.push({
            pathname: 'new-post'
        })
    }

    render() {
        const posts = this.state.posts.map(
            ({title, id}, index) => 
                <Link key={id} to={`posts/${id}`}>
                     <Post title={title}/>
                </Link>
               
            );
        return (
        <section>
            <button onClick={this.newPost}>New Post</button>
            <div  className="Posts">
            { posts }
            </div>
           
        </section>)
    }
}

export default withRouter(Posts)