
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Card from "./Public/Product";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element = {<> <Navbar/><Home/> <Card/></>}/>
    <Route path="/Signup" element = {<> <Navbar/><Singup/></>}/>
    <Route path="/Product" element = {<> <Navbar/><Product/></>}/>
   </Routes>
   </>
  );
}

export default App;
