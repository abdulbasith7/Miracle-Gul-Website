import { useEffect, useRef } from "react";
import PaymentTerms from "./PaymentTerms";

export default function HeroVideoW() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }, // 50% visible
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);
  return (
    <div className="relative w-full  overflow-hidden ">
      {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl" /> */}
      {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-400/20 rounded-full blur-3xl" /> */}
      <video
        ref={videoRef}
        className="h-screen mx-auto object-contain"
        autoPlay
        // muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      {/* <div className="mt-10 lg:mt-1">
        <PaymentTerms />
      </div> */}
    </div>
  );
}