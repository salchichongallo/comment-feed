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
  onComment: jest.fn(),
  onLike: jest.fn(),
  onDislike: jest.fn(),
  ...props,
});

describe('CommentFeed', () => {
  it('renders the CommentFeed', () => {
    // Arrange
    const props = createProps();
    const { getByText } = render(<CommentFeed {...props} />);

    // Act
    const header = getByText(props.header);

    // Assert
    expect(header.innerHTML).toBe(props.header);
  });

  it('renders the an empty comment list', () => {
    // Arrange
    const props = createProps({ comments: [] });
    const { container } = render(<CommentFeed {...props} />);

    // Act
    const commentNodes = container.querySelectorAll('.Comment');

    // Assert
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
    expect(props.onComment).toHaveBeenCalledTimes(1);
    expect(props.onComment).toBeCalledWith(newComment);

    // Clean fields after submit
    expect(authorNode.value).toBe('');
    expect(textNode.value).toBe('');
  });

  it('allows the user to like a comment', () => {
    const props = createProps();
    const commentId = props.comments[1].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(commentId);
    fireEvent.click(likeNode);

    expect(props.onLike).toHaveBeenCalledTimes(1);
    expect(props.onLike).toHaveBeenCalledWith(commentId, props.auth);
  });

  it('allows the user to unlike a comment', () => {
    const props = createProps();
    const commentId = props.comments[0].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(commentId);

    fireEvent.click(likeNode);

    expect(props.onDislike).toHaveBeenCalledTimes(1);
    expect(props.onDislike).toHaveBeenCalledWith(commentId, props.auth);
  });
});
