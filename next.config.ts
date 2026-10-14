import type { NextConfig } from "next";

// For GitHub Pages under a sub-path (https://<user>.github.io/<repo>),
// set NEXT_PUBLIC_BASE_PATH="/<repo>" at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Separate folders so `npm run build` never breaks a running `npm run dev`.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  output: "export",
  outputFileTracingRoot: process.cwd(),
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
