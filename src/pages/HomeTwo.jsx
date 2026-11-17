import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const photo = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;
const destinations = [
  ['Switzerland','photo-1569263979104-865ab7cd8d13','switzerland'],
  ['United Kingdom','photo-1544551763-46a013bb70d5','uk'],
  ['Bangladesh','photo-1605281317010-fe5ffe798166','bangladesh'],
  ['Middle East','photo-1500375592092-40eb2168fd21','middle-east'],
  ['Thailand','photo-1500530855697-b586d89ba3ee','thailand'],
  ['Singapore','photo-1567899378494-47b22a2ae96a','singapore'],
  ['Dubai Desert','photo-1500375592092-40eb2168fd21','dubai']
];
const reasons = [
 ['bi-person-badge','Skippered charter','A professional skipper makes every journey smooth, safe and relaxing.'],
 ['bi-life-preserver','Skippered charter','Enjoy thoughtful support from the first enquiry until you return.'],
 ['bi-speedometer2','Super easy CRUD','Browse boats, compare options and plan your trip without the hassle.'],
 ['bi-basket','There’s whole crud','Find the details you need before choosing your next experience.'],
 ['bi-compass','Cabin cruiser','Comfortable spaces and beautiful views make the journey special.'],
 ['bi-tools','Skippered Charter','Our team helps prepare the details for a worry-free trip.'],
 ['bi-water','Boat Sailing','Feel the freedom of sailing across clear blue waters.'],
 ['bi-award','5Star Hotels','Discover comfortable stays and thoughtful travel experiences.'],
 ['bi-calendar2-check','Event Planning','Make celebrations and group trips memorable on the water.']
];
const yachts = [
 ['Boats De La Presquile','CENTRAL CROATIA','$7500','photo-1544551763-46a013bb70d5'],
 ['Aquavita Boats','New York USA','$8500','photo-1605281317010-fe5ffe798166'],
 ['Axioma Boats','CENTRAL CROATIA','$7200','photo-1569263979104-865ab7cd8d13'],
 ['Alphas Yacht','New York USA','$7600','photo-1500375592092-40eb2168fd21'],
 ['Turners Yacht','CENTRAL CROATIA','$6400','photo-1567899378494-47b22a2ae96a'],
 ['Bali Seagull','New York USA','$7100','photo-1500530855697-b586d89ba3ee']
];
const posts = [
 ['Explorer yacht unveils exciting itinerary...','photo-1544551763-46a013bb70d5'],
 ['Enjoy the view of the shore from a yacht...','photo-1567899378494-47b22a2ae96a'],
 ['Deserts in Canada: Arizona’s Arid, Artistic Desert Oasis','photo-1605281317010-fe5ffe798166']
];
const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

function SectionTitle({eyebrow,title,description}) { return <div className="section-title"><div className="script-label">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
function BookingCard({compact=false}) { return <div className={`home-two-booking-card ${compact?'compact':''}`}><h3>Book For Activities</h3><label><span>CHOOSE YOUR BOAT</span><select defaultValue=""><option value="" disabled>Boat Meters</option><option>Luxury Yacht</option><option>Sailing Boat</option><option>Private Charter</option></select></label><Link to="/our-yachts" className="blue-btn">Start Booking</Link></div>; }

export default function HomeTwo(){
 return <main className="home-two-page">
  <section className="home-two-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,28,48,.62),rgba(5,28,48,.08)),url(${photo('photo-1569263979104-865ab7cd8d13',2000)})`}}>
   <div className="container home-two-hero-inner"><Reveal variant="left"><span className="home-two-kicker">DISCOVER THE OCEAN</span><h1>Boats and Yacht<br/>Rental</h1><p>Yachting is one of life’s greatest pleasures! We help create<br className="desktop-only"/> unforgettable yacht charters from start to finish.</p><div className="home-two-hero-actions"><Link to="/our-yachts">Discover More</Link><a className="play-circle" href="#home-two-about" aria-label="Explore TripZap"><i className="bi bi-play-fill"/></a></div></Reveal></div>
  </section>

  <section className="home-two-intro section-pad" id="home-two-about"><div className="container home-two-intro-grid">
   <Reveal variant="left"><img className="home-two-photo" src={photo('photo-1567899378494-47b22a2ae96a',1000)} alt="Yacht sailing on the sea"/></Reveal>
   <Reveal variant="rise" delay={100}><div className="script-label">Who We Are</div><h2>Welcome to Sailing!<br/>Best Water Sports Agency in Thailand.</h2><p className="intro-dropcap">Yachts are places of entertainment, discovery and relaxation. Yacht rentals here offer an adventure of a lifetime. Set sail, discover new coastlines and enjoy the freedom of the open water with TripZap.</p><Link className="text-arrow" to="/our-yachts">More About Us <i className="bi bi-arrow-right"/></Link></Reveal>
   <Reveal variant="right" delay={180}><BookingCard/></Reveal>
  </div>
  <div className="container home-two-booking-row">{[1,2,3].map((n)=><Reveal key={n} variant="tilt" delay={n*100}><BookingCard compact/></Reveal>)}</div></section>

  <section className="destination-area home-two-destinations"><div className="container"><SectionTitle eyebrow="Places To Go" title="The Perfect Destinations"/><div className="destination-mosaic home-two-mosaic">{destinations.map(([name,id,cls],i)=><Reveal key={name} className={cls} variant={i%3===0?'zoom':i%3===1?'left':'rise'} delay={i*75}><Link className="destination-tile" to="/popular-destinations"><img src={photo(id,900)} alt={name}/><span className="destination-name">{name}</span><span className="destination-hover"><i className="bi bi-arrow-up-right"/></span></Link></Reveal>)}</div><div className="center"><Link className="outline-blue-btn" to="/popular-destinations">All Destinations</Link></div></div></section>

  <section className="home-two-testimonials" style={{backgroundImage:`linear-gradient(#061b35d9,#061b35e8),url(${photo('photo-1569263979104-865ab7cd8d13',1800)})`}}><div className="container"><Reveal variant="zoom"><SectionTitle eyebrow="Testimonial" title="What Are Customer Says?"/></Reveal><div className="home-two-review-grid">{[['Maydul Islam','photo-1500648767791-00dcc994a43e'],['Mariya Soniya','photo-1534528741775-53994a69daeb']].map(([name,img],i)=><Reveal key={name} variant={i?'right':'left'} delay={i*150}><article className="home-two-review"><div><img src={photo(img,250)} alt={name}/><div className="review-stars">★★★★★</div></div><div><p>“Thanks to TripZap’s booking team, our charter week was amazing. The service was thoughtful, the boat was beautiful and every moment felt special. We cannot wait to sail again!”</p><h3>{name}</h3><span>Nov 2026, Charter Sailboat</span></div></article></Reveal>)}</div><div className="review-dots"><span/><span/></div></div></section>

  <section className="why-section section-pad home-two-why"><div className="container"><SectionTitle eyebrow="What We Do" title="Why Choose US"/><div className="three-grid home-two-reasons">{reasons.map(([icon,title,desc],i)=><Reveal key={`${title}-${i}`} variant={i%2?'right':'rise'} delay={(i%3)*90}><article className="why-card home-two-reason"><span className="reason-icon"><i className={`bi ${icon}`}/></span><div><h3>{title}</h3><p>{desc}</p></div><i className="bi bi-arrow-up-right reason-arrow"/></article></Reveal>)}</div></div></section>

  <section className="home-two-fleet section-pad"><div className="container"><SectionTitle eyebrow="Book Today" title="Yacht & Boats For All Seasons"/><div className="home-two-yacht-grid">{yachts.map(([name,place,price,img],i)=><Reveal key={name} variant={i%2?'right':'left'} delay={(i%3)*100}><Link to="/our-yachts" className="home-two-yacht"><div className="home-two-yacht-image"><img src={photo(img,700)} alt={name}/><span>VIEW DETAILS <i className="bi bi-arrow-up-right"/></span></div><div className="home-two-yacht-info"><div className="yacht-meta"><span>{place}</span><span>★ &nbsp;4.5/5</span></div><h3>{name}</h3><p>12 Guests · 6 Beds · 2 Cabins · 1 Bathroom</p><strong>{price} / week</strong></div></Link></Reveal>)}</div></div></section>

  <section className="home-two-gallery section-pad"><div className="container"><div className="gallery-heading"><Reveal variant="left"><div className="script-label">Latest Model</div><h2>Explore the beauty of our<br/> exhibition.</h2></Reveal></div><div className="home-two-gallery-grid">{['photo-1500375592092-40eb2168fd21','photo-1567899378494-47b22a2ae96a','photo-1544551763-46a013bb70d5','photo-1605281317010-fe5ffe798166','photo-1569263979104-865ab7cd8d13'].map((id,i)=><Reveal key={id} variant={i%2?'zoom':'rise'} delay={i*90}><a href="/popular-destinations" className={`gallery-shot gallery-shot-${i+1}`}><img src={photo(id,900)} alt={`TripZap sailing gallery ${i+1}`}/><span><i className="bi bi-arrows-fullscreen"/></span></a></Reveal>)}</div></div></section>

  <section className="home-two-team section-pad"><div className="container"><SectionTitle eyebrow="Our Team" title="Meet Our Excellent Guides"/><div className="home-two-team-grid">{[['James Estrada','Captain','photo-1500648767791-00dcc994a43e'],['Albert Keys','Second Captain','photo-1506794778202-cad84cf45f1d'],['Anthony Allen','Skipper','photo-1535713875002-d1d0cf377908'],['Micah Click','Skipper','photo-1507003211169-0a1dd7228f2d']].map(([name,role,img],i)=><Reveal key={name} variant="tilt" delay={i*100}><article className="team-card"><div className="team-photo"><img src={photo(img,650)} alt={name}/><button type="button" aria-label={`Share ${name}`}><i className="bi bi-share"/></button></div><div className="team-copy"><h3>{name}</h3><span>{role}</span></div></article></Reveal>)}</div></div></section>

  <section className="home-two-pricing section-pad"><div className="container"><SectionTitle eyebrow="Pricing Plan" title="Choose Your Pricing Plan"/><div className="home-two-price-grid">{[['Basic Package','55'],['Regular Package','60'],['Deluxe Package','80']].map(([name,price],i)=><Reveal key={name} variant="rise" delay={i*120}><article className={`price-card ${i===1?'featured':''}`}><h3>{name}</h3><div className="price"><b>$ {price}</b><span> / Week</span></div><ul><li>Free breakfast</li><li>Free Champagne</li><li>Special Treatment</li><li>24/7 Full Support</li><li>Delicious dinner</li></ul><Link to="/our-yachts">Choose Plan</Link></article></Reveal>)}</div></div></section>

  <section className="home-two-latest section-pad"><div className="container"><div className="latest-heading"><Reveal variant="left"><div className="script-label">Latest Blog</div><h2>Recent blog &amp; articles</h2></Reveal><Reveal variant="right"><Link to="/blog">View all articles <i className="bi bi-arrow-right"/></Link></Reveal></div><div className="three-grid">{posts.map(([title,img],i)=><Reveal key={title} variant={i===1?'rise':'zoom'} delay={i*120}><Link className="home-two-post" to={`/blog/${slug(title)}`}><img src={photo(img,750)} alt={title}/><div><span>tripzap</span><h3>{title}</h3><b>Read More <i className="bi bi-arrow-right"/></b></div></Link></Reveal>)}</div></div></section>
 </main>;
}
