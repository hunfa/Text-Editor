import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Textform({mode,handlealert}) {


  const handleupclick = () => {
    console.log(text);
    const newtext = text.toUpperCase();
    settext(newtext);
    handlealert("Converted to uppercase","success");

  }

  const handleclearclick = () => {
    settext("");
  }

  const handlecopyclick=()=>{
    toast.success("Text copied!")
    navigator.clipboard.writeText(text);
  }

  function handlechange(e) {
    
    settext(e.target.value);
    // console.log(text);
   
  }

  

  const [text, settext] = useState("");
  


  return (
    <div className="container">

      <div className="mb-3">
        <label style={{color:mode==="dark"?"white":"black"}} htmlFor="box1" className="form-label">Enter Text</label>
        <textarea style={{color:mode==="dark"?"white":"black",backgroundColor:mode==="dark"?"#101010":"white"}} className="form-control" id="box1" rows="10" value={text} onChange={handlechange}></textarea>
      </div>
      <button type="button" onClick={handleupclick} className="btn btn-primary">To Uppercase</button>
      <button type="button" onClick={handlecopyclick} className="btn btn-primary mx-2">Copy Text</button>
      <button type="button" onClick={handleclearclick} className="btn btn-danger mx-2">Reset</button>
      

      <p style={{color:mode==="dark"?"white":"black"}} className='my-3'>Words = {text.split(" ").filter(word => word !== '').length}  Characters={text.length}</p>
      <ToastContainer autoClose={1000}/>
    </div>

  )
}
