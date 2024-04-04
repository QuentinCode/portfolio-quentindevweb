/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "AC2",
    description: "Coach en développement professionnel",
    date: "2022",
    demoLink: "https://ac2.website/",
  },
  {
    id: 2,
    name: "Charlotte Richard",
    description: "Coach de vie en ligne et Olfactocoach certifiée",
    date: "2022",
    demoLink: "https://charlotterichardcoaching.com/",
  },
  {
    id: 3,
    name: "Samuel Picard",
    description: "Paysagiste, Aménagement Extérieur",
    date: "2023",
    demoLink: "https://lesjardinsdeco.fr/",
  },
  {
    id: 4,
    name: "Driver Events",
    description: "Location de véhicules de luxe avec chauffeur en Provence",
    date: "2023",
    demoLink: "https://driver-events.com/",
  },
];

export const BtnList = [
  { label: "Accueil", link: "/", icon: "home", newTab: false },
  { label: "A Propos", link: "/about", icon: "about", newTab: false },
  { label: "Projets", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Instagram",
    link: "https://www.instagram.com/quentindevweb/?hl=fr",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/quentin-gibouin-62a478240/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Rendez-vous",
    link: "https://calendly.com/quentin-gibouin/premier-rendez-vous",
    icon: "calendly",
    newTab: true,
  },
  {
    label: "CV",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


