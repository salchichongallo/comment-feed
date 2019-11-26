import React from 'react';
import propTypes from 'prop-types';

import Comment from '../components/Comment';

import './CommentFeed.css';

function CommentFeed({ header, comments, onComment, onLike, onDislike, auth }) {
  const [author, setAuthor] = React.useState('');
  const [text, setText] = React.useState('');

  const handleTextChange = event => setText(event.target.value);
  const handleAuthorChange = event => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    onComment({ author, text });

    // clean fields
    setAuthor('');
    setText('');
  };

  const handleLike = id => onLike(id, auth);
  const handleDislike = id => onDislike(id, auth);

  return (
    <div className="CommentFeed">
      <h2>{header}</h2>

      <form onSubmit={handleSubmit} className="CommentForm">
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

      <div className="CommentList">
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
