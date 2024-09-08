import { StrictMode } from "react";
import React from "react"
import ReactDom from "react-dom/client";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me",
};

const customElement = (
  <a href="https://www.google.com" target="_blank">
    click me
  </a>
);

const customReactElement = React.createElement(
  "a",
  { href: "http://www.google.com", target: "_blank" },
  "Click me to visit google"
);

createRoot(document.getElementById("root")).render(
 <>
  <App />
 </>
);
