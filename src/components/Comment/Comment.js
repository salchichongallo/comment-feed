import React from 'react';

import StarButton from '../StarButton';

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

      <StarButton
        onClick={handleClick}
        data-testid={props.id}
        active={isLiked}
        className="Comment__StarButton"
      />
    </div>
  );
};

export default Comment;
