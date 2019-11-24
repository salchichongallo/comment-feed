import React from 'react';
import propTypes from 'prop-types';

import Comment from '../components/Comment';

import './CommentFeed.css';

function CommentFeed({ header, comments, createComment, likeComment, unlikeComment, auth }) {
  const [author, setAuthor] = React.useState('');
  const [text, setText] = React.useState('');

  const handleTextChange = event => setText(event.target.value);
  const handleAuthorChange = event => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createComment({ author, text });

    // clean fields
    setAuthor('');
    setText('');
  };

  const handleLike = id => likeComment(id, auth);
  const handleDislike = id => unlikeComment(id, auth);

  return (
    <div className="comment-feed">
      <h2>{header}</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="author">
          <span>Author</span>
          <input
            id="author"
            type="text"
            value={author}
            onChange={handleAuthorChange}
          />
        </label>

        <label htmlFor="text">
          <span>Comment</span>
          <input
            id="text"
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </label>

        <button type="submit">
          Submit Comment
        </button>
      </form>

      <div className="comment-list">
        <h3>Latest Comments</h3>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            {...comment}
            onLike={handleLike}
            onDislike={handleDislike}
            currentUser={auth}
          />
        ))}
      </div>
    </div>
  );
}

CommentFeed.defaultProps = { header: 'Comment Feed' };

CommentFeed.propTypes = {
  header: propTypes.string,
  comments: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default CommentFeed;
