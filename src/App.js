import React from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import { Router } from "@reach/router";
import { items } from "./static-data";
import Header from "./Header";
import BlogList from "./BlogList";
import Details from "./Detail";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Router>
        <About path="/About" />
        <Contact path="/Contact" />
        <BlogList items={items} path="/" />
        <Details path="/details/:id" />
      </Router>
    </>
  );
};

render(<App />, document.getElementById("root"));
