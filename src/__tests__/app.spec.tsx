import * as React from "react";
import App from "../app";
import { render, screen } from "@testing-library/react";

describe("<App />", () => {
  it("SHOULD render", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hi");
  });
});
