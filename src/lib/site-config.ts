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
  metaTitle?: string;
  metaDescription?: string;
  relatedServices?: string[];
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
  metaTitle?: string;
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

const googleBusinessProfileUrl = "https://share.google/Jbeck6wakyPavHWgz";
const instagramUrl = "https://www.instagram.com/rise_roofing_";
const socialProfiles = [googleBusinessProfileUrl, instagramUrl];

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
    slug: "roof-leak-repair",
    title: "Roof Leak Repair",
    shortLabel: "Roof leak repair",
    thumbnailImage: "/site/service-roof-repair.jpg",
    heroImage: "/site/hero-roof-repair.jpg",
    metaTitle: "Roof Leak Repair in Los Angeles",
    metaDescription:
      "Roof leak repair in Los Angeles from Rise Roofing — leak tracing, flashing and shingle fixes, and clear next steps before water damage spreads. Call (818) 714-7330 for a free estimate.",
    excerpt:
      "Roof leak repair in Los Angeles — leak tracing, flashing and shingle fixes, and a clear plan to stop water entry before it spreads.",
    heroTitle: "Roof leak repair in Los Angeles and nearby cities",
    summary:
      "A roof leak rarely fixes itself, and the longer water moves through a roof the more it costs. Rise Roofing approaches roof leak repair in Los Angeles by tracing the leak to its real source, explaining what is urgent, and repairing the flashing, shingle, or roof-penetration detail that is letting water in.",
    bullets: [
      "Roof leak repair across Los Angeles and nearby cities",
      "Leak tracing to the real source, not just the stain",
      "Flashing, shingle, vent, and roof-penetration leak fixes",
    ],
    symptoms: [
      "Active drips, ceiling stains, or bubbling paint during or after rain",
      "Water tracking around a chimney, skylight, vent, or roof valley",
      "Damp drywall, musty smells, or attic moisture after storms",
      "A small leak that keeps returning even after a previous patch",
    ],
    process: [
      "Describe the leak, when it started, and where water shows up",
      "Inspect the roof and the flashing and penetration details tied to the leak",
      "Explain the likely source and the roof leak repair options in plain language",
      "Complete the approved repair and document what was fixed",
    ],
    faqs: [
      {
        question: "Do you handle roof leak repair in Los Angeles and nearby cities?",
        answer:
          "Yes. Rise Roofing handles roof leak repair across Los Angeles and nearby cities such as Pasadena, Glendale, Burbank, and Santa Monica, from a single stubborn leak to storm-related water entry.",
      },
      {
        question: "How fast can you fix a roof leak in Los Angeles?",
        answer:
          "Timing depends on the cause and the weather, but active leaks are treated as urgent. Calling first is the fastest path so the team can gauge urgency, talk through temporary protection if needed, and schedule the roof leak repair.",
      },
      {
        question: "How do you find where a roof leak is actually coming from?",
        answer:
          "Water usually enters at one point on the roof and shows up somewhere else inside, so a roof leak repair starts by tracing the interior sign back to the roof detail above it — flashing, a penetration, a valley, or worn material. Finding the true source is what keeps the repair from turning into a repeat visit.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Leak repair recommendations explain the source, urgency, and next step in plain language.",
      "Inspection photos can be added later as real proof assets once available.",
      "Call-first CTAs keep urgent roof leak conversations easy to start.",
    ],
    conversionNote:
      "For an active roof leak in Los Angeles, call first so the team can gauge urgency and talk through temporary protection before water damage spreads.",
    relatedServices: ["roof-repair", "emergency-roofing", "roof-inspections"],
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
    metaTitle: "Commercial Roofing in Los Angeles",
    metaDescription:
      "Commercial roofing in Los Angeles from Rise Roofing — flat and low-slope roof repair, replacement, and maintenance for property managers and business owners. Call (818) 714-7330 for a free estimate.",
    excerpt:
      "Commercial roofing in Los Angeles — flat and low-slope roof repair, replacement, and maintenance for offices, retail, and managed properties.",
    heroTitle: "Commercial roofing in Los Angeles for property managers and business owners",
    summary:
      "Rise Roofing works with property managers and business owners across Los Angeles on commercial roof repair, replacement, and maintenance, including flat and low-slope systems. Every conversation stays clear about what is happening, how urgent it is, what roof access is needed, and how to keep disruption to tenants and operations low.",
    bullets: [
      "Commercial roof repair and replacement across Los Angeles",
      "Flat and low-slope systems: TPO, modified bitumen, and built-up roofs",
      "Scheduling that respects tenants, retail hours, and business operations",
    ],
    symptoms: [
      "Water entry near tenants, offices, inventory, or electrical panels",
      "Ponding, blistering, or seam and membrane wear on a flat or low-slope roof",
      "Aging built-up, TPO, or modified-bitumen roofs nearing the end of their service life",
      "Storm or wind damage, or recurring leaks a property manager needs documented",
    ],
    process: [
      "Clarify the building, roof system, access, and urgency",
      "Inspect the roof areas tied to the leak or concern",
      "Separate immediate stabilization from longer-term repair or replacement",
      "Provide a practical scope, scheduling plan, and free estimate",
    ],
    faqs: [
      {
        question: "Does Rise Roofing handle commercial roofing in Los Angeles and nearby cities?",
        answer:
          "Yes. Rise Roofing handles commercial roofing across Los Angeles and nearby cities such as Pasadena, Glendale, Burbank, and Santa Monica, from single-store retail to office and mixed-use buildings.",
      },
      {
        question: "Are you commercial roofing contractors who give free estimates?",
        answer:
          "Yes. As commercial roofing contractors serving Los Angeles, Rise Roofing starts with a free estimate conversation focused on the roof condition, urgency, and the access your building needs.",
      },
      {
        question: "Can Rise Roofing work with property managers on commercial roof repair?",
        answer:
          "Yes. Commercial roof repair inquiries can start with the building type, roof system, access notes, leak location, and urgency, and property managers can request documentation for owners and tenants.",
      },
      {
        question: "What commercial roofing systems do you repair and replace?",
        answer:
          "Most Los Angeles commercial buildings use flat or low-slope roofs, such as TPO, modified bitumen, or built-up systems. Rise Roofing can inspect these, scope a repair, or plan a replacement when a roof is past its service life.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Commercial copy emphasizes roof system, access, scheduling, and scope clarity.",
      "The template leaves room for real Los Angeles building-type proof once available.",
      "Phone CTAs help property managers describe urgent operational concerns quickly.",
    ],
    conversionNote:
      "For commercial roofing in Los Angeles, call with the building type, roof system, leak location, access constraints, and urgency, or request a free estimate online.",
    relatedServices: ["flat-roof-repair", "roof-repair"],
  },
  {
    slug: "flat-roof-repair",
    title: "Flat Roof Repair",
    shortLabel: "Flat roof repair",
    thumbnailImage: "/site/service-roof-repair.jpg",
    heroImage: "/site/hero-commercial-roofing.jpg",
    metaTitle: "Flat Roof Repair in Los Angeles",
    metaDescription:
      "Flat roof repair in Los Angeles from Rise Roofing — low-slope, membrane, seam, and ponding-water repair for commercial and residential flat roofs. Call (818) 714-7330 for a free estimate.",
    excerpt:
      "Flat roof repair in Los Angeles — low-slope, membrane, seam, and ponding-water repair for commercial and residential flat roofs.",
    heroTitle: "Flat roof repair in Los Angeles for low-slope and flat roofs",
    summary:
      "Rise Roofing provides flat roof repair in Los Angeles for low-slope and flat roofs on homes and commercial buildings. Flat roofs fail differently than sloped roofs: leaks tend to start at seams, flashing, drains, or low spots where ponding water sits after rain. Every conversation stays clear about the membrane system, where water is getting in, and whether a targeted repair or a longer-term plan is the honest next step.",
    bullets: [
      "Flat and low-slope roof repair across Los Angeles",
      "Membrane, seam, flashing, and ponding-water repair",
      "Repair for both commercial and residential flat roofs",
    ],
    symptoms: [
      "Ponding water that lingers on a flat or low-slope roof after rain",
      "Blisters, splits, or open seams on a TPO, modified-bitumen, or built-up membrane",
      "Leaks near drains, scuppers, parapet walls, skylights, or roof penetrations",
      "Cracking, alligatoring, or worn coatings on an aging flat roof",
    ],
    process: [
      "Confirm the flat-roof leak, ponding area, or membrane concern by phone",
      "Inspect the low-slope surface, seams, flashing, drains, and penetrations",
      "Explain the likely cause and a targeted flat-roof repair scope",
      "Complete the approved repair and document what was addressed",
    ],
    faqs: [
      {
        question: "Does Rise Roofing handle flat roof repair in Los Angeles?",
        answer:
          "Yes. Rise Roofing handles flat roof repair in Los Angeles and nearby cities for low-slope and flat roofs, including TPO, modified bitumen, and built-up membrane systems on both commercial and residential properties.",
      },
      {
        question: "What causes leaks on a flat or low-slope roof?",
        answer:
          "Flat and low-slope roof leaks usually start at open seams, failed flashing, cracked membrane, clogged drains, or ponding water that sits on the roof after rain. A flat roof repair inspection traces the source before the water spreads.",
      },
      {
        question: "Can you fix ponding water on a flat roof?",
        answer:
          "Yes. Ponding water on a flat roof points to drainage, slope, or low-spot problems. The repair conversation looks at drains, scuppers, tapered areas, and membrane condition so standing water has a path off the roof instead of soaking into the system.",
      },
      {
        question: "Do you repair both commercial and residential flat roofs?",
        answer:
          "Yes. Flat and low-slope roofs show up on Los Angeles homes, room additions, garages, retail spaces, and office buildings. Rise Roofing repairs flat roofs on commercial and residential properties and can explain whether repair or replacement makes more sense.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Flat-roof copy emphasizes low-slope systems, membrane condition, ponding, and drainage clarity.",
      "The template leaves room for real Los Angeles flat-roof project photos once available.",
      "Phone CTAs help owners and property managers describe ponding or membrane leaks quickly.",
    ],
    conversionNote:
      "For flat roof repair in Los Angeles, call with the roof type, the leak or ponding location, and how the building is used, or request a free estimate online.",
    relatedServices: ["commercial-roofing", "roof-repair"],
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    shortLabel: "Roof inspections",
    thumbnailImage: "/site/service-roof-inspection.jpg",
    heroImage: "/site/hero-roof-inspections.jpg",
    metaTitle: "Roof Inspection in Los Angeles",
    metaDescription:
      "Roof inspection in Los Angeles from Rise Roofing — post-storm, pre-sale, insurance, and maintenance roof checks with clear findings and next steps. Call (818) 714-7330 for a free estimate.",
    excerpt:
      "Roof inspection in Los Angeles for post-storm follow-up, pre-sale and buyer checks, insurance documentation, and routine maintenance.",
    heroTitle: "Roof inspection in Los Angeles for homeowners, buyers, and post-storm checks",
    summary:
      "Rise Roofing provides roof inspection in Los Angeles and nearby cities such as Pasadena, Glendale, Burbank, and Santa Monica, whether you need a post-storm condition check, a pre-sale or buyer inspection, insurance documentation, or routine maintenance. A roof inspection should turn uncertainty into a practical recommendation, especially when an owner needs to know whether a problem is urgent or can wait.",
    bullets: [
      "Roof inspection across Los Angeles and nearby cities",
      "Post-storm, pre-sale, insurance, and maintenance roof checks",
      "Clear findings with practical repair-or-replacement guidance",
    ],
    symptoms: [
      "Roof questions after wind, rain, or debris during a Los Angeles storm",
      "Aging roof materials or visible wear before listing or buying a home",
      "Insurance or claim questions that need a documented roof condition",
      "Stains, leaks, or exterior issues that need a professional inspection opinion",
    ],
    process: [
      "Gather the reason for the roof inspection",
      "Check the roof areas tied to the storm, sale, insurance, or maintenance concern",
      "Explain condition, risk, and the next step in plain language",
      "Recommend repair, replacement planning, or monitoring",
    ],
    faqs: [
      {
        question: "Does Rise Roofing handle roof inspection in Los Angeles and nearby cities?",
        answer:
          "Yes. Rise Roofing provides roof inspection in Los Angeles and nearby cities such as Pasadena, Glendale, Burbank, and Santa Monica, for homes, multi-unit properties, and managed buildings.",
      },
      {
        question: "When should I schedule a roof inspection in Los Angeles?",
        answer:
          "Schedule a roof inspection after a storm or high winds, before buying or selling a home, as part of routine maintenance, or whenever a leak appears or the roof condition is uncertain.",
      },
      {
        question: "Can you inspect a roof before I buy or sell a home in Los Angeles?",
        answer:
          "Yes. A pre-sale or buyer roof inspection reviews the roof's current condition and remaining life so you can plan repairs, negotiate, or move forward with clear information.",
      },
      {
        question: "Can a roof inspection help with an insurance or storm-damage claim?",
        answer:
          "Yes. A post-storm roof inspection can document visible damage and give next-step guidance to support an insurance conversation, without guessing the outcome of any claim.",
      },
      ...sharedServiceFaqs,
    ],
    proofPoints: [
      "Inspection content helps Los Angeles owners and buyers prepare details before the call.",
      "Future inspection photos and reports can plug directly into the proof section.",
      "FAQ schema supports roof-inspection search intent without overclaiming.",
    ],
    conversionNote:
      "For a roof inspection in Los Angeles, call with the property type, the reason for the inspection (storm, sale, insurance, or maintenance), and any leak or damage you can see, or request a free estimate online.",
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
    heroTitle: "Roofing and Roof Repair in Glendale, CA",
    metaTitle: "Roofing Glendale CA | Glendale Roof Repair",
    metaDescription:
      "Roofing in Glendale for Verdugo foothill homes: roof repair, leak help, wind and storm damage, and inspections. Call Rise Roofing for a free estimate.",
    intro:
      "Glendale roofing has to stand up to a lot: high-UV summers that bake shingles and tile underlayment, Santa Ana winds that lift and loosen them, and concentrated winter storms that find every weak flashing and valley. On Verdugo Mountains and San Rafael hillside lots, slope drainage and wildfire-rated roof details matter even more. Whether you need Glendale roof repair, a leak checked, or replacement planning, call Rise Roofing for a free estimate conversation.",
    roofingConcerns: [
      "Foothill and hillside slope drainage that channels heavy runoff",
      "High-UV summer heat aging shingles, tile underlayment, and sealants",
      "Santa Ana winds lifting and loosening shingles and clay tile",
      "Recurring winter-storm leaks at flashing, valleys, and roof penetrations",
      "Class A fire-rated, ember-resistant roofing for Verdugo and San Rafael hillside homes",
    ],
    serviceFocus: ["Roof Repair", "Roof Replacement", "Roof Inspections", "Storm Damage Roofing"],
    nearbyCities: ["Burbank", "Pasadena", "La Canada Flintridge", "Eagle Rock"],
    faqs: [
      {
        question: "Do you handle roof repair for hillside homes in the Glendale foothills?",
        answer:
          "Yes. Many Glendale roofs sit on sloped lots against the Verdugo Mountains and San Rafael Hills, where drainage, runoff, and wind exposure all factor into a repair. Call with your address, roof type, and what you are seeing, and we can talk through the right next step and set up a free estimate.",
      },
      {
        question: "How do I know if my Glendale roof needs repair or replacement?",
        answer:
          "It usually comes down to age, how widespread the damage is, and how often leaks keep returning. A roof with one isolated problem and good remaining life is often a repair candidate, while widely worn shingles, failing tile underlayment, or leaks in several spots lean toward replacement. The fastest way to sort it out is a quick call and, if helpful, an inspection before any larger decision.",
      },
      {
        question: "Is fire-rated roofing worth considering for a Glendale hillside home?",
        answer:
          "For homes near the foothills and wildland edges, Class A fire-rated roofing and ember-resistant roof details are genuinely relevant and can be part of a repair or replacement plan. Mention that your home is on or near the hillside when you call, and we will factor fire-resistant options into the conversation and any inspection.",
      },
      {
        question: "Does Rise Roofing have an office in Glendale?",
        answer:
          "Rise Roofing is a service-area roofing company covering Glendale and the surrounding Los Angeles County foothills, so we do not operate a storefront in every city we serve. You still get the same call-first support: describe the roof concern, your neighborhood, and the urgency, and we will set up a free estimate and a clear next step. For active leaks or storm damage, calling first is faster than the estimate request page.",
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
  alternateNames: ["Rise Roof", "Rise Roofing AV"],
  primaryCity: "Los Angeles",
  state: "CA",
  audience: "Residential & commercial roofing",
  phoneDisplay: "(818) 714-7330",
  phoneE164: "+18187147330",
  phoneHref: "tel:+18187147330",
  siteUrl,
  productionSiteUrl,
  googleBusinessProfileUrl,
  instagramUrl,
  socialProfiles,
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
