import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Riyan's Blog",
  EMAIL: "riyanrisky129@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Beranda",
  DESCRIPTION: "Selamat datang di blog pribadi saya! Di sini saya menulis tentang berbagai topik yang saya minati, mulai dari pengembangan web, teknologi, hingga pengalaman pribadi saya.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Kumpulan tulisan tentang berbagai topik yang saya minati.",
};

export const WORK: Metadata = {
  TITLE: "Pengalaman",
  DESCRIPTION: "Tempat saya bekerja dan hal-hal yang pernah saya kerjakan.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyek",
  DESCRIPTION: "Kumpulan proyek saya beserta tautan ke repositori dan demonya.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "telegram",
    HREF: "https://t.me/kodokkayang"
  },
  { 
    NAME: "github",
    HREF: "https://github.com/riyanris"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/riyanris",
  }
];
