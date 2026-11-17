import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
const posts=[
 {category:'Boat Trip',title:'Top Gorgeous Yachts In The History Of The Boat Sailing',image:'photo-1569263979104-865ab7cd8d13',featured:true},
 {category:'Uncategorized',title:'Explorer yacht unveils exciting itinerary...',image:'photo-1544551763-46a013bb70d5'},
 {category:'Uncategorized',title:'Enjoy the view of the shore from a yacht...',image:'photo-1567899378494-47b22a2ae96a'},
 {category:'Uncategorized',title:'Bahamas announce new yacht charter tax...',image:'photo-1605281317010-fe5ffe798166'},
 {category:'Uncategorized',title:'Superyacht set to join the charter fleet...',image:'photo-1500375592092-40eb2168fd21'}
];
const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const photo = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=88`;
export default function Blog(){return <><PageHero title="Our Blog"/><main className="blog-area"><div className="container"><div className="blog-heading"><div className="script-label">Blog &amp; News</div><h2>Our Latest News Feed</h2><p>Stories, inspiration and useful tips for your next trip on the water.</p></div><div className="blog-layout">{posts.map((p,i)=><Reveal key={p.title} className={p.featured?'blog-featured':'blog-small'} variant={p.featured?'zoom':i%2===0?'right':'rise'} delay={i*125}><Link to={`/blog/${slug(p.title)}`} className="blog-card"><img src={photo(p.image)} alt={p.title}/><div className="blog-card-copy"><span>{p.category}</span><h3>{p.title}</h3><b>READ MORE <i className="bi bi-arrow-right"/></b></div></Link></Reveal>)}</div></div></main></>}
