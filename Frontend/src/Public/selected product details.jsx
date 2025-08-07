import CheckoutPage from "./CheckoutPage";

const productToBuy = {
  name: "Wireless Headphones",
  description: "Noise-cancelling over-ear headphones with Bluetooth",
  price: 129.99,
};

function App() {
  return (
    <div>
      <CheckoutPage product={productToBuy} />
    </div>
  );
}

export default App;
