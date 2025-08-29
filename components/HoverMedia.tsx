// components/HoverMedia.tsx
"use client";
import { useRef } from "react";

type Props = {
  posterSvg: string;     // idle grayscale SVG
  mp4?: string;          // optional animation
  webm?: string;         // optional animation
  colorSvg?: string;     // NEW: optional colored SVG (used if no video)
  title: string;
  accent?: string;
  className?: string;
};

export default function HoverMedia({
  posterSvg,
  mp4,
  webm,
  colorSvg,
  title,
  accent = "#3DA9FC",
  className,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const p = ref.current?.play?.();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };
  const reset = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const hasVideo = !!(mp4 || webm);

  return (
    <div
      className={`relative group rounded-xl p-4 ${className || ""}`}
      style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)" }}
      onMouseEnter={hasVideo ? play : undefined}
      onMouseLeave={hasVideo ? reset : undefined}
    >
      {/* Idle poster (grayscale) - fades out on hover */}
      <img
        src={posterSvg}
        alt={`${title} icon`}
        className="w-full h-32 object-contain block transition-[filter,opacity] duration-200 group-hover:opacity-0"
        style={{ filter: "grayscale(1) brightness(.95)" }}
        loading="lazy"
        decoding="async"
      />

      {/* If we have video, use it on hover */}
      {hasVideo && (
        <video
          ref={ref}
          className="pointer-events-none absolute inset-0 w-full h-32 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          muted
          loop
          playsInline
          preload="metadata"
          onTouchStart={play}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
        </video>
      )}

      {/* If NO video but a colored SVG is provided, fade it in on hover */}
      {!hasVideo && colorSvg && (
        <img
          src={colorSvg}
          alt=""
          className="pointer-events-none absolute inset-0 w-full h-32 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          loading="lazy"
          decoding="async"
        />
      )}

      <style>{`
        .group:hover { box-shadow: inset 0 0 0 1px ${accent}33, 0 0 0 4px ${accent}11; }
      `}</style>
    </div>
  );
}