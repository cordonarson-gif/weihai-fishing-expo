import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Home() {
  const [language, setLanguage] = useState('zh');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
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
      { title: '展商报名', desc: '提交展位需求，获取专属参展方案', color: 'bg-gradient-to-br from-primary to-blue-800', textColor: 'text-white', action: '提交展位需求' },
      { title: '观众预登记', desc: '提前预约入场，锁定采购对接服务', color: 'bg-white', textColor: 'text-primary', border: 'border border-blue-100', action: '预约专业观展' },
      { title: '智慧展厅', desc: '线上浏览展商、展品与展区热点', color: 'bg-gradient-to-br from-accent to-orange-500', textColor: 'text-white', action: '查看线上展厅' },
    ],
    highlights: '展会亮点',
    highlightText: '威海国际渔具博览会深耕产业三十余年，集中展示鱼竿、渔轮、配件、户外装备与跨境电商服务。本届展会强化智慧展厅与人工商务配对，帮助展商获取高质量询盘，也让采购商更快找到合适供应商。',
    smartExhibition: '智慧展厅',
    smartExhibitionDesc: '在线查看展区热点、展品目录与商务配对信息，提前锁定重点展商。',
    fishingProducts: '渔具直购',
    fishingProductsDesc: '精选展会热门品类，覆盖鱼竿、渔轮、线组与配件',
    products: [
      { id: 1, name: '专业鱼竿', price: '¥299', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
      { id: 2, name: '高速渔轮', price: '¥599', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp' },
      { id: 3, name: '鱼线套装', price: '¥149', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
      { id: 4, name: '鱼钩精选', price: '¥89', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
    ],
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
      { title: 'Exhibitor Registration', desc: 'Submit booth needs and receive a tailored exhibition plan', color: 'bg-gradient-to-br from-primary to-blue-800', textColor: 'text-white', action: 'Submit booth needs' },
      { title: 'Visitor Pre-registration', desc: 'Reserve access and secure buyer matching services', color: 'bg-white', textColor: 'text-primary', border: 'border border-blue-100', action: 'Reserve visitor access' },
      { title: 'Smart Exhibition', desc: 'Explore exhibitors, products, and hall hotspots online', color: 'bg-gradient-to-br from-accent to-orange-500', textColor: 'text-white', action: 'Explore smart hall' },
    ],
    highlights: 'Exhibition Highlights',
    highlightText: 'With more than three decades of industry focus, Weihai International Fishing Gear Exhibition showcases rods, reels, accessories, outdoor equipment, and cross-border commerce services. This edition strengthens the smart hall and manual business matching to help exhibitors capture qualified leads and buyers find the right suppliers faster.',
    smartExhibition: 'Smart Exhibition Hall',
    smartExhibitionDesc: 'View hall hotspots, product catalogues, and matching information online before the show.',
    fishingProducts: 'Fishing Gear Direct Purchase',
    fishingProductsDesc: 'Curated popular categories covering rods, reels, lines, and accessories',
    products: [
      { id: 1, name: 'Professional Fishing Rod', price: '¥299', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
      { id: 2, name: 'High-Speed Reel', price: '¥599', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp' },
      { id: 3, name: 'Fishing Line Set', price: '¥149', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
      { id: 4, name: 'Premium Hooks', price: '¥89', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp' },
    ],
  };

  useEffect(() => {
    const targets = [70000, 1100, 40000, 57];
    const duration = 2000;
    const startTime = Date.now();
    let frameId = 0;

    const animateStats = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setStats(prev => prev.map((stat, idx) => ({
        ...stat,
        value: Math.floor(targets[idx] * easedProgress),
      })));

      if (progress < 1) {
        frameId = requestAnimationFrame(animateStats);
      }
    };

    frameId = requestAnimationFrame(animateStats);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % content.carousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.carousel.length, isCarouselPaused]);

  const withBasePath = (path: string) => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${basePath}${path}` || '/';
  };

  const handleQuickEntry = (index: number) => {
    window.location.assign([withBasePath('/exhibit#exhibitor'), withBasePath('/exhibit#visitor'), withBasePath('/smart-exhibition')][index]);
  };

  const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/hero-banner-fishing-RDuVyNqa6iryrKKEtUrG4F.webp';

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Carousel Section */}
      <section className="relative overflow-hidden pt-20 md:pt-24">
        <div
          className="relative min-h-[620px] md:min-h-[700px] bg-blue-950"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocus={() => setIsCarouselPaused(true)}
          onBlur={() => setIsCarouselPaused(false)}
        >
          <img
            src={heroImage}
            alt={language === 'zh' ? '威海国际渔具博览会展会现场' : 'Weihai International Fishing Gear Exhibition venue'}
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="900"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-700/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,125,0,0.28),transparent_26rem)]"></div>

          <div className="relative z-10 container mx-auto px-4 py-14 md:py-24 min-h-[620px] md:min-h-[700px] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center w-full">
              <div className="text-white animate-fade-in">
                <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur-md mb-6">
                  {language === 'zh' ? '亚洲第一 · 全球三大渔具专业展' : 'Asia Leading · Global Top 3 Fishing Gear Expo'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
                  {content.carousel[carouselIndex].title}
                </h1>
                <p className="text-lg md:text-2xl text-blue-50 mb-8 drop-shadow max-w-3xl">
                  {content.carousel[carouselIndex].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button
                    type="button"
                    onClick={() => handleQuickEntry(0)}
                    className="rounded-full bg-accent px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-500"
                  >
                    {language === 'zh' ? '立即参展报名' : 'Register as Exhibitor'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickEntry(2)}
                    className="rounded-full border border-white/40 bg-white/12 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    {language === 'zh' ? '进入智慧展厅' : 'Enter Smart Hall'}
                  </button>
                </div>
                <div className="flex gap-2">
                  {content.carousel.map((_, idx) => (
                    <button
                      type="button"
                      aria-label={language === 'zh' ? `切换到第 ${idx + 1} 张轮播` : `Go to slide ${idx + 1}`}
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === carouselIndex ? 'bg-accent w-10' : 'bg-white/45 w-2 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="section-shell p-6 text-primary">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6">
                    <p className="text-sm font-semibold text-accent mb-2">WEIHAI EXPO 2026</p>
                    <h2 className="text-3xl font-bold mb-4">{language === 'zh' ? '10月17-19日' : 'Oct 17-19'}</h2>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>{language === 'zh' ? '威海国际博览中心' : 'Weihai International Convention Center'}</p>
                      <p>{language === 'zh' ? '1100+ 优质展商 · 40000+ 专业采购商' : '1100+ exhibitors · 40000+ professional buyers'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label={language === 'zh' ? '上一张轮播' : 'Previous slide'}
            onClick={() => setCarouselIndex((prev) => (prev - 1 + content.carousel.length) % content.carousel.length)}
            className="absolute left-3 top-auto bottom-6 z-20 bg-white/15 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur-md transition-all md:left-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label={language === 'zh' ? '下一张轮播' : 'Next slide'}
            onClick={() => setCarouselIndex((prev) => (prev + 1) % content.carousel.length)}
            className="absolute right-3 top-auto bottom-6 z-20 bg-white/15 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur-md transition-all md:right-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Quick Entry Cards */}
      <section className="relative -mt-20 px-4 pb-16 z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.quickEntry.map((item, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleQuickEntry(idx)}
                className={`group p-8 rounded-3xl text-left shadow-[0_20px_60px_rgba(0,57,104,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(0,57,104,0.18)] ${item.color} ${item.textColor} ${item.border || ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className={`text-sm mb-5 ${idx === 1 ? 'text-muted-foreground' : 'text-white/80'}`}>{item.desc}</p>
                    <span className={`inline-flex items-center text-sm font-bold ${idx === 1 ? 'text-primary' : 'text-white'}`}>
                      {item.action}
                    </span>
                  </div>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${idx === 1 ? 'bg-blue-50 text-primary' : 'bg-white/18 text-white'}`}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Data Dashboard */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-50/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="elevated-card p-6 text-center">
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                  {stat.value.toLocaleString()}
                  <span className="text-lg text-accent">{stat.unit}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="section-shell p-8 md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto text-center">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent mb-4">Highlights</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                {content.highlights}
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                {content.highlightText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Exhibition Video Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,125,0,0.18),transparent_24rem)]"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-200 mb-4">Smart Hall</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight">
                {content.smartExhibition}
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                {content.smartExhibitionDesc}
              </p>
              <button
                type="button"
                onClick={() => window.location.assign(withBasePath('/smart-exhibition'))}
                className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25"
              >
                {language === 'zh' ? '进入智慧展厅' : 'Enter Smart Hall'}
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/40 border border-white/10">
              <div className="aspect-video bg-black relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oKeRPu-X4CY?autoplay=0&controls=1"
                  loading="lazy"
                  title="Fishing Exhibition Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fishing Products Direct Purchase Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent mb-4">Products</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {content.fishingProducts}
            </h2>
            <p className="text-muted-foreground">
              {content.fishingProductsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.products.map((product) => (
              <div
                key={product.id}
                className="elevated-card overflow-hidden"
              >
                <div className="h-52 bg-cover bg-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="208"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-foreground mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <button
                      type="button"
                      onClick={() => toast.success(language === 'zh' ? `已添加 ${product.name} 到购物车` : `${product.name} added to cart`)}
                      className="bg-primary hover:bg-blue-800 text-white px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      {language === 'zh' ? '购买' : 'Buy'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
