import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesReducer } from './store';

const renderWithReduxProvider = (
  component,
  {initialState, store = createStore(storiesReducer, initialState)} = {}
) => {
  return {
    ...render(<Provider store = {store}> {component} </Provider>), 
    store,
  }
}

test('renders learn react link', () => {
  renderWithReduxProvider(<App />);
  const linkElement = screen.getByText(/News Feed/i);
  expect(linkElement).toBeInTheDocument();
});
