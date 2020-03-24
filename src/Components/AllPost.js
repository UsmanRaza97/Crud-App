import React, { Component } from "react"
import { connect } from "react-redux"
import Post from "./Post"
class AllPost extends Component {
  // state = {  }
  render() {
    console.log("all posts are ", this.props)
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPost)
