import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Hazar'ın Not Defteri</h1>
        </Link>
      </div>
    </header>
  );
}
