export const bonds = {
  meta: {
    title: "Bonds Investment Digital Experience",
    subtitle:
      "Designing a dual-persona fintech platform for a corporate debt solutions startup — creating distinct investment experiences for Wealth Managers and Retail Investors.",
    tags: ["UX Research", "UX Design", "UI Design"],
    stats: [
      { value: "4", label: "Professional Investors Interviewed" },
      { value: "6 Months", label: "Duration" },
      { value: "2", label: "Persona-Driven Platforms" },
      { value: "5", label: "UX Planes Applied" },
    ],
    client: "YUBI — Fintech Indian Startup, Corporate Debt Solutions",
    role: "UX Design Intern",
    tools: ["Figma"],
    team: [
      "Saibal Datta (Chief Experience Designer)",
      "Himaprabal G (Product Designer)",
      "Srushti Adake (Design Intern)",
    ],
  },
  tldr: {
    label: "At a glance",
    hook:
      "Corporate bond investing in India was still heavy on offline workflows — YUBI needed digital experiences that worked for both wealth managers and retail investors without dumbing down the product.",
    scope:
      "I contributed across research, journey mapping, wireframes, expert evaluation, and final UI — using the five UX planes to structure work from strategy through surface, including separate flows for institutional and retail personas.",
    payoff:
      "Outcome: two distinct platform directions, validated task flows and wireframes, usability findings that shaped IA and interactions, and high-fidelity UI that reflected e-commerce mental models for retail while supporting multi-client operations for distributors.",
    invite: "For methodology, journeys, explorations, and final interface design — keep scrolling.",
  },
  overview: {
    heading: "Making Bond Investment easy for All.",
    body: "Bond investment in India is traditionally complex, opaque, and inaccessible. This fintech startup wanted to change that — building a digital platform for corporate debt that served two very different users: Wealth Managers (professionals managing multiple client portfolios) and Retail Investors (individuals driven by sentiment and discovery). We used the Five Planes of UX as a structured framework to go from abstract strategy to concrete interface.",
  },
  framework: {
    heading: "From Abstract to Concrete",
    subheading: "Five Planes of UX — Jesse James Garrett",
    body: "These five planes gave us a roadmap for tackling user experience problems. Each plane shaped decisions before we moved to the next.",
    planes: [
      { plane: "Strategy", number: "01", focus: "User needs & business objectives" },
      { plane: "Scope", number: "02", focus: "Features & content requirements" },
      { plane: "Structure", number: "03", focus: "Interaction design & IA" },
      { plane: "Skeleton", number: "04", focus: "Wireframes & interface layout" },
      { plane: "Surface", number: "05", focus: "Visual & UI design" },
    ],
  },
  strategy: {
    heading: "Understanding the Users",
    body: "We defined two distinct user personas — the Wealth Manager and the Retail Investor. Understanding their goals, mental models, and current workflows was foundational before any design decisions were made.",
    interviews: {
      heading: "Interview Insights",
      body: "We interviewed 4 Professional Investors to understand their needs and motivations — which carved the foundation for building digital experiences for them.",
    },
  },
  scope: {
    heading: "Investor Journey",
    body: "We plotted the full journey of the current investment process, highlighting the prominent pain points the digital platform would need to address.",
    stages: ["Onboarding", "Discover Opportunities", "Evaluation", "Transaction", "Monitor Portfolio"],
    retailPainPoints: [
      "Finding the right opportunity based on personal goals and risk appetite is difficult.",
      "Investment terms and bond language are hard to understand without guidance.",
      "Users rely on social validation, family, or experts before making a decision.",
      "Portfolio tracking and recommendations feel fragmented across different places.",
    ],
    institutionalPainPoints: [
      "Distributor onboarding for teams and clients is still manual and time-consuming.",
      "Opportunity discovery is fragmented across multiple sales emails and channels.",
      "Matching the right instrument to client preferences requires heavy manual effort.",
      "Managing portfolios across many clients lacks a unified operational workflow.",
    ],
  },
  structure: {
    heading: "Task Flow",
    body: "We created task flows to understand what information would be needed at each step — mapping every decision point in the investment journey for both personas.",
  },
  skeleton: {
    heading: "Wireframes",
    body: "We transformed task flows into full wireframes — covering onboarding, bond discovery, bond details, trade settlement, portfolio, and comparison screens for the Wealth Manager platform.",
    expertEval: {
      heading: "Expert Evaluation — Cognitive Walkthrough",
      method: "Testing the Wireframes by Cognitive Walkthrough Method",
      tasks: ["Exploring Bonds", "Viewing Bond Details", "Settling Trades for Clients"],
      factors: [
        "Will the user try to achieve the action?",
        "Is the control for the action visible and understandable?",
        "Is there a strong link between control and action?",
        "After the action is performed, is the feedback appropriate?",
      ],
      experts: [
        { type: "Product Experts", desc: "Intimate knowledge of the product being evaluated" },
        { type: "UX Experts", desc: "Knowledge about common user behaviours on a platform" },
        { type: "Tech Engineers", desc: "Insights related to implementation perspective" },
        { type: "Business Experts", desc: "Strong domain knowledge and business inputs" },
      ],
    },
  },
  distributorFlow: {
    heading: "Distributor (Wealth Manager) Flow",
    body: "The most complex design challenge: the trade management workflow for Wealth Managers placing orders across multiple client portfolios simultaneously — a workflow with no direct digital precedent.",
    explorations: {
      heading: "Explorations & Usability Issues",
      body: "Before reaching the final design, we ran expert evaluations on wireframe explorations and identified critical usability issues across two key screens.",
      note: "We validated early wireframe explorations with experts to surface usability breakdowns before finalizing interface direction.",
      issues: [
        {
          screen: "Bond Explorations & Bond Details",
          problems: [
            "Primary CTA 'Request Additional Bonds' on each bond card was unnecessary — the primary task is to view details or calculate investment, not request more bonds.",
            "Two separate CTAs for making an investment ('Invest' and 'Negotiate') created decision paralysis — the process could be simplified to a single trigger.",
          ],
        },
        {
          screen: "Trade Settlement",
          problems: [
            "Fields always visible to edit — no clear indication if orders for individual clients had been saved successfully.",
            "Fewer client cards visible in the viewport due to all-time edit view, requiring excessive scrolling to manage multiple clients.",
          ],
        },
      ],
    },
    finalDesign: {
      heading: "Final Interface Design",
      body: "The final design resolved each identified issue — collapsing the edit state, streamlining CTAs, and improving viewport density for multi-client workflows.",
    },
  },
  retailExperience: {
    heading: "A Different Experience for Retail Investors",
    body: "Retail investors trade on noise and sentiments — their needs are fundamentally different from Wealth Managers. We designed a separate but parallel experience for them.",
    ecommerce: {
      heading: "Inspired by E-commerce",
      body: "We wanted to make bond investment as simple as shopping online. We mapped parallels between investment platforms and e-commerce sites — discovery, comparison, trust signals, and checkout — to create a familiar mental model for first-time investors.",
    },
    features: [
      "Personalized bond discovery feed",
      "Expert reviews and social proof",
      "Simplified buy flow modeled on e-commerce checkout",
      "Sentiment indicators and trending bonds",
    ],
  },
  learnings: {
    heading: "What I loved about this project",
    items: [
      {
        title: "Iteration visible in the work",
        body: "The expert evaluation wasn't just a checkpoint — it fundamentally changed the trade settlement screen. Seeing wireframe-level issues prevented surface-level fixes later.",
      },
      {
        title: "Persona-driven platforms",
        body: "Building two distinct experiences sharpened every decision. Retail Investors needed discovery and confidence. Wealth Managers needed efficiency and control. Same product, different worlds.",
      },
      {
        title: "Offline to online fidelity",
        body: "The biggest challenge was replicating offline workflows digitally without losing what made them work. For Wealth Managers, familiarity with the process was as important as improving it.",
      },
    ],
  },
  impact: [
    { value: "2", label: "Distinct Platforms Designed" },
    { value: "4", label: "Professional Investors Interviewed" },
    { value: "4", label: "Expert Types in Cognitive Walkthrough" },
    { value: "4", label: "Flows designed & shipped · 6-month internship" },
  ],
  faqs: [
    {
      q: "What is a corporate bond investment platform?",
      a: "Corporate bonds are debt instruments companies issue to raise capital. This platform let investors discover, compare, and purchase corporate bonds digitally — a market that had operated almost entirely through offline channels in India.",
    },
    {
      q: "Why two separate platforms instead of one?",
      a: "Wealth Managers and Retail Investors have fundamentally different mental models, workflows, and information needs. A unified interface would have compromised both experiences — persona-specific platforms let us optimize for each user's actual context.",
    },
    {
      q: "What did the expert evaluation actually change?",
      a: "Two significant things: the trade settlement screen moved from an always-editable view to a collapsed/confirmed state, and the bond details page was simplified from two investment CTAs down to one trigger — both directly from cognitive walkthrough feedback.",
    },
    {
      q: "What was your specific contribution?",
      a: "I contributed across all five UX planes — from user research and journey mapping, through wireframing and expert evaluation, to final UI design. I owned the retail investor flow and contributed to the distributor trade settlement iterations.",
    },
  ],
  reflections: [
    {
      title: "Iteration visible in the work",
      body: "The explorations and usability issues are part of the story — showing what didn't work makes the final design more defensible, not weaker.",
    },
    {
      title: "Persona-driven experiences",
      body: "The cleaner the persona definition, the cleaner the design decisions. Retail and Wealth Manager platforms diverged naturally once we were clear about who we were designing for.",
    },
    {
      title: "Domain complexity is a design problem",
      body: "Bond investment is genuinely hard to understand. The e-commerce analogy for retail investors wasn't a shortcut — it was the most honest way to lower the barrier without dumbing down the product.",
    },
  ],
  images: {
    hero: "/projects/bonds/hero.png",
    fivePlanes: "/projects/bonds/five-planes.png",
    strategyConsistency: "/projects/bonds/strategy-consistency.png",
    userResearch: "/projects/bonds/user-research.png",
    interviewInsights: "/projects/bonds/interview-insights.png",
    investorJourney: "/projects/bonds/investor-journey.png",
    retailJourney: "/projects/bonds/journey-retail.png",
    institutionalJourney: "/projects/bonds/journey-institutional.png",
    taskFlow: "/projects/bonds/task-flow.png",
    taskFlowRetail: "/projects/bonds/task-flow-retail.png",
    taskFlowInstitutional: "/projects/bonds/task-flow-institutional.png",
    wireframes: "/projects/bonds/wireframes.png",
    wireframesRetail: "/projects/bonds/wireframes-retail.png",
    wireframesInstitutional: "/projects/bonds/wireframes-institutional.png",
    wealthTest1: "/projects/bonds/wealth-test-1.png",
    wealthTest2: "/projects/bonds/wealth-test-2.png",
    retailTestIssues: "/projects/bonds/retail-test-issues.png",
    wealthFlowExplore: "/projects/bonds/wealth-flow-explore.png",
    wealthFlowCompare: "/projects/bonds/wealth-flow-compare.png",
    wealthFlowBondDetails: "/projects/bonds/wealth-flow-bond-details.png",
    wealthFlowOfferNegotiation: "/projects/bonds/wealth-flow-offer-negotiation.png",
    wealthFlowBulkInvestment: "/projects/bonds/wealth-flow-bulk-investment.png",
    expertEvalSetup: "/projects/bonds/expert-eval-setup.png",
    explorationBondList: "/projects/bonds/exploration-bond-list.png",
    explorationTradeSettlement: "/projects/bonds/exploration-trade-settlement.png",
    distributorUi: "/projects/bonds/wealth-manager-interface.png",
    retailUsers: "/projects/bonds/retail-users.png",
    retailEcommerce: "/projects/bonds/retail-ecommerce.png",
    retailUi: "/projects/bonds/retail-ui.png",
    retailFlowHomeCollections: "/projects/bonds/retail-flow-home-collections.png",
    retailFlowFindCompare: "/projects/bonds/retail-flow-find-compare.png",
    retailFlowBondDetails: "/projects/bonds/retail-flow-bond-details.png",
    retailFlowTransactionPortfolio: "/projects/bonds/retail-flow-transaction-portfolio.png",
  },
};
