export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export const approach: ApproachStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Every project begins with a conversation. We take time to understand you — your lifestyle, aspirations, and how you envision living within the space. By the end, we share a clear understanding of the project's ambitions and how we will work together.",
  },
  {
    number: "02",
    title: "Site Analysis",
    description:
      "Before a single line is drawn, we study the site. Its orientation, topography, vegetation, climate patterns, and immediate context. This deep reading of place ensures that what we design belongs to its location, rather than being imposed upon it.",
  },
  {
    number: "03",
    title: "Concept Design",
    description:
      "Ideas take form. The spatial organisation, the architectural language, the material palette, and the experiential character of the project. Your feedback shapes and refines the concept until we arrive at a direction that resonates deeply.",
  },
  {
    number: "04",
    title: "Detail Development",
    description:
      "A good concept must be built on precise thinking. We resolve every junction, material, and proportion into fully developed technical drawings — the complete blueprint from which contractors and craftspeople will work.",
  },
  {
    number: "05",
    title: "Execution Guidance",
    description:
      "Design does not end on paper. We remain closely involved through construction, making regular site visits, liaising with engineers and craftspeople, and ensuring the finished space carries the same integrity as the original vision.",
  },
];
