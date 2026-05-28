import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Overview() {
  const [language, setLanguage] = useState('zh');

  const content = language === 'zh' ? {
    title: '展会概况',
    intro: '威海国际渔具博览会介绍',
    introText: '威海国际渔具博览会始创于1991年，深耕渔具产业三十余年，已形成覆盖研发制造、品牌展示、国际采购、跨境电商与产业服务的专业展贸平台。展会以威海渔具产业集群为依托，持续连接全球优质供应链与专业买家。',
    hallTitle: '展馆分布',
    hallSubtitle: '威海国际博览中心 A/B/C 馆，覆盖核心品类与配套服务',
    halls: [
      { name: '鱼竿展区', desc: '覆盖手竿、海竿、路亚竿、竞技竿及碳素材应用' },
      { name: '渔轮展区', desc: '展示纺车轮、水滴轮、电动轮与精密传动组件' },
      { name: '户外装备展区', desc: '集中呈现钓箱、钓椅、钓鱼包、服饰与户外装备' },
      { name: '跨境电商展区', desc: '对接平台服务、品牌出海、物流仓储与数字营销资源' },
    ],
    pastTitle: '往届回顾',
    dataTable: [
      { year: '2024年秋季展', exhibitors: '1050+', buyers: '38000+', sales: '2.5亿元' },
      { year: '2025年春季展', exhibitors: '1080+', buyers: '39000+', sales: '2.8亿元' },
      { year: '2026年春季展', exhibitors: '1100+', buyers: '40000+', sales: '3.0亿元' },
    ],
    eventsTitle: '同期活动',
    events: [
      { title: '中国渔具产业高峰论坛', desc: '邀请行业专家深度解读产业发展趋势' },
      { title: '全球采购商对接会', desc: '为展商与采购商搭建精准对接平台' },
      { title: '新品发布会', desc: '展示行业最新创新产品和技术' },
    ],
  } : {
    title: 'Exhibition Overview',
    intro: 'About Weihai International Fishing Gear Exhibition',
    introText: 'Founded in 1991, Weihai International Fishing Gear Exhibition has served the fishing gear industry for more than three decades. It now connects product R&D, manufacturing, brand showcases, international sourcing, cross-border commerce, and industry services in one professional trade platform.',
    hallTitle: 'Exhibition Hall Distribution',
    hallSubtitle: 'Weihai International Convention Center Halls A/B/C, covering core categories and trade services',
    halls: [
      { name: 'Fishing Rod Zone', desc: 'Hand rods, sea rods, lure rods, competition rods, and carbon material applications' },
      { name: 'Fishing Reel Zone', desc: 'Spinning reels, baitcasting reels, electric reels, and precision drive components' },
      { name: 'Outdoor Equipment Zone', desc: 'Tackle boxes, chairs, bags, apparel, and outdoor fishing equipment' },
      { name: 'Cross-border E-commerce Zone', desc: 'Marketplace services, brand globalization, logistics, warehousing, and digital marketing' },
    ],
    pastTitle: 'Past Events Review',
    dataTable: [
      { year: 'Autumn 2024', exhibitors: '1050+', buyers: '38,000+', sales: '¥250M' },
      { year: 'Spring 2025', exhibitors: '1080+', buyers: '39,000+', sales: '¥280M' },
      { year: 'Spring 2026', exhibitors: '1100+', buyers: '40,000+', sales: '¥300M' },
    ],
    eventsTitle: 'Concurrent Events',
    events: [
      { title: 'China Fishing Gear Industry Summit Forum', desc: 'Industry experts discuss development trends' },
      { title: 'Global Buyer Matching Conference', desc: 'Precise matching platform for exhibitors and buyers' },
      { title: 'New Product Launch Conference', desc: 'Showcase latest industry innovations' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="page-hero pt-36 pb-16 px-4">
        <div className="container mx-auto relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200 mb-4">Overview</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="section-shell p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{content.intro}</h2>
            <p className="text-lg text-foreground leading-relaxed">{content.introText}</p>
          </div>
        </div>
      </section>

      {/* Exhibition Halls */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-3">Halls</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">{content.hallTitle}</h2>
            <p className="text-muted-foreground">{content.hallSubtitle}</p>
          </div>

          {/* Hall Image */}
          <div className="w-full h-64 md:h-96 rounded-3xl mb-8 overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp"
              alt="Exhibition Hall Interior"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hall Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.halls.map((hall, idx) => (
              <div key={idx} className="elevated-card p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary font-bold">{idx + 1}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{hall.name}</h3>
                <p className="text-foreground">{hall.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{content.pastTitle}</h2>

          {/* Data Table */}
          <div className="overflow-x-auto mb-12 rounded-3xl border border-border bg-white shadow-[0_18px_50px_rgba(0,57,104,0.08)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="brand-gradient text-white">
                  <th className="px-5 py-4 text-left font-semibold">{language === 'zh' ? '展会' : 'Exhibition'}</th>
                  <th className="px-5 py-4 text-left font-semibold">{language === 'zh' ? '展商数' : 'Exhibitors'}</th>
                  <th className="px-5 py-4 text-left font-semibold">{language === 'zh' ? '采购商数' : 'Buyers'}</th>
                  <th className="px-5 py-4 text-left font-semibold">{language === 'zh' ? '成交额' : 'Transaction'}</th>
                </tr>
              </thead>
              <tbody>
                {content.dataTable.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/80 transition-colors">
                    <td className="px-5 py-4 border-b border-border font-medium">{row.year}</td>
                    <td className="px-5 py-4 border-b border-border text-primary font-bold">{row.exhibitors}</td>
                    <td className="px-5 py-4 border-b border-border text-primary font-bold">{row.buyers}</td>
                    <td className="px-5 py-4 border-b border-border text-accent font-bold">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Past Event Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp', alt: '往届展会现场观众与展商交流' },
              { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp', alt: '往届渔具展展台展示' },
              { url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp', alt: '往届展会会议与活动现场' },
            ].map((photo, idx) => (
              <div key={idx} className="h-52 rounded-3xl overflow-hidden shadow-lg shadow-blue-900/10 border border-white group">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concurrent Events */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{content.eventsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.events.map((event, idx) => (
              <div key={idx} className="elevated-card p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                <p className="text-foreground">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
