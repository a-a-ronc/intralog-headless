
"use client";

import React, { useId, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

type HoverIconProps = {
  accent: string;
  Graphic: () => JSX.Element;
  poster?: string;
  anim?: string; // animated WebP/GIF or MP4
  video?: { src: string; poster?: string };
  lottieSrc?: string;
  title: string;
};

export default function HoverIcon({
  accent,
  Graphic,
  poster,
  anim,
  video,
  lottieSrc,
  title,
}: HoverIconProps) {
  const id = useId();
  const playerRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isMP4 = anim?.toLowerCase().endsWith(".mp4");

  const shouldReduceMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleEnter = () => {
    if (shouldReduceMotion()) return;
    if (playerRef.current) playerRef.current.play?.();
    if (videoRef.current) {
      // start only on hover for performance
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (playerRef.current) playerRef.current.stop?.();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group mt-4 rounded-xl p-4 transition-all"
      style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* idle/hover color via currentColor */}
      <div className="transition-colors" style={{ color: "rgb(63 63 70)" /* zinc-700 */ }}>
        <div className="transition-[filter,box-shadow,color]" style={{ filter: "grayscale(1)" }}>
          {!lottieSrc && !poster && !anim ? (
            <Graphic />
          ) : lottieSrc ? (
            <Player
              ref={playerRef}
              autoplay={false}
              loop
              src={lottieSrc}
              className="w-full h-24"
            />
          ) : (
            <div className="relative">
              {poster ? (
                <img
                  src={poster}
                  alt={`${title} preview`}
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}

              {anim && (
                <>
                  {isMP4 ? (
                    <video
                      ref={videoRef}
                      src={anim}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 anim-overlay object-cover"
                    />
                  ) : (
                    <img
                      src={anim}
                      alt=""
                      className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 anim-overlay"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </>
              )}
              
              {video && (
                <video
                  ref={videoRef}
                  src={video.src}
                  poster={video.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 anim-overlay object-cover"
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* hover effects */}
      <style>{`
        .group:hover { box-shadow: inset 0 0 0 1px ${accent}22, 0 0 0 4px ${accent}11; }
        .group:hover > div { color: ${accent}; }
        .group:hover > div > div { filter: grayscale(0); }
        .group:hover .anim-overlay { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .group:hover .anim-overlay { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
