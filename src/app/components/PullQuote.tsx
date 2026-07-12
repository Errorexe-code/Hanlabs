export function PullQuote() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#7C3AED]/10 via-[#0F0F14] to-[#0F0F14] border border-[#7C3AED]/20 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <p className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
            "The right automation doesn't replace your team — it removes the{' '}
            <span className="text-[#A78BFA]">ceiling</span> on what they can do."
          </p>
          <span className="inline-block text-sm text-[#6B6880] font-medium">
            — HanLabs
          </span>
        </div>
      </div>
    </section>
  );
}
