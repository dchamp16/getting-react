import React from "react"; // Import React
import "./App.scss";

// Components
import Header from "./components/Header";
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
    </>
  );
}

export default App;
