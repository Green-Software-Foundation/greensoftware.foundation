/**
 * Site-wide announcement banner config.
 * Rendered above every page by the showcase layout. Set enabled to false to hide it.
 */
export const announcement = {
  enabled: true,
  before: "Join the",
  linkText: "GSF Green Software & AI Academy",
  href: "https://academy.greensoftware.foundation",
  after: "pilot",
  /** Optional GSF Academy logo path (e.g. "/assets/gsf-academy-logo.svg"). Not shown when unset. */
  logoSrc: undefined as string | undefined,
};
