import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://whis.me", // replace this with your deployed domain
  author: "Whis Liao",
  profile: "https://whis.me",
  desc: "Whis's Blog",
  title: "Whis's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/xhwhis",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/xhwhis",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@whis.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
