import React, { Component } from "react"
import { connect } from "react-redux"
import { ADD_ITEM } from "../Redux/Constants"
class PostForm extends Component {
  // state = {  }
  handleSubmit = e => {
    e.preventDefault()
    const title = this.getTitle.value
    const message = this.getMessage.value
    const data = {
      id: new Date(),
      title,
      message
    }
    this.props.dispatch({
      type: ADD_ITEM,
      data
    })
    this.getTitle.value = ""
    this.getMessage.value = ""
    console.log("clicked", data)
  }
  render() {
    console.log("props are", this.props)
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            rows="5"
            cols="28"
            ref={input => (this.getMessage = input)}
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm)
