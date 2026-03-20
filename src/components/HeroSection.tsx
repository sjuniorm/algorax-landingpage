"use client";

import Image from "next/image";
import ParticleCanvas from "./ParticleCanvas";

const discordIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45, 10, 94, 0.5) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(139, 47, 201, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(139, 47, 201, 0.1) 0%, transparent 60%),
            linear-gradient(180deg, #050010 0%, #0a0014 30%, #120024 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180, 77, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 77, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full z-[1] pointer-events-none -top-[120px] -right-[120px]"
        style={{
          background: "rgba(139, 47, 201, 0.12)",
          filter: "blur(100px)",
          animation: "orb-float-1 15s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[350px] h-[350px] rounded-full z-[1] pointer-events-none -bottom-[100px] -left-[100px]"
        style={{
          background: "rgba(180, 77, 255, 0.08)",
          filter: "blur(100px)",
          animation: "orb-float-2 18s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[250px] h-[250px] rounded-full z-[1] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "rgba(216, 150, 255, 0.06)",
          filter: "blur(80px)",
          animation: "orb-float-3 12s ease-in-out infinite",
        }}
      />

      {/* Light streaks */}
      <div
        className="fixed z-[1] pointer-events-none -top-[20%] -left-[10%] w-[120%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180, 77, 255, 0.3), rgba(180, 77, 255, 0.6), rgba(180, 77, 255, 0.3), transparent)",
          animation: "streak-move-1 8s ease-in-out infinite",
        }}
      />
      <div
        className="fixed z-[1] pointer-events-none -bottom-[10%] -right-[10%] w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180, 77, 255, 0.2), rgba(180, 77, 255, 0.5), rgba(180, 77, 255, 0.2), transparent)",
          animation: "streak-move-2 10s ease-in-out infinite",
        }}
      />
      <div
        className="fixed z-[1] pointer-events-none top-[30%] -right-[20%] w-[80%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(216, 150, 255, 0.15), rgba(216, 150, 255, 0.35), rgba(216, 150, 255, 0.15), transparent)",
          animation: "streak-move-3 12s ease-in-out infinite",
        }}
      />

      {/* Particles */}
      <ParticleCanvas />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Vignette */}
      <div
        className="fixed inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5, 0, 16, 0.7) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Top section: Logo + Coming Soon — tightly grouped */}
        <div className="flex flex-col items-center">
          {/* Logo with subtle glow beneath */}
          <div className="relative mb-6">
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-8 opacity-60"
              style={{
                background: "radial-gradient(ellipse, rgba(180, 77, 255, 0.3), transparent)",
                filter: "blur(16px)",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="AlgoraX"
              width={240}
              height={240}
              style={{ width: "min(240px, 55vw)", height: "auto" }}
              className="drop-shadow-[0_0_30px_rgba(180,77,255,0.15)]"
            />
          </div>

          {/* Coming Soon — the hero text */}
          <h1
            className="text-[clamp(2rem,5.5vw,3.8rem)] font-extrabold tracking-[0.15em] uppercase leading-none"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #d896ff 50%, #ffffff 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          >
            Coming Soon
          </h1>
        </div>

        {/* Divider — visual breathing room */}
        <div
          className="w-16 h-px my-8"
          style={{ background: "linear-gradient(90deg, transparent, #b44dff, transparent)" }}
        />

        {/* Subtitle */}
        <p className="text-sm sm:text-base font-light text-white/50 tracking-[0.3em] uppercase mb-12">
          Trade with clarity.
        </p>

        {/* Discord CTA */}
        <a
          href="https://discord.gg/977KmrHXX2"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/90 text-sm font-medium tracking-wider overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[#b44dff55] hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(180,77,255,0.12)] hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#b44dff0d] to-[#8b2fc90d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-2.5">
            {discordIcon}
            Join Our Discord
          </span>
        </a>
      </div>
    </div>
  );
}
