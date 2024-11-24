/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: [
              // Base directive
              "default-src 'self'",
              // Allow images from multiple sources
              "img-src 'self' https://*.imagekit.io https://*.jsdelivr.net blob: data:",
              // Allow scripts including worker, blob, and inline for WASM
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com blob:",
              // Allow styles
              "style-src 'self' 'unsafe-inline'",
              // Allow fonts
              "font-src 'self' data:",
              // Allow workers and WASM
              "worker-src 'self' blob:",
              // Allow frames for PDF viewer
              "frame-src 'self' blob:",
              // Allow objects/embeds for PDFs
              "object-src 'self' blob:",
              // Modified connect-src to allow Groq API
              "connect-src 'self' https://www.google-analytics.com https://api.groq.com data: blob:",
              // Frame ancestors
              "frame-ancestors 'none'",
              // Allow media
              "media-src 'self' blob:",
              // Allow WASM loading
              "child-src 'self' blob: data:",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Add CORS headers
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Consider restricting this to specific origins in production
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
