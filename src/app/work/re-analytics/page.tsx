import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { reAnalytics } from "../../../data/projects/re-analytics";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import ra from "./re-analytics.module.css";

export const metadata: Metadata = {
  title: "RE Analytics — Market Fit Research | Srushti",
  description: reAnalytics.meta.subtitle,
};

const {
  meta,
  images,
  tldr,
  overview,
  researchApproach,
  myRole,
  findings,
  challenges,
  impact,
  faqs,
  reflections,
} = reAnalytics;

const durationStat = meta.stats.find((s) => s.label === "Duration")?.value ?? "";

const METHOD_ICONS: Record<string, string> = {
  "Participant Recruitment": "👥",
  Interviews: "🎙️",
  Surveys: "📋",
};

const PULL_QUOTE = "A negative signal is still a signal.";

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

export default function ReAnalyticsCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>0→1 Startups · RE Analytics</p>
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
        <StudyImage src={images.hero} alt="RE Analytics research project hero" fullWidth className={study.imgFull} priority />
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
            <div className={study.metaLabel}>Duration</div>
            <div className={study.metaValue}>{durationStat}</div>
          </div>
        </div>
      </div>

      <div className={study.shell}>
        <section className={study.tldrSection} aria-labelledby="re-analytics-tldr-heading">
          <p className={study.tldrLabel} id="re-analytics-tldr-heading">
            {tldr.label}
          </p>
          <p className={study.tldrHook}>{tldr.hook}</p>
          <p className={study.tldrBody}>{tldr.scope}</p>
          <p className={study.tldrPayoff}>{tldr.payoff}</p>
          <p className={study.tldrInvite}>{tldr.invite}</p>
        </section>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>01 — OVERVIEW</p>
        <h2 className={study.secHeading}>{overview.heading}</h2>
        <p className={study.body}>{overview.body}</p>
        <div className={ra.goalRow}>
          {overview.researchGoals.map((goal, i) => (
            <div key={goal} className={ra.goalCard}>
              <div className={ra.goalNum}>{String(i + 1).padStart(2, "0")}</div>
              <p className={ra.goalText}>{goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — RESEARCH APPROACH</p>
        <h2 className={study.secHeading}>{researchApproach.heading}</h2>
        <p className={study.body}>{researchApproach.body}</p>
        <div className={ra.methodRow}>
          {researchApproach.methods.map((m) => (
            <div key={m.title} className={ra.methodCard}>
              <div className={ra.methodIcon} aria-hidden>
                {METHOD_ICONS[m.title] ?? "•"}
              </div>
              <div className={ra.methodTitle}>{m.title}</div>
              <p className={ra.methodDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
        <div className={ra.imgPair}>
          <Image
            src={images.interviews}
            alt="Interview research"
            width={900}
            height={600}
            className={ra.imgPairImg}
            sizes="(max-width: 720px) 100vw, 45vw"
          />
          <Image
            src={images.surveys}
            alt="Survey research"
            width={900}
            height={600}
            className={ra.imgPairImg}
            sizes="(max-width: 720px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — MY ROLE</p>
        <h2 className={study.secHeading}>{myRole.heading}</h2>
        <ul className={ra.roleList}>
          {myRole.contributions.map((line) => (
            <li key={line} className={ra.roleItem}>
              <span className={ra.roleCheck} aria-hidden>
                ✓
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className={ra.myRoleImageWrap}>
          <StudyImage
            src={images.myRole}
            alt="My role in the RE Analytics practicum"
            className={ra.myRoleImage}
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — FINDINGS</p>
        <h2 className={study.secHeading}>{findings.heading}</h2>
        <p className={study.body}>{findings.body}</p>
        <div className={ra.themeGrid}>
          {findings.themes.map((t) => (
            <div key={t.title} className={ra.themeCard}>
              <div className={ra.themeTitle}>{t.title}</div>
              <p className={ra.themeDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — OUTCOMES</p>
        <h2 className={study.secHeading}>{findings.outcomes.heading}</h2>
        <p className={study.body}>{findings.outcomes.body}</p>
        <div className={ra.recRow}>
          {findings.outcomes.recommendations.map((rec, i) => (
            <div key={rec.title} className={ra.recCard}>
              <div className={ra.recNum}>{String(i + 1).padStart(2, "0")}</div>
              <div className={ra.recTitle}>{rec.title}</div>
              <p className={ra.recDesc}>{rec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>06 — CHALLENGES &amp; LEARNINGS</p>
        <div className={ra.challengeRow}>
          {challenges.map((c) => (
            <div key={c.title} className={ra.challengeCard}>
              <div className={ra.challengeTitle}>{c.title}</div>
              <p className={ra.challengeDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={study.impactSection}>
        <div className={study.impactInner}>
          <h2 className={study.impactTitle}>Impact</h2>
          <div className={`${study.impactGrid} ${ra.impactGrid3}`}>
            {impact.map((item) => (
              <div key={item.label}>
                <div
                  className={`${study.impactValue} ${
                    item.value.includes("Go") ? ra.impactValueSingleLine : ""
                  }`}
                >
                  {item.value}
                </div>
                <div className={study.impactLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>FAQS</p>
        <CaseStudyFaq items={faqs} />
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>REFLECTIONS</p>
        <p className={ra.pullQuote}>{PULL_QUOTE}</p>
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
          <Link href="/work/instore" className={study.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/mission-sui" className={study.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
