
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
import Login from "./Public/Login";
import Footer from "./Public/Footer";




function App() {
  return (

   <>
   <Routes>
    <Route path="/" element = {<> <Navbar/><Home/> </>}/>
    <Route path="/Signup" element = {<> <Navbar/><Singup/></>}/>
    <Route path="/Product" element = {<> <Navbar/><Product/></>}/>
    <Route path="/Login" element = {<> <Navbar/><Login/></>}/>
    <Route path="/footer" element = {<> <Footer/></>}/>
  

   </Routes>
    </>
  );
}

export default App;