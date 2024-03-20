import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, isToggle, deleteComment} = props
  const {name, comment, isLiked, id} = eachComment
  const startLetter = name[0]
  const time = formatDistanceToNow(new Date())

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeName = isLiked ? 'liked' : 'like'

  const onLikeComment = () => {
    isToggle(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="list-type">
      <div className="profile-comment-container">
        <p className="profile">{startLetter}</p>
        <div>
          <p>
            {name} <span className="comment-time">{time}</span>
          </p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="reactions-container">
        <div className="like-container">
          <img src={imageUrl} alt={likeName} className="like-image" />
          <button type="button" className="like-button" onClick={onLikeComment}>
            like
          </button>
        </div>
        <div>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onDeleteComment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
