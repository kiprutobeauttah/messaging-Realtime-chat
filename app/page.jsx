import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="app-container">
      {/* Logo */}
      <div className="logo-wrapper">
        <Image 
          src="/nimbus-logo2.png" 
          alt="Nimbus logo" 
          className="logo"
          width={140}
          height={140}
          priority
        />
      </div>

      {/* Title */}
      <h1 className="title">Nimbus — Instant Connect</h1>

      {/* Navigation Buttons */}
      <nav className="nav-buttons">
        <Link href="/community">
          <button className="btn btn-primary">Create Community</button>
        </Link>

        <Link href="/features">
          <button className="btn btn-secondary">Features</button>
        </Link>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary">Why Nimbus</button>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Register</button>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary">Subscribe Newsletter</button>
        </a>
      </nav>

      <p className="tagline">
        Real-time messaging, communities, and end to end encryption .
      </p>
    </div>
  );
}
