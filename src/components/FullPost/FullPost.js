import React, { Component } from 'react';
import axios from "axios";
import './FullPost.css';

class FullPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null,
            

        }
    }

    async componentDidUpdate() {
       if(this.props.postId) {

        const currentPost = this.state.post;

        if(!currentPost || (currentPost && currentPost.id != this.props.postId)) {
            const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`);
            this.setState({post})
        }
       
            
          
        
       
         

       }
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;

        if(this.props.postId) {

            let data = this.state.post;

            post = <p style={{textAlign: "center"}}>LOADING</p>;

            if(data) {
                post = (
                    <div className="FullPost">
                        <h1>Title</h1>
                        <p>Content</p>
                        <div className="Edit">
                            <button className="Delete">Delete</button>
                        </div>
                    </div>
        
                );
            }

           
        }
       
        return post;
    }
}

export default FullPost;