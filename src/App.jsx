import React from "react";
import Router from "./Components/Router.jsx";
import Navbar from "./Components/Navbar";
import Pages from "./ContentPage/Pages.jsx";
import Owner from "./Components/Owner.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
  <Router/>
  <Owner/>
    </>
  );
};

export default App;
