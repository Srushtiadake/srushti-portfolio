import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cbre } from "../../../data/projects/cbre";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import cb from "./cbre.module.css";

export const metadata: Metadata = {
  title: "CBRE — UX Research | Srushti",
  description: cbre.meta.subtitle,
};

const { meta, tldr, overview, researchApproach, phaseOne, phaseTwo, impact, faqs, reflections, images } = cbre;

const durationStat = meta.stats.find((s) => s.label === "Total Duration")?.value ?? "";

const REFLECTION_PULL_QUOTE =
  "You can't build better features without first understanding why existing ones are ignored.";

const PRODUCT_USAGE_TAKEAWAYS = [
  "Some uncertainty related to usage, being a new product in their workflow",
  "Found some features not very useful for them",
  "Participants expressed positive feedback about certain features, noting that they were better than what they had used previously.",
] as const;

const PRODUCT_USAGE_IMPACT =
  "These findings provided direct guidance on improving the product by highlighting barriers to use, clarifying confusing features, and emphasizing the features that WECs found most valuable.";

const GENERAL_OBSERVATION_POINTS = [
  "Managing work with a fixed list of tasks or schedules.",
  "How often they move at work",
  "Common requests or interactions with occupants",
  "Small day-to-day tasks that the product does not yet support",
] as const;

const WEC_TOPICS = [
  { title: "Workplace Energy", body: "Keeping office morale up" },
  { title: "Occupants Perception", body: "Making sure employees feel they are being cared for." },
  { title: "Workplace Operations", body: "Ensuring the workspace runs smoothly" },
] as const;

const WEC_QUESTIONS = [
  "What are the tasks that the WECs do associated with maintaining the vibe?",
  "What are some current challenges associated with their tasks?",
  "What they wish they had to better support the workspace?",
] as const;

const WEC_IMPACT =
  "These insights helped suggest new additions and features to the existing product, enabling better and more efficient decision-making, improved workspace management, and a more positive workspace vibe.";

const OCCUPANT_VIBE_METRICS = [
  "Environmental metrics",
  "Social metrics",
  "Utilities metrics",
  "Usage metrics",
  "Emotional & cognitive metrics",
] as const;

const OCCUPANT_ATTITUDINAL_POINTS = [
  "What types of workspace do employees prefer using?",
  "How they describe certain workspace?",
  "How different employees perceive the use of different spaces?",
] as const;

const OCCUPANT_INTROSPECTIVE_POINTS = [
  "How often does the vibe impact work?",
  "Top influencers of workspace vibes",
  "Positive & negative workplace experiences",
  "Time or purpose the environment matters most to them",
  "Reactions to uncomfortable spaces",
  "Factors driving space choice",
] as const;

const OCCUPANT_ADOPTION_POINTS = [
  "If the solution gives smart recommendations with less effort.",
  "Allows easy in-context space booking without the need to open app.",
  "The tone of suggestion would also be an influence",
  "Showing an impact over mood/productivity/performance",
  "Easy mediums and different touch points to get suggestions",
] as const;

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

export default function CbreCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>Client Work · CBRE</p>
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
        <StudyImage src={images.hero} alt="CBRE research case study hero" fullWidth className={study.imgFull} priority />
      </div>

      <div className={`${study.shell} ${study.metaBar}`}>
        <div className={`${study.metaGrid} ${cb.metaGridDivided}`}>
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
              {meta.team.map((name) => (
                <span key={name} style={{ display: "block" }}>
                  {name}
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
        <section className={study.tldrSection} aria-labelledby="cbre-tldr-heading">
          <p className={study.tldrLabel} id="cbre-tldr-heading">
            {tldr.label}
          </p>
          <p className={study.tldrHook}>{tldr.hook}</p>
          <p className={study.tldrBody}>{tldr.scope}</p>
          <p className={study.tldrPayoff}>{tldr.payoff}</p>
          <p className={study.tldrInvite}>{tldr.invite}</p>
        </section>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>OVERVIEW</p>
        <h2 className={cb.overviewSerifHeading}>{overview.heading}</h2>
        <p className={study.body}>{overview.body}</p>
        <div className={cb.phaseCardRow}>
          {overview.phases.map((phase, idx) => (
            <article key={phase.number} className={`${cb.phaseCard} ${idx === 0 ? cb.phaseCard01 : cb.phaseCard02}`}>
              <p className={cb.phaseNumber}>{phase.number}</p>
              <h3 className={cb.phaseLabel}>{phase.label}</h3>
              <p className={cb.phaseDesc}>{phase.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>01 — RESEARCH APPROACH</p>
        <h2 className={study.secHeading}>{researchApproach.heading}</h2>
        <div className={cb.methodStack}>
          {researchApproach.methods.map((method) => (
            <article key={method.category} className={cb.methodCard}>
              <h3 className={cb.methodCategory}>{method.category}</h3>
              <p className={cb.methodObjective}>{method.objective}</p>
              {method.activities.map((activity) => (
                <div key={`${method.category}-${activity.stat}-${activity.desc}`} className={cb.activityRow}>
                  <div className={cb.activityStat}>{activity.stat}</div>
                  <p className={cb.activityDesc}>{activity.desc}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
        <div className={cb.contentImageWrap}>
          <StudyImage src={images.researchApproach} alt="Research approach overview" className={cb.contentImage} />
        </div>
      </section>

      <div className={cb.phaseDividerDark}>
        <div className={cb.phaseDividerInner}>
          <p className={cb.phaseDividerText}>{phaseOne.heading}</p>
        </div>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — PRODUCT USAGE</p>
        <h2 className={study.secHeading}>{phaseOne.productUsage.heading}</h2>
        <p className={study.body}>{phaseOne.productUsage.body}</p>
        <p className={cb.contentLead}>Key takeaways emerged around...</p>
        <div className={cb.tealCardGrid3}>
          {PRODUCT_USAGE_TAKEAWAYS.map((item) => (
            <article key={item} className={cb.tealCard}>
              {item}
            </article>
          ))}
        </div>
        <div className={cb.tealImpactBar}>{PRODUCT_USAGE_IMPACT}</div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — TASK FLOWS</p>
        <h2 className={study.secHeading}>{phaseOne.taskFlows.heading}</h2>
        <p className={study.body}>{phaseOne.taskFlows.body}</p>
        <p className={cb.noteCallout}>{phaseOne.taskFlows.note}</p>
      </section>
      <div className={study.fullBleed}>
        <StudyImage src={images.taskFlow} alt="Task flow research visualization" fullWidth className={study.imgFull} />
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — GENERAL OBSERVATIONS</p>
        <h2 className={study.secHeading}>{phaseOne.generalObservations.heading}</h2>
        <p className={study.body}>{phaseOne.generalObservations.body}</p>
        <div className={cb.tealCardGrid4}>
          {GENERAL_OBSERVATION_POINTS.map((item) => (
            <article key={item} className={cb.tealCard}>
              {item}
            </article>
          ))}
        </div>
      </section>

      <div className={cb.phaseDividerAccent}>
        <div className={cb.phaseDividerInner}>
          <p className={cb.phaseDividerText}>{phaseTwo.heading}</p>
        </div>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — OCCUPANT RESEARCH</p>
        <h2 className={study.secHeading}>{phaseTwo.occupants.heading}</h2>
        <p className={study.body}>{phaseTwo.occupants.body}</p>
        <div className={cb.contentImageWrap}>
          <StudyImage src={images.occupantInsights} alt="Occupant insights synthesis" className={cb.contentImage} />
        </div>
        <p className={cb.contentLeadTight}>
          Mapping how people feel about different spaces helped establish proxies of vibe that reflect subjective descriptions.
        </p>
        <ul className={cb.metricList}>
          {OCCUPANT_VIBE_METRICS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={cb.contentBlock}>
          <p className={cb.contentLead}>We received additional attitudinal data points through both surveys and interviews.</p>
          <div className={cb.tealCardGrid3}>
            {OCCUPANT_ATTITUDINAL_POINTS.map((item) => (
              <article key={item} className={cb.tealCard}>
                {item}
              </article>
            ))}
          </div>
          <div className={cb.tealImpactBar}>
            These attitudinal insights highlighted how people perceive different spaces for different purposes, emphasizing that
            the solution should account for various factors and vibe metrics to provide personalized suggestions.
          </div>
        </div>

        <div className={cb.contentBlock}>
          <p className={cb.contentLead}>Introspective insights into occupant behavior</p>
          <div className={cb.tealCardGrid3}>
            {OCCUPANT_INTROSPECTIVE_POINTS.map((item) => (
              <article key={item} className={cb.tealCard}>
                {item}
              </article>
            ))}
          </div>
          <div className={cb.tealImpactBar}>
            These introspective behavioral insights revealed how people choose spaces and respond when a space does not meet
            their needs, suggesting the solution should help identify appropriate workspaces and allow flexible switching.
          </div>
        </div>

        <div className={cb.contentBlock}>
          <p className={cb.contentLead}>Insights into what would actively make people use the solution</p>
          <div className={cb.tealCardGrid3}>
            {OCCUPANT_ADOPTION_POINTS.map((item) => (
              <article key={item} className={cb.tealCard}>
                {item}
              </article>
            ))}
          </div>
          <div className={cb.tealImpactBar}>
            This multimodal insight opened discussions around on-the-spot discovery and seamless adoption, and informed a
            journey-map direction for positioning touchpoints across distinct purposes.
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>06 — WEC RESEARCH</p>
        <h2 className={study.secHeading}>{phaseTwo.wecs.heading}</h2>
        <p className={study.body}>{phaseTwo.wecs.body}</p>
        <div className={cb.contentBlock}>
          <div className={cb.tealCardGrid3}>
            {WEC_TOPICS.map((item) => (
              <article key={item.title} className={cb.tealCard}>
                <div className={cb.tealCardTitle}>{item.title}</div>
                <div>{item.body}</div>
              </article>
            ))}
          </div>
          <p className={cb.contentLead}>I analyzed additional findings from the interviews to learn...</p>
          <div className={cb.tealCardGrid3}>
            {WEC_QUESTIONS.map((item) => (
              <article key={item} className={cb.tealCard}>
                {item}
              </article>
            ))}
          </div>
          <div className={cb.tealImpactBar}>{WEC_IMPACT}</div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>07 — STAKEHOLDER READOUT</p>
        <h2 className={study.secHeading}>{phaseTwo.stakeholderReadout.heading}</h2>
        <p className={study.body}>
          Showcasing the benchmarking activity helped stakeholders understand what competitor products offer and how those
          findings could guide differentiated offerings.
        </p>
      </section>
      <div className={`${study.shell} ${cb.stackGap24}`}>
        <div className={cb.contentImageWrap}>
          <StudyImage src={images.prototypeBenchmarking} alt="Benchmarking matrix and competitive scan" className={cb.contentImage} />
        </div>
      </div>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 32, paddingBottom: 32 }}>
        <p className={study.body}>
          Since I was presenting to stakeholders, simply reading insights did not create enough clarity or momentum.
        </p>
        <p className={study.body}>
          I translated the insights into Figma Make AI prototypes so stakeholders could understand the implications faster.
          This activity aligned product direction with user expectations and competitive advantage.
        </p>
      </section>
      <div className={`${study.shell} ${cb.stackGap24}`}>
        <div className={cb.contentImageWrap}>
          <StudyImage src="/Projects/cbre/prototype.png" alt="Figma Make AI prototype concept one" className={cb.contentImage} />
        </div>
      </div>
      <div className={`${study.shell} ${cb.stackGap24}`}>
        <div className={cb.contentImageWrap}>
          <StudyImage src="/Projects/cbre/prototype-2.png" alt="Figma Make AI prototype concept two" className={cb.contentImage} />
        </div>
      </div>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 24, paddingBottom: 24 }}>
        <p className={cb.disclaimerAlert}>
          Disclaimer: Prototype contents are intentionally blurred and not fully legible due to non-disclosure constraints.
          The visuals shown above are representative examples of the direction and format used in stakeholder readouts.
        </p>
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
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>FAQS</p>
        <CaseStudyFaq items={faqs} />
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>REFLECTIONS</p>
        <p className={cb.reflectPullQuote}>{REFLECTION_PULL_QUOTE}</p>
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
            ← In-Store Research
          </Link>
          <Link href="/work/costco" className={study.ctaLink}>
            Costco App →
          </Link>
        </div>
      </div>
    </main>
  );
}
