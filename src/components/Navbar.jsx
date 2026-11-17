import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){return <>
<div className="theme-top"><div className="container"><span>‹ &nbsp; Tripzap – Yacht, Yachting & Boat Rental WordPress Theme</span><a href="#contact">Get Unlimited Downloads</a></div></div>
<nav className="navbar navbar-expand-lg trip-nav"><div className="container">
<Link className="trip-logo" to="/"><span className="logo-wheel">☼</span><span>Trip<span>Zap</span></span></Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tripMenu" aria-label="Toggle navigation"><span className="navbar-toggler-icon"/></button>
<div className="collapse navbar-collapse" id="tripMenu"><ul className="navbar-nav ms-auto">
<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a><ul className="dropdown-menu">
<li><Link className="dropdown-item" to="/">Home</Link></li>
<li><Link className="dropdown-item" to="/home-two">Home Two</Link></li>
</ul></li>
<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Yacht Rent</a><ul className="dropdown-menu"><li><Link className="dropdown-item" to="/our-yachts">Our Yachts</Link></li></ul></li>
<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Destinations</a><ul className="dropdown-menu">
<li><Link className="dropdown-item" to="/popular-destinations">Popular Destinations</Link></li>
<li><Link className="dropdown-item" to="/destinations-details">Destinations Details</Link></li>
</ul></li>
<li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
</ul></div></div></nav></>}
