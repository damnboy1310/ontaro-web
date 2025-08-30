import type { NextConfig } from "next";

const prefix = process.env.NEXT_ASSET_PREFIX || "/proxy/10111"; // 예: "/proxy/10111"

const nextConfig: NextConfig = {
  // 개발 모드에서 허용할 오리진(도메인)
  allowedDevOrigins: ["devminu.com", "*.devminu.com"],
  assetPrefix: prefix,                 // 정적 자산 경로 프리픽스
  images: { unoptimized: true },       // (옵션) dev 프록시에서 next/image 이슈 방지
  // /* config options here */
};

export default nextConfig;
