import {giftGuides} from "@/data/giftguides";
import GGCard from "./GGCard";
import "../ready/ready.css";
import "./gg.css";
export const metadata={title:"FPH Gift Guides for Stories",robots:{index:false,follow:false,googleBot:{index:false,follow:false}}};
export default function GiftGuides(){return(<div className="rd-wrap">
  <h1 className="rd-h">Holiday Gift Guides</h1>
  <p className="rd-sub">For daily stories: save the story image, copy each product link onto a link sticker, copy the caption, then tick Posted. Nothing here posts for you.</p>
  {giftGuides.map((g,i)=><GGCard key={g.slug} g={g} i={i}/>)}
  <p className="rd-sub">As an Amazon Associate I earn from qualifying purchases.</p>
</div>)}
