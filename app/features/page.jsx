import Link from "next/link";

export default function Features() {
  return (
    <div className="app-container">
      <h1 className="title">Features</h1>
      <p className="tagline">Discover what makes Nimbus special</p>
      
      <Link href="/">
        <button className="btn btn-secondary">...</button>
      </Link>
    </div>
  );
}
