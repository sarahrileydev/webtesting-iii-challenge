// Test away!

import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("<Control /> ", () => {
  it("is locked if the closed toggle button is disabled", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={true} locked={true} />
    );
    const button = getByText(/Open Gate/);
    fireEvent.click(button);
    expect(mock).not.toHaveBeenCalled();
    cleanup();
  });

  it("is open if the locked toggle button is disabled", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={false} locked={false} />
    );
    const button = getByText(/Close Gate/);
    fireEvent.click(button);
    expect(mock).not.toHaveBeenCalled();
  });
});
