"use client";

import { ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const skillGroups = [
  {
    label: "Product Thinking",
    skills: ["Strategy", "Systems Thinking", "AI-Powered Design", "Inclusive Design", "Design Systems"],
  },
  {
    label: "Research",
    skills: [
      "Generative Research",
      "Usability Testing",
      "Heuristic Evaluation",
      "Interviews",
      "Surveys",
      "Affinity Mapping",
      "Journey Mapping",
      "A/B Testing",
      "Eye Tracking",
      "Responsible AI Research",
    ],
  },
  {
    label: "Design",
    skills: ["Wireframing", "Interaction Design", "Prototyping", "UI Design", "Information Architecture", "User Flows"],
  },
  {
    label: "Tools",
    skills: ["Figma", "Adobe XD", "Illustrator", "SPSS", "UserTesting.com", "HTML/CSS (Beginner)"],
  },
];

const education = [
  {
    degree: "MS Information Studies · HCI",
    school: "University of Texas at Austin",
    meta: "2024 – 2026 · GPA 4.0",
    note: "AILLA Lab — usability of digital archives",
  },
  {
    degree: "BDes User Experience Design",
    school: "MIT Institute of Design, India",
    meta: "2018 – 2022 · GPA 8.24/10",
    note: "Samsung Live Project — Galaxy Watch bezel interaction design",
  },
];

const honors = [
  {
    title: "Benonine Muse Scholarship",
    org: "UT Austin · 2024–2025",
  },
  {
    title: "Women for Future Award — Top 20 Finalist",
    org: "Women in Innovation, Capgemini · 2024",
  },
  {
    title: "Employee of the Quarter",
    org: "Capgemini × Sally Beauty · 2023",
  },
  {
    title: "Michelin COP Workshop Speaker",
    org: "Inclusive Design with Generative AI · 2024",
  },
];

const roles = [
  {
    company: "Splunk",
    date: "Jan 2026 – Present",
    title: "Product Design Apprentice",
    bullets: [
      "Investigating onboarding and adoption challenges in a large-scale enterprise design system to define requirements for an onboarding simulator.",
      "Working at the intersection of product strategy and interaction design in a complex, data-heavy enterprise product environment.",
    ],
  },
  {
    company: "UT Austin — School of Information",
    date: "Jan 2026 – Present",
    title: "UX Researcher · Responsible AI Research",
    bullets: [
      "Independent UX research under Dr. Jacek Gwizdka investigating how personalized AI-generated product summaries shape user attention, exploration, and decision-making.",
      "Designing and experimentally evaluating two AI conditions (standard vs. personalized epistemic structuring) to examine effects on attentional diversity and confidence calibration.",
      "Using eye-tracking metrics (fixations, gaze entropy, AOI transitions) and behavioral measures to assess reliance, trust, and information exploration in AI-mediated product discovery.",
      "Focused on Responsible AI, human–AI interaction, and cognitive impacts of personalization and decision-support design in generative systems.",
    ],
  },
  {
    company: "CBRE",
    date: "Jun – Aug 2025",
    title: "UX Research & Operations Intern",
    bullets: [
      "Led generative research across 13 interviews and 44 survey responses to surface unmet user needs and directly shape product strategy.",
      "Translated findings into mid-fidelity prototypes that aligned stakeholders on design direction and fed into the Q4 2025 product roadmap.",
      "Conducted observational field studies, identifying gaps between stated and actual user behavior to inform design improvements.",
    ],
  },
  {
    company: "Capgemini",
    date: "Jul 2022 – May 2024",
    title: "UX Consultant · 22 months",
    bullets: [
      "Designed and implemented a digital design system for Sally Beauty, improving design efficiency by 60% and reducing checkout issues by 20% via A/B testing with 10+ users.",
      "Mapped multi-user B2B journeys and proposed enhanced digital platform features for Tetra Pak — a 20-persona enterprise ecosystem.",
      "Designed a conversational AI experience for Dick's Sporting Goods to improve real-time customer assistance for sales associates.",
      "Proposed inclusive design strategies for Mars Inc. across Pet Care, Snacking, and Food & Nutrition product lines.",
    ],
  },
  {
    company: "GDD Experience Design Studio",
    date: "Jan – Jun 2022",
    title: "UX Design Intern · 6 months",
    bullets: [
      "Designed a B2B investment platform for a fintech startup — end to end: user flows, IA, wireframes, and UI.",
      "Proposed a B2C investment app expanding the brand's reach to individual retail investors.",
    ],
  },
  {
    company: "EQ Technologic",
    date: "Jun – Jul 2021",
    title: "UX Intern · 2 months",
    bullets: [
      "Developed responsive UX guidelines for web-based IDE products and created a design checklist for small-screen optimization.",
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="resume-label">{children}</p>;
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-topbar">
        <div className="resume-topbar-inner">
          <Link href="/" className="resume-back">
            ← Back
          </Link>
          <a className="resume-download" href="/Srushti_Adake_Resume.pdf" download>
            ↓ Download PDF
          </a>
        </div>
      </header>

      <div className="resume-shell">
        <aside className="resume-sidebar">
          <section className="resume-name-block">
            <h1>Srushti Adake</h1>
            <p>Product Designer</p>
          </section>

          <div className="resume-rule" />

          <section className="resume-contact" aria-label="Contact">
            <p>
              <MapPin size={14} strokeWidth={1.8} />
              Austin, Texas
            </p>
            <a href="mailto:adakesrushti@gmail.com">
              <Mail size={14} strokeWidth={1.8} />
              adakesrushti@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/srushti-adake/" target="_blank" rel="noreferrer">
              <ExternalLink size={14} strokeWidth={1.8} />
              linkedin.com/in/srushti-adake
            </a>
          </section>

          <div className="resume-rule" />

          <section>
            <SectionLabel>Skills</SectionLabel>
            <div className="resume-skill-groups">
              {skillGroups.map((group) => (
                <div className="resume-skill-group" key={group.label}>
                  <h2>{group.label}</h2>
                  <div className="resume-pills">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="resume-rule" />

          <section>
            <SectionLabel>Education</SectionLabel>
            <div className="resume-stack">
              {education.map((item) => (
                <article className="resume-small-entry" key={item.degree}>
                  <h2>{item.degree}</h2>
                  <p>{item.school}</p>
                  <span>{item.meta}</span>
                  <em>{item.note}</em>
                </article>
              ))}
            </div>
          </section>

          <div className="resume-rule" />

          <section>
            <SectionLabel>Honors & Affiliations</SectionLabel>
            <div className="resume-stack resume-stack--tight">
              {honors.map((honor) => (
                <article className="resume-honor" key={honor.title}>
                  <h2>{honor.title}</h2>
                  <p>{honor.org}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>

        <section className="resume-main">
          <section className="resume-summary">
            <p>
              A product designer who starts with research and scales with systems thinking — currently focused on
              AI-powered enterprise experiences.
            </p>
            <div className="resume-value-pills">
              <span>Research → Design</span>
              <span>Enterprise Scale</span>
              <span>AI-Forward</span>
            </div>
          </section>

          <section className="resume-experience">
            <SectionLabel>Experience</SectionLabel>
            <div className="resume-section-rule" />

            {roles.map((role) => (
              <article className="resume-role" key={role.company}>
                <div className="resume-role-top">
                  <h2>{role.company}</h2>
                  <span>{role.date}</span>
                </div>
                <p className="resume-role-title">{role.title}</p>
                <div className="resume-bullets">
                  {role.bullets.map((bullet) => (
                    <p key={bullet}>— {bullet}</p>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <p className="resume-updated">Last updated May 2026 · adakesrushti@gmail.com</p>
        </section>
      </div>

      <style jsx>{`
        .resume-page {
          min-height: 100vh;
          background: #f7f6f3;
          color: #1a1a1a;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
        }

        .resume-topbar {
          width: 100%;
          background: #fff;
          border-bottom: 1px solid #e8e6e0;
          padding: 20px 0;
        }

        .resume-topbar-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }

        .resume-back {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .resume-download {
          background: #1a1a1a;
          color: #fff;
          border-radius: 8px;
          padding: 10px 20px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .resume-shell {
          max-width: 860px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 48px;
          padding: 0 24px 72px;
        }

        .resume-sidebar {
          position: sticky;
          top: 0;
          align-self: start;
          padding-top: 48px;
        }

        .resume-main {
          min-width: 0;
          padding-top: 48px;
          padding-left: 48px;
          border-left: 1px solid #e8e6e0;
        }

        .resume-name-block h1 {
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: 28px;
          line-height: 1.05;
          font-weight: 400;
          color: #1a1a1a;
        }

        .resume-name-block p {
          color: #5b5bd6;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 4px;
          font-weight: 600;
        }

        .resume-rule {
          height: 1px;
          background: #e8e6e0;
          margin: 20px 0;
        }

        .resume-contact {
          display: grid;
          gap: 8px;
        }

        .resume-contact p,
        .resume-contact a {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #888;
          font-size: 13px;
          line-height: 1.35;
          text-decoration: none;
        }

        .resume-label {
          color: #888;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .resume-skill-groups {
          display: grid;
          gap: 16px;
        }

        .resume-skill-group h2 {
          color: #1a1a1a;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .resume-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .resume-pills span {
          background: #f0efe9;
          border-radius: 20px;
          padding: 4px 10px;
          color: #555;
          font-size: 12px;
          line-height: 1.3;
        }

        .resume-stack {
          display: grid;
          gap: 18px;
        }

        .resume-stack--tight {
          gap: 12px;
        }

        .resume-small-entry h2,
        .resume-honor h2 {
          color: #1a1a1a;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .resume-small-entry p {
          color: #888;
          font-size: 13px;
          line-height: 1.4;
          margin-bottom: 2px;
        }

        .resume-small-entry span,
        .resume-honor p {
          display: block;
          color: #888;
          font-size: 12px;
          line-height: 1.45;
        }

        .resume-small-entry em {
          display: block;
          color: #888;
          font-size: 12px;
          line-height: 1.45;
          font-style: italic;
          margin-top: 5px;
        }

        .resume-summary {
          margin-bottom: 48px;
        }

        .resume-summary > p {
          max-width: 560px;
          color: #1a1a1a;
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: 20px;
          line-height: 1.45;
          font-style: italic;
          font-weight: 400;
          margin-bottom: 18px;
        }

        .resume-value-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .resume-value-pills span {
          background: #5b5bd6;
          color: #fff;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 13px;
          line-height: 1.2;
          font-weight: 500;
        }

        .resume-section-rule {
          height: 1px;
          background: #e8e6e0;
          margin-bottom: 28px;
        }

        .resume-role {
          border-bottom: 1px solid #e8e6e0;
          padding-bottom: 32px;
          margin-bottom: 32px;
        }

        .resume-role-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 24px;
          margin-bottom: 8px;
        }

        .resume-role-top h2 {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .resume-role-top span {
          color: #888;
          font-size: 13px;
          line-height: 1.3;
          white-space: nowrap;
        }

        .resume-role-title {
          color: #5b5bd6;
          font-size: 13px;
          line-height: 1.4;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .resume-bullets {
          display: grid;
          gap: 9px;
        }

        .resume-bullets p {
          color: #444;
          font-size: 14px;
          line-height: 1.7;
        }

        .resume-updated {
          color: #888;
          text-align: center;
          font-size: 12px;
          line-height: 1.4;
          margin-top: 8px;
        }

        @media (max-width: 767px) {
          .resume-topbar {
            padding: 14px 0;
          }

          .resume-topbar-inner {
            padding: 0 16px;
            gap: 12px;
          }

          .resume-back,
          .resume-download {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
          }

          .resume-download {
            padding: 11px 16px;
          }

          .resume-shell {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 0 16px 64px;
          }

          .resume-sidebar {
            position: static;
            width: 100%;
            padding-top: 32px;
          }

          .resume-main {
            width: 100%;
            padding-top: 40px;
            padding-left: 0;
            border-left: none;
          }

          .resume-name-block h1 {
            font-size: 38px;
            line-height: 1;
          }

          .resume-name-block p {
            font-size: 14px;
            line-height: 1.4;
          }

          .resume-rule {
            margin: 24px 0;
          }

          .resume-contact {
            gap: 12px;
          }

          .resume-contact p,
          .resume-contact a {
            min-height: 28px;
            font-size: 15px;
            line-height: 1.45;
          }

          .resume-label {
            font-size: 11px;
            margin-bottom: 16px;
          }

          .resume-skill-groups {
            gap: 20px;
          }

          .resume-skill-group h2 {
            font-size: 13px;
            margin-bottom: 8px;
          }

          .resume-pills {
            gap: 8px;
          }

          .resume-pills span {
            font-size: 14px;
            line-height: 1.35;
            padding: 7px 12px;
          }

          .resume-stack {
            gap: 22px;
          }

          .resume-small-entry h2,
          .resume-honor h2 {
            font-size: 16px;
            line-height: 1.35;
          }

          .resume-small-entry p {
            font-size: 15px;
            line-height: 1.5;
          }

          .resume-small-entry span,
          .resume-honor p,
          .resume-small-entry em {
            font-size: 14px;
            line-height: 1.5;
          }

          .resume-summary {
            margin-bottom: 44px;
          }

          .resume-summary > p {
            font-size: 24px;
            line-height: 1.35;
          }

          .resume-value-pills {
            gap: 10px;
          }

          .resume-value-pills span {
            font-size: 14px;
            padding: 8px 14px;
          }

          .resume-role {
            padding-bottom: 34px;
            margin-bottom: 34px;
          }

          .resume-role-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .resume-role-top h2 {
            font-size: 19px;
            line-height: 1.25;
          }

          .resume-role-top span {
            white-space: normal;
            font-size: 15px;
          }

          .resume-role-title {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .resume-bullets {
            gap: 12px;
          }

          .resume-bullets p {
            font-size: 16px;
            line-height: 1.75;
          }

          .resume-updated {
            font-size: 13px;
            line-height: 1.5;
          }
        }
      `}</style>
    </main>
  );
}
