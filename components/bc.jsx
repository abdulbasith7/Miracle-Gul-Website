import { useEffect, useRef, useState } from "react";

export default function bc() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // detect mobile
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (mobile && video) {
      video.muted = true; // required for autoplay on mobile
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video?.play().catch(() => {});
        } else {
          video?.pause();
        }
      },
      { threshold: 0.5 },
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  const enableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="h-screen mx-auto object-contain"
        autoPlay
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {isMobile && (
        <button
          onClick={enableSound}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg"
        >
          🔊
        </button>
      )}
    </div>
  );
}
