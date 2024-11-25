import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/insights">Agricultural Insights</Link> {/* Add link to Insights */}
    </nav>
);

export default Navbar;
