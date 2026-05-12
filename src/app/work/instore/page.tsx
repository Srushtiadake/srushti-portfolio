import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { instore } from "../../../data/projects/instore";
import { CaseStudyFaq } from "../sally-beauty/CaseStudyFaq";
import study from "../sally-beauty/case-study.module.css";
import is from "./instore.module.css";

export const metadata: Metadata = {
  title: "In-Store Digital Journeys | Capgemini | Srushti",
  description: instore.meta.subtitle,
};

const {
  meta,
  tldr,
  images,
  objective,
  primaryResearch,
  refinedScope,
  personas,
  customerJourney,
  expansionStrategies,
  postResearch,
  impact,
  faqs,
  reflections,
} = instore;

const durationStat = meta.stats.find((s) => s.label === "Duration")?.value ?? "";

const REFLECTION_PULL_QUOTE =
  "Start narrow, then scale — depth before breadth makes the framework stronger.";

const POST_RESEARCH_CALLOUT =
  "The prototypes developed from this research were adopted company-wide as foundational resources for in-store digital experience ideation.";

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

export default function InstoreCaseStudyPage() {
  return (
    <main className={study.page}>
      <div className={`${study.shell} ${study.heroNav}`}>
        <Link href="/" className={study.backLink}>
          ← Work
        </Link>
      </div>

      <header className={`${study.shell} ${study.section}`} style={{ paddingTop: 0 }}>
        <p className={study.heroLabel}>Client Work · Capgemini DCX Foundry</p>
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
        <StudyImage
          src={images.hero}
          alt="In-store digital journeys case study hero"
          fullWidth
          className={study.imgFull}
          priority
        />
      </div>

      <div className={`${study.shell} ${study.metaBar}`}>
        <div className={`${study.metaGrid} ${is.metaGridDivided}`}>
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
        <section className={study.tldrSection} aria-labelledby="instore-tldr-heading">
          <p className={study.tldrLabel} id="instore-tldr-heading">
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
        <h2 className={study.secHeading}>{objective.heading}</h2>
        <p className={study.body}>{objective.body}</p>
        <p className={is.lensCallout}>{objective.lens}</p>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>02 — PRIMARY RESEARCH</p>
        <h2 className={study.secHeading}>{primaryResearch.heading}</h2>
        <p className={study.body}>{primaryResearch.body}</p>

        <div className={is.surveyStructureGrid}>
          <div className={is.surveyStructureCol}>
            <div className={is.surveyStructureCard}>
              <p className={is.surveyBlockKicker}>{primaryResearch.surveyStructure.method.kicker}</p>
              <p className={is.surveyBlockValue}>{primaryResearch.surveyStructure.method.value}</p>
            </div>
            <div className={is.surveyStructureCard}>
              <p className={is.surveyBlockKicker}>{primaryResearch.surveyStructure.platform.kicker}</p>
              <p className={is.surveyBlockValue}>{primaryResearch.surveyStructure.platform.value}</p>
            </div>
            <div className={is.surveyStructureCard}>
              <p className={is.surveyBlockKicker}>{primaryResearch.surveyStructure.demographics.kicker}</p>
              <p className={is.demographicsTotal}>
                <strong>Total participants:</strong> {primaryResearch.surveyStructure.demographics.totalParticipants}
              </p>
            </div>
          </div>

          <div className={is.surveyStructureRight}>
            <div className={is.surveyStructureCard}>
              <p className={is.surveyBlockKicker}>{primaryResearch.surveyStructure.closeEnded.kicker}</p>
              <ul className={is.closeEndedList}>
                {primaryResearch.surveyStructure.closeEnded.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <p className={is.closeEndedNote}>{primaryResearch.surveyStructure.closeEnded.note}</p>
            </div>
          </div>
        </div>

        <div className={is.surveyChartsRow}>
          <div className={is.chartCard}>
            <Image
              src={images.surveyChartGender}
              alt="Survey demographics: gender breakdown, 45 responses — 84.4% female, 15.6% male"
              width={960}
              height={560}
              className={is.chartCardImg}
              sizes="(max-width: 900px) 100vw, 560px"
            />
          </div>
          <div className={is.chartCard}>
            <Image
              src={images.surveyChartFrequency}
              alt="Survey demographics: how often respondents visit fashion retail stores"
              width={960}
              height={560}
              className={is.chartCardImg}
              sizes="(max-width: 900px) 100vw, 560px"
            />
          </div>
        </div>

        <h3 className={study.sectionSubheading}>Survey Insights</h3>
        <div className={is.surveyInsightsGrid}>
          <div className={`${is.insightsColumn} ${is.insightsColumnChallenges}`}>
            <div className={`${is.columnLabel} ${is.columnLabelChallenges}`}>In-store challenges</div>
            <ul className={is.insightList}>
              {primaryResearch.insightsChallenges.map((line) => (
                <li key={line} className={`${is.insightItem} ${is.insightItemCross}`}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${is.insightsColumn} ${is.insightsColumnWants}`}>
            <div className={`${is.columnLabel} ${is.columnLabelWants}`}>What shoppers want</div>
            <ul className={is.insightList}>
              {primaryResearch.insightsWants.map((line) => (
                <li key={line} className={`${is.insightItem} ${is.insightItemCheck}`}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {images.surveyInsights ? (
          <div className={`${study.fullBleed} ${is.mediaBleedTop}`}>
            <StudyImage
              src={images.surveyInsights}
              alt="Survey insights visualization"
              fullWidth
              className={study.imgFull}
            />
          </div>
        ) : null}
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>03 — REFINED SCOPE</p>
        <h2 className={study.secHeading}>{refinedScope.heading}</h2>
        <p className={study.body}>{refinedScope.body}</p>

        <div className={is.refinedScopeLayout}>
          <div>
            <h3 className={is.refinedScopeSubhead}>{refinedScope.focus.heading}</h3>
            <p className={is.refinedScopeIntro}>{refinedScope.focus.intro}</p>
            <ul className={is.refinedScopeArchetypeList}>
              {refinedScope.focus.archetypeOutcomes.map((item) => (
                <li key={item.title} className={is.refinedScopeArchetypeItem}>
                  <span className={is.refinedScopeArchetypeTitle}>{item.title}:</span> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={is.refinedScopeSubhead}>{refinedScope.opportunities.heading}</h3>
            <div className={is.refinedScopeOpportunitiesGrid}>
              {refinedScope.opportunities.items.map((item) => (
                <article key={item} className={is.refinedScopeOpportunityCard}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>04 — PERSONAS</p>
        <h2 className={study.secHeading}>{personas.heading}</h2>
        <p className={study.body}>{personas.body}</p>
        <div className={is.archetypeGrid}>
          {personas.archetypes.map((a) => (
            <article key={a.name} className={is.archetypeCard}>
              <h3 className={is.archetypeName}>{a.name}</h3>
              <p className={is.archetypeDesc}>{a.description}</p>
              <div className={`${is.subSectionLabel} ${is.subSectionLabelGreen}`}>Needs</div>
              <ul className={is.miniList}>
                {a.needs.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className={`${is.subSectionLabel} ${is.subSectionLabelRed}`}>Frustrations</div>
              <ul className={is.miniList}>
                {a.frustrations.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={is.personaBleedStack}>
          <div className={study.fullBleed}>
            <StudyImage
              src={images.persona1}
              alt="User persona — first archetype"
              fullWidth
              className={study.imgFull}
            />
          </div>
          <div className={study.fullBleed}>
            <StudyImage
              src={images.persona2}
              alt="User persona — second archetype"
              fullWidth
              className={study.imgFull}
            />
          </div>
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>05 — CUSTOMER JOURNEY</p>
        <h2 className={study.secHeading}>{customerJourney.heading}</h2>
        <p className={study.body}>{customerJourney.body}</p>
        <div className={`${study.fullBleed} ${is.mediaBleedTop}`}>
          <StudyImage
            src={images.journeyMap}
            alt="Customer journey maps by archetype"
            fullWidth
            className={study.imgFull}
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>06 — EXPANSION STRATEGIES</p>
        <h2 className={study.secHeading}>{expansionStrategies.heading}</h2>
        <p className={study.body}>{expansionStrategies.body}</p>
        <div className={is.industryPillRow}>
          {expansionStrategies.industries.map((ind) => (
            <span key={ind} className={is.industryPill}>
              {ind}
            </span>
          ))}
        </div>
        <div className={is.overlapRow}>
          {expansionStrategies.overlaps.map((line) => (
            <div key={line} className={is.overlapCard}>
              {line}
            </div>
          ))}
        </div>
        <div className={`${study.fullBleed} ${is.mediaBleedTop}`}>
          <StudyImage
            src={images.affinityMap}
            alt="Affinity mapping across industries"
            fullWidth
            className={study.imgFull}
          />
        </div>
      </section>

      <section className={`${study.shell} ${study.section}`}>
        <p className={study.secLabel}>07 — POST RESEARCH</p>
        <h2 className={study.secHeading}>{postResearch.heading}</h2>
        <p className={study.body}>{postResearch.body}</p>
        <div className={is.postResearchCallout}>
          <p className={is.postResearchCalloutText}>{POST_RESEARCH_CALLOUT}</p>
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
        <p className={is.reflectPullQuote}>{REFLECTION_PULL_QUOTE}</p>
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
          <Link href="/work/costco" className={study.ctaLink}>
            ← Previous Project
          </Link>
          <Link href="/work/re-analytics" className={study.ctaLink}>
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
