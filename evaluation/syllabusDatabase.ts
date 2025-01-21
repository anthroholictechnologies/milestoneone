export enum Exams {
  GS1 = "GS1",
  GS2 = "GS2",
  GS3 = "GS3",
  GS4 = "GS4",
}
export enum Subjects {
  // General studies one
  HISTORY = "HISTORY",
  GEOGRAPHY = "GEOGRAPHY",
  INDIAN_SOCIETY = "INDIAN_SOCIETY",

  // GS 2
  POLITY_CONSTITUTION_AND_GOVERNANCE = "POLITY_CONSTITUTION_AND_GOVERNANCE",
  SOCIAL_JUSTICE = "SOCIAL_JUSTICE",
  INTERNATIONAL_RELATIONS = "INTERNATIONAL_RELATIONS",

  // GS 3
  ECONOMY = "ECONOMY",
  SCIENCE_AND_TECHNOLOGY = "SCIENCE_AND_TECHNOLOGY",
  ENVIRONMENT_DISASTER_AND_MANAGEMENT = "ENVIRONMENT_DISASTER_AND_MANAGEMENT",
  INTERNAL_SECURITY = "INTERNAL_SECURITY",
  AGRICULTURE = "AGRICULTURE",

  // GS 4
  ETHICS_INTEGRITY_AND_APTITUDE = "ETHICS_INTEGRITY_AND_APTITUDE",
}

export const SubjectToSyllabusMapping: Record<Subjects, string[]> = {
  // GS 1
  [Subjects.HISTORY]: [
    "Modern Indian History from about the middle of the eighteenth century until the present- significant events, personalities, issues.",
    "The Freedom Struggle — its various stages and important contributors/ contributions from different parts of the country.",
    "Post-independence Consolidation and Reorganization within the country.",
    "History of the World will include events from 18th century such as Industrial Revolution, world wars, Redrawal of National Boundaries, Colonization, Decolonization, political philosophies like Communism, Capitalism, Socialism etc.— their forms and effect on the society.",
    "Role of women in India's freedom struggle and post-independence era.",
    "Cultural history of India with a focus on major artistic and intellectual developments.",
  ],
  [Subjects.GEOGRAPHY]: [
    "Salient features of World’s Physical Geography.",
    "Distribution of Key Natural Resources across the world (including South Asia and the Indian sub-continent); factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India).",
    "Important Geophysical Phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone etc., geographical features and their location-changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna and the effects of such changes.",
    "Climate change and its implications on global and regional scales.",
  ],
  [Subjects.INDIAN_SOCIETY]: [
    "Salient features of Indian Society, Diversity of India.",
    "Role of Women and Women’s Organization, Population and Associated Issues, Poverty and Developmental issues, Urbanization, their problems and their remedies.",
    "Effects of Globalization on Indian society.",
    "Social Empowerment, Communalism, Regionalism & Secularism.",
    "Indian Culture - Salient aspects of Art Forms, Literature and Architecture from ancient to modern times.",
    "Intergenerational equity and its impact on social policies.",
  ],
  // GS 2
  [Subjects.POLITY_CONSTITUTION_AND_GOVERNANCE]: [
    "Indian Constitution—Historical Underpinnings, Evolution, Features, Amendments, Significant Provisions and Basic Structure.",
    "Functions and Responsibilities of the Union and the States, Issues and Challenges Pertaining to the Federal Structure, Devolution of Powers and Finances up to Local Levels and Challenges Therein.",
    "Separation of Powers between various organs Dispute Redressal Mechanisms and Institutions.",
    "Comparison of the Indian Constitutional Scheme with that of Other Countries.",
    "Parliament and State Legislatures—Structure, Functioning, Conduct of Business, Powers & Privileges and Issues Arising out of these.",
    "Structure, Organization and Functioning of the Executive and the Judiciary—Ministries and Departments of the Government; Pressure Groups and Formal/Informal Associations and their Role in the Polity. ",
    "Salient Features of the Representation of People’s Act.",
    "Appointment to various Constitutional Posts, Powers, Functions and Responsibilities of various Constitutional Bodies.",
    "Statutory, Regulatory and various Quasi-judicial Bodies.",
    "Government Policies and Interventions for Development in various sectors and Issues arising out of their Design and Implementation. ",
    "Development Processes and the Development Industry — the Role of NGOs, SHGs , various groups and associations, donors, charities, institutional and other stakeholders.",
    "Important Aspects of Governance, Transparency and Accountability, E-governance-applications, models, successes, limitations, and potential; Citizens Charters, Transparency & Accountability and institutional and other measures. ",
    "Role of Civil Services in a Democracy",
    "Judicial activism and its impact on governance.",
  ],
  [Subjects.SOCIAL_JUSTICE]: [
    "Welfare Schemes for Vulnerable Sections of the population by the Centre and States and the Performance of these Schemes Mechanisms, Laws, Institutions and Bodies constituted for the Protection and Betterment of these Vulnerable Sections.",
    "Issues Relating to Development and Management of Social Sector/Services relating to Health, Education, Human Resources. ",
    "Issues relating to Poverty and Hunger. ",
    "Policies for sustainable and inclusive growth in India.",
  ],
  [Subjects.INTERNATIONAL_RELATIONS]: [
    "India and its Neighborhood- Relations. ",
    "Bilateral, Regional and Global Groupings and Agreements involving India and/or affecting India’s interests. ",
    "Effect of Policies and Politics of Developed and Developing Countries on India’s interests, Indian Diaspora. ",
    "Important International Institutions, agencies & fora - their Structure, Mandate.",
    "Role of emerging economies in reshaping global governance.",
  ],
  // GS 3
  [Subjects.ECONOMY]: [
    "Indian Economy and issues relating to Planning, Mobilization of Resources, Growth, Development and Employment. ",
    "Inclusive Growth and issues arising from it. ",
    "Government Budgeting.",
    "Effects of Liberalization on the Economy, Changes in Industrial Policy and their Effects on Industrial Growth. ",
    "Infrastructure: Energy, Ports, Roads, Airports, Railways etc. ",
    "Investment Models.",
    "Circular economy and its potential in India.",
  ],
  [Subjects.SCIENCE_AND_TECHNOLOGY]: [
    "Developments and their Applications and Effects in Everyday Life. ",
    "Achievements of Indians in Science & Technology; Indigenization of Technology and Developing New Technology. ",
    "Awareness in the fields of IT, Space, Computers, Robotics, Nano-technology, Biotechnology and issues relating to Intellectual Property Rights.",
    "Artificial intelligence and its implications in governance and security.",
  ],
  [Subjects.ENVIRONMENT_DISASTER_AND_MANAGEMENT]: [
    "Conservation, Environmental Pollution and Degradation, Environmental Impact Assessment.",
    "Disaster and Disaster Management.",
    "Climate-resilient infrastructure and disaster mitigation strategies.",
  ],
  [Subjects.INTERNAL_SECURITY]: [
    "Linkages between Development and Spread of Extremism.",
    "Role of External State and Non-state Actors in creating challenges to Internal Security.",
    "Challenges to Internal Security through Communication Networks, Role of Media and Social Networking Sites in Internal Security Challenges, Basics of Cyber Security; Money-Laundering and its prevention.",
    "Security Challenges and their Management in Border Areas - Linkages of Organized Crime with Terrorism.",
    "Various Security Forces and Agencies and their Mandate.",
    "Role of technology in internal security challenges.",
  ],
  [Subjects.AGRICULTURE]: [
    "Major Crops - Cropping Patterns in various parts of the country, - Different Types of Irrigation and Irrigation Systems; Storage, Transport and Marketing of Agricultural Produce and Issues and Related Constraints; E-technology in the aid of farmers.",
    "Issues related to Direct and Indirect Farm Subsidies and Minimum Support Prices; Public Distribution System - Objectives, Functioning, Limitations, Revamping; Issues of Buffer Stocks and Food Security; Technology Missions; Economics of Animal Rearing.",
    "Food Processing and Related Industries in India- Scope’ and Significance, Location, Upstream and Downstream Requirements, Supply Chain Management.",
    "Land Reforms in India.",
    "Role of precision agriculture in improving productivity and sustainability.",
  ],
  // GS 4
  [Subjects.ETHICS_INTEGRITY_AND_APTITUDE]: [
    "This syllabus focuses on understanding and applying ethical principles in governance, public administration, and personal conduct, with an emphasis on case studies to assess real-world ethical dilemmas.",
    "Ethics and Human Interface: Essence, Determinants and Consequences of Ethics in - Human Actions; Dimensions of Ethics; Ethics - in Private and Public Relationships. Human Values - Lessons from the Lives and Teachings of Great Leaders",
    "Reformers and Administrators; Role of Family Society and Educational Institutions in Inculcating Values.",
    "Attitude: Content, Structure, Function; its Influence and Relation with Thought and Behaviour; Moral and Political Attitudes; Social Influence and Persuasion.",
    "Aptitude and Foundational Values for Civil Service, Integrity, Impartiality and Non partisanship, Objectivity, Dedication to Public Service, Empathy, Tolerance and Compassion towards the weaker-sections. ",
    "Emotional Intelligence-Concepts, and their Utilities and Application in Administration and Governance.",
    "Contributions of Moral Thinkers and Philosophers from India and World.",
    "Public/Civil Service Values and Ethics in Public Administration: Status and Problems; Ethical Concerns and Dilemmas in Government and Private Institutions; Laws, Rules, Regulations and Conscience as Sources of Ethical Guidance; Accountability and Ethical Governance; Strengthening of Ethical and Moral Values in Governance; Ethical Issues in International Relations and Funding; Corporate Governance.",
    "Probity in Governance: Concept of Public Service; Philosophical Basis of Governance and Probity; Information Sharing and Transparency in Government, Right to Information, Codes of Ethics, Codes of Conduct, Citizen’s Charters, Work Culture, Quality of Service Delivery, Utilization of Public Funds, Challenges of Corruption.",
    "Case Studies on above issues.",
  ],
};

export const GSToSubjectsMapping = {
  [Exams.GS1]: {
    subjects: [Subjects.HISTORY, Subjects.GEOGRAPHY, Subjects.INDIAN_SOCIETY],
  },
  [Exams.GS2]: {
    subjects: [
      Subjects.POLITY_CONSTITUTION_AND_GOVERNANCE,
      Subjects.SOCIAL_JUSTICE,
      Subjects.INTERNATIONAL_RELATIONS,
    ],
  },
  [Exams.GS3]: {
    subjects: [
      Subjects.ECONOMY,
      Subjects.SCIENCE_AND_TECHNOLOGY,
      Subjects.ENVIRONMENT_DISASTER_AND_MANAGEMENT,
      Subjects.INTERNAL_SECURITY,
      Subjects.AGRICULTURE,
    ],
  },
  [Exams.GS4]: {
    subjects: [Subjects.ETHICS_INTEGRITY_AND_APTITUDE],
  },
};
