import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY"); // Replace with your Stripe public key

const product = {
  name: "Wireless Headphones",
  description: "Noise-cancelling over-ear headphones with Bluetooth",
  price: 129.99,
};

const CheckoutForm = ({ selectedMethod }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage("");

    if (selectedMethod !== "card") {
      setMessage(`${selectedMethod.toUpperCase()} payment coming soon.`);
      return;
    }

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: product.price }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setMessage("✅ Payment successful!");
        }
      }
    } catch (err) {
      setMessage("❌ Payment failed.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment} style={styles.form}>
      {selectedMethod === "card" && (
        <div style={styles.cardElement}>
          <CardElement />
        </div>
      )}
      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? "Processing..." : `Pay $${product.price}`}
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </form>
  );
};

const PaymentMethods = ({ selectedMethod, setSelectedMethod }) => {
  const methods = ["card", "upi", "cash on delivery"];

  return (
    <div style={styles.methodContainer}>
      {methods.map((method) => (
        <button
          key={method}
          onClick={() => setSelectedMethod(method)}
          style={{
            ...styles.methodButton,
            backgroundColor: selectedMethod === method ? "#007bff" : "#e0e0e0",
            color: selectedMethod === method ? "#fff" : "#000",
          }}
        >
          {method.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      <div style={styles.productBox}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>Price: ${product.price}</strong>
      </div>

      <h4>Select Payment Method</h4>
      <PaymentMethods
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />

      <Elements stripe={stripePromise}>
        <CheckoutForm selectedMethod={selectedMethod} />
      </Elements>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  productBox: {
    marginBottom: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  methodContainer: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  methodButton: {
    padding: 10,
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    flex: 1,
  },
  cardElement: {
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 6,
    marginBottom: 20,
  },
  form: {
    marginTop: 10,
  },
  button: {
    padding: 12,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  message: {
    marginTop: 20,
    fontWeight: "bold",
    color: "#333",
  },
};
