import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  let [curr,setCurr] = useState();
  let [coneur,setConeur] = useState();
  let [coninr,setConInr] = useState();
  let [conpkr,setConPkr] = useState();
  let [connpr,setConNpr] = useState();
  let [concad,setConCad] = useState();

const Eur = () =>{
  setCurr()
  let eur = curr * 0.85;
  console.log(eur)
  setConeur(eur)
  setCurr(curr)
  // setCurr(curr * 0.85)
    
} 
const Inr = () =>{
  setCurr()
  let inr = curr * 74.14;
  console.log(inr)
  setConInr(inr)
  setCurr(curr)
} 
const Pkr = () =>{
  setCurr()
  let pkr = curr * 292.75;
  setConPkr(pkr)
  setCurr(curr)
} 
const Npr = () =>{
  setCurr()
  let npr = curr * 119.53;
  setConNpr(npr)
  setCurr(curr)
} 
const Cad = () =>{
  setCurr()
  let cad = curr * 1.26;
 setConCad(cad)
 setCurr(curr)
} 
  return (
    <div className="App">
     USD: <input type='number' value={curr} onChange={(e) => setCurr(e.target.value) }></input>
      
      <button onClick={Eur}>EUR</button>
      <button onClick={Inr}>INR</button>
      <button onClick={Pkr}>PKR</button>
      <button onClick={Npr}>NPR</button>
      <button onClick={Cad}>CAD</button>

      <h1>Convert</h1>
      <p>EUR:{coneur}</p>
      <p>INR:{coninr}</p>
      <p>PKR:{conpkr}</p>
      <p>NPR:{connpr}</p>
      <p>CAD:{concad}</p>
          
    </div>
  );
}

export default App;
