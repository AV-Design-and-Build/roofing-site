export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortLabel: string;
  thumbnailImage: string;
  heroImage: string;
  excerpt: string;
  heroTitle: string;
  summary: string;
  bullets: string[];
  symptoms: string[];
  process: string[];
  faqs: FaqItem[];
  proofPoints: string[];
  conversionNote: string;
};

export type AreaGroup = {
  region: string;
  cities: string[];
};

export type CityPage = {
  slug: string;
  city: string;
  county: string;
  region: string;
  priority: "first-wave" | "anchor-market";
  heroTitle: string;
  metaDescription: string;
  intro: string;
  roofingConcerns: string[];
  serviceFocus: string[];
  nearbyCities: string[];
  faqs: FaqItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  heroImage: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: FaqItem[];
};

export type ProjectProofPage = {
  slug: string;
  title: string;
  city: string;
  service: string;
  description: string;
  heroImage: string;
  proofStatus: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  faqs: FaqItem[];
};

const productionSiteUrl = "https://riseroofingav.com";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? productionSiteUrl).replace(/\/$/, "");

const sharedServiceFaqs: FaqItem[] = [
  {
    question: "Can Rise Roofing help with a free estimate?",
    answer:
      "Yes. Rise Roofing can start with a free estimate conversation so the next step is based on the roof condition, urgency, and service needed.",
  },
  {
    question: "Should I call or use the estimate form?",
    answer:
      "Calling is the fastest path for active leaks, storm damage, or urgent concerns. The estimate form is useful when you want to add photos and details before a callback.",
  },
];

const services: Service[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    shortLabel: "Roof repair",
    thumbnailImage: "/site/service-roof-repair.jpg",
    heroImage: "/site/hero-roof-repair.jpg",
    excerpt:
      "Leak tracing, shingle repair, flashing fixes, and targeted roof work for problems that need a clear next step.",
    heroTitle: "Roof repair in Los Angeles and nearby cities",
    summary:
      "When a roof starts leaking, lifting, or showing visible wear, the right first move is a practical inspection and a repair plan that explains what is urgent and what can wait.",
    bullets: [
      "Leak investigation and problem-area repair",
      "Shingle, flashing, vent, and roof-penetration fixes",
      "Clear repair scope before small damage spreads",
    ],
    symptoms: [
      "Ceiling stains, bubbling paint, or damp drywall after rain",
      "Missing, lifted, cracked, or curling shingles",
      "Loose flashing around chimneys, vents, skylights, or roof edges",
      "Debris, ponding, or soft spots that suggest trapped moisture",
    ],
    process: [
      "Confirm the leak or roof concern by phone",
      "Inspect the roof surface and vulnerable detail areas",
      "Explain the likely cause and repair options",
      "Complete the approved repair and document what was addressed",
    ],
    faqs: [
      {
        question: "Is a roof leak always a full replacement problem?",
        answer:
          "No. Some leaks can be repaired around a flashing detail, roof penetration, or damaged section. The inspection should separate targeted repair needs from larger roof-life concerns.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Repair recommendations should explain cause, urgency, and next step in plain language.",
      "Photos from the inspection can be added later as real proof assets once available.",
      "Call-first CTAs keep urgent leak conversations easy to start.",
    ],
    conversionNote:
      "For active leaks or storm damage, call first so the team can understand urgency before a form is submitted.",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    shortLabel: "Roof replacement",
    thumbnailImage: "/site/service-roof-replacement.jpg",
    heroImage: "/site/hero-roof-replacement.jpg",
    excerpt:
      "Replacement planning for aging, storm-damaged, or failing roofs with clear scope, material direction, and scheduling expectations.",
    heroTitle: "Roof replacement for aging and storm-damaged roofs",
    summary:
      "A replacement conversation should help owners understand roof condition, materials, timing, financing options, and the difference between a patch and a long-term solution.",
    bullets: [
      "Replacement planning for worn or failing roofs",
      "Clear estimate structure and scope walkthrough",
      "Residential and commercial roof replacement conversations",
    ],
    symptoms: [
      "A roof near the end of its expected life",
      "Repeated leaks in different areas",
      "Large storm-damaged sections or visible widespread wear",
      "Repair costs that no longer make sense for the remaining roof life",
    ],
    process: [
      "Review roof age, leak history, and owner priorities",
      "Inspect the roof condition and affected areas",
      "Discuss repair versus replacement tradeoffs",
      "Prepare a replacement scope with scheduling and financing next steps",
    ],
    faqs: [
      {
        question: "How do I know if replacement is better than repair?",
        answer:
          "Replacement may be the better path when leaks repeat, damage is widespread, or the roof is already near the end of its useful life. A proper inspection should make that tradeoff clear.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Replacement pages should support financing, material, and timeline conversations.",
      "Future before-and-after photos can be added without rewriting the page template.",
      "The page is structured to help callers explain roof age and urgency quickly.",
    ],
    conversionNote:
      "If you are weighing repair against replacement, call Rise Roofing and describe the roof age, leak history, and visible symptoms.",
  },
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    shortLabel: "Residential roofing",
    thumbnailImage: "/site/hero-residential-roofing.jpg",
    heroImage: "/site/hero-residential-roofing.jpg",
    excerpt:
      "Residential roofing support for repairs, replacements, inspections, storm issues, and clear homeowner communication.",
    heroTitle: "Residential roofing built around clear communication",
    summary:
      "Homeowners need straight answers, clean scheduling, and a roofing company that can explain the next step without pressure or confusing trade language.",
    bullets: [
      "Single-family home roofing services",
      "Repair, replacement, inspection, and storm-damage pathways",
      "Call-first help for urgent homeowner concerns",
    ],
    symptoms: [
      "Leaks near bedrooms, hallways, garages, or ceiling fixtures",
      "Visible wear on shingles, tile, flashing, or roof edges",
      "Storm debris, lifted material, or unexpected water entry",
      "Questions before buying, selling, refinancing, or renovating",
    ],
    process: [
      "Start with the homeowner's main concern",
      "Inspect the roof and related interior signs",
      "Recommend repair, replacement, or monitoring",
      "Keep scope and next steps easy to understand",
    ],
    faqs: [
      {
        question: "Can homeowners send photos before the visit?",
        answer:
          "Yes. Photos can help explain the situation before a callback, especially for ceiling stains, visible shingles, or storm damage.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Residential pages focus on trust, callbacks, and homeowner-friendly explanations.",
      "Common problem checklists make the page useful even before project photos exist.",
      "Future review snippets can be added without changing the page structure.",
    ],
    conversionNote:
      "For residential roofing, a short call is usually the fastest way to decide whether an inspection or estimate should happen next.",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    shortLabel: "Commercial roofing",
    thumbnailImage: "/site/hero-commercial-roofing.jpg",
    heroImage: "/site/hero-commercial-roofing.jpg",
    excerpt:
      "Commercial roofing support for buildings that need responsive communication, organized scheduling, and dependable scope clarity.",
    heroTitle: "Commercial roofing for property managers and business owners",
    summary:
      "Commercial roofing conversations need less fluff and more clarity: what is happening, how urgent it is, what access is needed, and how disruption can be reduced.",
    bullets: [
      "Commercial roof repair and replacement conversations",
      "Scope planning for offices, retail, and mixed-use properties",
      "Scheduling that respects business operations",
    ],
    symptoms: [
      "Water entry near tenants, offices, inventory, or electrical areas",
      "Flat-roof ponding, membrane wear, or rooftop-equipment details",
      "Storm damage or recurring maintenance issues",
      "Owner or manager needs for documentation and scheduling clarity",
    ],
    process: [
      "Clarify building access and urgency",
      "Inspect roof areas tied to the leak or concern",
      "Separate immediate stabilization from longer-term work",
      "Provide a practical plan for next steps and scheduling",
    ],
    faqs: [
      {
        question: "Can Rise Roofing work with property managers?",
        answer:
          "Yes. Commercial inquiries can start with the building type, access notes, leak location, and urgency so the right next step is clear.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Commercial copy emphasizes access, scheduling, and scope clarity.",
      "The template leaves room for real building-type proof once available.",
      "Phone CTAs help managers describe urgent operational concerns quickly.",
    ],
    conversionNote:
      "For commercial issues, call with the building type, leak location, access constraints, and urgency.",
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    shortLabel: "Roof inspections",
    thumbnailImage: "/site/service-roof-inspection.jpg",
    heroImage: "/site/hero-roof-inspections.jpg",
    excerpt:
      "Inspection support for visible wear, storm follow-up, resale prep, leak concerns, and repair-versus-replacement decisions.",
    heroTitle: "Roof inspections for owners, buyers, and post-storm concerns",
    summary:
      "A roof inspection should turn uncertainty into a practical recommendation, especially when the owner needs to know whether a problem is urgent.",
    bullets: [
      "Post-storm visual condition checks",
      "Inspection support before repair or replacement decisions",
      "Clear findings and practical next-step guidance",
    ],
    symptoms: [
      "Roof questions after wind, rain, or debris impact",
      "Aging roof materials or visible surface wear",
      "Buying, selling, or insurance-related roof concerns",
      "Small stains or exterior issues that need a professional opinion",
    ],
    process: [
      "Gather the reason for the inspection",
      "Check the roof areas tied to the concern",
      "Explain condition, risk, and next step",
      "Recommend repair, replacement planning, or monitoring",
    ],
    faqs: [
      {
        question: "When should I schedule a roof inspection?",
        answer:
          "Schedule an inspection after storm damage, before major roof decisions, when leaks appear, or when the roof condition is uncertain.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Inspection content helps users prepare details before the call.",
      "Future photo documentation can plug directly into the proof section.",
      "FAQ schema supports inspection-intent searches without overclaiming.",
    ],
    conversionNote:
      "If you are not sure whether a roof problem is serious, start with a call and describe what you can see.",
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing",
    shortLabel: "Emergency roofing",
    thumbnailImage: "/site/service-emergency-roofing.jpg",
    heroImage: "/site/hero-emergency-roofing.jpg",
    excerpt:
      "Urgent roof repair guidance for active leaks, exposed roof sections, storm damage, and problems that cannot wait.",
    heroTitle: "Emergency roof response when the problem cannot wait",
    summary:
      "Emergency roofing pages should help people act quickly without promising unsupported 24/7 claims. The copy focuses on urgent calls, temporary protection, and next-step clarity.",
    bullets: [
      "Urgent leak and weather exposure response",
      "Temporary protection and next-step stabilization",
      "Fast path from first call to inspection scheduling",
    ],
    symptoms: [
      "Water actively entering the home or building",
      "Storm damage, missing roof material, or exposed decking",
      "Ceiling stains spreading after rain",
      "A roof opening or unsafe area that needs fast attention",
    ],
    process: [
      "Call and describe the active roof emergency",
      "Share photos if safe and helpful",
      "Discuss urgent stabilization and inspection timing",
      "Plan the repair or replacement path after the immediate concern is contained",
    ],
    faqs: [
      {
        question: "What should I do first during an active roof leak?",
        answer:
          "Move valuables away from the leak if safe, collect water, avoid unsafe roof access, and call Rise Roofing so the situation can be assessed quickly.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Emergency content keeps phone contact prominent on every section.",
      "The page avoids unsupported 24/7 claims while still addressing urgent search intent.",
      "Storm and insurance-help messaging can be expanded as verified owner details grow.",
    ],
    conversionNote:
      "For active water entry or storm exposure, call first. Forms are slower for emergency situations.",
  },
  {
    slug: "storm-damage-roofing",
    title: "Storm Damage Roofing",
    shortLabel: "Storm damage",
    thumbnailImage: "/site/hero-storm-damage-roofing.jpg",
    heroImage: "/site/hero-storm-damage-roofing.jpg",
    excerpt:
      "Storm-related roofing support for wind damage, lifted shingles, roof leaks, and insurance-claim conversations.",
    heroTitle: "Storm damage roofing support across greater Los Angeles",
    summary:
      "Storm damage roofing content should help owners understand visible warning signs, inspection timing, emergency needs, and the documentation that may help an insurance conversation.",
    bullets: [
      "Visible storm damage follow-up",
      "Inspection and damage-documentation conversation",
      "Repair versus replacement next-step guidance",
    ],
    symptoms: [
      "Missing, lifted, or torn roof material after wind or rain",
      "New leaks after a storm",
      "Debris impact, damaged flashing, or exposed roof edges",
      "Insurance questions after roof damage is discovered",
    ],
    process: [
      "Document visible storm damage from the ground if safe",
      "Call to explain the storm timing and symptoms",
      "Schedule inspection and damage review",
      "Discuss repair, replacement, financing, and insurance-help next steps",
    ],
    faqs: [
      {
        question: "Can Rise Roofing help with insurance-claim roof damage questions?",
        answer:
          "Yes. The owner has approved insurance-claim help messaging, so storm damage conversations can include documentation and next-step guidance.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Storm pages can support insurance-help messaging without inventing claim outcomes.",
      "Future storm project photos can be added as real proof assets.",
      "The page connects storm repair to emergency response and inspection pages.",
    ],
    conversionNote:
      "After a storm, call with the date of the event, visible damage, leak location, and whether photos are available.",
  },
];

const cityPages: CityPage[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    county: "Los Angeles County",
    region: "Los Angeles core",
    priority: "anchor-market",
    heroTitle: "Roofing services in Los Angeles",
    metaDescription:
      "Rise Roofing provides roof repair, replacement, inspections, emergency roofing, and storm damage support for Los Angeles property owners.",
    intro:
      "Los Angeles roofing work often starts with urgent leaks, aging materials, heat exposure, hillside drainage, and the need for a fast estimate conversation. This page keeps the call path clear while linking homeowners to the right service.",
    roofingConcerns: [
      "Sun and heat exposure that accelerates roof wear",
      "Leaks around flashing, vents, skylights, and low-slope details",
      "Storm or wind damage after heavy weather",
      "Repair-versus-replacement questions for older homes and commercial buildings",
    ],
    serviceFocus: ["Roof repair", "Roof replacement", "Emergency roofing", "Roof inspections"],
    nearbyCities: ["Glendale", "Burbank", "Pasadena", "Santa Monica"],
    faqs: [
      {
        question: "Does Rise Roofing need a Los Angeles office to serve Los Angeles?",
        answer:
          "No. Rise Roofing is positioned as a service-area roofing company, so the page should focus on service coverage and estimates without claiming a physical office in every city.",
      },
      {
        question: "What should Los Angeles callers mention first?",
        answer:
          "Start with the roof problem, the city or neighborhood, whether water is entering, and whether the roof may need repair, replacement, or inspection.",
      },
    ],
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    county: "Los Angeles County",
    region: "San Gabriel Valley",
    priority: "anchor-market",
    heroTitle: "Roofing services in Pasadena",
    metaDescription:
      "Pasadena roof repair, replacement, inspections, emergency roofing, and storm damage support from Rise Roofing.",
    intro:
      "Pasadena homeowners often need help with older homes, visible tile or shingle wear, storm follow-up, and inspection questions before larger roof decisions.",
    roofingConcerns: [
      "Aging roof systems on older residential properties",
      "Tile, shingle, flashing, and roof-edge concerns",
      "Storm follow-up after wind or heavy rain",
      "Inspection questions before repairs, replacement, or home transactions",
    ],
    serviceFocus: ["Roof inspections", "Roof repair", "Roof replacement", "Storm damage roofing"],
    nearbyCities: ["Altadena", "Sierra Madre", "Glendale", "Los Angeles"],
    faqs: [
      {
        question: "Can Pasadena homeowners start with an inspection?",
        answer:
          "Yes. An inspection is a practical first step when the owner is unsure whether the roof needs targeted repair or a broader replacement plan.",
      },
      {
        question: "Should Pasadena roofing issues be handled by phone first?",
        answer:
          "A short call helps clarify urgency, roof type, location, and whether photos should be sent before the estimate conversation.",
      },
    ],
  },
  {
    slug: "glendale",
    city: "Glendale",
    county: "Los Angeles County",
    region: "Los Angeles foothills",
    priority: "anchor-market",
    heroTitle: "Roofing services in Glendale",
    metaDescription:
      "Glendale roof repair, storm damage support, roof replacement planning, and inspections from Rise Roofing.",
    intro:
      "Glendale roofing needs can involve hillside drainage, older roofing materials, storm exposure, and urgent leak conversations that need a clear next step.",
    roofingConcerns: [
      "Leaks tied to drainage, flashing, or roof penetrations",
      "Wind and storm exposure around hillside properties",
      "Repair needs on older shingles, tile, or low-slope sections",
      "Replacement planning when recurring leaks keep returning",
    ],
    serviceFocus: ["Roof repair", "Storm damage roofing", "Roof inspections", "Roof replacement"],
    nearbyCities: ["Burbank", "Pasadena", "La Canada Flintridge", "Los Angeles"],
    faqs: [
      {
        question: "What Glendale roof problems should be treated as urgent?",
        answer:
          "Active water entry, exposed roof sections, fast-spreading stains, and storm damage should start with a phone call instead of waiting on a form.",
      },
      {
        question: "Can Rise Roofing help compare repair and replacement?",
        answer:
          "Yes. The service pages are built to help owners understand whether a targeted repair or larger replacement conversation makes sense.",
      },
    ],
  },
  {
    slug: "burbank",
    city: "Burbank",
    county: "Los Angeles County",
    region: "Los Angeles Valley",
    priority: "anchor-market",
    heroTitle: "Roofing services in Burbank",
    metaDescription:
      "Burbank roof repair, replacement, emergency roofing, inspections, and storm damage help from Rise Roofing.",
    intro:
      "Burbank roofing calls should make it easy for homeowners and property managers to move from visible symptoms to inspection, repair, or replacement planning.",
    roofingConcerns: [
      "Leak symptoms after wind or heavy rain",
      "Shingle, flashing, vent, and roof-edge wear",
      "Residential and small commercial roof repair questions",
      "Replacement planning for roofs with repeated service needs",
    ],
    serviceFocus: ["Roof repair", "Residential roofing", "Commercial roofing", "Roof replacement"],
    nearbyCities: ["Glendale", "North Hollywood", "Studio City", "Los Angeles"],
    faqs: [
      {
        question: "What details help with a Burbank roofing estimate?",
        answer:
          "Share the property type, roof concern, urgency, visible symptoms, and whether photos are available.",
      },
      {
        question: "Can emergency roofing questions start by phone?",
        answer:
          "Yes. Phone calls should stay primary for urgent roof concerns because they are faster than a form-only path.",
      },
    ],
  },
  {
    slug: "santa-monica",
    city: "Santa Monica",
    county: "Los Angeles County",
    region: "Westside and coastal",
    priority: "anchor-market",
    heroTitle: "Roofing services in Santa Monica",
    metaDescription:
      "Santa Monica roof repair, inspections, storm damage roofing, and replacement planning from Rise Roofing.",
    intro:
      "Coastal properties can face roof wear tied to weather exposure, moisture, flashing details, and the need for clear repair-versus-replacement guidance.",
    roofingConcerns: [
      "Moisture and weather exposure near coastal neighborhoods",
      "Leaks around roof details, penetrations, and transitions",
      "Inspection questions for residential and commercial properties",
      "Urgent storm or wind follow-up after visible roof damage",
    ],
    serviceFocus: ["Roof inspections", "Roof repair", "Storm damage roofing", "Commercial roofing"],
    nearbyCities: ["Los Angeles", "Beverly Hills", "Culver City", "Torrance"],
    faqs: [
      {
        question: "Does coastal exposure change the inspection conversation?",
        answer:
          "It can. Moisture, wind, and roof-detail wear are good reasons to describe the property location and visible symptoms during the call.",
      },
      {
        question: "Can the estimate form include photos?",
        answer:
          "Yes. The estimate flow is designed for optional photo upload so callers can share safe photos before a callback.",
      },
    ],
  },
  {
    slug: "san-fernando",
    city: "San Fernando",
    county: "Los Angeles County",
    region: "San Fernando Valley",
    priority: "first-wave",
    heroTitle: "Roofing services in San Fernando",
    metaDescription:
      "San Fernando roof repair, inspections, storm damage help, and replacement planning from Rise Roofing.",
    intro:
      "San Fernando homeowners can use this page to match common roof concerns with the right next step without needing Rise Roofing to claim a physical office in the city.",
    roofingConcerns: [
      "Heat exposure and older roof material wear",
      "Leak symptoms around vents, edges, and flashing",
      "Storm follow-up and inspection needs",
      "Free estimate and financing conversations for larger work",
    ],
    serviceFocus: ["Roof repair", "Roof inspections", "Roof replacement", "Emergency roofing"],
    nearbyCities: ["Sylmar", "Pacoima", "Mission Hills", "Burbank"],
    faqs: [
      {
        question: "Does Rise Roofing serve San Fernando?",
        answer:
          "Yes. Rise Roofing serves San Fernando as part of its wider Los Angeles-area service coverage, with call-first help for roof repair, inspections, replacement, and urgent concerns.",
      },
      {
        question: "What should San Fernando callers prepare?",
        answer:
          "Prepare the roof concern, property type, urgency, and any safe photos that show visible damage or leak signs.",
      },
    ],
  },
  {
    slug: "altadena",
    city: "Altadena",
    county: "Los Angeles County",
    region: "San Gabriel foothills",
    priority: "first-wave",
    heroTitle: "Roofing services in Altadena",
    metaDescription:
      "Altadena roof repair, inspections, storm damage support, and replacement guidance from Rise Roofing.",
    intro:
      "Altadena roofing content should speak to hillside exposure, older homes, storm runoff, and the owner need for a clear inspection or estimate path.",
    roofingConcerns: [
      "Foothill wind and rain exposure",
      "Older home roof wear and repair questions",
      "Drainage, flashing, and roof edge concerns",
      "Storm damage documentation and insurance-help conversations",
    ],
    serviceFocus: ["Roof inspections", "Storm damage roofing", "Roof repair", "Roof replacement"],
    nearbyCities: ["Pasadena", "La Canada Flintridge", "Sierra Madre", "Glendale"],
    faqs: [
      {
        question: "Can Altadena roof damage be evaluated after a storm?",
        answer:
          "Yes. A storm follow-up inspection can help separate visible damage, leak risk, and the next repair or replacement step.",
      },
      {
        question: "Should Altadena pages claim a local office?",
        answer:
          "No. The page should accurately describe service-area coverage and avoid fake office or location claims.",
      },
    ],
  },
  {
    slug: "sierra-madre",
    city: "Sierra Madre",
    county: "Los Angeles County",
    region: "San Gabriel Valley",
    priority: "first-wave",
    heroTitle: "Roofing services in Sierra Madre",
    metaDescription:
      "Sierra Madre roof repair, inspections, emergency roofing, and replacement planning from Rise Roofing.",
    intro:
      "Sierra Madre is a focused foothill city page where the content can be useful by addressing weather exposure, aging roofs, inspection needs, and call-first estimate flow.",
    roofingConcerns: [
      "Foothill wind, debris, and seasonal rain exposure",
      "Leaks around details, valleys, and roof edges",
      "Inspection needs for older residential roofs",
      "Free estimate and replacement planning for larger roof concerns",
    ],
    serviceFocus: ["Roof repair", "Roof inspections", "Emergency roofing", "Roof replacement"],
    nearbyCities: ["Pasadena", "Arcadia", "Altadena", "Monrovia"],
    faqs: [
      {
        question: "What makes Sierra Madre a good focused city page?",
        answer:
          "It is specific enough for a useful local page while still fitting Rise Roofing's Los Angeles County service-area model.",
      },
      {
        question: "What if the roof issue is urgent?",
        answer:
          "Call first if water is entering, a roof section is exposed, or storm damage appears active.",
      },
    ],
  },
  {
    slug: "la-canada-flintridge",
    city: "La Canada Flintridge",
    county: "Los Angeles County",
    region: "Foothill communities",
    priority: "first-wave",
    heroTitle: "Roofing services in La Canada Flintridge",
    metaDescription:
      "La Canada Flintridge roof repair, roof inspections, storm damage support, and replacement planning from Rise Roofing.",
    intro:
      "La Canada Flintridge roofing pages should keep the language practical: hillside conditions, roof age, inspection needs, and fast communication when leaks appear.",
    roofingConcerns: [
      "Hillside wind, debris, and drainage exposure",
      "Leaks around flashing, chimneys, vents, and roof transitions",
      "Inspection and replacement decisions for older roofs",
      "Storm damage and insurance-help questions",
    ],
    serviceFocus: ["Roof inspections", "Roof repair", "Storm damage roofing", "Roof replacement"],
    nearbyCities: ["Glendale", "Altadena", "Pasadena", "Burbank"],
    faqs: [
      {
        question: "Does Rise Roofing serve La Canada Flintridge as a service-area business?",
        answer:
          "Yes. The page should present service-area coverage and estimate support without claiming a physical office in the city.",
      },
      {
        question: "Can photos help before the estimate?",
        answer:
          "Yes. Photos of visible roof damage, ceiling stains, or storm debris can make the callback more productive.",
      },
    ],
  },
  {
    slug: "la-crescenta-montrose",
    city: "La Crescenta-Montrose",
    county: "Los Angeles County",
    region: "Crescenta Valley",
    priority: "first-wave",
    heroTitle: "Roofing services in La Crescenta-Montrose",
    metaDescription:
      "La Crescenta-Montrose roof repair, inspections, emergency roofing, and storm damage support from Rise Roofing.",
    intro:
      "La Crescenta-Montrose homeowners can use this page to understand foothill exposure, storm follow-up, repair needs, and call-first roofing help.",
    roofingConcerns: [
      "Foothill wind and storm exposure",
      "Leaks around roof details, edges, and transitions",
      "Older residential roof inspection questions",
      "Urgent roof repair needs after heavy rain",
    ],
    serviceFocus: ["Roof repair", "Emergency roofing", "Roof inspections", "Storm damage roofing"],
    nearbyCities: ["Glendale", "La Canada Flintridge", "Burbank", "Pasadena"],
    faqs: [
      {
        question: "Does Rise Roofing serve La Crescenta-Montrose?",
        answer:
          "Yes. Rise Roofing serves La Crescenta-Montrose as part of its service-area coverage without claiming a physical office in the city.",
      },
      {
        question: "What should urgent callers say first?",
        answer:
          "Mention whether water is actively entering, where the damage appears, and whether the problem followed wind or heavy rain.",
      },
    ],
  },
];

const areaGroups: AreaGroup[] = [
  {
    region: "Focused city pages",
    cities: ["San Fernando", "Altadena", "Sierra Madre", "La Canada Flintridge", "La Crescenta-Montrose"],
  },
  {
    region: "Los Angeles anchor markets",
    cities: ["Los Angeles", "Pasadena", "Glendale", "Burbank", "Santa Monica"],
  },
  {
    region: "San Fernando Valley & nearby",
    cities: ["Calabasas", "Woodland Hills", "Studio City", "Sherman Oaks", "Van Nuys", "Santa Clarita"],
  },
  {
    region: "Orange County reach",
    cities: ["Anaheim", "Irvine", "Newport Beach", "Huntington Beach", "Costa Mesa"],
  },
];

const blogPosts: BlogPost[] = [
  {
    slug: "roof-repair-cost-los-angeles",
    title: "What Affects Roof Repair Cost in Los Angeles?",
    description:
      "A practical, no-price-range guide to roof repair cost factors in Los Angeles, with free estimate, financing, storm, emergency, and insurance-help guidance.",
    excerpt:
      "Understand what changes the scope of a roof repair without relying on generic price ranges that may not fit your roof.",
    category: "Repair planning",
    readTime: "6 min read",
    publishedAt: "2026-05-12",
    heroImage: "/site/repair-a.jpg",
    sections: [
      {
        heading: "Why exact roof repair prices do not belong on this page",
        body: [
          "A roof repair estimate depends on the leak source, roof material, access, damage spread, safety concerns, and whether the issue is isolated or part of a larger roof-life problem.",
          "Instead of giving a generic price table, Rise Roofing uses a free estimate conversation so the recommendation fits the actual property.",
        ],
      },
      {
        heading: "What changes the repair scope",
        body: [
          "Common scope factors include damaged shingles, loose flashing, vent details, skylights, storm exposure, water intrusion, and how long the issue has been active.",
          "Urgency also matters. Active leaks and storm damage should start with a call so temporary protection or emergency response can be discussed.",
        ],
      },
      {
        heading: "Financing, storm repair, and insurance-help conversations",
        body: [
          "The owner has approved free-estimate, financing, emergency/storm repair, and insurance-claim help messaging. That means the conversation can include payment timing, documentation, and next steps after weather-related damage.",
          "The site should avoid promising claim outcomes. It can still help owners understand what information and photos may support the conversation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Rise Roofing publish exact roof repair price ranges?",
        answer:
          "No. The approved direction is to avoid exact price ranges and invite callers to get pricing details through a real estimate conversation.",
      },
      {
        question: "Can I call for an emergency or storm repair?",
        answer:
          "Yes. Emergency and storm repair messaging is approved, and urgent roofing problems should start with a phone call.",
      },
    ],
  },
  {
    slug: "roof-replacement-vs-repair",
    title: "Roof Replacement vs. Roof Repair: How to Think About the Choice",
    description:
      "How homeowners can compare roof repair and roof replacement when leaks, age, storm damage, or recurring issues make the answer unclear.",
    excerpt:
      "A practical guide to deciding whether a targeted repair is enough or whether replacement planning should begin.",
    category: "Replacement planning",
    readTime: "5 min read",
    publishedAt: "2026-05-12",
    heroImage: "/site/hero-roof-replacement.jpg",
    sections: [
      {
        heading: "Start with the pattern, not the panic",
        body: [
          "One isolated leak may be a repair issue. Repeated leaks, widespread wear, storm damage across multiple areas, or a roof near the end of its useful life may point toward replacement planning.",
          "The right first step is an inspection that explains the pattern and what it means for the property.",
        ],
      },
      {
        heading: "When repair may make sense",
        body: [
          "Repair can make sense when the damage is localized, the roof still has useful life, and the issue can be tied to a clear failure point such as flashing, a vent, or a damaged section.",
          "A repair recommendation should still explain what was checked and what future warning signs to watch.",
        ],
      },
      {
        heading: "When replacement should be discussed",
        body: [
          "Replacement should be discussed when the roof has recurring leaks, widespread material failure, severe storm damage, or repairs that no longer make financial sense compared with the remaining roof life.",
          "Financing can be part of the conversation when the project is larger than a targeted repair.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I ask for repair or replacement first?",
        answer:
          "Start by describing the symptom and roof age. Rise Roofing can help decide whether the first conversation should focus on repair, replacement, or inspection.",
      },
      {
        question: "Can storm damage force replacement?",
        answer:
          "Sometimes storm damage can be widespread enough to make replacement planning necessary, but that should be based on inspection findings rather than assumption.",
      },
    ],
  },
  {
    slug: "emergency-roof-leak-what-to-do",
    title: "Emergency Roof Leak: What to Do Before You Call",
    description:
      "Practical steps for active roof leaks, urgent storm damage, and emergency roofing calls in the Los Angeles area.",
    excerpt:
      "A calm, practical checklist for active water entry, storm exposure, and urgent roof damage.",
    category: "Emergency roofing",
    readTime: "4 min read",
    publishedAt: "2026-05-12",
    heroImage: "/site/hero-emergency-roofing.jpg",
    sections: [
      {
        heading: "Keep people safe first",
        body: [
          "Do not climb onto a wet, damaged, or unsafe roof. Move people away from active water entry and electrical risks if needed.",
          "If you can safely place a bucket or move valuables away from the leak, do that before trying to diagnose the roof.",
        ],
      },
      {
        heading: "Collect useful information",
        body: [
          "Note when the leak started, where water is appearing, whether wind or storm damage happened recently, and whether visible roof material is missing.",
          "Photos can help if they can be taken safely from inside the property or from the ground.",
        ],
      },
      {
        heading: "Call before relying on a form",
        body: [
          "Emergency roofing problems move faster than form submissions. Call Rise Roofing first when water is actively entering or the roof is exposed.",
          "The estimate form can still be useful later for photos and written details.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I tarp the roof myself?",
        answer:
          "Avoid unsafe roof access. If temporary protection is needed, discuss it during the call so the next step is handled safely.",
      },
      {
        question: "What counts as urgent roof damage?",
        answer:
          "Active leaks, exposed roof sections, fast-spreading stains, storm impact, and unsafe roof conditions should be treated as urgent.",
      },
    ],
  },
  {
    slug: "signs-you-need-a-roof-inspection",
    title: "Signs You Need a Roof Inspection",
    description:
      "Common signs that a roof inspection may be the right next step before repair, replacement, or storm damage decisions.",
    excerpt:
      "Know when stains, visible wear, storm exposure, or roof age should trigger an inspection conversation.",
    category: "Inspections",
    readTime: "5 min read",
    publishedAt: "2026-05-12",
    heroImage: "/site/hero-roof-inspections.jpg",
    sections: [
      {
        heading: "Small signs can point to bigger roof issues",
        body: [
          "Ceiling stains, missing shingles, soft spots, loose flashing, debris, and new water marks after rain are all reasons to ask for an inspection.",
          "An inspection helps separate a small repair from a wider roof-life concern.",
        ],
      },
      {
        heading: "Storms and age both matter",
        body: [
          "Heavy rain, wind, and debris can expose vulnerable roof details. Age can also make small failures more likely.",
          "If the roof is older or has needed repeated repairs, mention that during the call.",
        ],
      },
      {
        heading: "Use photos to make the callback better",
        body: [
          "Safe photos of ceiling stains, visible shingles, flashing, or storm debris can help explain the concern before the inspection.",
          "Do not climb onto the roof just to take photos.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an inspection useful before selling or buying a home?",
        answer:
          "Yes. Roof condition can affect decisions during a sale, purchase, or renovation planning conversation.",
      },
      {
        question: "Can an inspection lead to a free estimate?",
        answer:
          "Yes. Inspection findings can help shape the repair or replacement estimate conversation.",
      },
    ],
  },
  {
    slug: "how-long-does-a-roof-replacement-take",
    title: "How Long Does a Roof Replacement Take?",
    description:
      "What affects roof replacement timelines, scheduling, weather, access, materials, and homeowner preparation.",
    excerpt:
      "Understand what can speed up or slow down a roof replacement before you schedule the work.",
    category: "Replacement planning",
    readTime: "5 min read",
    publishedAt: "2026-05-12",
    heroImage: "/site/hero-roof-replacement.jpg",
    sections: [
      {
        heading: "Timeline depends on the real roof, not a generic promise",
        body: [
          "Roof size, material, access, weather, damage, decking condition, and crew scheduling all affect replacement timing.",
          "A good estimate conversation should explain the likely schedule and what could change it.",
        ],
      },
      {
        heading: "Preparation helps",
        body: [
          "Property access, parking, pets, attic items, tenant communication, and driveway planning can all make the project run more smoothly.",
          "Commercial buildings may need additional coordination around tenants, equipment, and business hours.",
        ],
      },
      {
        heading: "Weather and hidden damage can change the plan",
        body: [
          "Rain, wind, and hidden roof-deck concerns can affect timing. That is why the estimate should explain what is known and what will be confirmed during the job.",
          "If the roof is leaking before replacement, ask whether temporary protection or repair is needed first.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can replacement timing be discussed during the free estimate?",
        answer:
          "Yes. The estimate conversation should cover scheduling expectations and any factors that could affect the timeline.",
      },
      {
        question: "Should I call if I need replacement quickly?",
        answer:
          "Yes. Call first if timing is urgent because phone is the fastest way to discuss scheduling constraints.",
      },
    ],
  },
];

const projectProofPages: ProjectProofPage[] = [
  {
    slug: "roof-repair-los-angeles",
    title: "Los Angeles Roof Repair Proof Page",
    city: "Los Angeles",
    service: "Roof Repair",
    description:
      "A proof-ready Los Angeles roof repair page that explains what Rise Roofing needs to document once real project details and photos are approved.",
    heroImage: "/site/service-roof-repair.jpg",
    proofStatus: "Real project photos and customer-approved details are still needed before this becomes a case study.",
    sections: [
      {
        heading: "What this page can document",
        items: [
          "The roof problem the customer noticed before calling.",
          "The leak, flashing, shingle, or roof-detail concern Rise Roofing inspected.",
          "The repair scope that was approved after inspection.",
          "Before, during, and after photos once real project assets are available.",
        ],
      },
      {
        heading: "Current honest next step",
        items: [
          "Use this page as the Los Angeles roof repair proof slot.",
          "Do not publish invented customer quotes or fake before-and-after claims.",
          "Add verified photos, captions, and project notes when the owner supplies them.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this claiming a completed Los Angeles repair project?",
        answer:
          "No. This route is live as a proof-ready page and should only become a real case study after verified project details are added.",
      },
      {
        question: "Can visitors still request roof repair help?",
        answer:
          "Yes. The page keeps phone and estimate CTAs available for Los Angeles roof repair inquiries.",
      },
    ],
  },
  {
    slug: "roof-replacement-pasadena",
    title: "Pasadena Roof Replacement Proof Page",
    city: "Pasadena",
    service: "Roof Replacement",
    description:
      "A proof-ready Pasadena roof replacement page structured for real replacement details, photos, and owner-approved proof once available.",
    heroImage: "/site/service-roof-replacement.jpg",
    proofStatus: "Real Pasadena replacement photos, scope notes, and approval details are still needed.",
    sections: [
      {
        heading: "What this page can document",
        items: [
          "The roof age, condition, or recurring issue that led to a replacement conversation.",
          "The inspection findings that separated repair from replacement planning.",
          "The replacement scope, materials, timing, financing, and scheduling notes once verified.",
          "Approved before-and-after photos when actual project assets are supplied.",
        ],
      },
      {
        heading: "Current honest next step",
        items: [
          "Use this page as the Pasadena roof replacement proof slot.",
          "Avoid material, warranty, price, or timeline claims until they are verified.",
          "Add project proof only after owner review.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this a finished Pasadena replacement case study?",
        answer:
          "No. It is the live route and template for a future verified proof page, not a fabricated project story.",
      },
      {
        question: "Can Pasadena homeowners ask about replacement now?",
        answer:
          "Yes. Visitors can call or request an estimate for roof replacement planning.",
      },
    ],
  },
  {
    slug: "storm-damage-roofing-glendale",
    title: "Glendale Storm Damage Roofing Proof Page",
    city: "Glendale",
    service: "Storm Damage Roofing",
    description:
      "A proof-ready Glendale storm damage roofing page for future verified storm repair details, inspection notes, and photos.",
    heroImage: "/site/hero-storm-damage-roofing.jpg",
    proofStatus: "Real Glendale storm damage photos, inspection notes, and project approval details are still needed.",
    sections: [
      {
        heading: "What this page can document",
        items: [
          "The storm timing, visible roof damage, and leak symptoms the property owner reported.",
          "Inspection findings around wind damage, lifted material, flashing, and exposed areas.",
          "Emergency protection, repair, replacement, financing, or insurance-help conversations once verified.",
          "Ground-safe photos and completed-work photos after owner approval.",
        ],
      },
      {
        heading: "Current honest next step",
        items: [
          "Use this page as the Glendale storm damage proof slot.",
          "Do not claim insurance outcomes or emergency response details until confirmed.",
          "Add verified proof assets when they are available.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this a real Glendale storm damage case study today?",
        answer:
          "No. The route is published as a proof-ready page and must be filled with verified project details later.",
      },
      {
        question: "Can Glendale callers ask about storm damage now?",
        answer:
          "Yes. Storm damage, active leaks, and exposed roof sections should start with a call.",
      },
    ],
  },
];

const allCities = areaGroups.flatMap((group) => group.cities);

const proofHighlights = [
  "5.0 Google rating and 7 public Google reviews are the only review facts currently used.",
  "No individual review text, reviewer names, or completed-project claims are fabricated.",
  "Reusable proof slots are ready for real photos, reviews, and project details when the owner supplies them.",
];

export const siteConfig = {
  businessName: "Rise Roofing",
  legalName: "Rise Roofing",
  primaryCity: "Los Angeles",
  state: "CA",
  audience: "Residential & commercial roofing",
  phoneDisplay: "(818) 714-7330",
  phoneE164: "+18187147330",
  phoneHref: "tel:+18187147330",
  siteUrl,
  productionSiteUrl,
  googleBusinessProfileUrl: "https://share.google/Jbeck6wakyPavHWgz",
  reviewRating: 5.0,
  reviewCount: 7,
  serviceAreaLabel: "Los Angeles County and nearby Southern California service areas",
  serviceAreaType: "Service-area roofing company",
  metaDescription:
    "Rise Roofing provides roof repair, roof replacement, roof inspections, storm damage roofing, emergency roofing, and residential and commercial roofing service across Los Angeles and nearby California cities.",
  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-WS44FS39",
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-71MTL144DV",
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
  estimateForm: {
    jotformId: process.env.NEXT_PUBLIC_JOTFORM_ESTIMATE_FORM_ID ?? "261313493545356",
    callbackPromise: "same business day callback",
  },
  hero: {
    eyebrow: "LOCAL ROOFING - LOS ANGELES - RESIDENTIAL + COMMERCIAL",
    headline: "Roof repair, replacement, and inspections with clear next steps.",
    subheadline:
      "Rise Roofing helps homeowners, property managers, and commercial clients move from roof concern to practical estimate conversation without pressure or confusing trade language.",
    primaryCta: "Call for an estimate",
    secondaryCta: "Request estimate online",
  },
  trustBar: [
    "5.0 Google rating",
    "7 public Google reviews",
    "Free estimates",
    "Storm and insurance-help conversations",
  ],
  differentiators: [
    {
      title: "Call-first communication",
      description:
        "Roofing problems are easier to solve when the first conversation is direct, clear, and tied to the urgency of the roof concern.",
    },
    {
      title: "Repair-or-replacement clarity",
      description:
        "The service path helps owners understand whether the next step is inspection, targeted repair, emergency response, or replacement planning.",
    },
    {
      title: "Honest proof system",
      description:
        "The current site uses verified rating/count facts and reusable proof slots without inventing customer reviews or project claims.",
    },
  ],
  process: [
    "Call Rise Roofing or request an estimate",
    "Describe the roof concern, city, and urgency",
    "Review inspection, repair, or replacement options",
    "Schedule the approved next step",
  ],
  faqs: [
    {
      question: "Does Rise Roofing offer free estimates?",
      answer:
        "Yes. Free-estimate messaging is approved, and the site is built to push callers toward a real estimate conversation.",
    },
    {
      question: "Can Rise Roofing help with storm or emergency roof repair?",
      answer:
        "Yes. Emergency and storm repair messaging is approved. Active leaks or exposed roof sections should start with a phone call.",
    },
    {
      question: "Can Rise Roofing help with financing or insurance-claim questions?",
      answer:
        "Yes. Financing and insurance-claim help messaging is approved, while the site avoids promising specific claim outcomes.",
    },
  ],
  stats: [
    { label: "Primary market", value: "Los Angeles" },
    { label: "Service model", value: "Service-area business" },
    { label: "Google rating", value: "5.0 / 7 reviews" },
  ],
  brand: {
    primaryLogo: "/brand/rise-roofing-logo-primary.png",
    markLogo: "/brand/rise-roofing-mark.png",
    alternateLogo: "/brand/rise-roofing-logo-alt.png",
  },
  proofHighlights,
  services,
  areaGroups,
  allCities,
  cityPages,
  firstWaveCities: cityPages.filter((city) => city.priority === "first-wave"),
  anchorCityPages: cityPages.filter((city) => city.priority === "anchor-market"),
  featuredCities: cityPages.map((city) => city.city),
  blogPosts,
  projectProofPages,
  publishingChecklist: [
    "Confirm canonical URL and metadata",
    "Confirm schema renders valid JSON-LD",
    "Confirm internal links to service, estimate, and phone CTAs",
    "Confirm sitemap includes the new route",
    "Confirm phone, GBP, service-page, city-page, and quote-form events are trackable",
  ],
} as const;

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  Service["slug"],
  Service
>;

export const cityPageMap = Object.fromEntries(cityPages.map((city) => [city.slug, city])) as Record<
  CityPage["slug"],
  CityPage
>;

export const blogPostMap = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<
  BlogPost["slug"],
  BlogPost
>;

export const projectProofPageMap = Object.fromEntries(projectProofPages.map((page) => [page.slug, page])) as Record<
  ProjectProofPage["slug"],
  ProjectProofPage
>;
