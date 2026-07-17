import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au dev server via 127.0.0.1 (Chrome bloque parfois localhost)
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
