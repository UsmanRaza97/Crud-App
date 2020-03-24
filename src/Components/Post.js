import React, { Component } from "react"
import { DELETE_ITEM } from "../Redux/Constants"
import { connect } from "react-redux"
class Post extends Component {
  // state = {  }
  render() {
    console.log("in post porps are ", this.props)
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button>Edit</button>
        <button
          onClick={() =>
            this.props.dispatch({
              type: DELETE_ITEM,
              id: this.props.post.id
            })
          }
        >
          Delete
        </button>
      </div>
    )
  }
}

export default connect()(Post)
