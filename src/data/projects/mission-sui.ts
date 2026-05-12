export const missionSui = {
  meta: {
    title: "Mission SUI — A Design System Onboarding Simulator",
    subtitle: "Shifting onboarding from reading about a system to actually interacting with it.",
    tags: ["AI in Practice", "Onboarding UX", "Design Systems", "Prototyping in Cursor"],
    stats: [
      { value: "5", label: "Designers Interviewed" },
      { value: "4", label: "Core Simulator Tasks" },
      { value: "1", label: "Functional Prototype Built in Cursor" },
      { value: "MS", label: "Capstone Project · UT Austin 2026" },
    ],
    client: "Splunk / UT Austin Capstone",
    role: "UX Designer & Researcher",
    tools: ["Cursor", "Claude", "Figma", "React"],
    team: ["Srushti Adake", "Capstone Mentor: Cătălina Manea"],
  },
  tldr: {
    label: "At a glance",
    hook:
      "Design system onboarding usually stops at documentation — but reading about tokens and components is not the same as making the right call inside a real file.",
    scope:
      "For my Splunk / UT Austin capstone I interviewed designers, mapped how they actually learn SUI today, and built Mission SUI: a working onboarding simulator in Cursor with scenario-based tasks, doc-site checkpoints, and a repeatable learn-by-doing loop.",
    payoff:
      "Outcome: a 0→1 functional prototype, four core simulator tracks (tokens, components, React API, blueprints), and a clear story for how hands-on missions could live inside the real doc experience.",
    invite:
      "For the research, competitive lens, full solution breakdown, learning loop, and what could ship next — keep scrolling.",
  },
  problem: {
    heading: "No design system onboards through hands-on exploration. Learning is disconnected from where decisions actually happen.",
    body: "Designers joining a new team face overwhelming documentation with no guided starting path. Reading about a system and making correct decisions within it are fundamentally different skills — yet every existing onboarding tool treats them the same.",
    callouts: [
      {
        type: "before",
        text: "People absorb pages of guidance first, then wander into the file hoping they remembered the rules — with little scaffolding when a choice is ambiguous.",
      },
      {
        type: "after",
        text: "People learn by doing: each mission presents a realistic constraint, and the doc site becomes a checkpoint you open on purpose — not a wall of text you read once and forget.",
      },
    ],
    industryProblems: [
      { title: "No clear entry point", desc: "Comprehensive documentation with no guided starting path leaves users overwhelmed" },
      { title: "Documentation alone doesn't drive adoption", desc: "Reading about a system and making correct decisions within it are fundamentally different skills" },
      { title: "No hands-on, in-context learning", desc: "Tools teach what a system is; none teach how to operate within it" },
      { title: "Tool fragmentation and role misalignment", desc: "Without shared onboarding, teams lose consistency in decisions and handoff" },
    ],
  },
  research: {
    heading: "What The Designers Said",
    participants: "5 designers · Focused on onboarding experience and doc site usage",
    findings: [
      { title: "Discovery was unstructured", desc: "Onboarding happens through colleagues and office hours, not structured introduction." },
      { title: "The doc site is a reference, not a starting point", desc: "Designers consult it reactively, mid-project, not proactively." },
      { title: "Design–dev alignment happens through SUI", desc: "The doc site is the shared source of truth for resolving component conversations." },
    ],
    opportunity: "A structured introduction covering SUI basics, common pitfalls, and design-to-code pathways would fill the gap that currently relies on informal peer discovery.",
  },
  competitiveLandscape: [
    "I compared how mature design systems onboard newcomers by reading public doc sites and walkthroughs from Salesforce Lightning, Atlassian Design System, Shopify Polaris, IBM Carbon, and Material Design — alongside community-made Figma tutorials and a few brand-led deep dives (including Shopify’s own education content and REI’s Cedar system).",
  ],
  solution: {
    heading: "SUI Onboarding Simulator",
    body: "Mission SUI packages onboarding as a sequence of constrained exercises: each track asks you to make a real system choice (tokens, components, API affordances, full flows) and explains why it matters before you move on. The prototype is intentionally small — enough to prove that progressive disclosure, inline checks, and doc deep-links can sit in one flow without replacing the existing site.",
    tasks: [
      { section: "Design Tokens", goal: "Apply correct token categories instead of raw values", priority: "Essential", competency: "Uses tokens instead of raw values in every design decision" },
      { section: "Components", goal: "Understand what SUI supports & what requires a custom build", priority: "Essential", competency: "Component use cases and capabilities" },
      { section: "React API", goal: "Validate design decisions and reduce handoff gaps", priority: "Advanced", competency: "Identify if a behavior is supported via props" },
      { section: "Blueprints", goal: "Design a complete CRUD flow using SUI components", priority: "Essential", competency: "Composes multi-step flows without introducing new patterns" },
    ],
  },
  learningLoop: {
    heading: "Core Learning Loop",
    intro:
      "Every exercise in the Simulator runs on the same loop — no matter which SUI topic you’re practicing, you always move through the same rhythm. You start from a concrete scenario (not a wall of documentation), pull in the smallest slice of guidance that answers the decision in front of you, then get feedback that ties your choice back to system rules before you advance. That repetition is intentional: it builds muscle memory for how to operate inside SUI, not just what the system contains.",
  },
  futureVisionSection: {
    title: "Three directions after the pilot",
    description:
      "The first release focused on designers, but the same loop applies anywhere people need to internalize rules under time pressure. These directions sketch how the experience could scale — from lightweight motivation to contextual help to always-on guidance.",
  },
  futureVision: [
    { title: "Gamified approach", desc: "Tasks, badges, milestones for continued engagement" },
    { title: "Page/Section-level onboarding", desc: "Context-specific tasks & guidelines on effective use on every page" },
    { title: "Agent-assisted onboarding", desc: "Chatbot embedded in the doc site for continuous learning" },
  ],
  impact: [
    { value: "5", label: "Designers Interviewed" },
    { value: "4", label: "Core Onboarding Tasks Designed" },
    { value: "0→1", label: "Functional Simulator Built in Cursor" },
    { value: "3", label: "Future Vision Directions Identified" },
  ],
  impactNote:
    "This work also forms a foundation to expand onboarding beyond designers — the same mission-and-checkpoint structure can eventually support PMs, engineers, and other partners who need to reason about SUI without living in Figma every day.",
  faqs: [
    {
      q: "Is this a real working prototype?",
      a: "Yes — the simulator was fully built in Cursor as a functional web prototype, not just a Figma mockup. This was a deliberate choice to test real interaction patterns.",
    },
    {
      q: "Why did you build it in Cursor instead of Figma?",
      a: "Figma prototypes can't replicate real input validation, progressive disclosure logic, or embedded documentation links. The simulator needed to actually work to be testable.",
    },
    {
      q: "Who was the target user?",
      a: "Designers newly onboarding to SUI — a design system used by Splunk teams. The research showed informal peer discovery was the primary onboarding method, which this replaces.",
    },
    {
      q: "What was your role?",
      a: "I led the full project — user research, competitive analysis, experience design, and building the functional prototype in Cursor as my MS Capstone at UT Austin.",
    },
  ],
  reflections: [
    {
      title: "System-level thinking",
      body: "Zooming out from components to map an entire doc site as a learning environment — using decision trees and content matrices to make design decisions.",
    },
    {
      title: "Building functional prototypes with Cursor",
      body: "Moving beyond Figma and getting the Simulator to actually work changed how I think about prototyping and what's possible without engineering support.",
    },
    {
      title: "Instructional design",
      body: "Designing the learning, not just the interface — deciding what someone needs to know, in what order, and making documentation feel necessary rather than optional.",
    },
  ],
  images: {
    hero: "/Projects/mission-SUI/hero.png",
    theShift: "/Projects/mission-SUI/the-shift.png",
    competitiveAnalysis: "/Projects/mission-SUI/competitive-analysis.png",
    simulator: "/Projects/mission-SUI/simulator.png",
    learningLoop: "/Projects/mission-SUI/learning-loop.png",
    futureVision: "/Projects/mission-SUI/future-vision.png",
  },
};
