import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HomeFAQs } from "@/components/HomeFAQs";
import { WorkShowcaseCarousel } from "./components/WorkShowcaseCarousel";

const tools = [
  { name: "Figma", src: "/tools/figma.png" },
  { name: "FigJam", src: "/tools/figjam.png" },
  { name: "Cursor", src: "/tools/cursor.png" },
  { name: "Notion", src: "/tools/notion.png" },
  { name: "Miro", src: "/tools/miro.png" },
  { name: "Maze", src: "/tools/maze.png" },
  { name: "UserTesting", src: "/tools/usertesting.png" },
  { name: "Confluence", src: "/tools/confluence.png" },
  { name: "Atlassian", src: "/tools/atlassian.png" },
  { name: "VS Code", src: "/tools/vscode.png" },
];

const journeyStops = [
  {
    year: "EARLY EXPERIENCE",
    company: "eQ Technologic",
    role: "UX Designer",
    detail: "Designed for complex enterprise workflows where clarity, hierarchy, and decision support mattered.",
    chip: "Enterprise Product",
  },
  {
    year: "FINTECH",
    company: "GDD — Yubi",
    role: "Product Designer",
    detail: "Shaped investment discovery and transaction workflows across institutional and retail contexts.",
    chip: "0→1 Fintech",
  },
  {
    year: "CONSULTING",
    company: "Capgemini",
    role: "UX Consultant",
    detail: "Worked across enterprise and consumer app engagements, translating research into product concepts for clients including Tetrapak, Disney, and MBRDI.",
    chip: "Cross-Industry UX",
  },
  {
    year: "REAL ESTATE TECH",
    company: "CBRE",
    role: "UX Research & Design",
    detail: "Led discovery research and product insights for workplace and real estate product experiences.",
    chip: "UX Research",
  },
  {
    year: "HCI RESEARCH",
    company: "UT Austin",
    role: "Eye Tracking Research",
    detail: "Studied attention, usability, and decision-making through research methods grounded in HCI.",
    chip: "Eye Tracking",
  },
  {
    year: "CAPSTONE",
    company: "Splunk",
    role: "MS Capstone",
    detail: "Built a design system onboarding simulator that turns documentation into guided interaction.",
    chip: "AI & Systems",
  },
];

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "var(--font-dm-sans)",
        background: "var(--color-bg)",
        minHeight: "100vh",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          borderBottom: "1px solid #e8e6e0",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "normal",
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          Srushti.
        </span>
        <div style={{ display: "flex", gap: "36px" }}>
          {["WORK", "RESUME", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={
                item === "WORK"
                  ? "#selected-work"
                  : item === "CONTACT"
                    ? "mailto:adakesrushti@gmail.com"
                    : `/${item.toLowerCase()}`
              }
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "var(--color-text)",
                textDecoration: "none",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── HERO — full viewport ── */}
      <section
        style={{
          height: "calc(100vh - 62px)", // subtract nav height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 48px 40px",
        }}
      >
        {/* Top content */}
        <div>
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#aaa" }} />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.16em",
                color: "var(--color-muted)",
                fontWeight: 500,
              }}
            >
              PRODUCT DESIGNER
            </span>
          </div>

          {/* Hello, I'm Srushti. — one line */}
          <h1
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              flexWrap: "nowrap",
              lineHeight: 1.05,
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "normal",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
            >
              Hello, I&apos;m
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "clamp(38px, 5.5vw, 68px)",
                color: "var(--color-accent)",
              }}
            >
              Srushti.
            </span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(30px, 4vw, 54px)",
              fontWeight: 400,
              lineHeight: 1.25,
              maxWidth: "1040px",
              color: "var(--color-text)",
              marginBottom: "36px",
            }}
          >
            A product designer who starts with research and scales with systems
            thinking.
          </p>

          {/* Meta pills */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontSize: "clamp(16px, 1.3vw, 20px)",
              color: "#555",
              letterSpacing: "0.02em",
            }}
          >
            {[
              "3+ years across startups & enterprise",
              "MS HCI · UT Austin",
              "Previously @ Capgemini, CBRE & Splunk",
            ].map((tag, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && (
                  <span style={{ color: "#ccc" }}>·</span>
                )}
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom — EXPLORE MY WORK centred */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "40px",
          }}
        >
          <a
            href="#selected-work"
            className="explore-link"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "var(--color-text)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            EXPLORE MY WORK
            <span
              className="explore-line"
              aria-hidden
              style={{
                width: "1px",
                height: "44px",
                background: "#a7a7a7",
                transition: "height 180ms ease, background-color 180ms ease",
              }}
            />
          </a>
        </div>
      </section>

      <WorkShowcaseCarousel />

      <section className="about-bento-section" id="about">
        <div className="section-heading section-heading--center about-bento-heading">
          <h2>About</h2>
        </div>

        <div className="about-bento-grid">
          <article className="bento-card bento-card--photo" aria-label="Srushti portrait">
            <img src="/about/srushti.jpg" alt="Srushti" />
          </article>

          <article className="bento-card bento-card--bio">
            <h2>I&apos;m Srushti.</h2>
            <p>
              I turn messy product questions into clear, research-backed design
              decisions. My work sits at the intersection of user insight,
              interaction design, and scalable systems — the place where ideas
              become experiences people can actually use.
            </p>
          </article>

          <article className="bento-card bento-card--interests">
            <p className="bento-label">INTERESTS</p>
            <ul>
              <li>User Research</li>
              <li>Systems Thinking</li>
              <li>AI &amp; Emerging Tech</li>
              <li>Conversation Design</li>
              <li>Narrative &amp; Screenwriting</li>
            </ul>
          </article>

          <article className="bento-card bento-card--personality bento-card--dark">
            <h3>
              RESEARCH
              <br />
              MEETS
              <br />
              SYSTEMS
            </h3>
            <p>That&apos;s my sweet spot.</p>
          </article>

          <article className="bento-card bento-card--status">
            <p className="bento-label">CURRENTLY</p>
            <h3>MS Information Science</h3>
            <p className="bento-muted">UT Austin · May 2026</p>
            <div className="status-line">
              <span aria-hidden />
              Open to full-time opportunities in UX design and UX research
            </div>
          </article>

          <article className="bento-card bento-card--skills">
            <p className="bento-label">SKILLS ✦</p>
            <p>
              Product Strategy · Interaction Design · UI/UX Design · UX Research ·
              Usability Testing · Journey Mapping · Information Architecture ·
              Design Systems · Accessibility · Conversational AI · Prototyping ·
              Stakeholder Storytelling
            </p>
          </article>

          <article className="bento-card bento-card--festival">
            <span className="festival-pill">🏆 International Film Festival Winner</span>
            <h3>
              First narrative sound design — recognised at an international film
              festival.
            </h3>
            <p>Judged by Michelle Couttolenc, an Academy Award winning sound designer.</p>
            <a href="https://www.youtube.com/watch?v=kYPQwESd0O0">Listen →</a>
          </article>

          <article className="bento-card bento-card--voice">
            <p className="bento-label">MY VOICE</p>
            <h3>Thinking out loud</h3>
            <p>
              Writing about design, research, and the messy middle of building
              products.
            </p>
            <a href="https://medium.com/@srushtiadake/the-extraordinary-journey-of-an-ordinary-thing-614d2045e6e4">
              Medium →
            </a>
          </article>

          <article className="bento-card bento-card--screenwriting">
            <p className="bento-label">CURRENTLY EXPLORING</p>
            <h3>Screenwriting &amp; Narrative Design</h3>
            <p>Storytelling is just UX for emotions.</p>
            <span aria-hidden>✨</span>
          </article>

          <article className="bento-card bento-card--location">
            <div className="location-emoji" aria-hidden>
              🤠
            </div>
            <h3>Austin, TX</h3>
            <p>Open to relocation &amp; remote</p>
          </article>

          <article className="bento-card bento-card--stack">
            <p className="bento-label">STACK</p>
            <div className="tool-grid">
              {tools.map((tool) => (
                <div className="tool-item" key={tool.name}>
                  <img src={tool.src} alt="" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-heading section-heading--center">
          <p>MY JOURNEY</p>
          <h2>Designing across enterprise, research, and systems</h2>
        </div>

        <div className="journey-timeline">
          {journeyStops.map((stop) => (
            <article className="journey-stop" key={stop.company}>
              <div className="journey-dot" aria-hidden />
              <p className="journey-year">{stop.year}</p>
              <h3>{stop.company}</h3>
              <p className="journey-role">{stop.role}</p>
              <p className="journey-detail">{stop.detail}</p>
              <span className="journey-chip">{stop.chip}</span>
            </article>
          ))}
        </div>

        <div className="experience-chips" aria-label="Experience highlights">
          <span>3+ Years Industry Experience</span>
          <span>Enterprise + Startup</span>
          <span>Research + Systems Thinking</span>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-header">
          <h2>What people say</h2>
          <p>Kind Words from Collaborators</p>
        </div>

        <div className="testimonials-track" aria-label="Collaborator testimonials">
          <article className="testimonial-card">
            <img
              src="/testimonials/megan.png"
              alt="Megan Creighton Vallejo"
              className="testimonial-avatar"
            />
            <header className="testimonial-meta">
              <h3>Megan Creighton Vallejo</h3>
              <p>UX Research &amp; Design at CBRE</p>
            </header>
            <p className="testimonial-body">
              I had the pleasure of managing Srushti at CBRE this past summer.
              She identified opportunities to leverage AI in UX processes,
              supported our UX Design Symposium, and led complex discovery
              research for one of our newest products. She consistently
              demonstrated strong collaboration with UX and cross-functional
              partners, and impressed all of us with her professionalism,
              intellect, initiative, and flexibility.
            </p>
            <div className="testimonial-highlights">
              {[
                "AI in UX Ops",
                "Discovery Research",
                "Cross-functional Collaboration",
                "Initiative",
                "Self starter",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="testimonial-card">
            <img
              src="/testimonials/taleah.png"
              alt="Taleah Codrington"
              className="testimonial-avatar"
            />
            <header className="testimonial-meta">
              <h3>Taleah Codrington</h3>
              <p>
                Director of UX | Scaling Product Design | Driving Conversion,
                Growth, and Enterprise Impact
              </p>
            </header>
            <p className="testimonial-body">
              Srushti is an indispensable member of our team. Her design
              execution, breadth across UX deliverables, and commitment to
              accessibility consistently stand out. She has shown strong growth
              in Figma, made meaningful contributions to our design system, and
              brings a meticulous approach to edge cases and documentation. Her
              focus on learning and improvement has been vital to our team&apos;s
              growth and effectiveness.
            </p>
            <div className="testimonial-highlights">
              {[
                "Accessibility Advocacy",
                "Design Systems",
                "Edge-case Thinking",
                "Figma Craft",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="testimonial-card">
            <img
              src="/testimonials/chaitanya.png"
              alt="Chaitanya Jambaluri"
              className="testimonial-avatar"
            />
            <header className="testimonial-meta">
              <h3>Chaitanya Jambaluri</h3>
              <p>Senior Manager, User Experience at CBRE</p>
            </header>
            <p className="testimonial-body">
              Srushti&apos;s project was especially difficult because it started from
              a very vague idea. She explored many directions through ideation,
              grounded each decision in research, and translated ambiguity into a
              tangible, high-quality product direction. Seeing that journey from
              uncertainty to clear, backed screens was truly impressive.
            </p>
            <div className="testimonial-highlights">
              {[
                "Ambiguity Navigation",
                "Ideation Depth",
                "Research-backed Design",
                "Strategic Clarity",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="faqs-section">
        <div className="section-heading section-heading--center">
          <p>FAQS</p>
          <h2>Questions you might have</h2>
        </div>
        <HomeFAQs />
      </section>

      <Footer />
    </main>
  );
}
