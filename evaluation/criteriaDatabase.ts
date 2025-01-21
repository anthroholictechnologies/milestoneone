import { Subjects } from "./syllabusDatabase";

export const baseParameters = {
  criteria: [
    {
      parameter: "Understanding and Interpretation of the Question",
      logic: [
        "Relevance: How well the answer addresses the question's demand, including directive words (e.g., analyze, critically examine)",
        "Scope: Covers all parts of the question comprehensively.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Content Quality",
      logic: [
        "Depth: Demonstrates detailed knowledge and understanding of the topic.",
        "Accuracy: Correct and precise information without factual errors.",
        "Conceptual Clarity: Clear explanation of core ideas, concepts, and theories.",
        "Balanced Approach: Inclusion of multiple perspectives or dimensions (economic, social, political, ethical, etc.).",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Structure and Organization",
      logic: [
        "Introduction: Clear and concise; sets the tone by defining terms or providing context.",
        "Body: Logical flow of arguments with well-structured paragraphs.",
        "Conclusion: Summarizes the argument and provides a balanced, forward-looking insight.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Critical Thinking and Analysis",
      logic: [
        "Originality: Displays innovative or unique insights.",
        "Critical Evaluation: Balanced analysis with pros and cons, strengths and weaknesses.",
        "Interdisciplinary Connections: Links the topic with other subjects or contemporary issues where relevant.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Language and Expression",
      logic: [
        "Clarity: Simple and precise language; avoids unnecessary jargon.",
        "Grammar and Syntax: Error-free and coherent sentence construction.",
        "Tone: Formal, academic, and neutral.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Use of Evidence and Examples",
      logic: [
        "Relevance: Appropriately selected examples, case studies, data, or reports.",
        "Integration: Seamless inclusion of evidence to support arguments.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Time and Word Management",
      logic: [
        "Adherence to Word Limit: Concise answers without missing key points.",
        "Prioritization: Focus on the most important aspects of the question.",
      ],
      category: "base_paramter",
    },
    {
      parameter: "Objectivity and Neutrality",
      logic: [
        "Avoids Bias: Avoids bias or overly subjective opinions.",
        "Balanced Tone: Maintains a balanced and rational tone throughout.",
      ],
      category: "base_paramter",
    },
  ],
};

export const subjectParameters: Record<Subjects, any> = {
  //General studies one:
  [Subjects.HISTORY]: {
    criteria: [
      {
        parameter: "Chronological Accuracy",
        logic: [
          "Logical Timeline: Does the answer follow a logical and accurate timeline?",
          "Dates and Events: Are dates, events, and sequences correctly presented?",
        ],
      },
      {
        parameter: "Understanding of Context",
        logic: [
          "Socio-Economic, Political, and Cultural Context: Is the socio-economic, political, and cultural context of the historical event or period clearly explained?",
          "Interconnections Between Events: Are interconnections between events established?",
        ],
      },
      {
        parameter: "Inclusion of Key Facts",
        logic: [
          "Significant Events and Movements: Are significant events, movements, and personalities mentioned?",
          "Essential References: Does the aspirant reference essential treaties, policies, or turning points?",
        ],
      },
      {
        parameter: "Analysis and Interpretation",
        logic: [
          "Critical Analysis: Does the answer go beyond mere narration to critically analyze causes, effects, and consequences?",
          "Multiple Perspectives: Is there an evaluation of multiple perspectives (e.g., nationalist, Marxist, or subaltern views)?",
        ],
      },
      {
        parameter: "Use of Historical Terminology",
        logic: [
          "Appropriate Terms: Are proper terms and phrases (e.g., colonialism, imperialism, renaissance) appropriately used?",
          "Reflective Language: Is the language reflective of historical discourse?",
        ],
      },
      {
        parameter: "World History Perspective",
        logic: [
          "International Influences: Are international influences (e.g., colonialism, industrial revolution) on Indian or global events discussed where relevant?",
        ],
      },
      {
        parameter: "Use & Mention of Sources",
        logic: [
          "Key Historical Texts: Does the answer draw from key historical texts, archaeological findings, or historiography?",
        ],
      },
      {
        parameter: "Connection Between Events",
        logic: [
          "Causal Links: Are causal links between events established (e.g., causes and consequences of revolts, wars, or movements)?",
        ],
      },
      {
        parameter: "Significance of Turning Points",
        logic: [
          "Pivotal Moments: Are pivotal moments in history identified and analyzed for their transformative impact?",
        ],
      },
    ],
  },
  [Subjects.GEOGRAPHY]: {
    criteria: [
      {
        parameter: "Map Usage",
        logic: [
          "Relevance and Labeling: Does the answer include relevant and well-labeled maps to support explanations?",
          "Effective Usage: Are maps used effectively to depict spatial relationships, distributions, or trends?",
        ],
      },
      {
        parameter: "Spatial Analysis",
        logic: [
          "Accuracy: Are spatial patterns (e.g., distribution of resources, population, climatic zones) accurately analyzed?",
        ],
      },
      {
        parameter: "Interrelationships Between Physical and Human Geography",
        logic: [
          "Connections: Is the connection between physical features (e.g., topography, climate) and human activities (e.g., agriculture, urbanization) clearly established?",
        ],
      },
      {
        parameter: "Climatic and Environmental Factors",
        logic: [
          "Climatic Phenomena: Are climatic phenomena (e.g., monsoons, El Niño) explained with proper geographical reasoning?",
          "Environmental Impact: Is the environmental impact of human activities (e.g., deforestation, urban sprawl) discussed?",
        ],
      },
      {
        parameter: "Geographical Terminology",
        logic: [
          "Accurate Usage: Are specific terms and concepts (e.g., isostasy, albedo, rain shadow) accurately used and explained?",
        ],
      },
      {
        parameter: "Diagrammatic Representation",
        logic: [
          "Effective Illustrations: Are diagrams, charts, or flowcharts used effectively to illustrate processes (e.g., plate tectonics, river meandering)?",
          "Labeling and Relevance: Are they correctly labeled and relevant to the explanation?",
        ],
      },
      {
        parameter: "Location-Specific Examples",
        logic: [
          "Specificity: Are examples specific to locations (e.g., Himalayan rivers, Western Ghats, Thar Desert) provided to support arguments?",
        ],
      },
      {
        parameter: "Geographical Processes",
        logic: [
          "Natural Processes: Are natural processes (e.g., erosion, sedimentation, volcanism) explained with clarity?",
          "Anthropogenic Processes: Are anthropogenic processes (e.g., urban heat islands, land-use change) analyzed in detail?",
        ],
      },
      {
        parameter: "Regional Planning and Development",
        logic: [
          "Disparities and Strategies: Are regional disparities and planning strategies (e.g., river basin development, SEZs) adequately covered?",
        ],
      },
      {
        parameter: "Linkages Between Geography and Economy",
        logic: [
          "Relationships: Are relationships between geographical factors and economic activities (e.g., agriculture, trade, industries) discussed?",
        ],
      },
      {
        parameter: "Natural Resource Distribution",
        logic: [
          "Spatial Patterns: Are the spatial patterns of natural resources (e.g., minerals, water) analyzed?",
          "Sustainability: Is there an evaluation of their sustainable use?",
        ],
      },
      {
        parameter: "Disaster Geography",
        logic: [
          "Causes and Impacts: Are geographical causes and impacts of disasters (e.g., cyclones, earthquakes, floods) explained?",
          "Mitigation Strategies: Are mitigation strategies discussed in geographical terms?",
        ],
      },
      {
        parameter: "Urban and Rural Settlements",
        logic: [
          "Factors and Trends: Are the geographical factors influencing settlement patterns and urbanization trends analyzed?",
        ],
      },
      {
        parameter: "Physical Features and Landforms",
        logic: [
          "Landforms and Formation Processes: Are landforms (e.g., plateaus, deltas, sand dunes) and their formation processes explained accurately?",
        ],
      },
      {
        parameter: "Climate Change and Sustainability",
        logic: [
          "Impact on Regions: Is the impact of climate change on various regions (e.g., Arctic ice melting, desertification) addressed?",
          "Geographic Solutions: Are geographic solutions for sustainability (e.g., afforestation, renewable energy) proposed?",
        ],
      },
      {
        parameter: "Transport and Connectivity",
        logic: [
          "Factors Affecting Networks: Are geographical factors affecting transport networks (e.g., ports, highways, railways) discussed?",
        ],
      },
      {
        parameter: "Agricultural Geography",
        logic: [
          "Crop Patterns and Irrigation: Are geographical factors influencing crop patterns, irrigation, and soil types analyzed?",
        ],
      },
      {
        parameter: "Geopolitical and Strategic Importance",
        logic: [
          "International Relations: Are geographical factors affecting international relations or border disputes (e.g., India-China border, Suez Canal) discussed?",
        ],
      },
    ],
  },

  [Subjects.INDIAN_SOCIETY]: {
    criteria: [
      {
        parameter: "Understanding of Heritage",
        logic: [
          "Tangible and Intangible Heritage: Does the answer differentiate between tangible (monuments, artifacts) and intangible (traditions, languages) heritage?",
          "Importance and Preservation: Is there a clear understanding of the importance and preservation of heritage?",
        ],
      },
      {
        parameter: "Cultural Diversity",
        logic: [
          "Diversity Reflection: Does the answer reflect the diversity of Indian culture across regions, religions, and languages?",
          "Folk and Tribal Examples: Are examples of folk traditions, tribal cultures, and regional art forms included?",
        ],
      },
      {
        parameter: "Art and Architecture",
        logic: [
          "Features and Historical Significance: Are the features, styles, and historical significance of Indian art and architecture (e.g., Mauryan, Gupta, Chola) accurately described?",
        ],
      },
      {
        parameter: "Literature and Philosophy",
        logic: [
          "Discussion of Works: Are ancient, medieval, and modern literary works and philosophies appropriately discussed?",
          "Relevant Text References: Are texts like the Vedas, Upanishads, and Sangam literature referenced where relevant?",
        ],
      },
      {
        parameter: "Performing Arts",
        logic: [
          "Dance Forms: Are classical (e.g., Bharatanatyam, Kathak) and folk dance forms (e.g., Kalbelia, Yakshagana) addressed?",
          "Music and Theatre: Are music forms (e.g., Hindustani, Carnatic) and theatre traditions (e.g., Kutiyattam, Bhavai) analyzed?",
        ],
      },
      {
        parameter: "Religious and Spiritual Traditions",
        logic: [
          "Major Religions: Are the contributions of major religions (e.g., Hinduism, Buddhism, Jainism, Sikhism) to Indian culture explained?",
          "Syncretic Traditions: Are syncretic traditions (e.g., Bhakti and Sufi movements) highlighted?",
        ],
      },
      {
        parameter: "Cultural Continuity and Evolution",
        logic: [
          "Focus on Continuity: Is there a focus on how Indian culture has evolved while maintaining continuity (e.g., influence of invasions, colonialism)?",
        ],
      },
      {
        parameter: "Festivals and Rituals",
        logic: [
          "Cultural Significance: Are the cultural and regional significance of Indian festivals and rituals (e.g., Pongal, Eid, Durga Puja) explained?",
        ],
      },
      {
        parameter: "Contribution of Tribal Cultures",
        logic: [
          "Unique Contributions: Are unique contributions of tribal art, music, and traditions (e.g., Warli painting, Dhokra art) incorporated?",
        ],
      },
      {
        parameter: "Preservation Efforts",
        logic: [
          "Preservation Discussion: Are issues related to the preservation of cultural heritage (e.g., UNESCO World Heritage Sites, local efforts) discussed?",
        ],
      },
      {
        parameter: "Symbolism and Iconography",
        logic: [
          "Symbolic Meanings: Are the symbolic meanings behind cultural artifacts, rituals, and icons explained?",
        ],
      },
      {
        parameter: "Craft Traditions",
        logic: [
          "Handicrafts and Handloom: Are Indian handicrafts and handloom traditions (e.g., Pashmina, Chikankari, Madhubani) discussed in their historical and cultural context?",
        ],
      },
      {
        parameter: "Global Influence of Indian Culture",
        logic: [
          "Global Impact: Is the global impact of Indian culture (e.g., spread of yoga, Bollywood, cuisine) analyzed?",
        ],
      },
      {
        parameter: "Cultural Integration and Harmony",
        logic: [
          "Unity in Diversity: Are examples of how Indian culture promotes unity in diversity (e.g., Ganga-Jamuni Tehzeeb) discussed?",
        ],
      },
    ],
  },

  //General Studies two:
  [Subjects.POLITY_CONSTITUTION_AND_GOVERNANCE]: {
    criteria: [
      {
        parameter: "Citation of Constitutional Provisions",
        logic: [
          "Accurate Usage: Accurate and relevant usage of Articles, Schedules, and Amendments.",
          "Application of Doctrines: Application of constitutional doctrines like Basic Structure, Rule of Law, or Separation of Powers.",
        ],
      },
      {
        parameter: "Judicial References",
        logic: [
          "Landmark Judgments: Mention of landmark Supreme Court or High Court judgments and their implications (e.g., Kesavananda Bharati, S.R. Bommai).",
        ],
      },
      {
        parameter: "Understanding Federal Structure",
        logic: [
          "Centre-State Relations: Insight into Centre-State relations, devolution of powers, and issues like cooperative federalism.",
        ],
      },
      {
        parameter: "Parliamentary and Executive Insights",
        logic: [
          "Parliamentary Functions: Knowledge of parliamentary functions, legislative processes, and the role of the executive in governance.",
        ],
      },
      {
        parameter: "Governance Frameworks",
        logic: [
          "Models and Practices: Reference to models of governance, transparency initiatives, e-governance practices, and citizen-centric policies.",
        ],
      },
      {
        parameter: "Civil Services Role",
        logic: [
          "Role and Challenges: Depth in explaining the role of civil services in democracy, administrative challenges, and reforms needed.",
        ],
      },
      {
        parameter: "Comparative Perspective",
        logic: [
          "Global Analysis: Analysis of Indian governance in comparison to other countries’ constitutional or governance systems.",
        ],
      },
    ],
  },
  [Subjects.SOCIAL_JUSTICE]: {
    criteria: [
      {
        parameter: "Scheme and Policy Evaluation",
        logic: [
          "Understanding and Critique: Detailed understanding and critique of welfare schemes like MNREGA, PMJDY, Ayushman Bharat, etc.",
          "Implementation Challenges: Insights into challenges in implementation and suggestions for improvement.",
        ],
      },
      {
        parameter: "Vulnerability Analysis",
        logic: [
          "Marginalized Groups Issues: In-depth explanation of issues faced by marginalized groups (SC/ST, women, minorities, disabled).",
          "Constitutional Safeguards: Highlighting constitutional safeguards, laws, and mechanisms for their upliftment.",
        ],
      },
      {
        parameter: "Social Sector Insights",
        logic: [
          "Health, Education, and HR Development: Analysis of health, education, and human resource development initiatives.",
          "Public vs Private Roles: Evaluation of public vs. private roles in these sectors.",
        ],
      },
      {
        parameter: "Poverty and Hunger Analysis",
        logic: [
          "Causes and Consequences: Detailed examination of causes and consequences of poverty and hunger.",
          "Connection with SDGs: Connection with international goals like SDGs (especially Goal 1: No Poverty and Goal 2: Zero Hunger).",
        ],
      },
      {
        parameter: "Data and Reports Usage",
        logic: [
          "Relevant Data Application: Application of relevant data from Census, NFHS, or indices like Global Hunger Index, Human Development Index.",
        ],
      },
      {
        parameter: "Institutional Mechanisms",
        logic: [
          "Role of Institutions: Discussion on the role of bodies like NHRC, NCW, or NITI Aayog in addressing social justice issues.",
        ],
      },
      {
        parameter: "Grassroots Level Impact",
        logic: [
          "Local Performance Analysis: Analysis of how schemes/policies are performing at the local level (panchayats, municipalities).",
        ],
      },
    ],
  },
  [Subjects.INTERNATIONAL_RELATIONS]: {
    criteria: [
      {
        parameter: "Bilateral Relations",
        logic: [
          "India's Relationship with Neighbors: Explanation of India’s relationship with neighbors (e.g., China, Pakistan, Bangladesh) in terms of trade, border issues, and diplomacy.",
          "Treaties and Agreements: Analysis of treaties and agreements signed with specific nations.",
        ],
      },
      {
        parameter: "Regional Cooperation",
        logic: [
          "India’s Role in Regional Groupings: Insight into India’s role in regional groupings like SAARC, ASEAN, BIMSTEC, etc.",
          "Successes and Failures: Evaluation of successes and failures of these organizations.",
        ],
      },
      {
        parameter: "Global Groupings and Agreements",
        logic: [
          "India’s Involvement in Global Organizations: Explanation of India’s involvement in organizations like BRICS, SCO, QUAD, and G20.",
          "Impact of Partnerships: Impact of these partnerships on India’s economy, security, and geopolitics.",
        ],
      },
      {
        parameter: "India’s Diaspora",
        logic: [
          "Role of Diaspora: Analysis of the role of Indian diaspora in diplomacy, trade, and cultural exchange.",
        ],
      },
      {
        parameter: "Global Policies Impacting India",
        logic: [
          "Policies of Developed Countries: Understanding of how policies of developed countries (e.g., US-China trade war, EU regulations) affect India.",
          "Global Issues: Relevance of issues like climate change, energy security, and technology.",
        ],
      },
      {
        parameter: "International Institutions",
        logic: [
          "Role and Reforms: Knowledge of the UN, WTO, IMF, World Bank, and reforms proposed by India.",
          "Effectiveness and Governance: Evaluation of their effectiveness and India’s role in shaping global governance.",
        ],
      },
      {
        parameter: "Current Affairs and Diplomacy",
        logic: [
          "Recent International Developments: Integration of recent international developments (e.g., COP Summits, major treaties).",
          "Strategic Analysis: Strategic analysis of India’s foreign policy (e.g., Look East Policy, Act West Policy).",
        ],
      },
    ],
  },
  //General studies 3
  [Subjects.ECONOMY]: {
    criteria: [
      {
        parameter: "Application of Economic Theories",
        logic: [
          "Integration of Basic Economic Concepts: Ability to integrate basic economic concepts like GDP, inflation, fiscal deficit, etc., into the answer.",
          "Theoretical Frameworks: Explanation of economic phenomena using theoretical frameworks (e.g., Keynesian Economics, Supply-Side Economics).",
        ],
      },
      {
        parameter: "Policy and Budget Analysis",
        logic: [
          "Government Policy Evaluation: Evaluation of government policies (e.g., Make in India, Atmanirbhar Bharat).",
          "Budget Provisions Analysis: Analysis of budget provisions and their implications on growth and welfare.",
        ],
      },
      {
        parameter: "Data and Reports Usage",
        logic: [
          "Reports from Key Institutions: Effective use of reports from institutions like RBI, NITI Aayog, IMF, or World Bank.",
          "Integration of Relevant Data: Integration of relevant data, such as growth rates, employment statistics, or FDI inflows.",
        ],
      },
      {
        parameter: "Employment and Growth Linkages",
        logic: [
          "Employment Generation Strategies: Insight into employment generation strategies, labor market challenges, and their impact on inclusive growth.",
        ],
      },
      {
        parameter: "Reforms and Recommendations",
        logic: [
          "Critical Evaluation of Systems: Critical evaluation of existing systems (e.g., land reforms, subsidies).",
          "Innovative Suggestions: Logical and innovative suggestions for economic reforms.",
        ],
      },
    ],
  },
  [Subjects.SCIENCE_AND_TECHNOLOGY]: {
    criteria: [
      {
        parameter: "Clarity of Technological Concepts",
        logic: [
          "Explanation of Emerging Technologies: Explanation of emerging technologies (e.g., AI, blockchain, CRISPR).",
          "Relating Advancements to Practical Applications: Relating technological advancements to practical applications.",
        ],
      },
      {
        parameter: "Indigenization and Innovation",
        logic: [
          "India's Efforts Toward Self-Reliance: Discussion on India’s efforts toward self-reliance in science and technology.",
          "Indigenous Projects: Mention of indigenous projects like Gaganyaan, DRDO’s initiatives, or local biotech advancements.",
        ],
      },
      {
        parameter: "Global Comparisons",
        logic: [
          "India’s Position in Global Developments: Analysis of India’s position in global scientific and technological developments.",
          "International Collaborations: Reference to international collaborations or achievements (e.g., CERN, NASA partnerships).",
        ],
      },
      {
        parameter: "Ethical and Social Implications",
        logic: [
          "Impact on Ethics, Society, and Privacy: Addressing the impact of technological advancements on ethics, society, and privacy (e.g., debates around AI and surveillance).",
        ],
      },
      {
        parameter: "Current Affairs Integration",
        logic: [
          "Reference to Recent Developments: Reference to recent developments in the field (e.g., Chandrayaan-3, advances in genome editing).",
        ],
      },
    ],
  },

  [Subjects.ENVIRONMENT_DISASTER_AND_MANAGEMENT]: {
    criteria: [
      {
        parameter: "Clarity of Technological Concepts",
        logic: [
          "Explanation of Emerging Technologies: Explanation of emerging technologies (e.g., AI, blockchain, CRISPR).",
          "Relating Advancements to Practical Applications: Relating technological advancements to practical applications.",
        ],
      },
      {
        parameter: "Indigenization and Innovation",
        logic: [
          "India's Efforts Toward Self-Reliance: Discussion on India’s efforts toward self-reliance in science and technology.",
          "Indigenous Projects: Mention of indigenous projects like Gaganyaan, DRDO’s initiatives, or local biotech advancements.",
        ],
      },
      {
        parameter: "Global Comparisons",
        logic: [
          "India’s Position in Global Developments: Analysis of India’s position in global scientific and technological developments.",
          "International Collaborations: Reference to international collaborations or achievements (e.g., CERN, NASA partnerships).",
        ],
      },
      {
        parameter: "Ethical and Social Implications",
        logic: [
          "Impact on Ethics, Society, and Privacy: Addressing the impact of technological advancements on ethics, society, and privacy (e.g., debates around AI and surveillance).",
        ],
      },
      {
        parameter: "Current Affairs Integration",
        logic: [
          "Reference to Recent Developments: Reference to recent developments in the field (e.g., Chandrayaan-3, advances in genome editing).",
        ],
      },
    ],
  },
  [Subjects.INTERNAL_SECURITY]: {
    criteria: [
      {
        parameter: "Internal Security Dynamics",
        logic: [
          "Issues like Naxalism, Terrorism, and Insurgency: Understanding of issues like Naxalism, terrorism, and insurgency.",
          "Developmental and Governance Approaches: Analysis of developmental and governance approaches to tackle these challenges.",
        ],
      },
      {
        parameter: "Cybersecurity",
        logic: [
          "Cybersecurity Issues: Knowledge of issues like data breaches, cyber warfare, and social media misuse.",
          "Legal and Institutional Mechanisms: Explanation of legal and institutional mechanisms like CERT-In and IT Act provisions.",
        ],
      },
      {
        parameter: "Border Security and Challenges",
        logic: [
          "Cross-Border Challenges: Analysis of cross-border challenges like infiltration, smuggling, and border disputes.",
          "Technological Advancements: Reference to technological advancements (e.g., CIBMS, drones) in border management.",
        ],
      },
      {
        parameter: "Role of State and Non-State Actors",
        logic: [
          "State-Sponsored Terrorism: Examination of the role of external forces (e.g., state-sponsored terrorism) and internal non-state actors in security threats.",
        ],
      },
      {
        parameter: "Current Security Affairs",
        logic: [
          "Recent Developments: Integration of recent developments (e.g., new counter-terrorism strategies, cyber policies).",
        ],
      },
    ],
  },
  [Subjects.AGRICULTURE]: {
    criteria: [
      {
        parameter: "Agrarian Reforms",
        logic: [
          "Land Consolidation, Contract Farming, and Digitalization: Insight into reforms like land consolidation, contract farming, and digitalization in agriculture.",
        ],
      },
      {
        parameter: "Policy and Scheme Evaluation",
        logic: [
          "Evaluation of Schemes: Analysis of schemes like PM-KISAN, PMFBY, or eNAM. Understanding of their benefits, challenges, and implementation gaps.",
        ],
      },
      {
        parameter: "Technological Integration",
        logic: [
          "Modern Techniques: Discussion on modern techniques like precision farming, GM crops, or irrigation technology.",
        ],
      },
      {
        parameter: "Sustainability and Productivity",
        logic: [
          "Soil Health and Water Conservation: Addressing soil health, water conservation, and sustainable agricultural practices.",
          "Self-Sufficiency Goals: Evaluation of India’s self-sufficiency goals in food production.",
        ],
      },
      {
        parameter: "Allied Sectors",
        logic: [
          "Fisheries, Animal Husbandry, and Horticulture: Detailed insights into fisheries, animal husbandry, and horticulture. Discussion on their role in boosting farmers’ income and rural economy.",
        ],
      },
      {
        parameter: "Global Context",
        logic: [
          "Agriculture Trade and Global Policies: Reference to India’s position in global agriculture trade and policies affecting exports/imports.",
        ],
      },
    ],
  },

  // General Studies 4
  [Subjects.ETHICS_INTEGRITY_AND_APTITUDE]: {
    criteria: [
      {
        parameter: "Clarity and Definition of Ethical Concepts",
        logic: [
          "Accuracy in defining and explaining ethical concepts (e.g., integrity, empathy, accountability). Use of precise and relevant terminology in ethical discourse.",
        ],
      },
      {
        parameter: "Application of Ethical Frameworks",
        logic: [
          "Integration of ethical theories (e.g., deontology, utilitarianism) to analyze situations. Logical reasoning to justify ethical choices or dilemmas.",
        ],
      },
      {
        parameter: "Value-Based Approach",
        logic: [
          "Reflection of foundational values like impartiality, transparency, and empathy in answers. Emphasis on civil service values in the decision-making process.",
        ],
      },
      {
        parameter: "Problem-Solving Orientation",
        logic: [
          "Ability to identify key ethical issues and provide actionable, pragmatic solutions. Use of step-by-step reasoning to resolve ethical dilemmas in governance or personal scenarios.",
        ],
      },
      {
        parameter: "Emotional Intelligence",
        logic: [
          "Display of empathy, tolerance, and understanding of human emotions in responses. Ability to balance emotional considerations with rational decision-making.",
        ],
      },
      {
        parameter: "Public Service Orientation",
        logic: [
          "Commitment to public welfare, equity, and inclusiveness. Focus on serving the greater good, especially in scenarios involving public policy or governance.",
        ],
      },
      {
        parameter: "Use of Examples",
        logic: [
          "Integration of examples from real-life events, public administration, or lives of great leaders/reformers. Use of contemporary or historical case studies to illustrate ethical points.",
        ],
      },
      {
        parameter: "Logical Coherence",
        logic: [
          "Structuring the answer logically with a clear introduction, body, and conclusion. Smooth flow of ideas and avoidance of contradictions in reasoning.",
        ],
      },
      {
        parameter: "Ethical Dilemmas and Solutions",
        logic: [
          "Identification of ethical conflicts (e.g., personal values vs. professional duties). Presentation of balanced arguments and ethical resolution strategies.",
        ],
      },
      {
        parameter: "Probity and Accountability",
        logic: [
          "Awareness of legal, regulatory, and moral standards in governance. Advocacy for transparency, honesty, and public accountability in solutions.",
        ],
      },
      {
        parameter: "Relevance to Civil Services",
        logic: [
          "Contextual relevance of the answer to the role and responsibilities of a civil servant. Consideration of administrative ethics and public trust in responses.",
        ],
      },
      {
        parameter: "Innovative Thinking",
        logic: [
          "Creative yet ethical approaches to handling governance issues. Originality in solutions while adhering to ethical norms.",
        ],
      },
      {
        parameter: "Case Study Analysis",
        logic: [
          "Comprehensive understanding of the scenario presented in case studies. Clear identification of stakeholders, their interests, and ethical principles involved. Practical yet value-driven recommendations tailored to the case's context.",
        ],
      },
      {
        parameter: "Cultural and Social Sensitivity",
        logic: [
          "Awareness of diversity and inclusivity in responses. Ethical reasoning that respects cultural, social, and economic differences.",
        ],
      },
      {
        parameter: "Conciseness and Precision",
        logic: [
          "Adherence to word limits without sacrificing depth or clarity. Elimination of redundant or verbose content.",
        ],
      },
    ],
  },
};

export const excellenceParameters = [
  {
    parameter: "Current Relevance",
    logic: [
      "Integration of Current Affairs: Application of recent events, data, or policies to enrich the answer.",
      "Timeliness: Demonstrates awareness of contemporary debates or developments.",
    ],
    category: "excellence_criteria",
  },
  {
    parameter: "Presentation",
    logic: [
      "Neatness: Legible handwriting or cleanly typed responses (for digital submissions).",
      "Visual Aids: Effective use of diagrams, flowcharts, or tables when appropriate.",
      "Headings/Subheadings: Proper use of headings to enhance readability.",
    ],
    category: "excellence_criteria",
  },
];
