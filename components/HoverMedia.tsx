"use client";
import { useRef } from "react";

type Props = {
  /** idle grayscale SVG poster (from /public) */
  posterSvg: string;
  /** optional animated video (from /public) */
  mp4?: string;
  webm?: string;
  /** label used for alt text */
  title: string;
  /** hex accent color for glow on hover (e.g. "#3DA9FC") */
  accent?: string;
  className?: string;
};

export default function HoverMedia({
  posterSvg,
  mp4,
  webm,
  title,
  accent = "#3DA9FC",
  className,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const p = ref.current?.play?.();
    if (p && typeof p.catch === "function") p.catch(() => {}); // ignore autoplay promise errors
  };
  const reset = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className={`relative group rounded-xl p-4 ${className || ""}`}
      style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)" }}
      onMouseEnter={mp4 || webm ? play : undefined}
      onMouseLeave={mp4 || webm ? reset : undefined}
    >
      {/* Idle poster (grayscale) */}
      <img
        src={posterSvg}
        alt={`${title} icon`}
        className="w-full h-24 object-contain block transition-[filter] duration-200"
        style={{ filter: "grayscale(1) brightness(.95)" }}
        loading="lazy"
        decoding="async"
      />

      {/* Animated overlay video (fades in on hover) */}
      {(mp4 || webm) && (
        <video
          ref={ref}
          className="pointer-events-none absolute inset-4 w-[calc(100%-2rem)] h-24 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          muted
          loop
          playsInline
          preload="metadata"
          // make it playable on touch devices
          onTouchStart={play}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
        </video>
      )}

      <style>{`
        .group:hover { box-shadow: inset 0 0 0 1px ${accent}33, 0 0 0 4px ${accent}11; }
        .group:hover img { filter: grayscale(0); }
      `}</style>
    </div>
  );
}
