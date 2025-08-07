import React, { useState } from "react";

export default function Profile() {
  const [showDetails, setShowDetails] = useState(false);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
    },
    card: {
      background: "#fdfdfd",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "350px",
    },
    profileImg: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
      marginBottom: "15px",
    },
    tagline: {
      color: "#666",
      fontSize: "14px",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "10px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    details: {
      textAlign: "left",
    },
    list: {
      paddingLeft: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="/Img/profile logo2.png"
          className="d-block w-70"
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
            margin: "0 auto 15px",
            display: "block"
          }}
        />

        <h2>User </h2>


        <button
          style={styles.button}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div style={styles.details}>
            <p><strong>Email:</strong> abc@example.com</p>
            <p><strong>Location:</strong> Kolkata, India</p>
            <p><strong>Recent Orders:</strong></p>
            <ul style={styles.list}>
              <li>#12345 - Washing Machine</li>
              <li>#12346 - Coffee</li>
              <li>#12347 - Headphone</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
