import React,{useEffect,useRef,useState} from 'react';

export default function Reveal({children,className='',variant='rise',delay=0}){
 const ref=useRef(null);
 const [show,setShow]=useState(false);
 useEffect(()=>{
  const node=ref.current;
  if(!node)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setShow(true);return;}
  const observer=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting){setShow(true);observer.unobserve(node);}
  },{threshold:0.14,rootMargin:'0px 0px -45px 0px'});
  observer.observe(node);
  return()=>observer.disconnect();
 },[]);
 return <div ref={ref} style={{'--reveal-delay':`${Math.max(0,Math.min(delay,700))}ms`}} className={`reveal reveal-${variant} ${show?'is-visible':''} ${className}`}>{children}</div>;
}
