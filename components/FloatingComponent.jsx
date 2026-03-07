export default function FloatingComponent({ children }) {
  return (
    <>
      <div
        style={{
          animation: "float 3s ease-in-out infinite",
        }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </>
  );
}
