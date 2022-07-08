import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Style/nav.css";
import "./Style.css";
import "../src/Style/CreateAcc.css";
import "../src/Style/Responsive.css";
import "../src/Style/Personalinfo.css";
import "../src/Style/LoginPage.css";
import "../src/Style/footer.css";
import "../src/Style/blog.css";
import "../src/Style/counter.css";
import "../src/Style/jobs.css";
import "../src/Style/Category.css";
import "../src/Style/Candidate.css";

import App from "./App";
import "../src/Style/contact.css";

import "./Style/DarkMode.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
