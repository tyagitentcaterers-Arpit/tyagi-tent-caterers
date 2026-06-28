const fallbackUrl = "https://www.tyagitentcaterers.com";

export const siteConfig = {
  name: "Tyagi Tent & Caterers",
  description:
    "Official website of Tyagi Tent & Caterers, providing tent, catering, and event services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
} as const;
