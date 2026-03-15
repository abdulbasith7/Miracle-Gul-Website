import { useEffect, useRef } from "react";

export default function HeroVideoW() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});

          // try enabling sound after delay
        //   setTimeout(() => {
        //     video.muted = false;
        //   }, 1000);
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="h-screen mx-auto object-contain"
        autoPlay
        // muted
        loop
        playsInline
        controls
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}