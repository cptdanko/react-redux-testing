import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NewsFeed } from "./News";
import '@testing-library/jest-dom'
import { createStore } from 'redux';
import { storiesReducer } from "./store";
import { Provider } from 'react-redux';



const renderWithReduxProvider = (
    component,
    {initialState, store = createStore(storiesReducer, initialState)} = {}
  ) => {
    return {
      ...render(<Provider store = {store}> {component} </Provider>), 
      store,
    }
  }

test('test news story renders', async () => {
    renderWithReduxProvider(<NewsFeed />);
    // const storyElement = await waitFor(() => screen.getByText(/Super intense heat wave/i))
    const storyElement = screen.getByText(/Super intense heat wave/i);
    expect(storyElement).toBeInTheDocument();
});

test('test add new story', async () => {
    renderWithReduxProvider(<NewsFeed />);
    // const storyElement = await waitFor(() => screen.getByText(/Super intense heat wave/i))
    fireEvent.click(screen.getByText(/Add Story/i));
    const storyElement = screen.getByText(/Chatgpt5.0/i);
    expect(storyElement).toBeInTheDocument();
});

test('test remove story', async () => {
    renderWithReduxProvider(<NewsFeed />);
    // const storyElement = await waitFor(() => screen.getByText(/Super intense heat wave/i))
    fireEvent.click(screen.getByText(/Add Story/i));
    const removeBtns = screen.getAllByText(/Delete/i);
    fireEvent.click(removeBtns[0]);
    const storyElement = screen.queryByText(/Super intense heat wave/i);
    expect(storyElement).not.toBeInTheDocument();
});