
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Card from "./Public/Product";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
import Login from "./Public/Login";



function App() {
  return (
   <>
   <Routes>
    <Route path="/" element = {<> <Navbar/><Home/> <Card/></>}/>
    <Route path="/Signup" element = {<> <Navbar/><Singup/></>}/>
    <Route path="/Product" element = {<> <Navbar/><Product/></>}/>
    <Route path="/Login" element = {<> <Navbar/><Login/></>}/>

   </Routes>
   </>
  );
}

export default App;
