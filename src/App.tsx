import React from "react";
import FormComp from "./components/FormComp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Registr studentů</h1>

      <div className="form-container">
        <FormComp />
      </div>
    </div>
  );
}

export default App;
