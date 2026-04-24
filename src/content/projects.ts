export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "apartment-interior",
    title: "Apartment Interior",
    location: "Gurugram",
    year: "2022",
    description: "A quiet, light-filled home where material honesty shapes every corner.",
    image: "/images/projects/apartment-interior/01.jpg",
    category: "Home Interior",
  },
  {
    slug: "luxury-home",
    title: "Luxury Homestay",
    location: "Delhi NCR",
    year: "2023",
    description: "A tapestry of jewel tones across five thousand square feet.",
    image: "/images/projects/luxury-home/01.jpg",
    category: "Luxury Home",
  },
  {
    slug: "farm-house",
    title: "Farm House",
    location: "Haryana",
    year: "2021",
    description: "Self-sufficient living in sync with nature, site, and season.",
    image: "/images/projects/farm-house/01.jpg",
    category: "Farm House",
  },
  {
    slug: "garden-home",
    title: "Garden Home",
    location: "Sohna, Haryana",
    year: "2023",
    description: "A home built to withstand disaster and carry light through every season.",
    image: "/images/projects/garden-home/01.jpg",
    category: "Garden Home",
  },
  {
    slug: "heritage-house",
    title: "Heritage House",
    location: "Palam Vihar, Gurgaon",
    year: "2020",
    description: "An heirloom home — regal, restrained, rooted in its grounds.",
    image: "/images/projects/heritage-house/01.jpg",
    category: "Heritage",
  },
  {
    slug: "cafe-interior",
    title: "Café Interior",
    location: "South City 2, Gurgaon",
    year: "2015",
    description: "A warm, social room shaped for slow mornings and longer conversations.",
    image: "/images/projects/cafe-interior/01.jpg",
    category: "Hospitality",
  },
];
