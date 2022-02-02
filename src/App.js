import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App(props) {
  const [emotion, setEmotion] = useState("Good");
  return(
    <>
    <h1>I'm feeling {emotion}</h1>
    <button onClick={()=>setEmotion("Better")}>
     Better
    </button>
    <button onClick={()=>setEmotion("Best")}>
     Best
    </button>
  </>
  );
 
}

export default App;
