import { render, screen, waitFor } from "@testing-library/react";
import { NewsFeed } from "./News";
import '@testing-library/jest-dom'

test('test news story renders', async () => {
    render(<NewsFeed />);
    // const storyElement = await waitFor(() => screen.getByText(/Super intense heat wave/i))
    const storyElement = screen.getByText(/Super intense heat wave/i);
    expect(storyElement).toBeInTheDocument();
});