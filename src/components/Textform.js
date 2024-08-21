import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <> <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" onChange={handleOnChange}value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box above"}</p>
    </div>
    </>
   
)
}
