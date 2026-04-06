import { motion } from "motion/react";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0B0B0F] to-[#1a0a2e]"></div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-blue-900/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/5 via-transparent to-purple-900/5"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30"></div>
    </div>
  );
}