import { boards } from "@/data/boards";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return boards.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const b = boards.find((x) => x.slug === slug);
  return { title: b ? `${b.title} — Feeling Pretty Home` : "Feeling Pretty Home" };
}

export default async function BoardPage({ params }: Props) {
  const { slug } = await params;
  const b = boards.find((x) => x.slug === slug);
  if (!b) notFound();
  return (
    <>
      <a className="back" href="/">← All boards</a>
      <h1 style={{ textAlign: "center" }}>{b.title}</h1>
      <img className="board" src={b.image} alt={b.title} width={1000} height={1500} />
      {b.items.length === 1 ? (
        <div className="single">
          <p className="single-name">{b.items[0].name}</p>
          <a className="shop-btn" href={b.items[0].url} target="_blank" rel="sponsored noopener">Shop it on Amazon</a>
        </div>
      ) : (
        <ol>
          {b.items.map((it, i) => (
            <li key={i}>
              <a href={it.url} target="_blank" rel="sponsored noopener">{it.name}</a>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
