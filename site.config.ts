// =============================================================================
// iBookshelf — site configuration
// -----------------------------------------------------------------------------
// Edit the values in this one file to update links, text, and contact details
// across the whole website. No need to touch the components.
// =============================================================================

export const site = {
  name: "iBookshelf",
  description:
    "Your whole bookshelf, in your pocket. Scan the books you own, then check your library before you buy — so you never get the same book twice.",

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
// LEGAL — powers the Privacy Policy and Terms pages. Edit these to match the
// entity that operates the app and your App Store / Google Play developer
// account. Keep them accurate: both stores require the policy to match reality.
// -----------------------------------------------------------------------------
export const legal = {
  // The legal entity that operates iBookshelf. Must match your store developer
  // account holder. Swap to your registered company name if/when you have one.
  operator: "Ross Delport",
  // Trading / app name shown to users.
  tradingName: "iBookshelf",
  // Governing law and where disputes are handled.
  jurisdiction: "Australia",
  // Mailbox for privacy, legal, and data-deletion requests. ⚠️ Set this up and
  // forward it to an inbox you read before submitting to the stores.
  contactEmail: "privacy@ibookshelf.app",
  // Shown as "Last updated" on both legal pages.
  effectiveDate: "8 June 2026",
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
    title: "Scan your shelf",
    description:
      "Point your camera at a barcode and the book lands in your library in seconds — cover, title, and author filled in for you.",
    icon: "camera",
  },
  {
    title: "Check before you buy",
    description:
      "In a bookshop and not sure if you own it? Search your whole library in a second and get your answer before you reach the till.",
    icon: "search",
  },
  {
    title: "Every shelf in one place",
    description:
      "Group your books into cozy shelves — Reading, Finished, Wishlist — for a clear picture of everything you already own.",
    icon: "shelf",
  },
  {
    title: "Track your reading",
    description:
      "Mark books read, in progress, or want-to-read, and watch your collection grow year after year.",
    icon: "stats",
  },
  {
    title: "Always in your pocket",
    description:
      "Your library travels with you, so you can check what you own from anywhere — the bookshop, a friend's place, a secondhand stall.",
    icon: "sync",
  },
  {
    title: "Private by design",
    description:
      "No account required. Your shelves and your reading life stay yours — always.",
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
    title: "Scan your shelf",
    description: "Point your camera at each barcode to add your books in seconds.",
  },
  {
    emoji: "📚",
    title: "Build your library",
    description: "Sort everything into shelves you'll love — Reading, Finished, Wishlist.",
  },
  {
    emoji: "🔎",
    title: "Check before you buy",
    description: "Out shopping? Search your library to see if it's already on your shelf at home.",
  },
];

// -----------------------------------------------------------------------------
// HERO SHELF — real book covers, fanned into a wide rotating 3D ring across the
// hero. Covers live in /public/covers (downloaded from the Open Library Covers
// API). To change the lineup, drop a cover image in that folder and edit this
// list. Order = the sequence the covers spin past; titles with contrasting
// colours are interleaved so neighbours never look the same.
// -----------------------------------------------------------------------------
export type ShelfBook = {
  title: string; // used for the image alt text
  cover: string; // path under /public
};

export const shelfBooks: ShelfBook[] = [
  { title: "The Hobbit", cover: "/covers/the-hobbit.jpg" },
  { title: "Pride and Prejudice", cover: "/covers/pride-and-prejudice.jpg" },
  { title: "The Midnight Library", cover: "/covers/midnight-library.jpg" },
  { title: "To Kill a Mockingbird", cover: "/covers/to-kill-a-mockingbird.jpg" },
  { title: "Atomic Habits", cover: "/covers/atomic-habits.jpg" },
  { title: "The Great Gatsby", cover: "/covers/the-great-gatsby.jpg" },
  { title: "The Hunger Games", cover: "/covers/hunger-games.jpg" },
  { title: "Harry Potter and the Sorcerer's Stone", cover: "/covers/harry-potter.jpg" },
  { title: "Sapiens", cover: "/covers/sapiens.jpg" },
  { title: "The Catcher in the Rye", cover: "/covers/the-catcher-in-the-rye.jpg" },
  { title: "The Fault in Our Stars", cover: "/covers/fault-in-our-stars.jpg" },
  { title: "Dune", cover: "/covers/dune.jpg" },
  { title: "1984", cover: "/covers/nineteen-eighty-four.jpg" },
  { title: "The Little Prince", cover: "/covers/the-little-prince.jpg" },
  { title: "Thinking, Fast and Slow", cover: "/covers/thinking-fast-and-slow.jpg" },
  { title: "The Name of the Wind", cover: "/covers/the-name-of-the-wind.jpg" },
  { title: "The Book Thief", cover: "/covers/book-thief.jpg" },
  { title: "Where the Crawdads Sing", cover: "/covers/where-the-crawdads-sing.jpg" },
  { title: "The Alchemist", cover: "/covers/the-alchemist.jpg" },
  { title: "Educated", cover: "/covers/educated.jpg" },
  // 20 covers, evenly spaced around the ring. Add or remove freely — the ring
  // re-spaces itself (360° / number of covers).
];
