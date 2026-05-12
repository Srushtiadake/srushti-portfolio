export const sallyBeauty = {
  meta: {
    title: "Building the foundation a beauty retailer's e-commerce platform grows on",
    subtitle: "A 10-month engagement to unify a fragmented design language across mobile, tablet and desktop.",
    tags: ["Design System", "Design Audit", "Web Design"],
    stats: [
      { value: "10 Months", label: "Duration" },
      { value: "3 Platforms", label: "Mobile · Tablet · Desktop" },
      { value: "8 Users", label: "Tested on UserTesting.com" },
      { value: "40+", label: "Components Built" },
    ],
    client: "Sally Beauty",
    role: "UI & UX Designer",
    tools: ["Figma", "Atlassian"],
    team: ["Taleah C. — Director of UX", "Charan Kumar — UX Consultant", "Srushti Adake — UX Consultant"],
  },
  tldr: {
    label: "At a glance",
    hook:
      "Sally Beauty's e-commerce experience read like five different products stitched together — clashing reds, competing button shapes, and no single source of truth for design or dev.",
    scope:
      "Over ten months I helped turn that chaos into a system: a full audit, a three-tier token architecture, atomic components, checkout tested with real customers, accessibility baked in from day one, and documentation stakeholders could actually use.",
    payoff:
      "Outcome: 40+ documented components across mobile, tablet, and desktop; checkout flows validated on UserTesting; Confluence + Figma so PMs and engineers weren’t blocked on designers for every answer.",
    invite:
      "If you want the details — audit boards, token maps, governance, and what I’d do differently next — keep scrolling.",
  },
  images: {
    hero: "/Projects/sally-beauty/hero.avif",
    auditColors: "/Projects/sally-beauty/audit-colors.avif",
    auditButtons: "/Projects/sally-beauty/audit-buttons.svg.png",
    pagesInventory: "/Projects/sally-beauty/pages-inventory.svg.png",
    tokens: "/Projects/sally-beauty/tokens.svg.png",
    tokensHierarchy: "/Projects/sally-beauty/tokens-hierarchy.svg.png",
    components: "/Projects/sally-beauty/components.svg.png",
    actualScenario: "/Projects/sally-beauty/actual-scenario.svg.png",
    checkoutNew: "/Projects/sally-beauty/checkout-new.svg.png",
    accessibility: "/Projects/sally-beauty/accessibility.svg.png",
    emailTemplates: "/Projects/sally-beauty/email-templates.svg.png",
    figmaLibrary: "/Projects/sally-beauty/figma-library.avif",
    changelog: "/Projects/sally-beauty/changelog.avif",
    documentation: "/Projects/sally-beauty/documentation.svg.png",
  },
  problem: {
    heading: "A critical revenue channel built on inconsistency",
    body: "Sally Beauty's e-commerce portal is the primary way customers browse products, place orders, and access services. But years of organic growth had left the platform with no shared design language — multiple button styles, 47+ color variants, and no documented component rationale.",
    callouts: [
      { type: "before", text: "Inconsistent styles, no shared library, design-dev misalignment" },
      { type: "after", text: "A scalable, documented system the whole team could trust" },
    ],
  },
  process: [
    { step: "01", title: "Audit", desc: "Analyse inconsistencies in components and styles on the platform." },
    { step: "02", title: "Research", desc: "Study best practices from leading design systems." },
    { step: "03", title: "Create", desc: "Define styles and design components for a comprehensive system." },
    { step: "04", title: "Evolve", desc: "Document best practices and manage the system for future scale." },
  ],
  testing: {
    heading: "We didn't just build components — we tested them.",
    body: "A One Page Checkout concept was tested with 8 Sally customers on UserTesting.com to validate component decisions.",
    insights: [
      { type: "pass", text: "Users navigated disabled fulfillment tiles independently" },
      { type: "pass", text: "Checkout delivery details were clear and relevant" },
      { type: "pass", text: "End-to-end checkout completed swiftly" },
      { type: "warn", text: "Text and icon sizing needed to be larger" },
    ],
  },
  impact: [
    { value: "40+", label: "Components Built & Documented" },
    { value: "3", label: "Platforms Covered" },
    { value: "8", label: "Users Tested" },
    { value: "A11y", label: "Accessibility Built In From Day One" },
  ],
  faqs: [
    {
      q: "Did you build this system from scratch?",
      a: "Yes — we started with a full audit of the existing site before designing any new component.",
    },
    {
      q: "How did you work with developers?",
      a: "Token decisions were documented in Confluence with usage guidelines and anatomy specs, embedded as live Figma prototypes.",
    },
    {
      q: "How did you handle adoption?",
      a: "By involving stakeholders early, maintaining a changelog, and making documentation accessible beyond just the design team.",
    },
    {
      q: "What would you do differently?",
      a: "Establish a contribution model earlier — a clear process for other designers to propose components without breaking consistency.",
    },
  ],
  reflections: [
    {
      title: "Stakeholder-inclusive systems",
      body: "A design system serves more than designers. Building in Confluence ensured PMs and engineers could reference it independently.",
    },
    {
      title: "Continuity over disruption",
      body: "On a live e-commerce platform, every token decision had to balance improvement with backward compatibility.",
    },
    {
      title: "Naming is design",
      body: "How you name a component determines whether it gets used. Discoverability in Figma is a UX problem too.",
    },
  ],
};
