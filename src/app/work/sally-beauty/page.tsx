import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { sallyBeauty } from "../../../data/projects/sally-beauty";
import { CaseStudyFaq } from "./CaseStudyFaq";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "Sally Beauty — Design System | Srushti",
  description: sallyBeauty.meta.subtitle,
};

const { meta, images, problem, process, testing, impact, faqs, reflections, tldr } = sallyBeauty;

const durationStat = meta.stats.find((s) => s.label === "Duration")?.value ?? meta.stats[0]?.value;

function isUnoptimized(src: string) {
  return src.endsWith(".svg") || src.endsWith(".svg.png");
}

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
  const isSvg = src.endsWith(".svg");
  return (
    <Image
      src={src}
      alt={alt}
      width={fullWidth ? 1920 : 780}
      height={fullWidth ? 1080 : 520}
      className={className}
      sizes={fullWidth ? "100vw" : "(max-width: 820px) 100vw, 780px"}
      unoptimized={isSvg || isUnoptimized(src)}
      priority={priority}
    />
  );
}

/** Full image, natural aspect — no letterboxing, no crop (width/height are optimization hints only). */
function NaturalImage({
  src,
  alt,
  sizes,
  fullBleed,
  className,
  layoutWidth = 2000,
  layoutHeight = 1200,
}: {
  src: string;
  alt: string;
  sizes: string;
  fullBleed?: boolean;
  className?: string;
  /** Intrinsic ratio hint for Next/Image layout (does not crop; real height follows the file). */
  layoutWidth?: number;
  layoutHeight?: number;
}) {
  const wrap = fullBleed ? styles.naturalFullBleed : styles.naturalFramed;
  return (
    <div className={[wrap, className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt={alt}
        width={layoutWidth}
        height={layoutHeight}
        sizes={sizes}
        className={styles.imgNatural}
        style={{ width: "100%", height: "auto" }}
        unoptimized={isUnoptimized(src)}
      />
    </div>
  );
}

/** Fixed-height frame (`.problemCoverCell`): image covers area; position sets crop anchor. */
function CoverFillImage({
  src,
  alt,
  sizes,
  objectPosition = "left center",
}: {
  src: string;
  alt: string;
  sizes: string;
  objectPosition?: string;
}) {
  return (
    <div className={styles.problemCoverCell}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.imgCoverFill}
        style={{ objectPosition }}
        sizes={sizes}
        unoptimized={isUnoptimized(src)}
      />
    </div>
  );
}

export default function SallyBeautyCaseStudyPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.shell} ${styles.heroNav}`}>
        <Link href="/#selected-work" className={styles.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${styles.shell} ${styles.section}`} style={{ paddingTop: 0 }}>
        <p className={styles.heroLabel}>Design System · Sally Beauty</p>
        <h1 className={styles.heroTitle}>{meta.title}</h1>
        <p className={styles.heroSubtitle}>{meta.subtitle}</p>
        <div className={styles.statRow}>
          {meta.stats.map((s) => (
            <span key={s.label} className={styles.statPill}>
              {s.value} · {s.label}
            </span>
          ))}
        </div>
        <div className={styles.tagRow}>
          {meta.tags.map((t) => (
            <span key={t} className={styles.tagPill}>
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className={styles.fullBleed}>
        <StudyImage
          src={images.hero}
          alt=""
          fullWidth
          className={styles.imgFull}
          priority
        />
      </div>

      <div className={`${styles.shell} ${styles.metaBar}`}>
        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>Client</div>
            <div className={styles.metaValue}>{meta.client}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Role</div>
            <div className={styles.metaValue}>{meta.role}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Tools</div>
            <div className={styles.metaValue}>{meta.tools.join(" · ")}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Team</div>
            <div className={styles.metaValue}>
              {meta.team.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.metaLabel}>Duration</div>
            <div className={styles.metaValue}>{durationStat}</div>
          </div>
        </div>
      </div>

      <div className={styles.shell}>
        <section className={styles.tldrSection} aria-labelledby="tldr-heading">
          <p className={styles.tldrLabel} id="tldr-heading">
            {tldr.label}
          </p>
          <p className={styles.tldrHook}>{tldr.hook}</p>
          <p className={styles.tldrBody}>{tldr.scope}</p>
          <p className={styles.tldrPayoff}>{tldr.payoff}</p>
          <p className={styles.tldrInvite}>{tldr.invite}</p>
        </section>
      </div>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>01 — THE PROBLEM</p>
        <h2 className={styles.secHeading}>{problem.heading}</h2>
        <p className={styles.body}>{problem.body}</p>
        <div className={styles.calloutRow}>
          {problem.callouts.map((c) => (
            <div
              key={c.type}
              className={`${styles.callout} ${c.type === "before" ? styles.calloutBefore : styles.calloutAfter}`}
            >
              {c.text}
            </div>
          ))}
        </div>
        <div className={styles.problemImgStrip}>
          <CoverFillImage src={images.auditButtons} alt="Button and control audit" sizes="(max-width: 720px) 100vw, 46vw" />
          <CoverFillImage
            src={images.components}
            alt="Component library overview"
            sizes="(max-width: 720px) 100vw, 46vw"
            objectPosition="left top"
          />
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>02 — PROCESS</p>
        <div className={styles.processRow}>
          {process.map((p, idx) => (
            <Fragment key={p.step}>
              <div className={styles.processStep}>
                <div className={styles.processStepInner}>
                  <span className={styles.processNum}>{p.step}</span>
                  <h3 className={styles.processTitle}>{p.title}</h3>
                  <p className={styles.processDesc}>{p.desc}</p>
                </div>
              </div>
              {idx < process.length - 1 ? <div className={styles.processConnector} aria-hidden /> : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <p className={styles.secLabel}>03 — AUDIT</p>
          <h2 className={styles.secHeading}>From inventory to insight</h2>
          <p className={styles.body}>
            We catalogued pages and flows, mapped component variants, and quantified colour and typography drift so the
            team could prioritise fixes with evidence instead of opinions.
          </p>
        </div>
        <NaturalImage
          className={styles.auditImageBelow}
          fullBleed
          src={images.auditColors}
          alt="Audit colour findings"
          sizes="100vw"
        />
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>04 — RESEARCH</p>
        <p className={styles.body} style={{ marginBottom: 24 }}>
          We studied patterns from leading design systems and commerce experiences, then filtered everything through
          Sally Beauty&apos;s brand, accessibility bar, and engineering constraints — so recommendations felt
          aspirational but buildable.
        </p>
        <NaturalImage
          src={images.pagesInventory}
          alt="Page and flow inventory"
          sizes="(max-width: 900px) 100vw, 780px"
          className={styles.researchSingleImg}
        />
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>05 — FOUNDATIONS</p>
        <h2 className={styles.secHeading}>Token Architecture</h2>
        <p className={styles.body} style={{ marginBottom: 28 }}>
          We structured decisions across three tiers: brand tokens (colour, type, motion), semantic tokens (roles like
          surface, border, and text), and component-level tokens that map cleanly to code. That separation keeps theming
          predictable and gives engineering a stable contract as the library grows.
        </p>
        <div className={styles.fullBleed}>
          <StudyImage src={images.tokens} alt="" fullWidth className={styles.imgFull} />
        </div>
        <div className={styles.fullBleed} style={{ marginTop: 24 }}>
          <StudyImage src={images.tokensHierarchy} alt="" fullWidth className={styles.imgFull} />
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>06 — COMPONENTS</p>
        <h2 className={styles.secHeading}>Building for Scale</h2>
        <p className={styles.body} style={{ marginBottom: 28 }}>
          Following atomic design principles, we composed primitives into documented components with states, anatomy,
          and usage guidance — so new screens could ship from shared parts instead of one-off variants.
        </p>
        <div className={styles.fullBleed}>
          <StudyImage src={images.components} alt="" fullWidth className={styles.imgFull} />
        </div>

        <h3 className={styles.sectionSubheading}>Designing components with real data in mind</h3>
        <p className={styles.body}>
          Another consideration was designing components with real data in mind to avoid running into the
          &quot;what-if&quot; roadblock later in delivery.
        </p>
        <ul className={styles.whatIfList}>
          <li>What if the card titles go over one line?</li>
          <li>What if there are product cards with less or additional detail?</li>
        </ul>
        <p className={styles.body} style={{ marginTop: 16 }}>
          Stress-testing layouts with realistic copy and catalogue edge cases kept the system honest before handoff.
        </p>
        <div className={`${styles.fullBleed} ${styles.mediaBleedTop}`}>
          <StudyImage
            src={images.actualScenario}
            alt="Components exercised with realistic catalogue data"
            fullWidth
            className={styles.imgFull}
          />
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>07 — VALIDATION</p>
        <h2 className={styles.secHeading}>{testing.heading}</h2>
        <p className={styles.body}>{testing.body}</p>
        <p className={styles.body} style={{ marginTop: 16 }}>
          We focused UserTesting sessions on the most critical path — checkout — where clarity and trust directly affect
          conversion, then traced findings back to component and token decisions.
        </p>
        <div className={styles.insightRow}>
          {testing.insights.map((ins) => (
            <div
              key={ins.text}
              className={`${styles.insightCard} ${ins.type === "pass" ? styles.insightPass : styles.insightWarn}`}
            >
              <span className={styles.insightIcon}>{ins.type === "pass" ? "✅" : "⚠️"}</span>
              <span>{ins.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.fullBleed} style={{ marginTop: 40 }}>
          <StudyImage src={images.checkoutNew} alt="" fullWidth className={styles.imgFull} />
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>08 — ACCESSIBILITY</p>
        <h2 className={styles.secHeading}>Designed In, Not Bolted On</h2>
        <p className={styles.body}>
          Contrast, focus, and semantics were part of token and component specs from the start — not a late audit.
          Patterns were aligned with WCAG expectations and validated in high-stakes flows like checkout.
        </p>
        <NaturalImage
          className={styles.mediaBleedTop}
          fullBleed
          src={images.accessibility}
          alt="Accessibility considerations in the system"
          sizes="100vw"
        />
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>09 — COMMUNICATIONS</p>
        <h2 className={styles.secHeading}>Accessible transactional email</h2>
        <p className={styles.body}>
          The work went beyond the product UI: we set guidelines for transactional communications as well. Email was
          especially critical for the business — existing templates often failed basic accessibility checks — so we
          defined structure, contrast, and hierarchy patterns that marketing and engineering could reuse with confidence.
        </p>
        <NaturalImage
          className={styles.mediaBleedTop}
          fullBleed
          src={images.emailTemplates}
          alt="Accessible email template patterns"
          sizes="100vw"
        />
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>10 — GOVERNANCE</p>
        <div className={styles.govBlock}>
          <h3 className={styles.govHeading}>Naming &amp; Organisation</h3>
          <p className={styles.govBody}>
            We aligned on a predictable naming scheme for frames, variants, and published components so designers could
            browse the library without tribal knowledge. Cover thumbnails and grouping mirrored how engineers thought
            about packages — reducing duplicate builds and &quot;which one is canonical?&quot; debates in Figma.
          </p>
          <div className={styles.govImageWrapTight}>
            <Image
              src={images.figmaLibrary}
              alt="Figma library organisation and naming"
              width={560}
              height={360}
              sizes="400px"
              className={styles.govRasterImg}
              unoptimized={isUnoptimized(images.figmaLibrary)}
            />
          </div>
        </div>
        <div className={styles.govBlock}>
          <h3 className={styles.govHeading}>Changelog</h3>
          <p className={styles.govBody}>
            Every meaningful token or component change was logged with a short rationale and migration note. That gave
            design and engineering a shared timeline for releases, made regressions easier to trace, and helped PMs
            understand what shipped in each increment without digging through Slack threads.
          </p>
          <div className={styles.govImageWrapTight}>
            <Image
              src={images.changelog}
              alt="Design system changelog"
              width={560}
              height={360}
              sizes="400px"
              className={styles.govRasterImg}
              unoptimized={isUnoptimized(images.changelog)}
            />
          </div>
        </div>
        <div className={styles.govBlock}>
          <h3 className={styles.govHeading}>Documentation</h3>
          <p className={styles.govBody}>
            Created informative, easily accessible documentation with usage rules and component anatomy. We embedded
            live Figma documentation and prototypes in Confluence so the system stayed reachable for PMs, QA, and
            leadership — not only designers and developers — and decisions stayed tied to artefacts people could open
            in one click.
          </p>
          <NaturalImage
            className={styles.mediaBleedTop}
            fullBleed
            src={images.documentation}
            alt="Documentation with usage and anatomy"
            sizes="100vw"
          />
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className={styles.impactInner}>
          <h2 className={styles.impactTitle}>Impact</h2>
          <div className={styles.impactGrid}>
            {impact.map((item) => (
              <div key={item.label}>
                <div className={styles.impactValue}>{item.value}</div>
                <div className={styles.impactLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>FAQS</p>
        <CaseStudyFaq items={faqs} />
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <p className={styles.secLabel}>REFLECTIONS</p>
        <h2 className={styles.secHeading}>How this project helped me grow</h2>
        <div className={styles.reflectRow}>
          {reflections.map((r) => (
            <article key={r.title} className={styles.reflectCard}>
              <h3 className={styles.reflectTitle}>{r.title}</h3>
              <p className={styles.reflectBody}>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.shell}>
        <div className={styles.ctaRow}>
          <Link href="/work/mission-sui" className={styles.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/bonds" className={styles.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
