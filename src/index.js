import React from 'react';
import { render } from "react-dom";
import Main from "./Main";
import './index.css';

const rootElement = document.getElementById("root");
render(
  <Main />,
  rootElement
);