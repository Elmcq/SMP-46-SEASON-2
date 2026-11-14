import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { mediaConfig } from "@/config/media";

function useMusicPlayer() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(mediaConfig.backgroundMusic);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "none";
    audioRef.current = audio;

    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play().catch(() => setIsMusicPlaying(false));
    } else {
      audio.pause();
    }
  };

  return { isMusicPlaying, toggleMusic };
}

export function MusicToggle() {
  const { isMusicPlaying, toggleMusic } = useMusicPlayer();

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-pressed={isMusicPlaying}
      aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
      className="fixed right-5 bottom-[calc(env(safe-area-inset-bottom)+20px)] z-50 flex h-10 min-h-10 w-10 min-w-10 items-center justify-center bg-background/90 p-0 border border-primary/40 text-foreground pixel-border backdrop-blur-md hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors sm:right-6 sm:bottom-6 sm:h-auto sm:min-h-11 sm:w-auto sm:min-w-0 sm:justify-start sm:gap-3 sm:px-4"
    >
      {isMusicPlaying ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
      <span className="hidden font-pixel text-xs sm:inline">
        {isMusicPlaying ? "MUSIC ON" : "PLAY MUSIC"}
      </span>
    </button>
  );
}
