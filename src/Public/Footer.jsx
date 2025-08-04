import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p>&copy; {currentYear} Eshop. All rights reserved.</p>
      </div>
    </footer>
  );
}
