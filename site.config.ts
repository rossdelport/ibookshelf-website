// =============================================================================
// iBookshelf — site configuration
// -----------------------------------------------------------------------------
// Edit the values in this one file to update links, text, and contact details
// across the whole website. No need to touch the components.
// =============================================================================

export const site = {
  name: "iBookshelf",
  description:
    "Scan, track, and manage your books in one place. Your personal library, always with you.",

  // ---------------------------------------------------------------------------
  // Store links
  // ---------------------------------------------------------------------------
  // The app isn't published yet. When it goes live, paste the real URLs here and
  // set `released` to true — the small "Coming soon" note disappears and the
  // buttons become working links.
  appStoreUrl: "#", // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
  playStoreUrl: "#", // e.g. "https://play.google.com/store/apps/details?id=..."
  released: false,

  // ---------------------------------------------------------------------------
  // Contact / social (used in the footer). Leave blank to hide.
  // ---------------------------------------------------------------------------
  email: "rossdelport1998@gmail.com",
  twitter: "",

  // ---------------------------------------------------------------------------
  // Where the site will live. Used for SEO metadata / social share tags.
  // ---------------------------------------------------------------------------
  url: "https://ibookshelf.app",
};

// -----------------------------------------------------------------------------
// FEATURES — the "Everything your shelf needs" grid
// -----------------------------------------------------------------------------
export type Feature = {
  title: string;
  description: string;
  icon: "camera" | "shelf" | "search" | "stats" | "sync" | "lock";
};

export const features: Feature[] = [
  {
    title: "Scan to add",
    description:
      "Point your camera at any barcode and the book lands on your shelf in seconds — cover, title, and author filled in for you.",
    icon: "camera",
  },
  {
    title: "Organize with shelves",
    description:
      "Group books into cozy shelves like Reading, Finished, and Wishlist. Your library, arranged your way.",
    icon: "shelf",
  },
  {
    title: "Find anything fast",
    description:
      "Search across every title, author, and genre to find the right book in an instant.",
    icon: "search",
  },
  {
    title: "Track your reading",
    description:
      "Mark books read, in progress, or want-to-read and watch your reading year quietly add up.",
    icon: "stats",
  },
  {
    title: "Always with you",
    description:
      "Your library stays safe on your device and in sync wherever your reading takes you.",
    icon: "sync",
  },
  {
    title: "Private by design",
    description:
      "No account required. Your reading life stays yours — always.",
    icon: "lock",
  },
];

// -----------------------------------------------------------------------------
// HOW IT WORKS — three simple steps
// -----------------------------------------------------------------------------
export type Step = {
  emoji: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    emoji: "📷",
    title: "Scan your books",
    description: "Point your camera at a barcode to add any book instantly.",
  },
  {
    emoji: "📚",
    title: "Build your shelves",
    description: "Sort everything into beautiful, custom shelves you'll love.",
  },
  {
    emoji: "✨",
    title: "Track your journey",
    description: "Log progress, hit your goals, and watch your library grow.",
  },
];

// -----------------------------------------------------------------------------
// HERO SHELF — generative book covers shown along the bottom of the hero.
// No artwork needed: each renders as a warm CSS cover with a Lora title.
// -----------------------------------------------------------------------------
export type ShelfBook = {
  title: string;
  author: string;
  bg: string; // cover background
  ink: string; // title/author color on the cover
};

export const shelfBooks: ShelfBook[] = [
  { title: "The Hobbit", author: "Tolkien", bg: "#2F4A3A", ink: "#F3E7C9" },
  { title: "The Midnight Library", author: "Haig", bg: "#1E3A5F", ink: "#E9D58A" },
  { title: "Atomic Habits", author: "Clear", bg: "#F4ECDD", ink: "#C0851E" },
  { title: "Sapiens", author: "Harari", bg: "#FBF6EC", ink: "#8B2E2E" },
  { title: "1984", author: "Orwell", bg: "#B23A2E", ink: "#F7EFE0" },
  { title: "The Alchemist", author: "Coelho", bg: "#D97B2B", ink: "#FFF6E6" },
  { title: "Dune", author: "Herbert", bg: "#2A2420", ink: "#E8A838" },
  { title: "The Book Thief", author: "Zusak", bg: "#23201C", ink: "#D8C7A0" },
];
