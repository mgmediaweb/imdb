import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

test('Footer displayed', () => {
  const component = render(<Footer />);
  expect(component.container).toHaveTextContent('© 1990-2022 by IMDb.com, Inc.');
});

test('Header displayed', () => {
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByAltText('IMDB Logo')).toBeInTheDocument();
});
