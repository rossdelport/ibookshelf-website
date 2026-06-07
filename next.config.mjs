/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out so it can be hosted anywhere
  // (Vercel, Netlify, GitHub Pages, S3, etc.). Run `npm run build`.
  output: "export",
  // Required for static export: Next's image optimizer needs a server,
  // so we serve images as-is.
  images: {
    unoptimized: true,
  },
  // Emit folder-style URLs (e.g. /privacy/index.html) which most static
  // hosts serve cleanly without extra config.
  trailingSlash: true,
};

export default nextConfig;
