import React from "react";

export default function AboutUs() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 fw-bold text-primary">About Eshop 🛒</h1>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="./img/Aboutimg.jpg"
            alt="Eshop Illustration"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            Welcome to <strong>Eshop</strong>, your one-stop destination for all your shopping needs!
            We bring together top-notch products, affordable prices, and a smooth user experience
            to make online shopping feel like a breeze.
          </p>

          <p className="fs-5">
            Our team is passionate about creating a platform where customers can find what they love
            and have it delivered quickly and safely. We're constantly improving and adding new
            features — all based on your feedback.
          </p>

          <p className="fs-5">
            Thanks for being a part of the Eshop fam 💜. Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  );
}
