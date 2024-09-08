import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj={
    username: "Butt",
    age: 21
  }
  let myArray=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="chai or code" btnText="Click me"/>
      <Card username="Saleh Butt" />
    </>
  );
}

export default App;
