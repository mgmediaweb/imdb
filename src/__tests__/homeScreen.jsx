import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import HomeScreen from '../routes/Home';

function wrapperPage() {
  return (<Provider store={store}><HomeScreen /></Provider>);
}

test('Home displayed', () => {
  render(<HomeScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
