import {stories} from "@/data/stories";
import CopyButton from "./CopyButton";
import "./stories.css";
export const metadata={title:"FPH Stories",robots:{index:false,follow:false,googleBot:{index:false,follow:false}}};
const SITE="https://fph-shop-next.vercel.app";
export default function Stories(){
  const list=[...stories].sort((a,b)=>b.order-a.order);
  return(<div className="st-wrap">
    <h1 className="st-h">Story Links</h1>
    <p className="st-sub">Save the image, copy the link, add a link sticker.</p>
    {list.map(s=>{const url=`${SITE}/b/${s.slug}`;return(
      <section className="st-card" key={s.slug}>
        <img className="st-img" src={s.image} alt={s.name} width={1080} height={1920} loading="lazy"/>
        <h2 className="st-name">{s.name}</h2>
        <CopyButton url={url}/>
        <a className="st-dl" href={s.image} download={`fph-${s.slug}-story.png`}>Download image</a>
        <p className="st-url">{url.replace("https://","")}</p>
      </section>)})}
  </div>);
}
