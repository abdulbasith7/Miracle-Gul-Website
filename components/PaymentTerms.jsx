export default function PaymentTerms() {
  return (
    <div className="w-full flex justify-center my-6 ">
      <div className="relative  rounded-xl border border-amber-400/40 bg-gradient-to-r from-[#3b1d0a] via-[#5a2d12] to-[#3b1d0a] px-8 py-4 shadow-xl">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-[shine_3s_linear_infinite]" />

        <div className="relative flex items-center gap-4 text-white font-semibold tracking-wide">

          <span className="text-sm md:text-base opacity-90">
            PAYMENT:
          </span>

          <span className="text-amber-400 text-xl md:text-2xl font-bold">
            30% TT
          </span>

          <span className="opacity-80">+</span>

          <span className="text-amber-300 text-xl md:text-2xl font-bold">
            70% AFTER LOADING
          </span>

        </div>
      </div>
    </div>
  );
}