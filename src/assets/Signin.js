import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"



const Signin=()=> {
  const [t, setT] = useState('red');

  // useEffect(() => {
  //   setTimeout(() => {
  //     setT((t) => t);

  //   },[t]);
  // });
  const [s, setS] = useState('username');
  const [f, setE] = useState('sigout');

  const test = (e) => {
    console.log(s)
  }
  const test1 = (e) => {
  }
  console.log(f)

  return (

    <>
    <div className="signIn ">
        <button className="btn" onClick={test}>Sign in</button>
       
    </div>
    <div>
    <p>This is has to be fill</p>
    <nav>
    <ul>
        
       
          
         
        <input type="text" placeholder="searchbar" onChange={(e) => { setT(e.target.value) }} />
        <li> Firstname</li>
        <input type="text" placeholder="searchbar" onChange={(e) => { setS(e.target.value)}}/>
        
        <li>lastname</li>
        <input type="text" placeholder="searchbar" onChange={(e) => {setE(e.target.value)}}/>
        
        <li>email</li>
        <input type="text" placeholder="searchbar" />
        <button className="submit" onClick="submit">submit</button>
    </ul>
    </nav>
    
    </div>
    <button className="sign out" ><Link to="/signup">sign up</Link></button>
    
    <p id="demo">`fodsfodsko{t}`</p>
    <p id="jj">`ye username nh hai bhai{s}`</p>
    <p id="pp">`ye to ap b jantay{f} hoo `</p>
  </>
  ) 
}


export default Signin;