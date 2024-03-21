import React from "react";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar";
import Card from "./components/Card";

function App() {

  return (
    <>
      <Navbar />
      <Bannar />
      <div className="row">
        <Card />
      </div>
    </>
  );
}

export default App;