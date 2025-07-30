
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
import Login from "./Public/Login";




function App() {
  return (
<<<<<<< HEAD
    <>
      <Routes>
        <Route path="/" element={<> <Navbar /><Home /> </>} />
        <Route path="/Signup" element={<> <Navbar /><Singup /></>} />
        <Route path="/Product" element={<> <Navbar /><Product /></>} />
        <Route path="/Login" element={<> <Navbar /><Login /></>} />
        
=======
   <>
   <Routes>
    <Route path="/" element = {<> <Navbar/><Home/> </>}/>
    <Route path="/Signup" element = {<> <Navbar/><Singup/></>}/>
    <Route path="/Product" element = {<> <Navbar/><Product/></>}/>
    <Route path="/Login" element = {<> <Navbar/><Login/></>}/>
    <Route path="/Details" element = {<> <Navbar/><Details/></>}/>
  
>>>>>>> e1d02cfc0bdcc40b8258e350f739a3700d8bb50a

      </Routes>
    </>
  );
}

export default App;
