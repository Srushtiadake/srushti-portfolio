export const costco = {
  meta: {
    title: "Costco App — From Fragmentation to Cohesion",
    subtitle:
      "A moderated usability evaluation of the Costco app's online shopping experience — identifying pain points and proposing an improved information architecture.",
    tags: ["Heuristic Evaluation", "Usability Testing", "Information Architecture", "Competitor Analysis"],
    stats: [
      { value: "6", label: "Participants Tested" },
      { value: "5 Weeks", label: "Duration" },
      { value: "6", label: "Tasks Designed" },
      { value: "5", label: "Person Research Team" },
    ],
    client: "Academic Project — Costco App Evaluation",
    role: "Student Researcher",
    tools: ["Google Docs", "Figma", "FigJam", "Google Meets"],
    team: [
      "Srushti Adake",
      "Christine Chien",
      "Nawon Jung",
      "Suzie Garcia",
      "Zach Gross",
    ],
  },
  tldr: {
    label: "At a glance",
    hook:
      "The Costco app supported core shopping tasks, but participants repeatedly hit friction from fragmented navigation across Explore, Shop, and Warehouse.",
    scope:
      "We combined heuristic review, IA analysis, competitor benchmarking, and moderated usability sessions to trace where users got stuck and why key flows felt inconsistent.",
    payoff:
      "Outcome: clear evidence of navigation and list-management breakdowns, plus a practical IA direction with prioritized changes across search, delivery context, and list interactions.",
    invite:
      "For the end-to-end process, task-level findings, competitor insights, and the proposed architecture — keep scrolling.",
  },
  objective: {
    heading: "From Fragmentation to Cohesion",
    body: "Provide an objective assessment of the Costco app, with a focus on understanding how well the app supports the in-app online shopping experience. The study aims to identify pain points and areas for improvement in the overall user shopping journey.",
  },
  process: {
    heading: "Our Process",
    body: "Our process started with analyzing the app through a heuristic lens, followed by a competitive analysis. We then crafted a screener, outlined six tasks, and recruited participants for interviews. Insights from these sessions shaped our final recommendations to enhance the app's usability.",
    steps: [
      {
        number: "01",
        title: "Heuristic Evaluation",
        desc: "Analyzed the app against Nielsen's 10 usability heuristics to identify structural issues before user testing.",
      },
      {
        number: "02",
        title: "Information Architecture Analysis",
        desc: "Mapped the current IA to identify inconsistencies in navigation and feature fragmentation.",
      },
      {
        number: "03",
        title: "Competitor Analysis",
        desc: "Analyzed Walmart, Target, and Sam's Club apps to benchmark against industry standards.",
      },
      {
        number: "04",
        title: "Usability Testing",
        desc: "Conducted remote moderated usability tests with 6 participants using think-aloud protocol.",
      },
      {
        number: "05",
        title: "Synthesis & Recommendations",
        desc: "Synthesized findings into actionable IA and UX recommendations for the Costco app.",
      },
    ],
  },
  informationArchitecture: {
    heading: "Current Information Architecture",
    body: "We analyzed the Costco app's primary navigation and identified critical issues including inconsistent structure and fragmented features. This helped us define our goals and tasks for usability testing.",
    issues: [
      "The warehouse search differs from the Explore and Shop searches, which are exclusively for online shopping.",
      "Explore and Shop serve similar purposes but are split into separate tabs with unclear distinctions.",
      "The warehouse section is limited to viewing product availability in-store and lacks shopping functionality, further blurring the lines between tabs.",
    ],
  },
  testPlan: {
    heading: "Usability Test Plan",
    method: "Remote Moderated Usability Test — Think Aloud Protocol",
    participants: {
      count: 6,
      ageGroup: "22–45 (working adults and young families)",
      location: "United States",
      primaryExperience: "Must have used the Costco app",
      secondaryExperience: "Minimal experience with Walmart, Target, or Sam's Club apps",
      ecommerce: "Frequent e-commerce shoppers",
    },
    exclusions: [
      "Participants professionally involved in app development or design",
      "Customers who exclusively shop in-store without app usage",
    ],
    tasks: [
      { number: "01", task: "Check the Costco Membership details" },
      {
        number: "02",
        task: "Search for a specific grocery product and verify its availability in nearby stores",
      },
      { number: "03", task: "Add the product to the in-store shopping list for reference during store visits" },
      { number: "04", task: "Locate an online-only product and add it to the online shopping list" },
      { number: "05", task: "Add the same product to the shopping cart for purchase" },
      { number: "06", task: "Explore in-store events and offers" },
    ],
    note: "During the usability test, the specific product to be searched was predefined to minimize participant decision-making effort.",
  },
  findings: {
    heading: "Usability Test Insights & Heuristic Evaluation",
    keyInsights: [
      {
        title: "Membership tab was hard to find",
        severity: "High",
        desc: "Participants struggled to locate membership details — most expected it under account or profile, not a dedicated tab.",
      },
      {
        title: "In-store vs online lists were confusing",
        severity: "High",
        desc: "The distinction between in-store shopping list and online cart was unclear — participants added items to the wrong list multiple times.",
      },
      {
        title: "Search experience was inconsistent",
        severity: "Medium",
        desc: "Search results mixed in-store and online products without clear labeling, creating confusion about product availability.",
      },
      {
        title: "In-store events were nearly invisible",
        severity: "Medium",
        desc: "Most participants couldn't locate in-store events — the feature was buried and unlabeled in the navigation.",
      },
    ],
  },
  competitorAnalysis: {
    heading: "Competitor Analysis",
    body: "After understanding user feedback, we analyzed competitor products that users prefer to use — Walmart, Target, and Sam's Club.",
    competitors: [
      {
        name: "Walmart",
        strengths: "Clear separation of in-store vs delivery, persistent cart, strong search filters",
        gaps: "Overwhelming product density on search results",
      },
      {
        name: "Target",
        strengths: "Clean navigation, consistent visual hierarchy, easy list management",
        gaps: "Membership features less prominent",
      },
      {
        name: "Sam's Club",
        strengths: "Strong membership integration, clear club vs online distinction",
        gaps: "Fewer product categories than Costco",
      },
    ],
  },
  recommendations: {
    heading: "Proposed Changes in Information Architecture",
    body: "We visualized the new architecture of the Costco app with minor updates to Navigation Hierarchy, Tab Terminologies, and Search Experience.",
    changes: [
      {
        area: "Navigation Hierarchy",
        current: "Membership buried under secondary navigation",
        proposed: "Membership surfaced to primary tab bar for immediate access",
      },
      {
        area: "Tab Terminologies",
        current: "Ambiguous tab labels causing wrong-path navigation",
        proposed: "Clearer, task-oriented labels aligned with user mental models",
      },
      {
        area: "Search Experience",
        current: "Mixed in-store and online results without clear labeling",
        proposed: "Filtered search with clear in-store vs online product tags",
      },
    ],
  },
  impact: [
    { value: "6", label: "Participants Tested" },
    { value: "6", label: "Tasks Evaluated" },
    { value: "4", label: "Critical Issues Identified" },
    { value: "3", label: "IA Improvements Proposed" },
  ],
  faqs: [
    {
      q: "Was this commissioned by Costco?",
      a: "No — this was an academic usability evaluation conducted as part of a UX research course. All findings are independent and not affiliated with Costco.",
    },
    {
      q: "Why focus on information architecture?",
      a: "The heuristic evaluation revealed that most pain points stemmed from navigation inconsistency rather than visual design — making IA the highest-leverage area for improvement.",
    },
    {
      q: "What was your specific role?",
      a: "I was one of five student researchers. I contributed to the heuristic evaluation, participant screening, moderated usability sessions, and synthesis of findings.",
    },
    {
      q: "What would you do differently?",
      a: "Add a card sorting exercise after the usability test — this would give direct participant input on how they'd restructure the navigation, rather than relying solely on observed behavior.",
    },
  ],
  reflections: [
    {
      title: "IA analysis unlocks usability issues",
      body: "Mapping the information architecture before testing gave us a hypothesis about where users would struggle — and the usability test confirmed almost every one of them.",
    },
    {
      title: "Card sorting as a next step",
      body: "Our IA recommendations were researcher-driven. A card sorting exercise would let users re-imagine the structure themselves — making the proposed changes more defensible.",
    },
    {
      title: "Heuristics guide, testing confirms",
      body: "The heuristic evaluation flagged issues efficiently, but it was the think-aloud sessions that revealed the emotional frustration behind each friction point.",
    },
  ],
  images: {
    hero: "/Projects/costco/hero.png",
    objective: "/Projects/costco/objective.png",
    process: "/Projects/costco/process.png",
    iaCurrent: "/Projects/costco/ia-current-2.png",
    testPlatforms: "/Projects/costco/test-platforms.png",
    participantQuotes: "/Projects/costco/participant quotes.png",
    taskHighlights1: "/Projects/costco/task-highlights-1.png",
    taskHighlights2: "/Projects/costco/task-highlights-2.png",
    taskHighlights3: "/Projects/costco/task-highlights-3.png",
    taskHighlights4: "/Projects/costco/task-highlights-4.png",
    competitorAnalysis: "/Projects/costco/Competitor-Analysis.png",
    iaProposed1: "/Projects/costco/ia-proposed-1-v2.png",
    iaProposed2: "/Projects/costco/ia-proposed-2-v2.png",
  },
};
