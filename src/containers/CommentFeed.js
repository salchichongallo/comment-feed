import React from 'react';
import propTypes from 'prop-types';

import Input from '../components/Input'
import Comment from '../components/Comment';
import Button from '../components/Button/Button';

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
      <header className="CommentFeed__header">
        <h1>{header}</h1>
      </header>

      <form onSubmit={handleSubmit} className="CommentForm">
        <Input
          label="Author"
          id="author"
          type="text"
          value={author}
          onChange={handleAuthorChange}
          required
        />

        <Input
          label="Comment"
          id="text"
          type="text"
          value={text}
          onChange={handleTextChange}
          required
        />

        <Button type="submit">
          Submit Comment
        </Button>
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
