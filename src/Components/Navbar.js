import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

    return <div>
        <button className="btn" ><Link to="/" style={{ textDecoration: 'none',color:"white" }}>Logout</Link></button>
    </div>
}