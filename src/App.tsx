import React from "react";
//import { useForm } from "react-hook-form";
import TextInput from "./components/TextInput";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
      <body>
        <TextInput label="Jméno" name="name" register={() => {}} errors={{}} />
      </body>
    </div>
  );
}

export default App;
