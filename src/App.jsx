import { useRef, useState } from "react";
import "./App.css"
function App(){
  const[time,setTime]=useState(0);
  const[running,setRunning]=useState(false);

  const timerRef=useRef(null);

  const Start=()=>{
    if(!running){
      setRunning(true)
    timerRef.current=setInterval(()=>{
      setTime((t)=>t+1);
    },10)
    }
  };

  const Stop=()=>{
    setRunning(false);
    clearInterval(timerRef.current);
  }

  const Resetwala=()=>{
    Stop();
    setTime(0);
  }
    const forstopTimer=()=>{
      const ms=time%100;
      const sec=Math.floor(time/100)%60;
      const min=Math.floor(time/6000);
    return `${String(min).padStart(2,"0")}:`+
    `${String(sec).padStart(2,"0")}:`+
    `${String(ms).padStart(2,"0")}`
  };
  return(
    <>
    <h2>Stop Watch Timer</h2>
    <h1>{forstopTimer()}</h1>
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    <button onClick={Resetwala}>Reset</button>
    </>
  )
}
export default App