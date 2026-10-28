"use client";
import {useEffect,useState} from "react";
import type {GG} from "@/data/giftguides";
async function copyText(t:string){
  try{await navigator.clipboard.writeText(t);return true}catch{}
  const a=document.createElement("textarea");a.value=t;a.setAttribute("readonly","");a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();a.setSelectionRange(0,t.length);let ok=false;try{ok=document.execCommand("copy")}catch{}document.body.removeChild(a);
  if(!ok)window.prompt("Copy:",t);return ok;
}
function Btn({text,label}:{text:string;label:string}){const[d,setD]=useState(false);
  return <button type="button" className="rd-btn" onClick={async()=>{if(await copyText(text)){setD(true);setTimeout(()=>setD(false),2000)}}}>{d?"Copied!":label}</button>}
export default function GGCard({g,i}:{g:GG;i:number}){
  const key=`fph-gg-posted-${g.slug}`;const[p,setP]=useState(false);
  useEffect(()=>{setP(localStorage.getItem(key)==="1")},[key]);
  return(<section className={`rd-card gg-card${p?" rd-posted":""}`}>
    <h2 className="rd-title">{i+1}. {g.title}</h2>
    <div className="rd-imgs">
      <figure><a href={g.story} target="_blank" rel="noopener"><img src={g.story} alt={`${g.title} story`} width={1080} height={1920} loading="lazy"/></a><a className="rd-dl" href={g.story} download>Save story image</a></figure>
      <figure><a href={g.feed} target="_blank" rel="noopener"><img src={g.feed} alt={`${g.title} feed`} width={1080} height={1350} loading="lazy"/></a><a className="rd-dl" href={g.feed} download>Save feed image</a></figure>
    </div>
    <pre className="rd-cap">{g.caption}</pre><Btn text={g.caption} label="Copy caption"/>
    <ol className="gg-items">{g.items.map(it=><li key={it.n} className="gg-item">
      <span className="gg-name">{it.n}. {it.name}</span>
      <a className="gg-link" href={it.url} target="_blank" rel="noopener sponsored">{it.url}</a>
      <Btn text={it.url} label={`Copy link ${it.n}`}/>
    </li>)}</ol>
    <label className="rd-check"><input type="checkbox" checked={p} onChange={e=>{setP(e.target.checked);localStorage.setItem(key,e.target.checked?"1":"0")}}/> Posted</label>
  </section>);
}
