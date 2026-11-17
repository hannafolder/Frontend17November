import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
const boats=[
 ['Boats De La Presquile','CENTRAL CROATIA','https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85'],
 ['Aquavita Boats','New York USA','https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=900&q=85'],
 ['Luxury Sailing Yacht','CENTRAL CROATIA','https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=900&q=85'],
 ['Sea Breeze Charter','Mediterranean','https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=900&q=85']
];
export default function DestinationsDetails(){return <><PageHero title="Destinations Details"/><main className="details-listing"><div className="container"><div className="section-title"><div className="script-label">Book Today</div><h2>Yacht &amp; Boats For All Seasons</h2></div><div className="details-boat-grid">{boats.map((b,i)=><Reveal key={b[0]} variant={i%2===0?"left":"right"} delay={i*130}><article className="details-boat-card"><div className="details-boat-image"><img src={b[2]} alt={b[0]}/></div><div className="details-boat-info"><div className="yacht-meta"><span>{b[1]}</span><span><i className="bi bi-star-fill"/> &nbsp;4.5/5</span></div><h3>{b[0]}</h3><p>12 Guests · 6 Beds · 2 Cabins · 1 Bathroom</p><strong>$7500 / week</strong></div></article></Reveal>)}</div></div></main></>}
