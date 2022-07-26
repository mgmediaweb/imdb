import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Card from '../components/card/Card';

const cardRender = () => {
  const cardProps = {
    id: 'abc001',
    title: 'Back to the Future',
    rating: 0,
    type: 'theaters',
  };

  return (
    <BrowserRouter>
      <Card id={cardProps.id} title={cardProps.title} />
    </BrowserRouter>
  );
};

test('Card displayed', () => {
  render(<Card />, { wrapper: cardRender });
  expect(screen.getByText('Back to the Future')).toBeInTheDocument();
});
