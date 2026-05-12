import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { missionSui } from "../../../data/projects/mission-sui";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import ms from "./mission-sui.module.css";

export const metadata: Metadata = {
  title: "Mission SUI — Design System Onboarding | Srushti",
  description: missionSui.meta.subtitle,
};

const {
  meta,
  images,
  tldr,
  problem,
  research,
  competitiveLandscape,
  solution,
  learningLoop,
  futureVisionSection,
  futureVision,
  impact,
  impactNote,
  faqs,
  reflections,
} = missionSui;

const YEAR = "2026";

function StudyImage({
  src,
  alt,
  fullWidth,
  className,
  priority,
}: {
  src: string;
  alt: string;
  fullWidth?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fullWidth ? 1920 : 780}
      height={fullWidth ? 1080 : 520}
      className={className}
      sizes={fullWidth ? "100vw" : "(max-width: 820px) 100vw, 780px"}
      priority={priority}
    />
  );
}

export default function MissionSuiCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>AI in Practice · Splunk Capstone</p>
        <h1 className={study.heroTitle}>{meta.title}</h1>
        <p className={study.heroSubtitle}>{meta.subtitle}</p>
        <div className={study.statRow}>
          {meta.stats.map((s) => (
            <span key={s.label} className={study.statPill}>
              {s.value} · {s.label}
            </span>
          ))}
        </div>
        <div className={study.tagRow}>
          {meta.tags.map((t) => (
            <span key={t} className={study.tagPill}>
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className={study.fullBleed}>
        <StudyImage src={images.hero} alt="Mission SUI onboarding simulator hero" fullWidth className={study.imgFull} priority />
      </div>

      <div className={`${study.shell} ${study.metaBar}`}>
        <div className={study.metaGrid}>
          <div>
            <div className={study.metaLabel}>Client</div>
            <div className={study.metaValue}>{meta.client}</div>
          </div>
          <div>
            <div className={study.metaLabel}>Role</div>
            <div className={study.metaValue}>{meta.role}</div>
          </div>
          <div>
            <div className={study.metaLabel}>Tools</div>
            <div className={study.metaValue}>{meta.tools.join(" · ")}</div>
          </div>
          <div>
            <div className={study.metaLabel}>Team</div>
            <div className={study.metaValue}>
              {meta.team.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className={study.metaLabel}>Year</div>
            <div className={study.metaValue}>{YEAR}</div>
          </div>
        </div>
      </div>

      <div className={study.shell}>
        <section className={study.tldrSection} aria-labelledby="mission-tldr-heading">
          <p className={study.tldrLabel} id="mission-tldr-heading">
            {tldr.label}
          </p>
          <p className={study.tldrHook}>{tldr.hook}</p>
          <p className={study.tldrBody}>{tldr.scope}</p>
          <p className={study.tldrPayoff}>{tldr.payoff}</p>
          <p className={study.tldrInvite}>{tldr.invite}</p>
        </section>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>01 — THE PROBLEM</p>
        <h2 className={study.secHeading}>{problem.heading}</h2>
        <p className={study.body}>{problem.body}</p>
        <div className={ms.problemCardGrid}>
          {problem.industryProblems.map((p) => (
            <div key={p.title} className={ms.problemCard}>
              <div className={ms.problemCardTitle}>{p.title}</div>
              <p className={ms.problemCardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — THE SHIFT</p>
        <h2 className={study.secHeading}>From documentation-first to mission-based learning</h2>
        <div className={study.calloutRow}>
          {problem.callouts.map((c) => (
            <div
              key={c.type}
              className={`${study.callout} ${c.type === "before" ? study.calloutBefore : study.calloutAfter}`}
            >
              {c.text}
            </div>
          ))}
        </div>
        <div className={study.fullBleed}>
          <StudyImage src={images.theShift} alt="Before and after: documentation-first vs mission-based learning" fullWidth className={study.imgFull} />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — RESEARCH</p>
        <h2 className={study.secHeading}>{research.heading}</h2>
        <span className={ms.researchPill}>{research.participants}</span>
        <div className={ms.researchFindingsRow}>
          {research.findings.map((f) => (
            <div key={f.title} className={ms.researchFindingCard}>
              <div className={ms.researchFindingTitle}>{f.title}</div>
              <p className={ms.researchFindingDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className={ms.opportunityCallout}>{research.opportunity}</div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — COMPETITIVE ANALYSIS</p>
        <h2 className={study.secHeading}>What exists today — and what it misses</h2>
        {competitiveLandscape.map((paragraph, i) => (
          <p key={i} className={study.body}>
            {paragraph}
          </p>
        ))}
        <div className={`${study.fullBleed} ${study.mediaBleedTop}`}>
          <StudyImage
            src={images.competitiveAnalysis}
            alt="Competitive analysis: design system doc sites and onboarding patterns reviewed"
            fullWidth
            className={study.imgFull}
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — THE SOLUTION</p>
        <h2 className={study.secHeading}>{solution.heading}</h2>
        <p className={study.body}>{solution.body}</p>
        <div className={`${study.fullBleed} ${study.mediaBleedTop}`}>
          <StudyImage src={images.simulator} alt="SUI onboarding simulator interface" fullWidth className={study.imgFull} />
        </div>
        <h3 className={ms.tasksSubheading}>Core Simulator Tasks</h3>
        <div className={ms.tableShell}>
          <div className={ms.tableScroll}>
            <table className={ms.dataTable}>
              <thead>
                <tr>
                  <th scope="col">SUI Section</th>
                  <th scope="col">Goal</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Expected Competency</th>
                </tr>
              </thead>
              <tbody>
                {solution.tasks.map((task) => (
                  <tr key={task.section}>
                    <td className={ms.taskSectionCell}>{task.section}</td>
                    <td>{task.goal}</td>
                    <td>
                      <span
                        className={`${ms.priorityBadge} ${
                          task.priority === "Advanced" ? ms.priorityAdvanced : ms.priorityEssential
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td>{task.competency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>06 — LEARNING LOOP</p>
        <h2 className={study.secHeading}>{learningLoop.heading}</h2>
        <p className={study.body}>{learningLoop.intro}</p>
        <div className={ms.learningLoopImageWrap}>
          <Image
            src={images.learningLoop}
            alt="The core learning loop: initiate task, checkpoint, apply"
            width={780}
            height={440}
            className={ms.learningLoopImage}
            sizes="(max-width: 820px) 100vw, 780px"
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>07 — WHAT COULD BE NEXT</p>
        <h2 className={study.secHeading}>{futureVisionSection.title}</h2>
        <p className={study.body}>{futureVisionSection.description}</p>
        <div className={ms.futureVisionRow}>
          {futureVision.map((item) => (
            <div key={item.title} className={ms.futureCard}>
              <div className={ms.futureCardTitle}>{item.title}</div>
              <p className={ms.futureCardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={ms.futureVisionImageWrap}>
          <Image
            src={images.futureVision}
            alt="Future directions: gamified onboarding, page-level tasks, and agent-assisted help"
            width={780}
            height={520}
            className={ms.futureVisionImage}
            sizes="(max-width: 820px) 100vw, 780px"
          />
        </div>
      </section>

      <section className={study.impactSection}>
        <div className={study.impactInner}>
          <h2 className={study.impactTitle}>Impact</h2>
          <div className={study.impactGrid}>
            {impact.map((item) => (
              <div key={item.label}>
                <div className={study.impactValue}>{item.value}</div>
                <div className={study.impactLabel}>{item.label}</div>
              </div>
            ))}
          </div>
          <p className={ms.impactNote}>{impactNote}</p>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>FAQS</p>
        <CaseStudyFaq items={faqs} />
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>REFLECTIONS</p>
        <div className={study.reflectRow}>
          {reflections.map((r) => (
            <article key={r.title} className={study.reflectCard}>
              <h3 className={study.reflectTitle}>{r.title}</h3>
              <p className={study.reflectBody}>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={study.shell}>
        <div className={study.ctaRow}>
          <Link href="/work/re-analytics" className={study.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/sally-beauty" className={study.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
