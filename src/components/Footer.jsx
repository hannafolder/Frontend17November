import React from 'react';
import {Link} from 'react-router-dom';
const gallery=[
 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=240&q=85',
 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=240&q=85',
 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=240&q=85',
 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=240&q=85'
];
export default function Footer(){return <footer className="trip-footer" id="contact">
 <div className="container footer-grid footer-grid-four">
  <div className="footer-brand">
   <Link className="trip-logo footer-logo" to="/"><span className="logo-wheel">☼</span><span>Trip<span>Zap</span></span></Link>
   <p>Discover beautiful destinations and unforgettable moments on the water. Let every journey become a story worth remembering.</p>
   <div className="footer-social">
    <a href="#contact" aria-label="Facebook"><i className="bi bi-facebook"/></a>
    <a href="#contact" aria-label="Pinterest"><i className="bi bi-pinterest"/></a>
    <a href="#contact" aria-label="Instagram"><i className="bi bi-instagram"/></a>
    <a href="#contact" aria-label="LinkedIn"><i className="bi bi-linkedin"/></a>
   </div>
  </div>
  <div><h4>Quicklinks</h4><Link to="/">Home</Link><Link to="/home-two">Home Two</Link><Link to="/our-yachts">Yacht Rent</Link><Link to="/popular-destinations">Destination</Link><Link to="/blog">Blog</Link><Link to="/contact">Contact</Link></div>
  <div className="footer-contact"><h4>Get In Touch</h4>
   <p><i className="bi bi-geo-alt-fill"/><span><b>Location:</b><br/>2976 Sunrise Avenue, Las Vegas</span></p>
   <p><i className="bi bi-envelope"/><span><b>Email:</b><br/>example@mail.com</span></p>
   <p><i className="bi bi-telephone-fill"/><span><b>Phone:</b><br/>+8 91230 456 789</span></p>
  </div>
  <div className="footer-gallery"><h4>Gallery</h4><div className="footer-gallery-grid">{gallery.map((src,i)=><Link to="/popular-destinations" key={src} aria-label={'View gallery image '+(i+1)}><img src={src} alt="TripZap yacht gallery"/></Link>)}</div></div>
 </div>
 <div className="container copyright">Boat Trip @2026. Boat All Rights Reserved By <a href="#contact">TripZap</a></div>
</footer>}
