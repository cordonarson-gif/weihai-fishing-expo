import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Home() {
  const [language, setLanguage] = useState('zh');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [stats, setStats] = useState([
    { value: 0, label: language === 'zh' ? '展馆面积' : 'Exhibition Area', unit: '㎡' },
    { value: 0, label: language === 'zh' ? '优质展商' : 'Quality Exhibitors', unit: '+' },
    { value: 0, label: language === 'zh' ? '专业采购商' : 'Professional Buyers', unit: '+' },
    { value: 0, label: language === 'zh' ? '覆盖国家' : 'Countries Covered', unit: '' },
  ]);

  const content = language === 'zh' ? {
    carousel: [
      {
        title: '第十八届威海国际渔具博览会（秋季展）',
        subtitle: '2026.10.17-19 威海国际博览中心',
      },
      {
        title: '亚洲第一・全球三大渔具专业展',
        subtitle: '汇聚全球 1100 + 优质展商',
      },
      {
        title: '线上线下一体化・精准商务对接',
        subtitle: '打造永不落幕的渔具盛会',
      },
    ],
    quickEntry: [
      { title: '展商报名', color: 'bg-primary', textColor: 'text-white' },
      { title: '观众预登记', color: 'bg-white', textColor: 'text-primary', border: 'border-2 border-primary' },
      { title: '智慧展厅', color: 'bg-accent', textColor: 'text-white' },
    ],
    highlights: '展会亮点',
    highlightText: '威海国际渔具博览会是亚洲规模最大、全球排名前三的渔具专业展览会。本届展会以"线上线下融合"为核心主题，推出全新的智慧展厅功能，实现永不落幕的展会体验。',
  } : {
    carousel: [
      {
        title: '18th Weihai International Fishing Gear Exhibition (Autumn)',
        subtitle: 'Oct 17-19, 2026 | Weihai International Convention Center',
      },
      {
        title: 'Asia\'s Largest · Global Top 3 Fishing Gear Professional Exhibition',
        subtitle: 'Gathering 1100+ Quality Exhibitors Worldwide',
      },
      {
        title: 'Online & Offline Integration · Precise Business Matching',
        subtitle: 'Creating an Evergreen Fishing Gear Festival',
      },
    ],
    quickEntry: [
      { title: 'Exhibitor Registration', color: 'bg-primary', textColor: 'text-white' },
      { title: 'Visitor Pre-registration', color: 'bg-white', textColor: 'text-primary', border: 'border-2 border-primary' },
      { title: 'Smart Exhibition', color: 'bg-accent', textColor: 'text-white' },
    ],
    highlights: 'Exhibition Highlights',
    highlightText: 'Weihai International Fishing Gear Exhibition is Asia\'s largest and globally top-3 professional fishing gear exhibition. This session features "Online & Offline Integration" as the core theme, introducing a new Smart Exhibition Hall for an evergreen exhibition experience.',
  };

  // Animate stats on mount
  useEffect(() => {
    const targets = [70000, 1100, 40000, 57];
    const duration = 2000;
    const startTime = Date.now();

    const animateStats = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats(prev => prev.map((stat, idx) => ({
        ...stat,
        value: Math.floor(targets[idx] * progress),
      })));

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      }
    };

    animateStats();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % content.carousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.carousel.length]);

  const handleQuickEntry = (index: number) => {
    if (index === 0) {
      window.location.href = '/exhibit#exhibitor';
    } else if (index === 1) {
      window.location.href = '/exhibit#visitor';
    } else {
      window.location.href = '/smart-exhibition';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Carousel Section */}
      <section className="pt-20 mt-12 relative overflow-hidden">
        <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/hero-banner-VV9imKng4FXogKQ9Luy7As.webp)',
          backgroundAttachment: 'fixed'
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Carousel Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {content.carousel[carouselIndex].title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 drop-shadow">
                {content.carousel[carouselIndex].subtitle}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => setCarouselIndex((prev) => (prev - 1 + content.carousel.length) % content.carousel.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCarouselIndex((prev) => (prev + 1) % content.carousel.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {content.carousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === carouselIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Entry Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.quickEntry.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickEntry(idx)}
                className={`p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${item.color} ${item.textColor} ${item.border || ''}`}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Data Dashboard */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value.toLocaleString()}
                  <span className="text-lg">{stat.unit}</span>
                </div>
                <p className="text-sm md:text-base text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            {content.highlights}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed text-center">
              {content.highlightText}
            </p>
          </div>
        </div>
      </section>

      <Footer language={language} />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
