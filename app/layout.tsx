import "./globals.css";
import {Playfair_Display_SC,Parisienne,Montserrat} from "next/font/google";
const head=Playfair_Display_SC({weight:["400","700"],subsets:["latin"],variable:"--font-head"});
const script=Parisienne({weight:"400",subsets:["latin"],variable:"--font-script"});
const body=Montserrat({subsets:["latin"],variable:"--font-body"});
export const metadata={title:"Feeling Pretty Home — Shop the Boards"};
export default function L({children}:{children:React.ReactNode}){return(<html lang="en" className={`${head.variable} ${script.variable} ${body.variable}`}><body><main>
<header><a href="/"><img src="/logos/fph-wordmark-A-black.png" alt="Feeling Pretty Home" width={260}/></a></header>
{children}<p className="disc">As an Amazon Associate I earn from qualifying purchases.</p></main></body></html>)}
