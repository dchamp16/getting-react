import React from "react"; // Import React
import "./App.scss";
import { Fruits, TypesOfFood } from "./components/fruits"; // Import Fruits and TypesOfFood
import { TodayDate } from "./components/timeDate";

function App() {
  return (
    <div className="App">
      <TodayDate date={Date()} />
      <TypesOfFood />
    </div>
  );
}

export default App;