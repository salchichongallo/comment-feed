import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StarButton from './index';

describe('Star Button', () => {
  it('renders the star button', () => {
    const { getByTestId } = render(<StarButton />);
    expect(getByTestId('starButton')).toBeInTheDocument();
  });

  it('has a star', () => {
    const { getByTestId } = render(<StarButton />);
    expect(getByTestId('star')).toBeInTheDocument();
  });

  describe('active prop', () => {
    it('is false by default', () => {
      const { getByTestId } = render(<StarButton />);
      expect(getByTestId('starButton')).toHaveClass('StarButton--unactive');
    });

    it('active prop true should be active', () => {
      const { getByTestId } = render(<StarButton active />);
      expect(getByTestId('starButton')).toHaveClass('StarButton--active');
    });
  });
});
