import { useEffect, useRef, useState } from "react";

import music from "../../assets/audio/wedding-theme.mp3";

const MusicPlayer = () => {
  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const firstInteraction = () => {
      if (!audioRef.current) return;

      audioRef.current.play();

      setPlaying(true);

      window.removeEventListener(
        "click",
        firstInteraction
      );
    };

    window.addEventListener(
      "click",
      firstInteraction
    );

    return () =>
      window.removeEventListener(
        "click",
        firstInteraction
      );
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
      />

      <button
        onClick={toggleMusic}
        className="
          fixed

          right-6
          bottom-6

          z-[999]

          w-14
          h-14

          rounded-full

          bg-[#D4AF37]

          text-black

          shadow-lg
        "
        
      >
        {playing ? "✦" : "♪"}
      </button>
    </>
  );
};

export default MusicPlayer;