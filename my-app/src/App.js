import React from "react"; // Import React
import "./App.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fruits, TypesOfFood } from "./components/Fruits"; // Import Fruits and TypesOfFood
import { TodayDate } from "./components/TimeDate";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <TodayDate date={Date()} />
        <TypesOfFood />
      </div>
      <Footer />
    </>
  );
}

export default App;
