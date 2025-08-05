
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

  const productList = [
    { id: 1, name: "Speaker", price: 300, image: '/img/speaker2.jpg', description: "High-quality Bluetooth speaker with deep bass.", rating: 4 },
    { id: 2, name: "Cycle", price: 5202, image: '/img/cycle2.jpg', description: "Durable mountain bike for all terrains.", rating: 5 },
    { id: 3, name: "TV", price: 18999, image: '/img/tv2.jpg', description: "42-inch Smart LED TV with HD resolution.", rating: 4 },
    { id: 4, name: "Chair", price: 3590, image: '/img/chair2.jpg', description: "Ergonomic office chair with lumbar support.", rating: 3 },
    { id: 5, name: "Coffee", price: 740, image: '/img/Coffee2.jpg', description: "Premium ground coffee beans for espresso.", rating: 4 },
    { id: 6, name: "Bed", price: 14999, image: '/img/bed2.jpg', description: "Queen size wooden bed with storage.", rating: 5 },
    { id: 7, name: "Analog Watch", price: 292, image: '/img/analog watch2.jpg', description: "Classic design analog watch for men.", rating: 4 },
    { id: 8, name: "Headphone", price: 1799, image: './img/headphone2.jpg', description: "Noise-cancelling over-ear headphones.", rating: 4 },
    { id: 9, name: "Wall Clock", price: 215, image: '/img/wall clock2.jpg', description: "Modern wall clock for home or office.", rating: 3 },
    { id: 10, name: "Smart Phone", price: 12998, image: '/img/smart phone2.jpg', description: "Affordable smartphone with great features.", rating: 5 },
    { id: 11, name: "Shoe", price: 599, image: '/img/shoe2.jpg', description: "Comfortable running shoes.", rating: 4.5 },
    { id: 12, name: "Perfume", price: 199, image: '/img/perfume2.jpg', description: "Long-lasting fragrance for daily use.", rating: 3 },
    { id: 13, name: "Washing Machine", price: 6490, image: './img/washing machine2.jpg' },
    { id: 14, name: "Smart Watch", price: 1299, image: './img/smart Watch12.jpg' },
    { id: 15, name: "Neck band", price: 699, image: './img/neck band.jpg' },
    { id: 16, name: "Buds", price: 1399, image: './img/buds3.jpg' },
    { id: 17, name: "Laptop", price: 49500, image: './img/laptop2.jpg' },
    { id: 18, name: "T-Shirt", price: 398, image: './img/t-shirt2.jpg' },
  ];

  localStorage.setItem("productList", JSON.stringify(productList));

  return (

    <div className="d-flex flex-column min-vh-100">
      
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/Signup" element={<><Navbar /><Singup /></>} />
          <Route path="/Product" element={<><Navbar /><Product /></>} />
          <Route path="/Login" element={<><Navbar /><Login /></>} />
          <Route path="/Cart" element={<><Navbar /><Cart /></>} />
          <Route path="/Details" element={<><Navbar /><Details /></>} />
          <Route path="/:id" element={<><Navbar /><Details /></>} />
          <Route path="/Profile" element={<><Navbar /><Profile /></>} />
        </Routes>
      </div>

      {/* Footer will always be at the bottom */}
      <Footer />
    </div>
  );
}

export default App;