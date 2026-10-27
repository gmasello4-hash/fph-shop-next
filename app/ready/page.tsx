import {ready} from "@/data/ready";
import ReadyCard from "./ReadyCard";
import "./ready.css";
export const metadata={title:"FPH Ready to Post",robots:{index:false,follow:false,googleBot:{index:false,follow:false}}};
const SITE="https://fph-shop-next.vercel.app";
export default function Ready(){return(<div className="rd-wrap">
  <h1 className="rd-h">Ready to Post</h1>
  <p className="rd-sub">Save the images, copy the caption and link, then tick Posted. Nothing here posts for you.</p>
  {ready.map(r=><ReadyCard key={r.slug} {...r} url={`${SITE}/b/${r.slug}`}/>)}
</div>)}
