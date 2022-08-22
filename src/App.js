
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js'
import React from 'react';
import Alert from './components/alert'

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState({msg:"lorem", type:"success",showalert:false});

  const handlealert = (msg, type) => {
    setalert({
      showalert: true,
      msg:msg,
      type: type
    })
  }
  const makealertfasle=()=>{
    setalert({ showalert: false,});
  }

  const handledarkmode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
     handlealert("Light mode Enabled","success");
    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = "#2a3150";
      handlealert("Dark mode Enabled","success");
    }
  }

  return (

    <>
      <Navbar title="TextEditor" mode={mode} handledarkmode={handledarkmode} handlealert={handlealert} />
      {alert.showalert === true ? <Alert msg={alert.msg} type={alert.type} makealertfasle={makealertfasle} /> : ""}
      <Textform mode={mode} handlealert={handlealert} />
      <button onClick={handlealert}>huhfa</button>
    </>
  );
}

export default App;
