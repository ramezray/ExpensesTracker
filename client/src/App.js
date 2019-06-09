import React from "react";
import AppNavbar from "./components/AppNavBar";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Body />
    </div>
  );
}

export default App;
