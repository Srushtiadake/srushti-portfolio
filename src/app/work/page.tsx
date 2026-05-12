"use client";

import Link from "next/link";

const projects = [
  {
    title: "CBRE",
    description: "UX research and product strategy for workplace and real estate experiences.",
    href: "/work/cbre",
  },
  {
    title: "Bonds",
    description: "Investment discovery and transaction workflows for institutional and retail investors.",
    href: "/work/bonds",
  },
  {
    title: "Costco",
    description: "App experience evaluation across browse, lists, warehouse, and checkout flows.",
    href: "/work/costco",
  },
  {
    title: "Unified In-Store Experience",
    description: "Research-backed cross-industry in-store digital experience framework.",
    href: "/work/instore",
  },
  {
    title: "RE Analytics",
    description: "Market-fit evaluation and research for a real estate analytics platform.",
    href: "/work/re-analytics",
  },
  {
    title: "Sally Beauty",
    description: "Design system foundations for a high-traffic e-commerce experience.",
    href: "/work/sally-beauty",
  },
];

export default function WorkPage() {
  return (
    <main className="work-index-page">
      <div className="work-index-shell">
        <Link href="/" className="work-index-back">
          ← Back
        </Link>
        <header className="work-index-header">
          <p>SELECTED WORK</p>
          <h1>Case studies across research, systems, and product strategy.</h1>
        </header>

        <section className="work-index-grid" aria-label="Project case studies">
          {projects.map((project) => (
            <Link href={project.href} className="work-index-card" key={project.href}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>View case study →</span>
            </Link>
          ))}
        </section>
      </div>

      <style jsx>{`
        .work-index-page {
          min-height: 100vh;
          background: #f7f6f3;
          color: #1a1a1a;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          padding: 48px 24px 96px;
        }

        .work-index-shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .work-index-back {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .work-index-header {
          margin: 64px 0 36px;
          max-width: 720px;
        }

        .work-index-header p {
          color: #888;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .work-index-header h1 {
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: clamp(42px, 6vw, 64px);
          line-height: 1.05;
          font-weight: 400;
        }

        .work-index-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .work-index-card {
          display: block;
          width: 100%;
          min-height: 220px;
          background: #fff;
          border: 1px solid #e8e6e0;
          border-radius: 20px;
          padding: 28px;
          color: #1a1a1a;
          text-decoration: none;
          transition: transform 220ms ease, border-color 220ms ease;
        }

        .work-index-card:hover,
        .work-index-card:focus-visible {
          transform: translateY(-4px);
          border-color: #5b5bd6;
        }

        .work-index-card h2 {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .work-index-card p {
          color: #666;
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .work-index-card span {
          color: #5b5bd6;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
        }

        @media (max-width: 767px) {
          .work-index-page {
            padding: 32px 16px 64px;
          }

          .work-index-header {
            margin: 48px 0 28px;
          }

          .work-index-header h1 {
            font-size: 36px;
          }

          .work-index-grid {
            grid-template-columns: 1fr;
          }

          .work-index-card {
            padding: 24px;
            min-height: auto;
          }
        }
      `}</style>
    </main>
  );
}
