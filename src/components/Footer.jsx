import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>FitHive</h2>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} FitHive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}