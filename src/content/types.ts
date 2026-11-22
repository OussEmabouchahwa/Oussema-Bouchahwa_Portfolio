export type Media = {
  kind: "image" | "video";
  file: string;
  poster?: string;
  hint: string;
  ratio: `${number}/${number}`;
  label?: string;
  alt?: string;
  fit?: "cover" | "contain";
};

export type Project = {
  id: string;
  index: string;
  title: string;
  meta: string[];
  text: string;
  tags: string[];
  facts?: { value: string; label: string }[];
  link: { label: string; href: string; isTodo?: boolean } | null;
  media: Media;
  featured?: boolean;
  screenBar?: { file: string; status: string };
};

export type ShippedSite = {
  id: string;
  name: string;
  domain: string;
  isTodo: boolean;
  media: Media;
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

export type StackCategory = {
  group: string;
  sub: string;
  items: string[];
};

export type ReelItem = {
  id: string;
  title: string;
  duration: string;
  isTodo: boolean;
  media: Media;
};

export type PosterItem = {
  id: string;
  title: string;
  media: Media;
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
    layers: {
      poster: Media;
      showreel: Media;
      heroApp: Media;
    };
  };
  stats: { value: string; label: string }[];
  about: {
    p1: string;
    p2: string;
    portrait: Media;
    education: { degree: string; institution: string; detail: string }[];
    languages: { name: string; level: string }[];
    certificates: { name: string; issuer: string; date: string; file: string }[];
  };
  footer: {
    copyright: string;
    edition: string;
  };
};
