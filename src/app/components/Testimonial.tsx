export function Testimonial() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-center gap-0.5 mb-10">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#7C3AED] text-lg">★</span>
          ))}
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F14] border border-[#7C3AED]/10">
          <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-7">
            "Before HanLabs, our team was manually updating the CRM after every call.{' '}
            <span className="text-[#A78BFA]">Now it's done before the call ends.</span>"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white font-bold text-sm">
              OL
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Operations Lead</div>
              <div className="text-xs text-[#6B6880]">Real Estate Agency — Austria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
