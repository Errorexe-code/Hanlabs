import { Workflow, Database, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'We map your existing processes and rebuild them as automated n8n pipelines. What used to take hours runs in seconds — without anyone touching it.',
    tag: 'Most popular',
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description: "Your CRM should know what's happening before your team does. We connect your tools so leads, follow-ups, and deal stages update themselves.",
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Pipelines',
    description: 'We layer AI into your workflows where it actually makes sense — document parsing, lead scoring, inbox triage. Not hype. Just leverage.',
    tag: 'New',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative p-7 rounded-2xl bg-[#0F0F14] border border-[#7C3AED]/10 hover:border-[#7C3AED]/30 hover:bg-[#13121A] transition-all group cursor-default"
              >
                {feature.tag && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/15 text-[#A78BFA]">
                    {feature.tag}
                  </span>
                )}
                <div className="mb-5 w-11 h-11 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                  <Icon className="h-5 w-5 text-[#A78BFA]" />
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-[#6B6880] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
