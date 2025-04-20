import React from "react";
import {App} from "../../../src/pages/App";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"; // Add this import

test('renders with correct header text', () => {
  render(<App/>);

  // Using findByText instead of getByText to handle async rendering if needed
  const heading = screen.getByText(/Cat Facts/i);

  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H1'); // Verify it's actually an h1 element
});

