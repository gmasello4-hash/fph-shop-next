"use client";
import {useEffect,useState} from "react";
async function copyText(t:string){
  try{await navigator.clipboard.writeText(t);return true}catch{}
  const a=document.createElement("textarea");a.value=t;a.setAttribute("readonly","");a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();a.setSelectionRange(0,t.length);let ok=false;try{ok=document.execCommand("copy")}catch{}document.body.removeChild(a);
  if(!ok)window.prompt("Copy:",t);return ok;
}
function Btn({text,label}:{text:string;label:string}){const[d,setD]=useState(false);
  return <button type="button" className="rd-btn" onClick={async()=>{if(await copyText(text)){setD(true);setTimeout(()=>setD(false),2000)}}}>{d?"Copied!":label}</button>}
export default function ReadyCard({slug,title,feed,story,caption,url}:{slug:string;title:string;feed:string;story:string;caption:string|null;url:string}){
  const key=`fph-posted-${slug}`;const[p,setP]=useState(false);
  useEffect(()=>{setP(localStorage.getItem(key)==="1")},[key]);
  return(<section className={`rd-card${p?" rd-posted":""}`}>
    <h2 className="rd-title">{title}</h2>
    <div className="rd-imgs">
      <figure><img src={feed} alt={`${title} feed`} width={1080} height={1350} loading="lazy"/><a className="rd-dl" href={feed} download>Save feed image</a></figure>
      <figure><img src={story} alt={`${title} story`} width={1080} height={1920} loading="lazy"/><a className="rd-dl" href={story} download>Save story image</a></figure>
    </div>
    {caption?<><pre className="rd-cap">{caption}</pre><Btn text={caption} label="Copy caption"/></>:<p className="rd-need">Caption needed</p>}
    <p className="rd-url">{url}</p><Btn text={url} label="Copy link"/>
    <label className="rd-check"><input type="checkbox" checked={p} onChange={e=>{setP(e.target.checked);localStorage.setItem(key,e.target.checked?"1":"0")}}/> Posted</label>
  </section>);
}
