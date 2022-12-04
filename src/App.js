import './App.css';
import Signin from './assets/Signin';
import SignUp from './assets/SignUp';
import Logout from './assets/Logout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

    
  
  return (


    <>
      <BrowserRouter>
        <Routes>
      <Route  path="/" element={<Signin/>}/>
      <Route  path="/signup" element={<SignUp/>}/>
      <Route path="/logout" element={<Logout/>}/>
     
        </Routes>
      </BrowserRouter>
  
  </> 
   
   
  )
    }

export default App;
