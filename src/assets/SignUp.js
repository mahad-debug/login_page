
import {useState} from "react";

import React from "react";
import {Link} from "react-router-dom"

const Signup =()=>{
 const [q, setQ] = useState('uop');
 const test = (e) => {
    console.log(q)
  }





return(
<>


    
 <div className="sign up">
  <button className="logout"><Link to="/Logout">logout</Link></button> 
   {/* <button className="sign out" ><Link to="/signup">sign up</Link></button> */}
            <title>sign up</title>
        </div>
        
                <ul>
                    <li>
                        username
                    </li>
                    <input type="text"  placeholder="searchbar of username" onChange={(e) => setQ(e.target.value)}/>
                    
                     <li>
                        password
                    </li>
                    <input type="text" placeholder="searchbar of password"/>
                
                    <li>
                        email
                    </li>
                    <input type="text" placeholder="searchbar of email" />
                    
                </ul>
                <button className="btn">logout</button>
                

            </>






)}
   
 export default Signup;