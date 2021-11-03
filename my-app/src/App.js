import React from "react";

import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";

import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
