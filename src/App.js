import React from 'react';

import CommentFeed from './containers/CommentFeed';
import useCommentFeed from './containers/useCommentFeed';

const auth = {
  id: 'john-doe',
  name: 'John Doe',
};

const initialComments = [
  {
    id: 'comment-0',
    author: 'John Doe',
    text: 'A boats but a mystery box could be anything.',
    likes: [auth.id],
  },
  {
    id: 'comment-1',
    author: 'Max Powers Jr',
    text: 'Krypton sucks.',
    likes: [],
  },
];

function App() {
  const feed = useCommentFeed(initialComments)

  return (
    <CommentFeed
      header="Comment Feed"
      auth={auth}
      {...feed}
    />
  );
}

export default App;
