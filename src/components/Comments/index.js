import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', commentsLen: 0}

  onSubmitButton = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  isToggle = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredData = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredData})
    this.setState(prevState => ({commentsLen: prevState.commentsLen - 1}))
  }

  render() {
    const {commentsList, commentsLen, name, comment} = this.state
    const commentsLength = commentsList.length

    return (
      <div className="comments-container">
        <h1>Comments</h1>
        <form>
          <div className="top-section-container">
            <div className="form-container">
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input-field"
                onChange={this.onChangeName}
              />
              <textarea
                type="text"
                value={comment}
                placeholder="Your Comment"
                rows="10"
                cols="40"
                className="text-field"
                onChange={this.onChangeComment}
              />
              <button
                type="submit"
                className="button"
                onClick={this.onSubmitButton}
              >
                Add Comment
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="comments-image"
                alt="comments"
              />
            </div>
          </div>
        </form>
        <hr className="horizontal-line" />
        <div className="comments-bottom-section">
          <p className="list-Of-Comments">{commentsLength}</p>
          <p className="comments-side-heading">Comments</p>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              isToggle={this.isToggle}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
