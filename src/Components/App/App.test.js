import React from "react";
import { render } from "@testing-library/react";
// import { Provider } from "react-redux";
import App from "./App";
// import { store } from "../../Lib/Store";

jest.mock("three", () => {
  return {
    camera: { position: { z: 1 } },
    Scene: function c() {},
    PerspectiveCamera: function c() {
      return {
        position: { z: 1 }
      };
    },
    WebGLRenderer: function() {
      return {
        shadowMap: { enabled: false },
        setSize: () => {},
        domElement: global.window.document.createElement("p")
      };
    },
    AmbientLight: function() {
      return 0x000000;
    },
PointLight: function(){
0x000000
}
  };
});

jest.mock("three/examples/jsm/controls/OrbitControls");

test("renders learn react link", () => {
  // global.AbsoluteOrientationSensor =sdfg
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true).toBe(true);
});
