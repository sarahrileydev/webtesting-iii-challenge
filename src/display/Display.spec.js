// Test away!
import React from "react";
import Display from "./Display";

import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("show closed when prop is true", () => {
    const closed = true;
    const { getByText } = render(<Display closed={closed} />);
    getByText("Closed");
    cleanup();
  });
  it("show open when prop is false", () => {
    const closed = false;
    const { getByText } = render(<Display closed={closed} />);
    getByText("Open");
    cleanup();
  });
  it("show locked when  locked prop is true", () => {
    const locked = true;
    const { getByText } = render(<Display locked={locked} />);
    getByText("Locked");
    cleanup();
  });
  it("show unlocked when  locked prop is false", () => {
    const locked = false;
    const { getByText } = render(<Display locked={locked} />);
    getByText("Unlocked");
    cleanup();
  });
  it("when locked use the red-led class", () => {
    const locked = true;
    const { getByText } = render(<Display locked={locked} />);
    expect(getByText("Locked")).toHaveClass("red-led");
    cleanup();
  });
  it("when closed use the red-led class", () => {
    const closed = true;
    const { getByText } = render(<Display closed={closed} />);
    expect(getByText("Closed")).toHaveClass("red-led");
    cleanup();
  });
  it("when unlocked use the green-led class", () => {
    const locked = false;
    const { getByText } = render(<Display locked={locked} />);
    expect(getByText("Unlocked")).toHaveClass("green-led");
    cleanup();
  });
  it("when opened use the red-led class", () => {
    const closed = false;
    const { getByText } = render(<Display closed={closed} />);
    expect(getByText("Open")).toHaveClass("green-led");
    cleanup();
  });
});
