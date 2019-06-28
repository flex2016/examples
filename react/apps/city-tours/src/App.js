import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.scss";
import TourList from "./components/TourList/TourList";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
