"use client";
import {useEffect,useState} from "react";
export default function PostedCheck({slug}:{slug:string}){
  const key=`fph-story-posted-${slug}`;const[p,setP]=useState(false);
  useEffect(()=>{setP(localStorage.getItem(key)==="1")},[key]);
  return(<label className="st-posted" style={{display:"block",margin:"8px 0",fontWeight:600,color:p?"#2e7d32":"inherit"}}>
    <input type="checkbox" checked={p} onChange={e=>{setP(e.target.checked);localStorage.setItem(key,e.target.checked?"1":"0")}}/> {p?"Posted ✓":"Mark as posted"}</label>);
}
