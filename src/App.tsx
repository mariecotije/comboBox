import React from "react";
import TextInput from "./components/TextInput";
import ComboBox from "./components/ComboBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <TextInput label="Jméno" name="name" register={() => {}} errors={{}} />
      <div>
        <ComboBox
          label="Univerzita"
          name="university"
          register={() => {}}
          errors={{}}
        />
      </div>
    </div>
  );
}

export default App;
