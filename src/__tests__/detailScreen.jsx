import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import DetailScreen from '../routes/Home';

function wrapperPage() {
  return (<Provider store={store}><DetailScreen /></Provider>);
}

test('Detail displayed', () => {
  render(<DetailScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
