import React from "react";
//import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SingleProject path="projects/:slug" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
