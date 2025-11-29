import Link from "next/link";

export default function Community() {
  return (
    <div className="app-container">
      <h1 className="title">Create Community</h1>
      <p className="tagline">Build your community with Nimbus</p>
      
      <Link href="/">
        <button className="btn btn-secondary">Back to Home</button>
      </Link>
    </div>
  );
}
