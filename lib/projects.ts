export type Project = {
  slug: string; name: string; year: string; disciplines: string[]; description: string;
  url: string; accent: string; images: string[]; mobile?: boolean;
};

export const projects: Project[] = [
  { slug: "whitecap-bakehouse", name: "Whitecap Bakehouse", year: "2025", disciplines: ["Web Design", "Development"],
    description: "A home-kitchen bakery site for weekend orders. Full-bleed photography, serif display type, and ordering by DM.",
    url: "https://whitecapbakehouse.vercel.app", accent: "#1F5FA8", images: ["/images/works/whitecap-bakehouse-1.webp"] },
  { slug: "kapitanas", name: "The Original Kapitana's", year: "2025", disciplines: ["Web Design", "Development"],
    description: "A multi-page site for a family-run smoked longganisa business in Sariaya since 1993. Catalog, pricing, story, Messenger ordering.",
    url: "https://kapitanas-website.vercel.app", accent: "#FF6A00", images: ["/images/works/kapitanas-1.webp"] },
  { slug: "lexiaral", name: "LEXIARAL", year: "2025", disciplines: ["Web Design", "Development", "Client Project"],
    description: "A mobile-first learning app for 3rd graders. Fifty words, a three-level game, stars and badges, led by an owl called Lexi.",
    url: "https://lexiaral-demo.vercel.app", accent: "#8065CE", images: ["/images/works/lexiaral-1.webp"], mobile: true },
];
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug) ?? projects[0];
