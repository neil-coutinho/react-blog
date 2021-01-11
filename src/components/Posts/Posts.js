
import React, {Component} from "react";
import axios from "axios";
import Post from "../Post/Post";
import {Link, withRouter, Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {

    state = {
        posts: [],
       //selectedPost: null,
    }

    // async componentDidUpdate() {
    //     console.log(this.props, 'on update')
    //     let {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     posts = posts.slice(0,5);
    //     this.setState({posts});
    // }

    async componentDidMount() {
        console.log(this.props, 'on mount')
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
        console.log(this.props.match)
        const path = `${this.props.match.url}/:id`;
        const posts = this.state.posts.map(
            ({title, id}, index) => 
                <Link key={id} to={`/posts/${id}`}>
                     <Post title={title}/>
                </Link>
               
            );
        return (
        <section>
            <button onClick={this.newPost}>New Post</button>
            <div  className="Posts">
            { posts }
            </div>
           <p>{path}</p>
            <Route  path="/posts/:id" component={FullPost} ></Route>
        </section>)
    }
}

export default withRouter(Posts)