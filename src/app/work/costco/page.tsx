import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { costco } from "../../../data/projects/costco";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import cc from "./costco.module.css";

export const metadata: Metadata = {
  title: "Costco App — Usability & IA | Srushti",
  description: costco.meta.subtitle,
};

const {
  meta,
  images,
  tldr,
  objective,
  process,
  informationArchitecture,
  testPlan,
  findings,
  competitorAnalysis,
  recommendations,
  impact,
  faqs,
  reflections,
} = costco;

const durationStat = meta.stats.find((s) => s.label === "Duration")?.value ?? "";

const METHOD_BADGE = "Remote Moderated · Think Aloud Protocol";

const PULL_QUOTE =
  "Mapping the architecture before testing gave us a hypothesis. Testing confirmed it.";

const ONLINE_WAREHOUSE_COMPARISON_IMAGE = "/Projects/costco/online-vs-warehouse.png";
const SHOPPING_LISTS_COMPARISON_IMAGE = "/Projects/costco/shopping-lists-compare.png";
const COMPETITOR_SUMMARY_IMAGE = "/Projects/costco/competitor-summary-v3.png";

const SEARCH_EXPERIENCE_FAIL_PATHS = [
  { path: "Explore > Search", clicks: "2 Clicks" },
  { path: "Explore > Shop > Search", clicks: "3 Clicks" },
  { path: "Explore > Grocery > Bakery & Desserts > Filter", clicks: "4 Clicks" },
  { path: "Explore > Shop > Search > Change Location > Search", clicks: "5 Clicks" },
] as const;

const SEARCH_EXPERIENCE_SUCCESS_PATHS = [
  { path: "Explore > Grocery > Same-Day Delivery > Search", clicks: "4 Clicks" },
  { path: "Explore > Warehouse > Search", clicks: "3 Clicks" },
  { path: "Explore > Shop > Featured Services > Same-Day Delivery > Search", clicks: "5 Clicks" },
] as const;

const SHOPPING_LISTS_SUCCESS_PATHS = [
  {
    label: "Add item to Warehouse List",
    path: "Explore > Warehouse > My Lists > Warehouse Lists > Create New List > Add Item",
    clicks: "6 Clicks",
  },
  {
    label: "Add item to Online List",
    path: "Explore > Shop > Search > Product Card > Add to List",
    clicks: "5 Clicks",
  },
  {
    label: "Alternate path to find lists",
    path: "Explore > Account > Lists > Online/ Warehouse Lists",
    clicks: "4 Clicks",
  },
] as const;

const SHOPPING_LISTS_FAIL_PATHS = [
  {
    path: "Explore > Warehouse > Search > Product Card",
    clicks: "4 Clicks",
  },
  {
    path: "Explore > Warehouse > Search > Product Card > Shop > Search > Product Card > Add to List",
    clicks: "8 Clicks",
  },
] as const;

const HEURISTIC_BREAKDOWN = [
  {
    title: "Match between system and the real world",
    desc: "Users think of shopping as one activity across online and in-store contexts. Splitting these into separate tab experiences breaks that mental model.",
  },
  {
    title: "Consistency and standards",
    desc: "Online and warehouse shopping are separated with different interaction patterns, so users must re-learn navigation between related tasks.",
  },
  {
    title: "Aesthetic and minimalist design",
    desc: "Multiple tabs and parallel pages for delivery modes add UI clutter and increase cognitive load during routine shopping flows.",
  },
  {
    title: "Flexibility and efficiency of use",
    desc: "Separate pathways reduce efficiency. A unified view with clear context switching would better support both new and expert users.",
  },
] as const;

const SHOPPING_LISTS_HEURISTIC_BREAKDOWN = [
  {
    title: "Consistency and standards",
    desc: "Managing lists follows different patterns for warehouse and online shopping, which creates inconsistency and confuses users.",
  },
  {
    title: "Recognition rather than recall",
    desc: "Separate list structures force users to remember where items were added instead of recognizing state at a glance, increasing cognitive load.",
  },
] as const;

const COMPETITOR_SUMMARY_POINTS = [
  "Competitors offer a drop down for Delivery method selection on the Home Page itself.",
  "Competitors provide users all delivery options to choose on the Product Detail Page.",
  "Product listing cards display delivery options and estimated delivery time, saving users from entering the Product Detail Page for this information.",
] as const;

const RECOMMENDATION_LAYER_CHANGES = [
  {
    area: "Unified navigation",
    current: "Shop, Explore, and Warehouse are split into separate tabs with overlapping purposes and buried options.",
    proposed:
      "Combine Shop, Explore, and Warehouse into a single Home flow with clear delivery-type tabs to streamline navigation.",
  },
  {
    area: "Global search",
    current: "Search behavior changes across tabs, forcing users to guess where products can be found.",
    proposed:
      "Provide unified search results across delivery modes, with filters that quickly categorize products by delivery type.",
  },
  {
    area: "Enhancements to product listing cards",
    current: "Users often open product detail pages just to confirm delivery options and timelines.",
    proposed:
      "Show delivery options and estimated times directly on product cards so users can compare choices without extra steps.",
  },
  {
    area: "Consistent list interaction",
    current: "Adding items to lists follows different interaction models, including manual text entry for warehouse lists.",
    proposed:
      "Implement one consistent list interaction pattern for searching and adding products, avoiding manual text entry.",
  },
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

export default function CostcoCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>Research Led · Costco App</p>
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
        <StudyImage src={images.hero} alt="Costco app research case study hero" fullWidth className={study.imgFull} priority />
      </div>

      <div className={`${study.shell} ${study.metaBar}`}>
        <div className={`${study.metaGrid} ${cc.metaGridDivided}`}>
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
        <section className={study.tldrSection} aria-labelledby="costco-tldr-heading">
          <p className={study.tldrLabel} id="costco-tldr-heading">
            {tldr.label}
          </p>
          <p className={study.tldrHook}>{tldr.hook}</p>
          <p className={study.tldrBody}>{tldr.scope}</p>
          <p className={study.tldrPayoff}>{tldr.payoff}</p>
          <p className={study.tldrInvite}>{tldr.invite}</p>
        </section>
      </div>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>01 — OBJECTIVE</p>
        <h2 className={cc.serifSectionHeading}>{objective.heading}</h2>
        <p className={study.body}>{objective.body}</p>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — PROCESS</p>
        <h2 className={study.secHeading}>{process.heading}</h2>
        <p className={study.body}>{process.body}</p>
        <div className={cc.processImageWrap}>
          <StudyImage src={images.process} alt="Research and design process overview" className={cc.processImage} />
        </div>
        <div className={cc.processGrid}>
          {process.steps.map((step) => (
            <div key={step.number} className={cc.processCard}>
              <div className={cc.processNum}>{step.number}</div>
              <div className={cc.processTitle}>{step.title}</div>
              <p className={cc.processDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — INFORMATION ARCHITECTURE</p>
        <h2 className={study.secHeading}>{informationArchitecture.heading}</h2>
        <p className={study.body}>{informationArchitecture.body}</p>
        <div className={cc.processImageWrap}>
          <StudyImage
            src={images.iaCurrent}
            alt="Current Costco app information architecture"
            className={cc.processImage}
          />
        </div>
        <div className={cc.issuePillRow}>
          {informationArchitecture.issues.map((issue) => (
            <div key={issue} className={cc.issuePill}>
              <span className={cc.issueIcon} aria-hidden>
                ⚠️
              </span>
              <span>{issue}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — TEST PLAN</p>
        <h2 className={study.secHeading}>{testPlan.heading}</h2>
        <span className={cc.methodBadge}>{METHOD_BADGE}</span>
        <div className={cc.testPlanSplit}>
          <div>
            <p className={study.metaLabel} style={{ marginBottom: 12 }}>
              Participant demographics
            </p>
            <ul className={cc.demoList}>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>Participants</span>
                {testPlan.participants.count}
              </li>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>Age</span>
                {testPlan.participants.ageGroup}
              </li>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>Location</span>
                {testPlan.participants.location}
              </li>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>App experience</span>
                {testPlan.participants.primaryExperience}
              </li>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>Competitor exposure</span>
                {testPlan.participants.secondaryExperience}
              </li>
              <li className={cc.demoItem}>
                <span className={cc.demoLabel}>E-commerce</span>
                {testPlan.participants.ecommerce}
              </li>
            </ul>
          </div>
          <div>
            <p className={study.metaLabel} style={{ marginBottom: 12 }}>
              Exclusions
            </p>
            <ul className={cc.exclusionList}>
              {testPlan.exclusions.map((line) => (
                <li key={line} className={cc.exclusionItem}>
                  <span className={cc.exclusionIcon} aria-hidden>
                    ✕
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cc.taskGrid}>
          {testPlan.tasks.map((t) => (
            <div key={t.number} className={cc.taskCard}>
              <div className={cc.taskNum}>{t.number}</div>
              <p className={cc.taskText}>{t.task}</p>
            </div>
          ))}
        </div>
        <p className={cc.testNote}>{testPlan.note}</p>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — FINDINGS</p>
        <h2 className={study.secHeading}>{findings.heading}</h2>
        <div className={cc.participantQuotesWrap}>
          <StudyImage
            src={images.participantQuotes}
            alt="Participant quotes from usability testing"
            className={cc.participantQuotesImage}
          />
        </div>
        <h3 className={cc.subsectionHeading}>Key task highlights</h3>
        <div className={cc.findingsGrid}>
          {findings.keyInsights.map((ins) => (
            <div key={ins.title} className={cc.findingCard}>
              <div className={cc.findingTitleRow}>
                <span className={cc.findingTitle}>{ins.title}</span>
                <span className={ins.severity === "High" ? cc.severityHigh : cc.severityMedium}>{ins.severity}</span>
              </div>
              <p className={cc.findingDesc}>{ins.desc}</p>
            </div>
          ))}
        </div>
        <div className={cc.taskNarrativeCard}>
          <h4 className={cc.taskNarrativeHeading}>Task 1: The search experience</h4>
          <div className={cc.taskSummaryRow}>
            <div className={cc.taskSummaryCard}>
              <p className={cc.taskNarrativeLabel}>Task prompt</p>
              <p className={cc.taskNarrativeText}>Find a specific grocery product: Dave&apos;s Killer Bread.</p>
            </div>
            <div className={cc.taskSummaryCard}>
              <p className={cc.taskNarrativeLabel}>Task completion</p>
              <p className={cc.taskNarrativeText}>2 of 6 participants completed this task directly.</p>
            </div>
          </div>
          <div className={cc.taskPathsGrid}>
            <div className={cc.taskPathCard}>
              <p className={cc.taskNarrativeLabel}>Current success paths</p>
              <ul className={cc.pathListCompact}>
                {SEARCH_EXPERIENCE_SUCCESS_PATHS.map((item, i) => (
                  <li key={item.path} className={cc.pathItemCompact}>
                    <div className={cc.pathTitle}>Path {i + 1}</div>
                    <div>{item.path}</div>
                    <div className={cc.pathClicks}>Clicks required: {item.clicks}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cc.taskPathCard}>
              <p className={cc.taskNarrativeLabel}>Participant paths that failed</p>
              <ul className={cc.pathListCompact}>
                {SEARCH_EXPERIENCE_FAIL_PATHS.map((item, i) => (
                  <li key={item.path} className={cc.pathItemCompact}>
                    <div className={cc.pathTitle}>Path {i + 1}</div>
                    <div>{item.path}</div>
                    <div className={cc.pathClicks}>Clicks required: {item.clicks}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cc.keyInsightBanner}>
            <span className={cc.keyInsightLabel}>Key insight:</span> Participants expected global search to be the
            shortest route, but most were forced into longer workaround paths.
          </div>
        </div>
        <div className={cc.heuristicReadoutSection}>
          <h4 className={cc.subsectionHeading}>Violations of heuristic principles due to the fragmentation</h4>
          <div className={cc.heuristicReadoutGrid}>
            {HEURISTIC_BREAKDOWN.map((item) => (
              <article key={item.title} className={cc.heuristicCard}>
                <h5 className={cc.heuristicTitle}>{item.title}</h5>
                <p className={cc.heuristicDesc}>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className={cc.processImageWrap}>
            <StudyImage
              src={ONLINE_WAREHOUSE_COMPARISON_IMAGE}
              alt="Side-by-side comparison of Costco online and warehouse interfaces"
              className={cc.processImage}
            />
          </div>
        </div>
        <div className={cc.taskNarrativeCard}>
          <h4 className={cc.taskNarrativeHeading}>Task 2: The shopping lists.</h4>
          <div className={cc.taskSummaryRow}>
            <div className={cc.taskSummaryCard}>
              <p className={cc.taskNarrativeLabel}>02 Shopping Lists</p>
              <p className={cc.taskNarrativeText}>
                We asked participants to add two different products: one for online shopping and one for the warehouse.
              </p>
            </div>
            <div className={cc.taskSummaryCard}>
              <p className={cc.taskNarrativeLabel}>Task completion</p>
              <p className={cc.taskNarrativeText}>
                3 of 6 participants completed this task. Adding items to Warehouse lists was harder than Online lists.
              </p>
            </div>
          </div>
          <div className={cc.taskPathsGrid}>
            <div className={cc.taskPathCard}>
              <p className={cc.taskNarrativeLabel}>Current success paths</p>
              <ul className={cc.pathListCompact}>
                {SHOPPING_LISTS_SUCCESS_PATHS.map((item, i) => (
                  <li key={item.path} className={cc.pathItemCompact}>
                    <div className={cc.pathTitle}>
                      {item.label ?? `Path ${i + 1}`}
                    </div>
                    <div>{item.path}</div>
                    <div className={cc.pathClicks}>Clicks required: {item.clicks}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cc.taskPathCard}>
              <p className={cc.taskNarrativeLabel}>Participant paths that failed</p>
              <ul className={cc.pathListCompact}>
                {SHOPPING_LISTS_FAIL_PATHS.map((item, i) => (
                  <li key={item.path} className={cc.pathItemCompact}>
                    <div className={cc.pathTitle}>Path {i + 1}</div>
                    <div>{item.path}</div>
                    <div className={cc.pathClicks}>Clicks required: {item.clicks}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cc.keyInsightBanner}>
            <span className={cc.keyInsightLabel}>Key insight:</span> Warehouse-list entry and online-list entry follow
            different interaction models, which confuses participants and increases task effort.
          </div>
        </div>
        <div className={cc.heuristicReadoutSection}>
          <h4 className={cc.subsectionHeading}>Violations of heuristic principles due to the fragmentation</h4>
          <div className={cc.heuristicReadoutGrid}>
            {SHOPPING_LISTS_HEURISTIC_BREAKDOWN.map((item) => (
              <article key={item.title} className={cc.heuristicCard}>
                <h5 className={cc.heuristicTitle}>{item.title}</h5>
                <p className={cc.heuristicDesc}>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className={cc.processImageWrap}>
            <StudyImage
              src={SHOPPING_LISTS_COMPARISON_IMAGE}
              alt="Comparison of Costco online and warehouse list management flows"
              className={cc.processImage}
            />
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>06 — COMPETITOR ANALYSIS</p>
        <h2 className={study.secHeading}>{competitorAnalysis.heading}</h2>
        <p className={study.body}>{competitorAnalysis.body}</p>
        <div className={cc.processImageWrap}>
          <StudyImage src={COMPETITOR_SUMMARY_IMAGE} alt="Competitor summary highlights" className={cc.processImage} />
        </div>
        <div className={cc.competitorSummaryGrid}>
          <article className={cc.competitorSummaryCard}>
            <h3 className={cc.competitorSummaryHeading}>What is Costco lacking</h3>
            <ul className={cc.competitorSummaryList}>
              <li>Integration of different delivery methods and simplified delivery method discovery.</li>
            </ul>
          </article>
          <article className={cc.competitorSummaryCard}>
            <h3 className={cc.competitorSummaryHeading}>What did competitors do differently</h3>
            <ul className={cc.competitorSummaryList}>
              {COMPETITOR_SUMMARY_POINTS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>07 — RECOMMENDATIONS</p>
        <h2 className={study.secHeading}>{recommendations.heading}</h2>
        <p className={study.body}>{recommendations.body}</p>
        <p className={study.metaLabel} style={{ marginTop: 16, marginBottom: 8 }}>
          Current IA
        </p>
        <div className={cc.processImageWrap}>
          <StudyImage src={images.iaProposed1} alt="Proposed information architecture — overview one" className={cc.processImage} />
        </div>
        <p className={study.metaLabel} style={{ marginTop: 18, marginBottom: 8 }}>
          Proposed IA
        </p>
        <div className={cc.processImageWrap}>
          <StudyImage src={images.iaProposed2} alt="Proposed information architecture — overview two" className={cc.processImage} />
        </div>
        <h3 className={cc.subsectionHeading}>3 layers of change</h3>
        <div style={{ marginTop: 32 }}>
          {RECOMMENDATION_LAYER_CHANGES.map((ch) => (
            <div key={ch.area} className={cc.changeCard}>
              <div className={cc.changeArea}>{ch.area}</div>
              <div className={`${cc.changeBlock} ${cc.changeCurrent}`}>
                <div className={cc.changeLabel}>Current</div>
                {ch.current}
              </div>
              <div className={`${cc.changeBlock} ${cc.changeProposed}`}>
                <div className={cc.changeLabel}>Proposed</div>
                {ch.proposed}
              </div>
            </div>
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
        <p className={cc.reflectPullQuote}>{PULL_QUOTE}</p>
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
          <Link href="/work/cbre" className={study.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/instore" className={study.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
