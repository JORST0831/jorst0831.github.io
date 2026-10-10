/* ==========================================================================
   data.js: ALL of the text on your website lives in this one file.

   How to edit:
   1. Change the words between the "double quotes". Save the file.
   2. Refresh the page in your browser to see the change.

   Rules that keep the site from breaking:
   - Keep the "double quotes" around every piece of text.
   - Keep the comma at the end of each line/item.
   - Apostrophes are fine inside double quotes: "I'm", "Let's".
   - If you need a double quote inside text, type \" (backslash + quote).
   - Lines starting with // are notes for you. They never show on the site.
   - To add a bullet point, copy an existing line (including its comma)
     and edit the words. To remove one, delete the whole line.
   ========================================================================== */

const RESUME = {
  /* ---------- The basics --------------------------------------------- */
  name: "Jorilyn Uy",
  initials: "JU",
  title: "Banker & Aspiring Virtual Assistant",
  specialties: ["Bookkeeping", "Administrative Support", "E-commerce"],
  location: "Negros Oriental, Philippines",
  timezone: "Philippine Time (GMT+8)",
  availability: "Open to remote work",
  email: "uyjooriee@yahoo.com",
  // Subject line that is pre-filled when a client clicks an email button.
  emailSubject: "Remote work inquiry",

  /* ---------- Files (keep them in the same folder as index.html) ----- */
  // Save your headshot as photo.jpg and it will appear automatically.
  // Until then, a circle with your initials is shown instead.
  photo: "photo.jpg",
  resumePdf: "resume.pdf",

  /* ---------- Optional profile links ---------------------------------- */
  // Paste a full link between the quotes to show it on the site, e.g.
  // "https://www.linkedin.com/in/your-name". Empty "" = hidden.
  links: [
    { label: "LinkedIn", url: "" },
    { label: "Upwork", url: "" },
    { label: "OnlineJobs.ph", url: "" },
  ],

  /* ---------- Buttons ------------------------------------------------- */
  buttons: {
    hire: "Hire Me",
    email: "Email Me",
    resume: "Download Resume (PDF)",
  },

  /* ---------- Top of the page (hero) ---------------------------------- */
  hero: {
    lead: "Accurate bookkeeping and dependable admin support for your business, with the precision of a banking professional.",
    // Small cards that float next to your photo.
    badges: [
      { icon: "landmark", title: "Banking since 2013", text: "Rural Bank of Bacong, Inc." },
      { icon: "graduation", title: "BBA graduate", text: "Silliman University" },
    ],
  },

  /* ---------- Section headings ---------------------------------------- */
  sections: {
    about: { eyebrow: "About", title: "Banking precision, ready for your business" },
    services: {
      eyebrow: "Services",
      title: "How I can help you",
      intro: "Remote support for business owners who need accuracy, organization, and clear communication.",
      cta: "Need help with a task that isn't listed here? Let's talk about it.",
    },
    experience: { eyebrow: "Experience", title: "Where I've worked" },
    skills: { eyebrow: "Skills", title: "What I bring to your team" },
    education: { eyebrow: "Education", title: "My academic background" },
  },

  /* ---------- About ---------------------------------------------------- */
  about: {
    paragraphs: [
      "I'm a dedicated professional with a strong background in banking and financial services, skilled in transaction processing, record-keeping, and reconciliations.",
      "I'm also experienced in e-commerce, social media management, and administrative support, with strengths in accuracy, organization, and research.",
      "I'm seeking a remote bookkeeping or administrative role where I can apply my expertise and support your business growth.",
    ],
    strengths: ["Accuracy", "Organization", "Research"],
  },

  /* ---------- Services -------------------------------------------------- */
  // icon options: "calculator", "clipboard", "bag", "megaphone",
  //               "landmark", "globe", "briefcase", "shield"
  services: [
    {
      icon: "calculator",
      title: "Bookkeeping",
      description: "Clean, accurate financial records you can rely on, from someone who has kept bank records since 2013.",
      includes: [
        "Transaction recording & record-keeping",
        "Bank reconciliation",
        "Financial reporting",
        "QuickBooks / Xero",
      ],
    },
    {
      icon: "clipboard",
      title: "Administrative Support",
      description: "Organized, deadline-driven help with the day-to-day work that keeps your business running.",
      includes: [
        "Accurate records & data management",
        "Research",
        "Professional client communication",
        "High-volume work, delivered on time",
      ],
    },
    {
      icon: "bag",
      title: "E-commerce Listing",
      description: "Product listings that are accurate, easy to find, and competitively priced.",
      includes: [
        "Optimized product titles & listings",
        "Size, color, brand & measurement checks",
        "Market research on sold items & pricing",
      ],
    },
    {
      icon: "megaphone",
      title: "Social Media",
      description: "Support managing your business's social media, drawing on my experience as a Social Media Assistant Manager.",
      // TODO: add the social media tasks you can offer, e.g. "Content scheduling",
      includes: [],
    },
  ],

  /* ---------- Experience (shown in this order, top to bottom) -------- */
  // Use "Present" as the end year for a job you still have.
  experience: [
    {
      role: "Product Lister VA",
      company: "Skeets Buy & Sell",
      start: "2025",
      end: "Present",
      points: [
        "Ensure item accuracy by verifying size, color, brand, and measurements.",
        "Create optimized product titles and listings to maximize visibility and appeal.",
        "Conduct market research on sold items and pricing to set competitive listings.",
      ],
    },
    {
      role: "Bank Teller / Cashier",
      company: "Rural Bank of Bacong, Inc.",
      start: "2018",
      end: "Present",
      points: [
        "Accurately process deposits, withdrawals, loan applications, and payments in compliance with banking standards.",
        "Maintain precise financial records, perform reconciliations, and ensure data integrity within banking systems.",
        "Deliver professional customer service by addressing client inquiries and resolving concerns.",
        "Manage high transaction volumes while meeting deadlines through strong multitasking and time management.",
      ],
    },
    {
      role: "Social Media Assistant Manager",
      company: "WCI Web Design",
      start: "2022",
      end: "2023",
      // TODO: add your actual duties here, one per line, for example:
      // "Scheduled content and managed client Facebook pages.",
      points: [],
    },
    {
      role: "Savings Bookkeeper",
      company: "Rural Bank of Bacong, Inc.",
      start: "2013",
      end: "2018",
      points: [
        "Account management and record-keeping: maintained accurate records of savings accounts, processed transactions, and updated financial data.",
        "Financial reporting and reconciliation: ensured accuracy in account balances, prepared reports, and reconciled discrepancies.",
      ],
    },
  ],

  /* ---------- Skills & languages ------------------------------------- */
  skills: [
    "Bookkeeping",
    "QuickBooks / Xero",
    "Financial Reporting",
    "Bank Reconciliation",
    "Administrative Support",
    "Attention to Detail",
    "Product Listing & Market Research",
    "Social Media Management",
  ],
  languages: ["English", "Tagalog"],

  /* ---------- Education ------------------------------------------------ */
  // "honor" is optional. Leave it "" if there is none.
  education: [
    {
      degree: "Bachelor of Business Administration",
      school: "Silliman University",
      start: "2009",
      end: "2013",
      honor: "",
    },
    {
      degree: "High School",
      school: "Bacong High School",
      start: "2005",
      end: "2009",
      honor: "Salutatorian",
    },
  ],

  /* ---------- Contact --------------------------------------------------- */
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    text: "Looking for a dependable remote bookkeeper or virtual assistant? Send me a short note about your business and the support you need.",
    referencesNote: "References available upon request.",
  },
};
