import { Play } from 'lucide-react';
import realEstateImg from '../../imports/ChatGPT_Image_Jul_12__2026__06_07_45_PM.png';
import dentalImg from '../../imports/ChatGPT_Image_Jul_12__2026__06_21_13_PM.png';
import aiImg from '../../imports/ChatGPT_Image_Jul_12__2026__06_26_46_PM.png';

const demos = [
  {
    emoji: '🏠',
    tag: 'Real Estate',
    title: 'Real Estate Lead Qualification',
    description: 'Watch a lead come in, get scored, and trigger an instant follow-up — start to finish, no manual step.',
    gradient: 'from-[#1a0a2e] via-[#0d0520] to-[#05050A]',
    accent: '#8B5CF6',
    image: realEstateImg,
  },
  {
    emoji: '🦷',
    tag: 'Dental / Healthcare',
    title: 'Dental Patient Reminder Flow',
    description: 'See how appointment reminders, recall sequences, and review requests fire automatically — zero manual input.',
    gradient: 'from-[#0a1a2e] via-[#051020] to-[#05050A]',
    accent: '#6D28D9',
    image: dentalImg,
  },
  {
    emoji: '🤖',
    tag: 'AI Integration',
    title: 'AI-Powered Data Q&A',
    description: 'Ask a question, watch the AI pull the answer straight from connected docs, emails, and CRM data — live.',
    gradient: 'from-[#1a0a1a] via-[#100515] to-[#05050A]',
    accent: '#A78BFA',
    image: aiImg,
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#6D28D9]/10 text-[#8B5CF6] mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't take our word for it. Watch it run.
          </h2>
          <p className="text-[#524F65] text-base leading-relaxed">
            Real n8n workflows, recorded end-to-end. See exactly how the automation thinks, routes, and responds.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="space-y-6">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#6D28D9]/10 hover:border-[#6D28D9]/25 transition-all group"
            >
              {/* Media — image or placeholder */}
              <div className={`relative aspect-video lg:aspect-auto min-h-[240px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''} ${!demo.image ? `bg-gradient-to-br ${demo.gradient}` : 'bg-[#05050A]'} flex items-center justify-center`}>
                {demo.image ? (
                  <div className="relative w-full h-full min-h-[240px]">
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.7) saturate(0.7) hue-rotate(220deg)' }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.3) 0%, rgba(5,5,10,0.5) 100%)' }} />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#05050A]" />
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#05050A] to-transparent" />
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(${demo.accent}33 1px, transparent 1px), linear-gradient(90deg, ${demo.accent}33 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <div className="absolute top-4 left-4 w-16 h-px" style={{ background: demo.accent }} />
                    <div className="absolute top-4 left-4 w-px h-16" style={{ background: demo.accent }} />
                    <div className="absolute bottom-4 right-4 w-16 h-px" style={{ background: demo.accent }} />
                    <div className="absolute bottom-4 right-4 w-px h-16" style={{ background: demo.accent }} />
                    <div className="relative flex flex-col items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                        style={{ borderColor: `${demo.accent}60`, background: `${demo.accent}15` }}
                      >
                        <Play className="h-6 w-6 ml-1" style={{ color: demo.accent }} />
                      </div>
                      <span className="text-xs font-medium" style={{ color: `${demo.accent}99` }}>
                        Video coming soon
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Text content */}
              <div className={`flex flex-col justify-center p-8 sm:p-10 bg-[#05050A] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{demo.emoji}</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#6D28D9]/10 text-[#8B5CF6]">
                    {demo.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {demo.title}
                </h3>
                <p className="text-[#524F65] leading-relaxed text-sm sm:text-base">
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
