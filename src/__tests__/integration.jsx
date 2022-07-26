import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider /* , useDispatch */ } from 'react-redux';
import store from '../redux/configureStore';

import App from '../App';

const MockApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Integration Test', () => {
  it('MockApp', async () => {
    render(<MockApp />);

    expect(screen.getByText('asia')).toBeInTheDocument();
  });
});
