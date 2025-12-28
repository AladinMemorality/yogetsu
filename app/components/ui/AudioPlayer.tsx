"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  src: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function AudioPlayer({
  src,
  title = "Listen to the Story",
  subtitle = "Podcast",
  className,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      // Also try to get duration here in case it wasn't available before
      updateDuration();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplay", updateDuration);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Try to get duration immediately if already loaded
    if (audio.readyState >= 1) {
      updateDuration();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));

    // Use duration from audio element directly
    const audioDuration = audio.duration;
    if (audioDuration && !isNaN(audioDuration) && isFinite(audioDuration)) {
      const newTime = percentage * audioDuration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  const formatTime = (time: number) => {
    if (!time || isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const barHeights = [60, 80, 45, 90, 55, 75, 40, 85, 50, 70];

  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-2xl p-6 md:p-8",
        className
      )}
    >
      <audio ref={audioRef} src={src} preload="auto" />

      <div className="flex items-center gap-5 md:gap-6">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-dark-text"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-dark-text ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Visualizer Bars */}
        <div className="flex items-center gap-[3px] h-10 md:h-12">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className="w-1 md:w-1.5 bg-primary/70 rounded-full transition-all"
              style={{
                height: isPlaying ? `${height}%` : "15%",
                animationName: isPlaying ? "audio-bar" : "none",
                animationDuration: `${0.4 + i * 0.05}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Info & Progress */}
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="min-w-0">
              <p className="text-xs text-muted uppercase tracking-wider">
                {subtitle}
              </p>
              <h4 className="font-light text-primary text-sm md:text-base truncate">
                {title}
              </h4>
            </div>
            <div className="text-xs text-muted ml-3 flex-shrink-0 tabular-nums">
              {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : "--:--"}
            </div>
          </div>

          {/* Progress Bar */}
          <div
            ref={progressRef}
            className="relative h-2 bg-border rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              style={{ left: `calc(${progress}% - 8px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
