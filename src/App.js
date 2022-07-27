
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js'

function App() {

  const [mode, setmode] = useState("light")

  const handledarkmode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = "#2a3150";
    }
  }

  return (
    <>
      <Navbar title="TextEditor" mode={mode} handledarkmode={handledarkmode} />
      <Textform mode={mode} />
    </>
  );
}

export default App;
