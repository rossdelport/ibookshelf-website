// =============================================================================
// iBookshelf — site configuration
// -----------------------------------------------------------------------------
// Edit the values in this one file to update links, text, and contact details
// across the whole website. No need to touch the components.
// =============================================================================

export const site = {
  name: "iBookshelf",
  description:
    "Your whole bookshelf, in your pocket. Scan the books you own, then check your library before you buy, so a duplicate never sneaks home again.",

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
    title: "Scan a shelf in minutes",
    description:
      "Point your camera at the barcode and the book lands in your library, cover and all. A whole bookcase takes a quiet evening, not a lost weekend.",
    icon: "camera",
  },
  {
    title: "Check before you buy",
    description:
      "Standing in a bookshop, unsure if it is already on your shelf at home. Open iBookshelf, search, and know in a second. Your money goes to the next great read, never a second copy.",
    icon: "search",
  },
  {
    title: "Every shelf in one place",
    description:
      "Reading, finished, someday. Group your books into shelves that mirror your real life, so the whole collection is clear at a single glance.",
    icon: "shelf",
  },
  {
    title: "See your reading life",
    description:
      "Watch your library grow year after year. The books you have loved and the ones still waiting. A quiet, honest record of a reading life.",
    icon: "stats",
  },
  {
    title: "Always in your pocket",
    description:
      "Your shelf travels with you. The secondhand stall, a friend's coffee table, the airport bookshop. Wherever a book finds you, your library is already there.",
    icon: "sync",
  },
  {
    title: "Private by design",
    description:
      "No account, no noise, no selling your reading habits. Your shelves stay yours, and they always will.",
    icon: "lock",
  },
];

// -----------------------------------------------------------------------------
// HOW IT WORKS — three simple steps
// -----------------------------------------------------------------------------
export type Step = {
  icon: Feature["icon"];
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    icon: "camera",
    title: "Scan your shelf",
    description: "Point your camera at each barcode and your books arrive in seconds, covers and all.",
  },
  {
    icon: "shelf",
    title: "Build your library",
    description: "Sort everything into shelves that feel like yours. Reading, finished, someday.",
  },
  {
    icon: "search",
    title: "Check before you buy",
    description: "Out browsing. Search your library to see if it is already on your shelf at home.",
  },
];

// -----------------------------------------------------------------------------
// READING MOODS — the genre palette is the only real saturation on the site.
// Five muted, warm-leaning hues, each tied to a reading mood. Used sparingly:
// the logo cluster, the glossy genre tiles, and the blended reading spectrum.
// Fixed order everywhere: cozy -> literary -> fantasy -> thriller -> nonfiction.
// -----------------------------------------------------------------------------
export type Genre = {
  id: string;
  label: string;
  color: string; // the mood hue
  text: string; // readable text laid over the hue
  note: string; // a soft, observational one-liner
};

export const genres: Genre[] = [
  { id: "cozy", label: "Cozy", color: "#E5C39B", text: "#5A4A2A", note: "Rainy Sunday reads" },
  { id: "literary", label: "Literary", color: "#7E93A6", text: "#FFFFFF", note: "The slow, savoured novel" },
  { id: "fantasy", label: "Fantasy", color: "#8E7BA6", text: "#FFFFFF", note: "Whole worlds to fall into" },
  { id: "thriller", label: "Thriller", color: "#8B4F5C", text: "#FFFFFF", note: "One more chapter at midnight" },
  { id: "nonfiction", label: "Nonfiction", color: "#A3B299", text: "#33402C", note: "The ideas that stay with you" },
];

// -----------------------------------------------------------------------------
// SHELVES — the heart of iBookshelf: organize one library into shelves that
// match how you actually think about your books. Three ways to slice it, each
// with a few example shelves. The tiles borrow their colours from the palette
// above. Edit freely; counts are illustrative for the marketing preview.
// -----------------------------------------------------------------------------
export type ShelfView = {
  id: string;
  label: string;
  shelves: { name: string; count: string; cover: string }[];
};

export const shelfViews: ShelfView[] = [
  {
    id: "genre",
    label: "By genre",
    shelves: [
      { name: "Fantasy", count: "48 books", cover: "/covers/the-hobbit.jpg" },
      { name: "Sci-Fi", count: "31 books", cover: "/covers/dune.jpg" },
      { name: "Romance", count: "26 books", cover: "/covers/pride-and-prejudice.jpg" },
      { name: "Classics", count: "19 books", cover: "/covers/the-great-gatsby.jpg" },
      { name: "Nonfiction", count: "22 books", cover: "/covers/atomic-habits.jpg" },
    ],
  },
  {
    id: "location",
    label: "By location",
    shelves: [
      { name: "Bedroom", count: "64 books", cover: "/covers/midnight-library.jpg" },
      { name: "Living room", count: "52 books", cover: "/covers/where-the-crawdads-sing.jpg" },
      { name: "Home office", count: "38 books", cover: "/covers/thinking-fast-and-slow.jpg" },
      { name: "The studio", count: "21 books", cover: "/covers/the-name-of-the-wind.jpg" },
      { name: "Holiday house", count: "15 books", cover: "/covers/hunger-games.jpg" },
    ],
  },
  {
    id: "people",
    label: "By people",
    shelves: [
      { name: "Mum's shelf", count: "40 books", cover: "/covers/the-alchemist.jpg" },
      { name: "The kids'", count: "33 books", cover: "/covers/harry-potter.jpg" },
      { name: "Book club", count: "18 books", cover: "/covers/book-thief.jpg" },
      { name: "On loan", count: "7 books", cover: "/covers/educated.jpg" },
      { name: "Wishlist", count: "24 books", cover: "/covers/sapiens.jpg" },
    ],
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
