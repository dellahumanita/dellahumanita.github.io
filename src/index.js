import React from 'react';
import { render } from "react-dom";
import Main from "./Main";
import './Assets/index.css';

const rootElement = document.getElementById("root");
render(
  <Main />,
  rootElement
);