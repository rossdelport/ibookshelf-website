// =============================================================================
// iBookshelf — site configuration
// -----------------------------------------------------------------------------
// Edit the values in this one file to update links, text, and contact details
// across the whole website. No need to touch the components.
// =============================================================================

export const site = {
  name: "iBookshelf",
  tagline: "Your personal library, organized.",
  description:
    "iBookshelf is the simplest way to catalog the books you own, are reading, and want to read — all in one beautiful app for iPhone.",

  // ---------------------------------------------------------------------------
  // App Store
  // ---------------------------------------------------------------------------
  // The app isn't published yet, so this is a placeholder. When iBookshelf goes
  // live, paste your real App Store URL here and set `released` to true — the
  // "Coming Soon" badge will disappear and the buttons will link to the store.
  appStoreUrl: "#", // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
  released: false,

  // ---------------------------------------------------------------------------
  // Contact / social (used in the footer). Leave blank to hide.
  // ---------------------------------------------------------------------------
  email: "rossdelport1998@gmail.com",
  twitter: "", // e.g. "https://twitter.com/yourhandle"

  // ---------------------------------------------------------------------------
  // Where the site will live. Used for SEO metadata / social share tags.
  // Update this to your real domain once you have one.
  // ---------------------------------------------------------------------------
  url: "https://ibookshelf.app",
};

export type Feature = {
  title: string;
  description: string;
  icon: "library" | "search" | "tags" | "sync" | "stats" | "lock";
};

export const features: Feature[] = [
  {
    title: "Catalog your collection",
    description:
      "Add every book you own and keep your whole library at your fingertips — no more buying duplicates.",
    icon: "library",
  },
  {
    title: "Organize with shelves",
    description:
      "Sort books into custom shelves like Reading, Finished, and Wishlist. Your library, your way.",
    icon: "tags",
  },
  {
    title: "Find anything fast",
    description:
      "Instant search across titles, authors, and genres so you can find the right book in seconds.",
    icon: "search",
  },
  {
    title: "Track what you read",
    description:
      "Mark books as read, in progress, or want-to-read and see your reading life at a glance.",
    icon: "stats",
  },
  {
    title: "Always in sync",
    description:
      "Your library lives safely on your device and stays up to date across everything you use.",
    icon: "sync",
  },
  {
    title: "Private by design",
    description:
      "Your reading is your business. iBookshelf keeps your data yours — no accounts required.",
    icon: "lock",
  },
];
