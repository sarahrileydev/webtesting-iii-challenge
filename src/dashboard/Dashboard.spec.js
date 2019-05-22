// Test away

import React from "react";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

describe.skip("<Dashboard />", () => {
  it("snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
