import React from 'react';

import './Comment.css';

const Comment = (props) => {
  const isLiked = props.likes.includes(props.currentUser.id);

  const handleClick = isLiked
    ? () => props.onDislike(props.id)
    : () => props.onLike(props.id);

  return (
    <div className="Comment">
      <h4>{props.author}</h4>
      <p>{props.text}</p>

      <button
        type="button"
        onClick={handleClick}
        data-testid={props.id}
        className={isLiked ? '-liked' : '-disliked'}
      >
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Comment;
