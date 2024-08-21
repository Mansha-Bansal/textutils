import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';


// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";




let name="Harry"
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      document.title="Textutils-Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
<>
{/* <BrowserRouter> */}
   
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />

{/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact  path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
</Routes>

</BrowserRouter> */}
</div>
</>





   
  );
}

export default App;
