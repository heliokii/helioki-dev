export type Project = {
  slug: string; name: string; year: string; disciplines: string[]; description: string;
  url: string; accent: string; images: string[]; mobile?: boolean;
};

export const projects: Project[] = [
  { slug: "leadfinder", name: "Lead-Finder", year: "2026", disciplines: ["Web Design", "Development", "Client Project"],
    description: "Personal outreach management tool that discovers and tracks sales leads for local businesses without a website. Contactability scoring ranks every lead by how easily they can be reached.",
    url: "https://leadfinder-now.vercel.app/leads", accent: "#0EA5E9", images: ["/images/works/leadfinder-1.jpg"] },
  { slug: "whitecap-bakehouse", name: "Whitecap Bakehouse", year: "2025", disciplines: ["Web Design", "Development"],
    description: "A home-kitchen bakery site for weekend orders. Full-bleed photography, serif display type, and ordering by DM.",
    url: "https://whitecapbakehouse.vercel.app", accent: "#1F5FA8", images: ["/images/works/whitecap-1.jpg"] },
  { slug: "kapitanas", name: "The Original Kapitana's", year: "2025", disciplines: ["Web Design", "Development"],
    description: "A multi-page site for a family-run smoked longganisa business in Sariaya since 1993. Catalog, pricing, story, Messenger ordering.",
    url: "https://kapitanas-website.vercel.app", accent: "#FF6A00", images: ["/images/works/kapitanas-1.jpg"] },
  { slug: "lexiaral", name: "LEXIARAL", year: "2025", disciplines: ["Web Design", "Development", "Client Project"],
    description: "A mobile-first learning app for 3rd graders. Fifty words, a three-level game, stars and badges, led by an owl called Lexi.",
    url: "https://lexiaral-demo.vercel.app", accent: "#8065CE", images: ["/images/works/lexiaral-1.jpg"] },
];
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug) ?? projects[0];
