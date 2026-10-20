"use client";
import {useState} from "react";
export default function CopyButton({url}:{url:string}){
  const [done,setDone]=useState(false);
  async function copy(){
    let ok=false;
    try{await navigator.clipboard.writeText(url);ok=true}catch{}
    if(!ok){const t=document.createElement("textarea");t.value=url;t.setAttribute("readonly","");t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();t.setSelectionRange(0,url.length);try{ok=document.execCommand("copy")}catch{}document.body.removeChild(t)}
    if(!ok){window.prompt("Copy this link:",url);return}
    setDone(true);setTimeout(()=>setDone(false),2000);
  }
  return <button type="button" className="st-copy" onClick={copy}>{done?"Copied!":"Copy link"}</button>;
}
