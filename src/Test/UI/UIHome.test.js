/* eslint-disable */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Testing user interactions on the main component (App.js).", () => {
  describe("1) When user clicks on Home button", () => {
    test("it should render the home page", () => {
      render(<App />);
      userEvent.click(screen.getByRole("link", { name: /home/i }));
      expect(screen.getByRole("heading", { name: /welcome to our page!/i }))
        .toBeInTheDocument;
    });
  });

  describe("2) When user clicks on calculator button", () => {
    test("it should render the calculator page", () => {
      render(<App />);
      userEvent.click(screen.getByRole("link", { name: /calculator/i }));
      expect(screen.getByRole("heading", { name: /let's do maths !/i }))
        .toBeInTheDocument;
    });
  });

  describe("3) When user clicks on quotes button", () => {
    test("it should render the quotes page", () => {
      render(<App />);
      userEvent.click(screen.getByRole("link", { name: /quotes/i }));
      expect(
        screen.getByRole("heading", {
          name: /without mathematics, there’s nothing you can do\. everything around you is mathematics\. everything around you is numbers\. — shakuntala devi —/i,
        })
      ).toBeInTheDocument;
    });
  });
});
