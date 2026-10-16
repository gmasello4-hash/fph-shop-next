import {boards} from "@/data/boards";
export default function Home(){return(<><p className="script" style={{textAlign:"center"}}>Shop the boards</p>
{boards.map(b=>(<a key={b.slug} href={`/b/${b.slug}`} className="card"><img src={b.image} alt={b.title} width={1000} height={1500}/><h2>{b.title}</h2></a>))}</>)}
