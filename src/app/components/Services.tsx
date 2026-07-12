import { useState } from 'react';

const niches = [
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'dental', label: 'Dental / Healthcare' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'legal', label: 'Legal' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'saas', label: 'SaaS / Tech' },
  { id: 'finance', label: 'Insurance / Finance' },
];

const nicheCards: Record<string, [{ emoji: string; name: string; description: string }, { emoji: string; name: string; description: string }]> = {
  'real-estate': [
    {
      emoji: '🏠',
      name: 'Real Estate Automation',
      description: 'Lead capture, follow-up sequences, listing updates, and CRM sync — built specifically for real estate agencies that want to scale without hiring.',
    },
    {
      emoji: '📋',
      name: 'Client & Listing Management',
      description: 'Automated showings scheduling, offer tracking, and client status updates — keeping every deal moving without spreadsheets.',
    },
  ],
  dental: [
    {
      emoji: '🦷',
      name: 'Dental Practice Automation',
      description: 'Appointment reminders, patient onboarding, review collection, and staff notifications — running automatically so your front desk can focus on people.',
    },
    {
      emoji: '📅',
      name: 'Patient Scheduling & Recall',
      description: 'Automated recall campaigns, no-show follow-up, and insurance verification reminders — filling your calendar without front-desk overtime.',
    },
  ],
  ecommerce: [
    {
      emoji: '🛒',
      name: 'E-Commerce Automation',
      description: 'Abandoned cart recovery, order status updates, inventory sync, and customer support triage — so your store runs itself past checkout.',
    },
    {
      emoji: '📦',
      name: 'Fulfillment & Customer Ops',
      description: 'Shipping notifications, return processing, and post-purchase upsell sequences — automated from order to delivery.',
    },
  ],
  legal: [
    {
      emoji: '⚖️',
      name: 'Legal Practice Automation',
      description: 'Client intake forms, document generation, deadline tracking, and case status updates — automated so your team bills hours, not admin.',
    },
    {
      emoji: '📁',
      name: 'Document & Compliance Automation',
      description: 'Contract generation, e-signature routing, and compliance deadline alerts — built to keep filings on time, every time.',
    },
  ],
  coaching: [
    {
      emoji: '🎯',
      name: 'Coaching & Consulting Automation',
      description: 'Automated onboarding sequences, session reminders, progress check-ins, and renewal nudges — keeping clients engaged without manual chasing.',
    },
    {
      emoji: '💬',
      name: 'Content & Community Automation',
      description: 'Automated newsletter sends, community engagement prompts, and testimonial requests — keeping your audience warm between sessions.',
    },
  ],
  saas: [
    {
      emoji: '⚙️',
      name: 'SaaS Onboarding Automation',
      description: 'Trial-to-paid nudges, in-app onboarding sequences, churn-risk flagging, and support ticket triage — built to reduce manual ops load.',
    },
    {
      emoji: '🔧',
      name: 'Internal Ops Automation',
      description: 'Bug ticket routing, release notes distribution, and customer health scoring — automated so your team ships instead of triaging.',
    },
  ],
  finance: [
    {
      emoji: '📊',
      name: 'Insurance & Finance Automation',
      description: 'Lead qualification, document collection, policy renewal reminders, and compliance checkpoints — automated end-to-end.',
    },
    {
      emoji: '🔐',
      name: 'Client Retention Automation',
      description: 'Policy review reminders, cross-sell triggers, and claims status updates — automated to reduce churn without manual outreach.',
    },
  ],
};

const fixedCard1 = {
  emoji: '🛠️',
  name: 'n8n Workflow Design',
  description: 'End-to-end automation architecture built on n8n. From trigger to output, every step is documented, tested, and handed off with a runbook.',
  fixed: true,
};

const fixedCard4 = {
  emoji: '🤖',
  name: 'Custom AI Integration',
  description: 'We connect large language models to your internal data — emails, documents, CRMs — so your team gets answers without digging.',
  fixed: true,
};

function ServiceCard({ emoji, name, description, fixed = false }: { emoji: string; name: string; description: string; fixed?: boolean }) {
  return (
    <div className={`flex gap-5 p-6 rounded-2xl border transition-all group cursor-default ${
      fixed
        ? 'bg-[#0C0B12] border-[#6D28D9]/20 hover:border-[#6D28D9]/40'
        : 'bg-[#05050A] border-[#6D28D9]/10 hover:border-[#6D28D9]/30 hover:bg-[#0A0915]'
    }`}>
      <div className="text-3xl flex-shrink-0 mt-0.5">{emoji}</div>
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
            {name}
          </h3>
          {fixed && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#6D28D9]/20 text-[#8B5CF6]">
              Always included
            </span>
          )}
        </div>
        <p className="text-[#524F65] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const [activeNiche, setActiveNiche] = useState('real-estate');
  const [cards] = [nicheCards[activeNiche]];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#6D28D9]/10 text-[#8B5CF6] mb-3">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Systems that run<br />while you sleep. 😴
            </h2>
          </div>
          <p className="text-[#524F65] max-w-xs text-sm leading-relaxed">
            Pick a vertical or bring us your custom stack — we'll automate the boring parts.
          </p>
        </div>

        {/* Niche Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {niches.map((niche) => (
            <button
              key={niche.id}
              onClick={() => setActiveNiche(niche.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeNiche === niche.id
                  ? 'bg-[#6D28D9] text-white shadow-lg shadow-violet-900/40'
                  : 'bg-[#0C0B12] text-[#524F65] border border-[#6D28D9]/10 hover:border-[#6D28D9]/30 hover:text-[#8B5CF6]'
              }`}
            >
              {niche.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard {...fixedCard1} />
          <ServiceCard key={`${activeNiche}-0`} {...nicheCards[activeNiche][0]} />
          <ServiceCard key={`${activeNiche}-1`} {...nicheCards[activeNiche][1]} />
          <ServiceCard {...fixedCard4} />
        </div>

      </div>
    </section>
  );
}
