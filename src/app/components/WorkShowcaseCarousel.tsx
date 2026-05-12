"use client";

import { useEffect, useRef, useState } from "react";
import { ImageStack } from "../../components/ImageStack";
import { ProjectGlanceModal, type ProjectGlanceData } from "../../components/ProjectGlanceModal";

type SlideTheme = "dark" | "light";

const CROSS_INDUSTRY_ASSET_PATH = "/Projects/cross-industry";

const CROSS_INDUSTRY_GLANCE: Record<string, ProjectGlanceData> = {
  disney: {
    tags: ["UX Design", "Design for AI", "Inclusive Design"],
    title: "Disney Dream Planner",
    subtitle:
      "Designing a personalised, inclusive group itinerary experience for Disney parks — powered by AI.",
    problem:
      "Disney's current app doesn't account for the diverse needs of group visitors. From planning to booking, someone in every group gets excluded — different accessibility needs, planning styles, and preferences go unaddressed.",
    solution:
      "An AI-driven Dream Planner that generates personalised group itineraries — catering to both organised planners (pre-generated plans) and spontaneous planners (mood, proximity, and accessibility-based on-the-spot suggestions).",
    impact: [
      "🎡 Reduced decision fatigue through personalised group plans",
      "♿ Inclusive by design — accessibility needs built into every recommendation",
      "📊 Operational insights for Disney from aggregated visitor preference data",
    ],
    slides: [
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/disney-interface.png`,
        alt: "Disney Dream Planner interface screens",
        width: 1024,
        height: 576,
        caption: "Interface concept: personalized group itinerary and recommendations.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/disney-flow.png`,
        alt: "Disney Dream Planner planning flow",
        width: 1024,
        height: 576,
        caption: "Interaction flow: collect group preferences and generate shared plans.",
      },
    ],
    domain: "Theme Park Experiences",
    duration: "2.5 Weeks",
    hasFullCaseStudy: false,
  },
  tetrapak: {
    tags: ["UX Strategy", "Persona Mapping", "Journey Mapping", "B2B Design"],
    title: "Tetrapak — Mapping the B2B Digital Experience",
    subtitle:
      "A comprehensive UX strategy engagement for Tetrapak — mapping 20 enterprise personas across a 5-phase B2B journey to define digital product opportunities.",
    problem:
      "Tetrapak's digital products serve an unusually complex buyer ecosystem — from CEOs making strategic decisions to Maintenance Engineers ordering spare parts. No single journey or interface could serve all of them, yet the products were being designed without a clear map of who needed what, when, and why.",
    solution:
      "We built a complete persona ecosystem of 20 roles — categorised as Purchase Decision Makers, Job Executors, and Supporters — and mapped each across five journey phases: Research, Decision, Purchase, Design/Installation, and Inspect/Manage. This gave the product team a strategic foundation to prioritise features by persona-phase intersections.",
    impact: [
      "🗂️ 20 enterprise personas mapped with roles, responsibilities, and digital engagement needs",
      "🔁 5-phase B2B journey defined: Research → Decision → Purchase → Design/Installation → Inspect/Manage",
      "🎯 Clear digital product opportunities identified per persona — from VR retail simulation to real-time equipment monitoring",
    ],
    slides: [
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/tetrapak-b2b-journey.png`,
        alt: "Tetrapak B2B persona and macro journey map",
        width: 1024,
        height: 484,
        caption: "Macro journey map connecting enterprise personas to persona-phase digital opportunities.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/tetrapak zoomed in view.png`,
        alt: "Tetrapak B2B journey map zoomed-in detail",
        width: 1024,
        height: 576,
        caption: "Zoomed-in view of persona-phase digital opportunities.",
      },
    ],
    domain: "B2B Packaging & Industrial · Tetrapak",
    duration: "Capgemini DCX Foundry",
    hasFullCaseStudy: false,
  },
  mbrdi: {
    tags: ["UX Design", "Design for AI", "Conversational Design"],
    title: "Road to Joy — Reimagining the Car Buying Journey",
    subtitle:
      "Designing a smarter, emotionally-rich, and socially engaging car buying experience for MBRDI — powered by AI and collaborative decision making.",
    problem:
      "Car buyers spend 59% of their time researching online, yet the process remains overwhelming, impersonal, and solitary. Existing platforms ignore the psychological and social dimensions of one of the most emotional purchases a person makes — leaving buyers fatigued, not delighted.",
    solution:
      "Auto-Mate — an AI-driven conversational car finder that builds a personalised vehicle recommendation from driver profiles, terrain preferences, and co-passenger needs. Collaborative tools let buyers loop in family or advisors in real time, while styleboard-based configuration makes the experience feel personal, not transactional.",
    impact: [
      "🧠 Reduced decision fatigue through personality-driven, AI-curated car matching",
      "👨‍👩‍👧 Collaborative buying — invite family or advisors into the configuration journey",
      "✨ 8 experience principles defined: Smarter, Intuitive, Personal, Seamless, Emotional, Engaging, Consistent, Simpler",
    ],
    slides: [
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/mbrdi-terrain-configurator.png`,
        alt: "Road to Joy Auto-Mate terrain preference conversational configurator",
        width: 1024,
        height: 684,
        caption: "Auto-Mate captures driver terrain preferences through a conversational configurator.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/mbrdi-styleboard-configurator.png`,
        alt: "Road to Joy styleboard-based car configuration screen",
        width: 1024,
        height: 684,
        caption: "Styleboard-based configuration makes vehicle choices feel personal and visual.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/mbrdi-seat-cover-configurator.png`,
        alt: "Road to Joy collaborative seat cover configuration screen",
        width: 1024,
        height: 684,
        caption: "Collaborators can review options and co-decide inside the buying journey.",
      },
    ],
    domain: "Automotive · MBRDI",
    duration: "Academic Project",
    hasFullCaseStudy: false,
  },
  dicks: {
    tags: ["UX Design", "Design for AI", "Conversational Design"],
    title: "Sporty Mate — AI Assistant for DSG Teammates",
    subtitle:
      "Designing a conversational AI assistant to transform Dick's Sporting Goods sales associates into knowledgeable coaches for every customer.",
    problem:
      "DSG teammates assist customers across dozens of sports and product categories — but can't possibly hold expert-level knowledge across all of them. Customers get inconsistent advice, and teammates lack a reliable, fast way to look up product info, check inventory, or handle complex queries on the floor.",
    solution:
      "Sporty Mate — a conversational AI assistant embedded in the teammate workflow. It trains associates through interactive dialogue, answers real-time product and customer queries, and adapts to three conversation types: product lookup, customer assistance, and training mode.",
    impact: [
      "💬 Conversational-first design reduces lookup friction on the shop floor",
      "📈 Structured training mode accelerates onboarding for new associates",
    ],
    slides: [
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/dsg-interface.png`,
        alt: "Sporty Mate interface screens for DSG teammates",
        width: 1024,
        height: 576,
        caption: "Interface concept: home, daily group learning, chat, and saved notes.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/dsg-conversational-tasks.png`,
        alt: "Sporty Mate conversational task evaluation matrix",
        width: 1024,
        height: 348,
        caption: "Opportunity framing: where conversational AI fits teammate knowledge, skill, and tool needs.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/dsg-product-flow.png`,
        alt: "Sporty Mate product knowledge conversational flow",
        width: 1024,
        height: 550,
        caption: "Conversation pattern: product lookup, product education, and saved outputs.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/dsg-customer-tools-flow.png`,
        alt: "Sporty Mate customer, procedure, and tool access flows",
        width: 1024,
        height: 550,
        caption: "Conversation pattern: customer guidance, procedure support, and quick tool access.",
      },
      {
        src: `${CROSS_INDUSTRY_ASSET_PATH}/dsg-sports-learning-flow.png`,
        alt: "Sporty Mate sports learning conversational flow",
        width: 1024,
        height: 494,
        caption: "Training pattern: quick bites and quiz-style sports knowledge learning.",
      },
    ],
    domain: "Sporting Retail · Team Experience",
    duration: "2 Weeks",
    hasFullCaseStudy: false,
  },
};

type Slide = {
  title: string;
  background: string;
  theme: SlideTheme;
  description: string;
  infoBlock?: {
    heading: string;
    entries: Array<{
      label?: string;
      text: string;
    }>;
  };
  cards: Array<{
    title: string;
    description: string;
    href?: string;
    clickable: boolean;
    showLogoSlot?: boolean;
    logoSrc?: string;
    logoWhiteBg?: boolean;
    logoSquare?: boolean;
    showImageSlot?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    glanceProject?: ProjectGlanceData;
  }>;
  skills: string[];
};

const SLIDES: Slide[] = [
  {
    title: "Design Systems (Not Just Using Them)",
    background: "#C41830",
    theme: "dark",
    description: "Building the foundations products grow on.",
    cards: [
      {
        title: "Design System for E-Commerce",
        description:
          "Built a scalable design system for a high-traffic e-commerce portal, unifying inconsistent components and styles into a cohesive, reusable library.",
        href: "/work/sally-beauty",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/sally-beauty.png",
      },
    ],
    skills: [
      "Component Architecture",
      "Token Design",
      "Atomic Design",
      "Figma Libraries",
      "Dev Handoff",
      "Visual Consistency",
    ],
  },
  {
    title: "0 → 1 & Startup Thinking",
    background: "#406FC6",
    theme: "dark",
    description: "Turning ambiguity into direction.",
    cards: [
      {
        title: "Investment Discovery Platform",
        description:
          "Designed end-to-end experience for institutional investors to discover and execute investments across multiple client portfolios.",
        href: "/work/bonds",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/yubi.png",
      },
      {
        title: "Market Fit Evaluation",
        description:
          "Turned a negative signal into a strategic insight — investigating whether a new user segment was a viable fit for a real estate analytics product.",
        href: "/work/re-analytics",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/re-analytics.png",
        logoSquare: true,
      },
    ],
    skills: [
      "0→1 Product Design",
      "B2B UX",
      "Complex Workflows",
      "Stakeholder Alignment",
      "Rapid Prototyping",
      "Ambiguity Navigation",
    ],
  },
  {
    title: "Research → Product Impact",
    background: "#015C42",
    theme: "dark",
    description: "Turning insights into product decisions.",
    cards: [
      {
        title: "Low Adoption & Enhancement Strategy",
        description:
          "Used observational research and surveys to diagnose low feature adoption, surfacing actionable strategies to improve engagement.",
        href: "/work/cbre",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/cbre.png",
      },
      {
        title: "App Experience Evaluation",
        description:
          "Assessed the Costco app's online shopping journey, identifying friction points and opportunities from browse to checkout.",
        href: "/work/costco",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/costco.png",
      },
    ],
    skills: [
      "Observational Research",
      "Survey Design",
      "Heuristic Evaluation",
      "Usability Testing",
      "Insight Synthesis",
      "Journey Mapping",
    ],
  },
  {
    title: "AI in Practice",
    background: "#1E1E2E",
    theme: "dark",
    description: "Applying AI to real UX workflows.",
    cards: [
      {
        title: "Interactive Onboarding Simulator",
        description:
          "Built a fully functional onboarding simulator in Cursor to improve designer adoption — bridging the gap between docs and hands-on learning.",
        href: "/work/mission-sui",
        clickable: true,
        showLogoSlot: true,
        logoSrc: "/logos/splunk.png",
      },
    ],
    infoBlock: {
      heading: "Also in this space",
      entries: [
        {
          label: "@ Capgemini",
          text: "Tested AI tools across domains and persona archetypes to generate research and design artifacts.",
        },
        {
          label: "@ CBRE",
          text: "Studied how designers integrate AI tools into their day-to-day workflows.",
        },
      ],
    },
    skills: [
      "AI-Assisted Design",
      "Prompt Engineering",
      "Prototyping in Cursor",
      "Tool Evaluation",
      "Onboarding UX",
      "Human-AI Collaboration",
    ],
  },
  {
    title: "Systems Thinking",
    background: "#048995",
    theme: "dark",
    description:
      "Designing beyond screens — across journeys and ecosystems.",
    cards: [
      {
        title: "Unified In-Store Digital Experience",
        description:
          "Developed research-backed concepts for a cross-industry in-store digital experience, mapping cross-functional user needs to adaptable design solutions.",
        href: "/work/instore",
        clickable: true,
      },
    ],
    infoBlock: {
      heading: "Customer Journey Management",
      entries: [
        {
          label: "Customer Journey Management",
          text: "Every time I map a journey and connect fragmented interactions, it surfaces gaps and opportunities I wouldn't see otherwise. Delivered journey maps across pre-sales to post-sales for multiple clients.",
        },
      ],
    },
    skills: [
      "Systems Thinking",
      "Service Design",
      "Ecosystem Mapping",
      "Journey Mapping",
      "Cross-functional Research",
      "Strategic UX",
    ],
  },
  {
    title: "Cross-Industry",
    background: "#F0EBE3",
    theme: "light",
    description: "Learning fast across domains and constraints.",
    cards: [
      {
        title: "My Disney Experience",
        description:
          "Analysed the app journey and proposed an AI-powered personalised group planner experience.",
        clickable: false,
        showImageSlot: true,
        imageSrc: `${CROSS_INDUSTRY_ASSET_PATH}/disney-thumbnail.png`,
        imageAlt: "Disney castle thumbnail preview",
        glanceProject: CROSS_INDUSTRY_GLANCE.disney,
      },
      {
        title: "B2B E-Commerce & Ecosystem",
        description:
          "Evaluated their B2B platform and mapped the full ecosystem of user types and solutions to uncover gaps.",
        clickable: false,
        showImageSlot: true,
        imageSrc: `${CROSS_INDUSTRY_ASSET_PATH}/tetrapak-b2b-journey.png`,
        imageAlt: "Tetrapak B2B journey map preview",
        glanceProject: CROSS_INDUSTRY_GLANCE.tetrapak,
      },
      {
        title: "3D Conversational Configurator",
        description:
          "Proposed a multi-user conversational 3D car configurator enabling real-time collaborative customisation.",
        clickable: false,
        showImageSlot: true,
        imageSrc: `${CROSS_INDUSTRY_ASSET_PATH}/mbrdi-terrain-configurator.png`,
        imageAlt: "MBRDI terrain configurator preview",
        glanceProject: CROSS_INDUSTRY_GLANCE.mbrdi,
      },
      {
        title: "AI Sales Associate Training",
        description:
          "Designed a conversational AI training tool for in-store staff using bite-sized interactive learning.",
        clickable: false,
        showImageSlot: true,
        imageSrc: `${CROSS_INDUSTRY_ASSET_PATH}/dicks-thumbnail.png`,
        imageAlt: "Sporty Mate thumbnail preview",
        glanceProject: CROSS_INDUSTRY_GLANCE.dicks,
      },
    ],
    skills: [
      "Cross-Industry UX",
      "B2B & B2C Design",
      "Conversational AI",
      "Personalisation",
      "Ecosystem Mapping",
      "Innovation Strategy",
    ],
  },
];

export function WorkShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  const slide = SLIDES[index];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const el = sectionRef.current;
    if (!el) return;

    const updateIndexFromScroll = () => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      visibleRef.current = isVisible;

      const totalScrollable = window.innerHeight * (SLIDES.length - 1);
      const progressed = Math.min(
        totalScrollable,
        Math.max(0, -rect.top),
      );
      const nextIndex = Math.round(progressed / window.innerHeight);
      setIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    const scrollToSlide = (targetIndex: number) => {
      const sectionTop = window.scrollY + el.getBoundingClientRect().top;
      const top = sectionTop + targetIndex * window.innerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    };

    updateIndexFromScroll();

    const onKeyDown = (e: KeyboardEvent) => {
      if (!visibleRef.current) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToSlide(Math.min(SLIDES.length - 1, index + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToSlide(Math.max(0, index - 1));
      }
    };
    window.addEventListener("scroll", updateIndexFromScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", updateIndexFromScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, isMobile]);

  const renderCard = (card: Slide["cards"][number]) => {
    const cardClassName = `work-glass-card ${card.clickable ? "work-glass-card--clickable" : "work-glass-card--info"}`;
    const cardContent = (
      <>
        {card.showLogoSlot && (
          <div
            className={`work-card-logo-slot ${card.logoWhiteBg ? "work-card-logo-slot--white" : ""} ${card.logoSquare ? "work-card-logo-slot--square" : ""}`}
            aria-hidden
          >
            {card.logoSrc ? <img src={card.logoSrc} alt="" className="work-card-logo-image" /> : null}
          </div>
        )}
        {card.showImageSlot && (
          <div className="work-card-image-slot" aria-hidden>
            {card.imageSrc ? <img src={card.imageSrc} alt={card.imageAlt ?? ""} className="work-card-image" /> : null}
          </div>
        )}
        <h3 className="work-glass-title">{card.title}</h3>
        <p className="work-glass-desc">{card.description}</p>
        {card.clickable ? <span className="work-cta">Open Case Study →</span> : null}
        {!card.clickable && card.glanceProject ? <span className="work-cta">View at a glance →</span> : null}
      </>
    );

    if (card.clickable) {
      return (
        <a key={card.title} className={cardClassName} href={card.href}>
          {cardContent}
        </a>
      );
    }

    if (card.glanceProject) {
      return (
        <ProjectGlanceModal key={card.title} project={card.glanceProject} triggerClassName="project-glance-trigger-card">
          <div className={cardClassName}>{cardContent}</div>
        </ProjectGlanceModal>
      );
    }

    return (
      <div key={card.title} className={cardClassName}>
        {cardContent}
      </div>
    );
  };

  const renderSlideContent = (activeSlide: Slide, activeIndex: number) => (
    <>
      <h2 className="work-title">{activeSlide.title}</h2>
      <p className="work-description">{activeSlide.description}</p>
      {activeSlide.infoBlock ? (
        <div className="work-cards-with-info">
          <div className={`work-cards ${activeSlide.cards.length > 1 ? "work-cards--dual" : ""}`}>
            {activeSlide.cards.map(renderCard)}
          </div>
          <div className="work-inline-info">
            <p className="work-info-heading">Also in this space</p>
            <div className="work-info-entries">
              {activeSlide.infoBlock.entries.map((entry, i) => (
                <div key={`${entry.label ?? "entry"}-${i}`} className="work-info-entry">
                  {entry.label && <p className="work-info-label">{entry.label}</p>}
                  <p className="work-info-text">{entry.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={`work-cards ${activeIndex === 5 ? "work-cards--grid4" : activeSlide.cards.length > 1 ? "work-cards--dual" : ""}`}>
          {activeSlide.cards.map(renderCard)}
        </div>
      )}
    </>
  );

  const handleMobileTrackScroll = () => {
    const track = mobileTrackRef.current;
    if (!track) return;

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  };

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className={`work-showcase ${isMobile ? "work-showcase--mobile" : ""} ${slide.theme === "light" ? "work-showcase--light" : ""}`}
      style={{
        backgroundColor: slide.background,
        transition: "background-color 0.4s ease",
        scrollMarginTop: "0px",
        height: isMobile ? "auto" : `calc(${SLIDES.length} * 100vh)`,
      }}
      aria-roledescription="carousel"
      aria-label="Selected work themes"
    >
      <div className="work-sticky-shell">
        {isMobile ? (
          <div className="work-mobile-track" ref={mobileTrackRef} onScroll={handleMobileTrackScroll}>
            {SLIDES.map((mobileSlide, mobileIndex) => (
              <article
                key={mobileSlide.title}
                className={`work-mobile-slide ${mobileSlide.theme === "light" ? "work-showcase--light" : ""}`}
                style={{ backgroundColor: mobileSlide.background }}
              >
                <div className={`work-left ${mobileIndex === 5 ? "work-left--full" : ""}`}>
                  {renderSlideContent(mobileSlide, mobileIndex)}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="work-content">
            <div className={`work-left ${index === 5 ? "work-left--full" : ""}`} key={index}>
              {renderSlideContent(slide, index)}
            </div>

            <div
              className={`work-right ${index === 5 ? "work-right--hidden" : ""}`}
              aria-hidden={index === 5}
            >
              <ImageStack slideIndex={index} />
            </div>
          </div>
        )}

        <div className="work-pagination-wrap">
            <nav className="work-pagination" aria-label="Carousel slides">
              {SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${s.title}`}
                  className={i === index ? "is-active" : ""}
                  onClick={() => {
                    const section = sectionRef.current;
                    if (!section) return;

                    if (isMobile) {
                      setIndex(i);
                      const track = mobileTrackRef.current;
                      if (track) {
                        track.scrollTo({
                          left: i * track.clientWidth,
                          behavior: "smooth",
                        });
                      }
                      return;
                    }

                    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
                    const top = sectionTop + i * window.innerHeight;
                    window.scrollTo({ top, behavior: "smooth" });
                  }}
                />
              ))}
            </nav>
        </div>
        <div className="work-skill-strip" aria-label="Slide skills">
          <div className="work-skill-strip-inner">
            {slide.skills.map((skill) => (
              <span key={skill} className="work-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
