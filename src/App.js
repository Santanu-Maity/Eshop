
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Public/Home";
import Singup from "./Public/Singup";
import Product from "./Public/Product";
import Login from "./Public/Login";
import Footer from "./Components/Footer";
import Cart from "./Public/Cart";
import Details from "./Public/Details";
import Profile from "./Public/Profile";
import Main from "./Components/Main";


function App() {

  const productList = [
    { id: 1, name: "Speaker", price: 300, image: '/img/speaker.jpg', description: "High-quality Bluetooth speaker with deep bass.", rating: 4 },
    { id: 2, name: "Cycle", price: 5202, image: '/img/cycle.jpg', description: "Durable mountain bike for all terrains.", rating: 5 },
    { id: 3, name: "TV", price: 18999, image: '/img/tv.jpg', description: "42-inch Smart LED TV with HD resolution.", rating: 4 },
    { id: 4, name: "Chair", price: 3590, image: '/img/chair.jpg', description: "Ergonomic office chair with lumbar support.", rating: 3 },
    { id: 5, name: "Coffee", price: 740, image: '/img/Coffee.jpg', description: "Premium ground coffee beans for espresso.", rating: 4 },
    { id: 6, name: "Bed", price: 14999, image: '/img/bed.jpg', description: "Queen size wooden bed with storage.", rating: 5 },
    { id: 7, name: "Analog Watch", price: 292, image: '/img/analog watch.jpg', description: "Classic design analog watch for men.", rating: 4 },
    { id: 8, name: "Headphone", price: 1799, image: '/img/headphone.jpg', description: "Noise-cancelling over-ear headphones.", rating: 4 },
    { id: 9, name: "Wall Clock", price: 215, image: '/img/wall clock.jpg', description: "Modern wall clock for home or office.", rating: 3 },
    { id: 10, name: "Smart Phone", price: 12998, image: '/img/smart phone.jpg', description: "Affordable smartphone with great features.", rating: 5 },
    { id: 11, name: "Shoe", price: 599, image: '/img/shoe.jpg', description: "Comfortable running shoes.", rating: 4.5 },
    { id: 12, name: "Perfume", price: 199, image: '/img/perfume.jpg', description: "Long-lasting fragrance for daily use.", rating: 3 },
    { id: 13, name: "Washing Machine", price: 6490, image: '/img/washing machine.jpg' },
    { id: 14, name: "Smart Watch", price: 1299, image: '/img/smart Watch.jpg' },
    { id: 15, name: "Neck band", price: 699, image: '/img/neck band.jpg' },
    { id: 16, name: "Buds", price: 1399, image: '/img/buds.jpg' },
    { id: 17, name: "Laptop", price: 49500, image: '/img/laptop.jpg' },
    { id: 18, name: "T-Shirt", price: 398, image: '/img/t-shirt.jpg' },
  ];

  localStorage.setItem("productList", JSON.stringify(productList));

  return (
    <Routes>

      {/* public */}
      <Route path="/">
        <Route path="" element={<><Main component={<Home />} /></>} />
        <Route path="signup" element={<><Main component={<Singup />} /></>} />
        <Route path="product">
          <Route path="" element={<><Main component={<Product />} /></>} />
          <Route path=":id" element={<><Main component={<Details />} /></>} />
        </Route>
        <Route path="login" element={<><Main component={<Login />} /></>} />
        <Route path="cart" element={<><Main component={<Cart />} /></>} />
      </Route>

      {/* private */}
      <Route path="/auth">
        <Route path="profile" element={<><Main component={<Profile />} /></>} />
      </Route>

      <Route path="*" element={<><Main component={<h2 className="text-danger text-center mt-5">404 Not Found</h2>} /></>} />
    </Routes>
  );
}

export default App;
