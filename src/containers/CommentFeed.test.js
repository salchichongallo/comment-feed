import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CommentFeed from './CommentFeed';

const createProps = props => ({
  header: 'Comment Feed',
  comments: [
    {
      id: 'comment-0',
      author: 'John Doe',
      text: 'A boats but a mystery box could be anything.',
      likes: ['john-doe'],
    },
    {
      id: 'comment-1',
      author: 'Max Powers Jr',
      text: 'Krypton sucks.',
      likes: [],
    },
  ],
  auth: {
    id: 'john-doe',
    name: 'John Doe',
  },
  createComment: jest.fn(),
  likeComment: jest.fn(),
  unlikeComment: jest.fn(),
  ...props,
});

describe('CommentFeed', () => {
  it('renders the CommentFeed', () => {
    const props = createProps();
    const { getByText } = render(<CommentFeed {...props} />);
    const header = getByText(props.header);
    expect(header.innerHTML).toBe(props.header);
  });

  it('renders the an empty comment list', () => {
    const props = createProps({ comments: [] });
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.Comment');
    expect(commentNodes.length).toBe(props.comments.length);
  });

  it('renders the comment list with some entries', () => {
    const props = createProps();
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.Comment');

    expect(commentNodes.length).toBe(props.comments.length);
  });

  it('allows the user to add a comment', () => {
    // Arrange - create props and locate elements
    const newComment = { author: 'Socrates', text: 'Why?' };
    const props = createProps();
    const { container, getByLabelText } = render(<CommentFeed {...props} />);

    const authorNode = getByLabelText('Author');
    const textNode = getByLabelText('Comment');
    const formNode = container.querySelector('form');

    // Act - simulate changes to elements
    fireEvent.change(authorNode, { target: { value: newComment.author } });
    fireEvent.change(textNode, { target: { value: newComment.text } });

    fireEvent.submit(formNode);

    // Assert - check whether the desired functions were called
    expect(props.createComment).toHaveBeenCalledTimes(1);
    expect(props.createComment).toBeCalledWith(newComment);
    expect(authorNode.value).toBe('');
    expect(textNode.value).toBe('');
  });

  it('allows the user to like a comment', () => {
    const props = createProps();
    const commentId = props.comments[1].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(commentId);

    fireEvent.click(likeNode);

    expect(props.likeComment).toHaveBeenCalledTimes(1);
    expect(props.likeComment).toHaveBeenCalledWith(commentId, props.auth);
  });

  it('allows the user to unlike a comment', () => {
    const props = createProps();
    const commentId = props.comments[0].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(commentId);

    fireEvent.click(likeNode);

    expect(props.unlikeComment).toHaveBeenCalledTimes(1);
    expect(props.unlikeComment).toHaveBeenCalledWith(commentId, props.auth);
  });
});
