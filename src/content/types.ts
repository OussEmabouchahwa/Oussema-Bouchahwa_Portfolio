export type Media = {
  kind: "image" | "video";
  file: string;
  poster?: string;
  hint: string;
  ratio: `${number}/${number}`;
  label?: string;
  alt?: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  meta: string[];
  text: string;
  tags: string[];
  facts?: { value: string; label: string }[];
  link: { label: string; href: string } | null;
  media: Media;
  featured?: boolean;
};

export type Job = {
  track: "V1" | "V2" | "V3";
  company: string;
  place: string;
  role: string;
  months: number;
  points: string[];
  color: "tape" | "steel" | "sage";
};

export type Section = {
  id: string;
  timecode: string;
  track?: string;
  title: string;
  italic: string;
  note?: string;
};

export type Profile = {
  name: string;
  monogram: string;
  location: string;
  availabilityChip: string;
  email: string;
  linkedin: string;
  github: string;
  cvPath: string;
  hero: {
    kickerBadge: string;
    kickerLocation: string;
    h1Main: string;
    h1Italic: string;
    lede: string;
    workCta: string;
    mediaCta: string;
    codeSnippet: string;
  };
  stats: { value: string; label: string }[];
  about: {
    p1: string;
    p2: string;
    education: { degree: string; institution: string; detail: string }[];
    languages: { name: string; level: string }[];
  };
  footer: {
    copyright: string;
    edition: string;
  };
};
