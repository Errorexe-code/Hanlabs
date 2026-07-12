const steps = [
  {
    number: '01',
    emoji: '🔍',
    label: 'Audit',
    body: 'We map your current workflow — every manual step, every tool, every place data gets copy-pasted or forgotten. You get a clear picture of where the time actually goes.',
  },
  {
    number: '02',
    emoji: '🧩',
    label: 'Design',
    body: 'We architect the automation in n8n — trigger, logic, output. Every workflow is planned before a single node gets built, so there are no surprises mid-project.',
  },
  {
    number: '03',
    emoji: '⚙️',
    label: 'Build & Test',
    body: 'We build the system, connect your tools and data, and stress-test it against real scenarios — not just the happy path. If it breaks under edge cases, we catch it before you do.',
  },
  {
    number: '04',
    emoji: '🚀',
    label: 'Handoff & Support',
    body: 'You get a documented runbook, a working system, and ongoing support — not a black box only we understand. If it runs while you sleep, you should still know how it works.',
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#03030A]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#6D28D9]/10 text-[#8B5CF6] mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From manual mess to automated system in 4 steps.
          </h2>
          <p className="text-[#524F65] text-base leading-relaxed">
            No fluff, no 6-month onboarding. Just a clear process from audit to handoff.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#6D28D9]/40 via-[#6D28D9]/20 to-transparent hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 p-6 sm:p-8 rounded-2xl bg-[#05050A] border border-[#6D28D9]/10 hover:border-[#6D28D9]/25 hover:bg-[#08070F] transition-all group"
              >
                {/* Step number dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#0C0B12] border border-[#6D28D9]/20 items-center justify-center z-10 group-hover:border-[#6D28D9]/50 group-hover:bg-[#6D28D9]/10 transition-all">
                  <span className="text-xs font-bold text-[#6D28D9]">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.emoji}</span>
                    <div className="flex items-center gap-3">
                      <span className="md:hidden text-xs font-bold text-[#6D28D9]">{step.number}</span>
                      <h3 className="text-lg font-bold text-white">
                        {step.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#524F65] leading-relaxed text-sm sm:text-base">
                    {step.body}
                  </p>
                </div>

                {/* Step accent line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-full bg-[#6D28D9]/0 group-hover:bg-[#6D28D9]/60 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#6D28D9]/10" />
          <p className="text-[#524F65] text-sm px-4">
            Average build time: <span className="text-[#8B5CF6] font-medium">2–4 weeks</span>, depending on complexity.
          </p>
          <div className="h-px flex-1 bg-[#6D28D9]/10" />
        </div>

      </div>
    </section>
  );
}
