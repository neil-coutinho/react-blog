import React, { Component } from 'react';
import axios from "axios";
import './FullPost.css';
import { withRouter } from "react-router-dom";

class FullPost extends Component {

    constructor(props) {
        super(props);
        this.postId = this.props.match.params.id;
        this.state = {
            post: null,
            

        }

       
    }

    async componentDidMount() {
       
       if(this.postId) {

        const currentPost = this.state.post;

       

        if(!currentPost || (currentPost && currentPost.id != this.postId)) {
            const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
            this.setState({post})
        }
       
            
          
        
       
         

       }
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;

        if(this.postId) {

            let data = this.state.post;

            post = <p style={{textAlign: "center"}}>LOADING</p>;

            if(data) {
                post = (
                    <div className="FullPost">
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
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

export default withRouter(FullPost);