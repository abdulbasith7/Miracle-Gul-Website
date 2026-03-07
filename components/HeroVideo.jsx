import PaymentTerms from "./PaymentTerms";

export default function HeroVideo() {
  return (
    <div className="relative w-full  overflow-hidden ">
      {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl" /> */}
      {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-400/20 rounded-full blur-3xl" /> */}
      <video
        className="h-screen mx-auto object-contain"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <PaymentTerms />
    </div>
  );
}
