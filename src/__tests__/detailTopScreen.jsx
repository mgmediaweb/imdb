import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import DetailTopScreen from '../routes/Home';

function wrapperPage() {
  return (<Provider store={store}><DetailTopScreen /></Provider>);
}

test(' Top displayed', () => {
  render(<DetailTopScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
