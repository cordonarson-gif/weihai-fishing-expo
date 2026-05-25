import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Overview() {
  const [language, setLanguage] = useState('zh');

  const content = language === 'zh' ? {
    title: '展会概况',
    intro: '威海国际渔具博览会介绍',
    introText: '威海国际渔具博览会始创于1991年，是亚洲规模最大、全球排名前三的渔具专业展览会。展会汇聚了全球顶级渔具制造商、供应商和采购商，是业界最重要的商务交流平台。',
    hallTitle: '展馆分布',
    hallSubtitle: '威海国际博览中心 A/B/C 馆',
    halls: [
      { name: '鱼竿展区', desc: '专业鱼竿及配件展示' },
      { name: '渔轮展区', desc: '各类渔轮产品展示' },
      { name: '户外装备展区', desc: '户外渔具装备展示' },
      { name: '跨境电商展区', desc: '跨境电商平台展示' },
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
    introText: 'Founded in 1991, Weihai International Fishing Gear Exhibition is Asia\'s largest and globally top-3 professional fishing gear exhibition. It brings together leading fishing gear manufacturers, suppliers, and buyers worldwide, serving as the industry\'s most important business platform.',
    hallTitle: 'Exhibition Hall Distribution',
    hallSubtitle: 'Weihai International Convention Center Halls A/B/C',
    halls: [
      { name: 'Fishing Rod Zone', desc: 'Professional fishing rods and accessories' },
      { name: 'Fishing Reel Zone', desc: 'Various fishing reel products' },
      { name: 'Outdoor Equipment Zone', desc: 'Outdoor fishing gear display' },
      { name: 'Cross-border E-commerce Zone', desc: 'Cross-border e-commerce platforms' },
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
      <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">{content.intro}</h2>
          <p className="text-lg text-foreground leading-relaxed">{content.introText}</p>
        </div>
      </section>

      {/* Exhibition Halls */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">{content.hallTitle}</h2>
          <p className="text-muted mb-8">{content.hallSubtitle}</p>
          
          {/* Hall Image Placeholder */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-600 text-lg">Exhibition Hall Map</span>
          </div>

          {/* Hall Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.halls.map((hall, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
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
          <h2 className="text-3xl font-bold mb-8 text-primary">{content.pastTitle}</h2>

          {/* Data Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">{language === 'zh' ? '展会' : 'Exhibition'}</th>
                  <th className="px-4 py-3 text-left">{language === 'zh' ? '展商数' : 'Exhibitors'}</th>
                  <th className="px-4 py-3 text-left">{language === 'zh' ? '采购商数' : 'Buyers'}</th>
                  <th className="px-4 py-3 text-left">{language === 'zh' ? '成交额' : 'Transaction'}</th>
                </tr>
              </thead>
              <tbody>
                {content.dataTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="px-4 py-3 border-b border-border">{row.year}</td>
                    <td className="px-4 py-3 border-b border-border">{row.exhibitors}</td>
                    <td className="px-4 py-3 border-b border-border">{row.buyers}</td>
                    <td className="px-4 py-3 border-b border-border">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Past Event Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Event Photo {idx}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concurrent Events */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">{content.eventsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.events.map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-accent hover:shadow-lg transition-shadow">
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
