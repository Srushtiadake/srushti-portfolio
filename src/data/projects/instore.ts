export const instore = {
  meta: {
    title: "Redefining In-Store Digital Journeys",
    subtitle:
      "A UX research engagement for Capgemini DCX Foundry — exploring how digital integration can unify and elevate the in-store shopping experience across retail industries.",
    tags: ["Survey Questionnaire", "Persona", "Journey Mapping", "Affinity Mapping"],
    stats: [
      { value: "2", label: "UX Consultants" },
      { value: "3 Weeks", label: "Duration" },
      { value: "4", label: "Industries Targeted" },
      { value: "2", label: "Customer Archetypes" },
    ],
    client: "Capgemini DCX Foundry",
    role: "UX Consultant",
    tools: ["Google Forms", "Figma", "FigJam"],
    team: ["Srushti Adake (UX Consultant)", "Shreeya Gadkari (UX Consultant)"],
  },
  tldr: {
    label: "At a glance",
    hook:
      "This study mapped how in-store shoppers and digitally guided shoppers experience retail differently, then translated those patterns into one scalable in-store app direction.",
    scope:
      "We ran survey-led primary research, identified recurring pain points and expectations, and synthesized them into two archetypes that guided scope, journey design, and cross-industry opportunities.",
    payoff:
      "Outcome: a clearer bridge between online and offline experiences, plus a practical framework that informed prototype concepts adopted as a reusable internal foundation.",
    invite: "For the full research structure, insights, opportunity framing, and final impact — keep scrolling.",
  },
  objective: {
    heading: "From Aisles to Interactions.",
    body: "To create a unified in-store digital experience, adaptable to clients across industries such as clothing, cosmetics, supermarkets, and furniture. The goal was to design a versatile solution that enhances in-store interactions through digital integration.",
    lens:
      "We started by understanding this through the lens of one industry: clothing — then expanded the framework to cosmetics, supermarkets, furniture, and other in-store scenarios.",
  },
  primaryResearch: {
    heading: "Survey Structure",
    body: "We conducted a survey to gather behavioral insights, focusing on what shoppers expect from the in-store experience in fashion retail.",
    surveyStructure: {
      method: {
        kicker: "01 — Survey Method",
        value: "Structured Questionnaire",
      },
      platform: {
        kicker: "02 — Platform Used",
        value: "Google Forms",
      },
      demographics: {
        kicker: "03 — Participant Demographics",
        totalParticipants: "45",
      },
      closeEnded: {
        kicker: "04 — Close ended Survey Questions",
        questions: [
          "Motivations for shopping in-store over shopping online.",
          "Aspects of in-store experiences valued the most.",
          "Frequency of staff assistance needed when shopping in-store.",
          "Type of assistance required for store associates.",
          "Factors helping to decide what to buy.",
          "Technologies / experiences encountered in the past while shopping in-store.",
          "Challenges faced during shopping experiences.",
        ],
        note:
          "We kept the questions primarily close-ended to ensure quick responses from busy professionals but included an \"Other\" option for additional input.",
      },
    },
    technologiesEncountered: {
      heading: "What technologies or experiences have you encountered while shopping in-store?",
      sublabel: "45 responses",
    },
    insightsChallenges: [
      "Not finding products listed online in physical stores",
      "Offers not displayed clearly",
      "Not able to find available sizes in-store",
      "Interference of store assistants",
      "Store assistants unable to provide product details or offer info",
      "Messy product categorization — hard to find by size or specification",
      "Long wait times for trial rooms and checkout",
      "No clarity on returns and exchange procedures",
    ],
    insightsWants: [
      "Opinion from friends and family",
      "Discounts and offers",
      "Most pairable looks / multiple outfit combinations",
      "Bestselling and trending looks",
      "Similar product recommendations",
      "Physical interaction with the product — quality, material, look and feel",
      "Try before buying",
      "Assistance with sizing",
    ],
  },
  refinedScope: {
    heading: "Bridging the Gap Between Online and Offline",
    body: "This primary research helped us refine our scope and identify the customer archetypes we are targeting.",
    focus: {
      heading: "Designing an in-store app mode to bridge the gap between online and offline shopping",
      intro: "by addressing the needs of two customer archetypes:",
      archetypeOutcomes: [
        {
          title: "For Online Shoppers",
          desc: "Replicates the convenience of online shopping, delivering a seamless, online-like experience within the in-store environment.",
        },
        {
          title: "For In-Store Shoppers",
          desc: "Enhances the shopping journey by resolving common pain points through tech integration, ensuring efficiency and a more enjoyable experience.",
        },
      ],
    },
    opportunities: {
      heading: "Opportunities for Enhancing the In-store Shopping Experience considering the aspects:",
      items: [
        "Streamlining product categorization and helping shoppers find desired products in the store",
        "Achieving the connect between the online and offline experiences",
        "Providing clarity about products' details, offers, and return policies",
        "Giving an online assistance option as an alternative to interacting with store assistants",
        "Offering recommendations based on most trending and pairable products",
        "Addressing queues and wait-time interactions for trial room and checkout process",
      ],
    },
  },
  personas: {
    heading: "User Personas",
    body: "We created user personas following our customer archetypes to further map user needs and goals.",
    archetypes: [
      {
        name: "The Digitally-Guided Shopper",
        description:
          "Relies heavily on online research before entering the store. Expects seamless continuity between the digital and physical shopping experience.",
        needs: ["Online-to-offline product continuity", "Size availability info", "Digital offers visible in-store"],
        frustrations: ["Products online not available in-store", "No digital touchpoints in store", "Unclear promotions"],
      },
      {
        name: "The Spontaneous In-Store Explorer",
        description:
          "Prefers the tactile, discovery-driven in-store experience. Open to digital tools that enhance — not replace — their physical browsing.",
        needs: ["Staff assistance", "Trending and bestselling cues", "Outfit pairing suggestions"],
        frustrations: ["Uninformed staff", "Messy categorization", "Long trial room queues"],
      },
    ],
  },
  customerJourney: {
    heading: "Different Archetype Journeys",
    body: "We envisioned the journey by considering how interactions would unfold in an in-store mode, tailored to the unique preferences and behaviors of the two distinct archetypes.",
  },
  expansionStrategies: {
    heading: "Affinity Mapping",
    body: "Affinity mapping helped us identify overlaps, unique needs, and opportunities for cross-industry in-store solutions.",
    industries: ["Clothing", "Cosmetics", "Supermarkets", "Furniture"],
    overlaps: [
      "Product discovery and availability",
      "Personalized recommendations",
      "Seamless checkout experiences",
      "Digital-physical continuity",
    ],
  },
  postResearch: {
    heading: "Prototyping the Flow",
    body: "Following the research, we developed prototypes representing key concepts, which were adopted company-wide as foundational resources for ideating in-store experiences across various industries.",
  },
  impact: [
    { value: "2", label: "Customer Archetypes Defined" },
    { value: "4", label: "Industries Scoped" },
    { value: "8", label: "Key Pain Points Surfaced" },
    { value: "1", label: "Prototype Suite Adopted Company-Wide" },
  ],
  faqs: [
    {
      q: "Was this a commissioned client project?",
      a: "Yes — this was a UX research engagement conducted during my time as a UX Consultant at Capgemini DCX Foundry. The research and prototypes were adopted as internal foundational resources.",
    },
    {
      q: "Why start with clothing retail specifically?",
      a: "Clothing retail offered the richest variety of in-store digital touchpoints and user behaviors. It served as an ideal starting lens before expanding the framework to other industries.",
    },
    {
      q: "What happened after the research phase?",
      a: "The research directly fed into a prototyping phase — the resulting prototypes became company-wide resources used to ideate in-store digital experiences for clients across industries.",
    },
    {
      q: "What methods did you use for synthesis?",
      a: "We used affinity mapping to cluster insights from survey responses and identify overlaps and unique needs across the two archetypes and multiple target industries.",
    },
  ],
  reflections: [
    {
      title: "Start narrow, then scale",
      body: "Focusing on one industry (clothing) before expanding to others gave us depth before breadth — the insights were far richer for it, and the framework translated naturally.",
    },
    {
      title: "Archetypes over demographics",
      body: "Defining behavioral archetypes rather than demographic personas gave us a more versatile foundation — the archetypes held true across industries, not just clothing retail.",
    },
    {
      title: "Research that ships",
      body: "Seeing the prototypes adopted company-wide reinforced how impactful structured research can be — it's not just insights, it's infrastructure for future design decisions.",
    },
  ],
  images: {
    hero: "/Projects/instore/hero-v2.png",
    surveyChartGender: "/Projects/instore/survey-chart-gender.png",
    surveyChartFrequency: "/Projects/instore/survey-chart-frequency.png",
    surveyChartTechnologies: "/Projects/instore/survey-chart-technologies.png",
    surveyInsights: "",
    refinedScope: "",
    persona1: "/Projects/instore/persona-1.png",
    persona2: "/Projects/instore/persona-2.png",
    journeyMap: "/Projects/instore/journey-map.png",
    affinityMap: "/Projects/instore/affinity-map.png",
  },
};
