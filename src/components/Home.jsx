import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        posts: response.data.slice(0, 5),
      });
    });
  }
  
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id} className="post card">
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yeat!</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home Page</h4>
        <div>{postList}</div>
      </div>
    );
  }
}
export default Home;
