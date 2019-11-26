import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_COMMENT':
      return state.concat({ ...action.comment, likes: [] });

    case 'LIKE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.id) {
          comment.likes.push(action.auth.id);
        }

        return comment;
      });

    case 'UNLIKE_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.id) {
          const index = comment.likes.indexOf(action.auth.id);
          comment.likes.splice(index, 1);
        }

        return comment;
      });

    default:
      return state;
  }
}

function useCommentFeed(initialComments = []) {
  const [comments, dispatch] = useReducer(reducer, initialComments);

  const onComment = comment => dispatch({ comment, type: 'CREATE_COMMENT' });

  const onLike = (id, auth) => dispatch({ id, auth, type: 'LIKE_COMMENT' });

  const onDislike = (id, auth) => dispatch({ id, auth, type: 'UNLIKE_COMMENT' });

  return {
    comments,
    onComment,
    onLike,
    onDislike,
  };
}

export default useCommentFeed;
