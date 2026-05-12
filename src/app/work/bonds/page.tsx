import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bonds } from "../../../data/projects/bonds";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import bd from "./bonds.module.css";

export const metadata: Metadata = {
  title: "Bonds Investment UX | Srushti",
  description: bonds.meta.subtitle,
};

const {
  meta,
  tldr,
  overview,
  framework,
  strategy,
  scope,
  structure,
  skeleton,
  distributorFlow,
  learnings,
  impact,
  faqs,
  reflections,
  images,
} = bonds;

const durationStat = meta.stats.find((s) => s.label === "Duration")?.value ?? "";

const REFLECTION_PULL_QUOTE =
  "The explorations are part of the story — showing what didn't work makes the final design more defensible.";

const INSTITUTIONAL_ARCHETYPES = [
  "Wealth distribution partners",
  "Independent financial advisors",
  "Advisory firms",
  "Chartered accountants",
  "Family offices",
] as const;

const RETAIL_ARCHETYPES = ["Seasoned investor", "New investor in bonds", "New in digital investment"] as const;

const INSTITUTIONAL_NEEDS = [
  "Efficient way to speed up primarily manual process",
  "Streamlining discovery of investment opportunities, reducing reliance on emails from multiple sales teams",
  "Consolidating multiple client data in one place",
] as const;

const RETAIL_WANTS = [
  "Easy discovery of the right investment opportunities",
  "Simplified understanding of complex investments",
  "Access to validation or advice on what assets to invest in",
] as const;

const RETAIL_APPROACH_TASKS = ["Onboarding", "Bond discovery", "Compare bonds", "View bond details", "Invest flow", "Portfolio review"] as const;

const RETAIL_APPROACH_FACTORS = ["Ease of Use", "Ease of Learning"] as const;

const INSTITUTIONAL_APPROACH_TASKS = ["Explore bonds", "Review bond details", "Settle client trades"] as const;

const INSTITUTIONAL_APPROACH_FACTORS = [
  "Goal clarity",
  "Control visibility",
  "Action-to-result mapping",
  "Feedback quality",
] as const;

const INSTITUTIONAL_APPROACH_EXPERTS = [
  "Product experts",
  "UX experts",
  "Tech engineers",
  "Business experts",
] as const;

const WEALTH_BROADER_ISSUES = [
  "Noisy action hierarchy reduced save confidence",
  "Long scroll + context switching slowed completion",
] as const;

const WEALTH_RESOLUTIONS = [
  "Clearer hierarchy + explicit confirmations",
  "Grouped client actions with progressive disclosure",
] as const;

const RETAIL_BROADER_ISSUES = [
  "Detail and compare views overloaded first-time users",
  "Repeated navigation choices hurt decision confidence",
] as const;

const RETAIL_RESOLUTIONS = [
  "Staged detail reveal and clearer compare framing",
  "Stronger next-step cues from discovery to purchase",
] as const;

const RETAIL_USER_INSIGHTS = [
  { cause: "Greater product involvement", effect: "Less perception of risk while investing" },
  { cause: "Better product knowledge", effect: "More willingness to invest" },
  { cause: "Better financial training", effect: "More connection and involvement" },
] as const;

const ECOMMERCE_TO_INVESTMENT = [
  {
    from: "Category search & suggestions",
    to: "Bond categories for easier search and decisions",
  },
  {
    from: "Quality product information",
    to: "Full bond details, term explainers, investment calculator",
  },
  {
    from: "Compare items",
    to: "Default comparison + add bonds to compare",
  },
  {
    from: "Customer reviews",
    to: "Expert reviews for validation + expert consultation",
  },
] as const;

const WEALTH_MANAGER_FLOW = [
  { key: "explore", src: images.wealthFlowExplore, alt: "Wealth manager interface flow explore bonds" },
  { key: "compare", src: images.wealthFlowCompare, alt: "Wealth manager interface flow compare bonds" },
  { key: "details", src: images.wealthFlowBondDetails, alt: "Wealth manager interface flow bond details" },
  { key: "offer", src: images.wealthFlowOfferNegotiation, alt: "Wealth manager interface flow offer negotiation" },
  { key: "bulk", src: images.wealthFlowBulkInvestment, alt: "Wealth manager interface flow bulk and individual client investment" },
] as const;

const RETAIL_INVESTOR_FLOW = [
  { key: "home", src: images.retailFlowHomeCollections, alt: "Retail investor home, bond collections, and all bonds" },
  { key: "find", src: images.retailFlowFindCompare, alt: "Retail find ideal investment and compare bonds" },
  { key: "details", src: images.retailFlowBondDetails, alt: "Retail bond details, cashflow, and similar bonds" },
  { key: "txn", src: images.retailFlowTransactionPortfolio, alt: "Retail investment transaction and portfolio views" },
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

export default function BondsCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>Client Work · YUBI</p>
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
        <StudyImage src={images.hero} alt="Bonds investment platform case study hero" fullWidth className={study.imgFull} priority />
      </div>

      <div className={`${study.shell} ${study.metaBar}`}>
        <div className={`${study.metaGrid} ${bd.metaGridDivided}`}>
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
        <section className={study.tldrSection} aria-labelledby="bonds-tldr-heading">
          <p className={study.tldrLabel} id="bonds-tldr-heading">
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
        <h2 className={bd.overviewSerifHeading}>{overview.heading}</h2>
        <p className={study.body}>{overview.body}</p>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>01 — METHODOLOGY</p>
        <h2 className={study.secHeading}>{framework.heading}</h2>
        <p className={bd.mutedItalic}>{framework.subheading}</p>
        <p className={study.body}>{framework.body}</p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Image
          src={images.fivePlanes}
          alt="Five planes of UX framework"
          width={1024}
          height={664}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 28 }}>
        <div className={bd.planeRow}>
          {framework.planes.map((item) => (
            <article key={item.plane} className={bd.planePill}>
              <div className={bd.planeNumber}>{item.number}</div>
              <div className={bd.planeName}>{item.plane}</div>
              <p className={bd.planeFocus}>{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — STRATEGY</p>
        <h2 className={study.secHeading}>{strategy.heading}</h2>
        <p className={study.body}>{strategy.body}</p>
        <div className={bd.userUnderstandingBlock}>
          <h3 className={bd.userUnderstandingTitle}>Our Strategy to bring Consistency</h3>
          <p className={bd.userUnderstandingText}>Look for Similarities, over Differences.</p>
          <Image
            src={images.strategyConsistency}
            alt="Shared and distinct needs across institutional and retail investors"
            width={1024}
            height={412}
            className={study.imgRounded}
            sizes="(max-width: 820px) 100vw, 780px"
          />
          <div className={bd.audienceStack}>
            <article className={bd.audienceCard}>
              <div className={bd.audienceHeader}>
                <h4 className={bd.userType}>Institutional Investors</h4>
                <p className={bd.userMeta}>Interviews with 4 investors</p>
              </div>
              <div className={bd.audienceContent}>
                <div>
                  <h5 className={bd.userSubhead}>Persona Archetypes</h5>
                  <ul className={bd.userList}>
                    {INSTITUTIONAL_ARCHETYPES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className={bd.userSubhead}>What they need</h5>
                  <ul className={bd.userList}>
                    {INSTITUTIONAL_NEEDS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className={bd.audienceCard}>
              <div className={bd.audienceHeader}>
                <h4 className={bd.userType}>Retail Investors</h4>
                <p className={bd.userMeta}>Interviews with 6 investors</p>
              </div>
              <div className={bd.audienceContent}>
                <div>
                  <h5 className={bd.userSubhead}>Persona Archetypes</h5>
                  <ul className={bd.userList}>
                    {RETAIL_ARCHETYPES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className={bd.userSubhead}>What they want</h5>
                  <ul className={bd.userList}>
                    {RETAIL_WANTS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — SCOPE</p>
        <h2 className={study.secHeading}>{scope.heading}</h2>
        <p className={study.body}>{scope.body}</p>
        <div className={bd.journeySharedMap}>
          <p className={bd.journeySharedTitle}>Shared Journey Stages</p>
          <div className={bd.journeyStageRow}>
            {scope.stages.map((stage) => (
              <span key={stage} className={bd.journeyStagePill}>
                {stage}
              </span>
            ))}
          </div>
          <div className={bd.entryPointGrid}>
            <article className={bd.entryPointCard}>
              <p className={bd.entryPointLabel}>Institutional Entry Focus</p>
              <p className={bd.entryPointBody}>Begins with multi-client onboarding and operational setup before opportunity exploration.</p>
            </article>
            <article className={bd.entryPointCard}>
              <p className={bd.entryPointLabel}>Retail Entry Focus</p>
              <p className={bd.entryPointBody}>Begins with opportunity discovery and confidence-building before transaction commitment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Image
          src={images.retailJourney}
          alt="Retail investor journey on current bond investment platforms"
          width={1024}
          height={555}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <Image
          src={images.institutionalJourney}
          alt="Institutional investor journey on current bond investment platforms"
          width={1024}
          height={556}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 28 }}>
        <div className={bd.painSplit}>
          <article className={bd.painGroup}>
            <p className={bd.painGroupTitle}>Retail Investor Pain Points</p>
            <div className={bd.painPointGridPersona}>
              {scope.retailPainPoints.map((item) => (
                <article key={item} className={bd.painPointCard}>
                  ⚠️ {item}
                </article>
              ))}
            </div>
          </article>
          <article className={bd.painGroup}>
            <p className={bd.painGroupTitle}>Institutional Investor Pain Points</p>
            <div className={bd.painPointGridPersona}>
              {scope.institutionalPainPoints.map((item) => (
                <article key={item} className={bd.painPointCard}>
                  ⚠️ {item}
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — STRUCTURE</p>
        <h2 className={study.secHeading}>{structure.heading}</h2>
        <p className={study.body}>{structure.body}</p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Retail Investor Task Flow</p>
        <p className={bd.flowCaptionBody}>
          This flow maps how retail users move from discovery to evaluation and transaction, with key trust and decision checkpoints.
        </p>
        <Image
          src={images.taskFlowRetail}
          alt="Retail investor task flow across bond journey stages"
          width={1024}
          height={576}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <p className={bd.afterImageText}>
          This helped us turn a broad “investing journey” into concrete decision moments — so we could prioritize the screens that reduce confusion (terms, comparisons)
          and increase confidence (guidance, validation, and clearer next steps).
        </p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Institutional Investor Task Flow</p>
        <p className={bd.flowCaptionBody}>
          This flow captures multi-client and operational complexity, including organization setup, order management, and investment execution.
        </p>
        <Image
          src={images.taskFlowInstitutional}
          alt="Institutional investor task flow across bond journey stages"
          width={1024}
          height={576}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <p className={bd.afterImageText}>
          Mapping the operational steps made the “real work” visible — multi-client order placement, negotiation, and settlement. It let us design for efficiency (fewer
          clicks, less re-entry) and reduce risk in high-stakes workflows.
        </p>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — SKELETON</p>
        <h2 className={study.secHeading}>{skeleton.heading}</h2>
        <p className={study.body}>{skeleton.body}</p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Retail Wireframes</p>
        <p className={bd.flowCaptionBody}>Screens that map retail investors from onboarding to transaction and portfolio tracking.</p>
        <Image
          src={images.wireframesRetail}
          alt="Retail investor wireframes"
          width={1024}
          height={523}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <p className={bd.afterImageText}>
          These wireframes gave the team a shared blueprint for what “clarity” looks like — helping us validate information hierarchy, reduce jargon, and ensure key
          reassurance points (risk, returns, and comparables) were easy to find before committing to an investment.
        </p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Institutional Wireframes</p>
        <p className={bd.flowCaptionBody}>Screens that cover multi-client operations for wealth managers across discovery and trade settlement.</p>
        <Image
          src={images.wireframesInstitutional}
          alt="Institutional investor wireframes"
          width={1024}
          height={523}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <p className={bd.afterImageText}>
          For wealth managers, wireframing early was essential to catch workflow bottlenecks — especially around managing multiple clients. It helped us align on
          interaction patterns (batch actions, saved states, confirmations) before moving to higher-fidelity UI.
        </p>
      </section>

      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 36 }}>
        <hr className={bd.skeletonDivider} />
        <p className={study.secLabel}>06 — DESIGN EXPLORATIONS</p>
        <h3 className={study.sectionSubheading}>Explorations &amp; Usability Issues</h3>
        <p className={study.body}>
          We evaluated both wealth manager and retail wireframes early to surface hierarchy, cognition, and workflow issues before moving to high-fidelity design.
        </p>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className={bd.evalApproachCard}>
          <p className={bd.evalApproachTitle}>Institutional (Wealth Manager) Approach</p>
          <div className={bd.approachQuickGrid}>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Tasks</p>
              <div className={bd.chipRow}>
                {INSTITUTIONAL_APPROACH_TASKS.map((task) => (
                  <span key={task} className={bd.quickChip}>
                    {task}
                  </span>
                ))}
              </div>
            </div>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Factors</p>
              <div className={bd.chipRow}>
                {INSTITUTIONAL_APPROACH_FACTORS.map((factor) => (
                  <span key={factor} className={bd.quickChip}>
                    {factor}
                  </span>
                ))}
              </div>
            </div>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Experts</p>
              <div className={bd.chipRow}>
                {INSTITUTIONAL_APPROACH_EXPERTS.map((expert) => (
                  <span key={expert} className={bd.quickChip}>
                    {expert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Wealth Manager Testing — Trade Settlement</p>
        <Image
          src={images.wealthTest1}
          alt="Usability issues observed in wealth manager trade settlement flow"
          width={1024}
          height={454}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Wealth Manager Testing — Bond Exploration &amp; Investment</p>
        <Image
          src={images.wealthTest2}
          alt="Usability issues observed in wealth manager bond exploration and investment flow"
          width={1024}
          height={498}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <div className={bd.broaderSummary}>
          <div>
            <p className={bd.evalApproachSubhead}>Broader Issues</p>
            <ul className={bd.evalApproachList}>
              {WEALTH_BROADER_ISSUES.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className={bd.evalApproachSubhead}>Resolutions Applied</p>
            <ul className={bd.evalApproachList}>
              {WEALTH_RESOLUTIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className={bd.evalApproachCard}>
          <p className={bd.evalApproachTitle}>Retail Investor Approach</p>
          <div className={bd.approachQuickGrid}>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Tasks</p>
              <div className={bd.chipRow}>
                {RETAIL_APPROACH_TASKS.map((task) => (
                  <span key={task} className={bd.quickChip}>
                    {task}
                  </span>
                ))}
              </div>
            </div>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Ratings</p>
              <div className={bd.chipRow}>
                {RETAIL_APPROACH_FACTORS.map((factor) => (
                  <span key={factor} className={bd.quickChip}>
                    {factor}
                  </span>
                ))}
              </div>
            </div>
            <div className={bd.approachQuickCard}>
              <p className={bd.evalApproachSubhead}>Participants</p>
              <div className={bd.chipRow}>
                <span className={bd.quickChip}>2 novice users</span>
                <span className={bd.quickChip}>2 expert users</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${study.shell} ${study.section}`} style={{ paddingTop: 18, paddingBottom: 0 }}>
        <p className={bd.flowCaptionTitle}>Retail Testing — Hierarchy &amp; Cognition Issues</p>
        <Image
          src={images.retailTestIssues}
          alt="Retail investor wireframe issues related to hierarchy and cognition"
          width={1024}
          height={458}
          className={study.imgRounded}
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <div className={bd.broaderSummary}>
          <div>
            <p className={bd.evalApproachSubhead}>Broader Issues</p>
            <ul className={bd.evalApproachList}>
              {RETAIL_BROADER_ISSUES.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className={bd.evalApproachSubhead}>Resolutions Applied</p>
            <ul className={bd.evalApproachList}>
              {RETAIL_RESOLUTIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>07 — FINAL INTERFACE DESIGN</p>
        <h2 className={study.secHeading}>Final Interface Design</h2>
        <p className={study.body}>{distributorFlow.finalDesign.body}</p>
      </section>
      <section className={`${study.shell} ${study.section} ${bd.wealthFlowSection}`}>
        <p className={bd.flowCaptionTitle}>Wealth Manager Interface</p>
        <div className={bd.flowImageStack}>
          {WEALTH_MANAGER_FLOW.map((frame) => (
            <Image
              key={frame.key}
              src={frame.src}
              alt={frame.alt}
              width={1600}
              height={900}
              className={bd.flowImageNoGap}
              sizes="(max-width: 820px) 100vw, 780px"
            />
          ))}
        </div>
      </section>
      <section className={`${study.shell} ${study.section} ${bd.retailInterfaceSection}`}>
        <p className={bd.flowCaptionTitle}>Retail Investor Interface</p>
        <h3 className={`${bd.retailEcommerceSubtitle} ${bd.ecommerceHeadingFirst}`}>Understanding users</h3>
        <p className={study.body}>Retail investors trade on noise and sentiment.</p>
        {RETAIL_USER_INSIGHTS.map((row) => (
          <p key={row.cause} className={study.body}>
            <strong>{row.cause}</strong> → {row.effect}
          </p>
        ))}
        <h3 className={`${bd.retailEcommerceSubtitle} ${bd.ecommerceHeadingSecond}`}>Comparing with e-commerce</h3>
        <p className={study.body}>
          We aimed for an investment experience as simple as shopping online, so we mapped how familiar e-commerce patterns could translate to bonds.
        </p>
        <ul className={`${study.whatIfList} ${bd.retailEcommerceList}`}>
          {ECOMMERCE_TO_INVESTMENT.map((row) => (
            <li key={row.from}>
              <strong>{row.from}</strong> → {row.to}
            </li>
          ))}
        </ul>
        <div className={`${bd.flowImageStack} ${bd.retailImageFlowStack}`}>
          {RETAIL_INVESTOR_FLOW.map((frame) => (
            <Image
              key={frame.key}
              src={frame.src}
              alt={frame.alt}
              width={1024}
              height={576}
              className={bd.flowImageNoGap}
              sizes="(max-width: 820px) 100vw, 780px"
            />
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>08 — LEARNINGS</p>
        <h2 className={study.secHeading}>{learnings.heading}</h2>
        <div className={bd.learningsGrid}>
          {learnings.items.map((item) => (
            <article key={item.title} className={bd.learningCard}>
              <h3 className={bd.learningTitle}>{item.title}</h3>
              <p className={bd.learningBody}>{item.body}</p>
            </article>
          ))}
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
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>FAQS</p>
        <CaseStudyFaq items={faqs} />
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>REFLECTIONS</p>
        <p className={bd.reflectPullQuote}>{REFLECTION_PULL_QUOTE}</p>
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
          <Link href="/work/sally-beauty" className={study.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/cbre" className={study.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
