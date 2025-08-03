
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
import Login from "./Public/Login";
import Footer from "./Public/Footer";
import Cart from "./Public/Cart";
import Details from "./Public/Details";
import Profile from "./Public/Profile";

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<> <Navbar /><Home /> </>} />
        <Route path="/Signup" element={<> <Navbar /><Singup /></>} />
        <Route path="/Product" element={<> <Navbar /><Product /></>} />
        <Route path="/Login" element={<> <Navbar /><Login /></>} />
        <Route path="/Cart" element={<> <Navbar /><Cart /></>} />
        <Route path="/Details" element={<> <Navbar /><Details /></>} />
        <Route path="/:id" element={<> <Navbar /><Details /></>} />
        <Route path="/Profile" element={<> <Navbar /><Profile /></>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;