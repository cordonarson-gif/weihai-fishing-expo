import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

export default function News() {
  const [language, setLanguage] = useState('zh');
  const [activeTab, setActiveTab] = useState('industry');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const content = language === 'zh' ? {
    title: '产业资讯',
    tabs: ['行业新闻', '展会动态', '企业风采'],
  } : {
    title: 'Industry News',
    tabs: ['Industry News', 'Exhibition Updates', 'Enterprise Showcase'],
  };

  // Sample articles
  const articles = {
    industry: [
      {
        id: 1,
        title: language === 'zh' ? '2026年渔具行业发展趋势分析' : '2026 Fishing Gear Industry Development Trends',
        date: '2026-05-20',
        summary: language === 'zh' ? '本文分析了2026年渔具行业的发展趋势...' : 'This article analyzes the development trends of the fishing gear industry in 2026...',
        content: language === 'zh' ? '2026年渔具行业将呈现以下发展趋势：1. 智能化升级 2. 环保材料应用 3. 跨境电商发展 4. 产业链整合。' : 'The fishing gear industry in 2026 will show the following trends: 1. Smart upgrades 2. Eco-friendly materials 3. Cross-border e-commerce 4. Industry chain integration.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 2,
        title: language === 'zh' ? '全球渔具市场规模持续扩大' : 'Global Fishing Gear Market Continues to Expand',
        date: '2026-05-15',
        summary: language === 'zh' ? '根据最新数据显示，全球渔具市场规模...' : 'According to latest data, the global fishing gear market size...',
        content: language === 'zh' ? '全球渔具市场规模在过去五年中持续增长，预计未来三年仍将保持两位数增长。亚洲市场成为主要增长引擎。' : 'The global fishing gear market has shown continuous growth over the past five years, and is expected to maintain double-digit growth in the next three years. Asia has become the main growth engine.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 3,
        title: language === 'zh' ? '环保渔具成为新的市场热点' : 'Eco-friendly Fishing Gear Becomes New Market Hotspot',
        date: '2026-05-10',
        summary: language === 'zh' ? '随着环保意识的提升，环保渔具...' : 'With increasing environmental awareness, eco-friendly fishing gear...',
        content: language === 'zh' ? '环保渔具因其可持续性和环保特性，正在成为市场的新热点。许多知名品牌已开始推出环保系列产品。' : 'Eco-friendly fishing gear is becoming a new market hotspot due to its sustainability and environmental benefits. Many well-known brands have started launching eco-friendly product lines.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
      },
      {
        id: 4,
        title: language === 'zh' ? '智能渔具技术创新加快' : 'Smart Fishing Gear Technology Innovation Accelerates',
        date: '2026-05-05',
        summary: language === 'zh' ? '智能化技术在渔具领域的应用...' : 'Application of smart technology in fishing gear...',
        content: language === 'zh' ? '智能渔具集成了物联网、人工智能等技术，为钓鱼爱好者提供了全新的体验。市场对智能产品的需求不断增加。' : 'Smart fishing gear integrates IoT and AI technologies, providing fishing enthusiasts with a new experience. Market demand for smart products continues to increase.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 5,
        title: language === 'zh' ? '渔具出口市场前景看好' : 'Fishing Gear Export Market Outlook Positive',
        date: '2026-04-30',
        summary: language === 'zh' ? '中国渔具出口市场持续增长...' : 'China\'s fishing gear export market continues to grow...',
        content: language === 'zh' ? '中国渔具产品在国际市场上的竞争力不断增强，出口市场前景看好。预计今年出口增长将达到15%。' : 'The competitiveness of Chinese fishing gear products in the international market continues to strengthen. The export market outlook is positive, with expected growth of 15% this year.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 6,
        title: language === 'zh' ? '渔具行业并购活动频繁' : 'Frequent M&A Activities in Fishing Gear Industry',
        date: '2026-04-25',
        summary: language === 'zh' ? '近期渔具行业并购活动...' : 'Recent M&A activities in the fishing gear industry...',
        content: language === 'zh' ? '为了增强竞争力，许多渔具企业正在进行并购活动，行业整合步伐加快。' : 'To enhance competitiveness, many fishing gear companies are conducting M&A activities, and the pace of industry consolidation is accelerating.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
      },
    ],
    exhibition: [
      {
        id: 7,
        title: language === 'zh' ? '第十八届威海国际渔具博览会即将开幕' : '18th Weihai International Fishing Gear Exhibition Coming Soon',
        date: '2026-05-22',
        summary: language === 'zh' ? '第十八届威海国际渔具博览会将于...' : 'The 18th Weihai International Fishing Gear Exhibition will be held...',
        content: language === 'zh' ? '第十八届威海国际渔具博览会将于2026年10月17-19日在威海国际博览中心举办。本届展会规模创历史新高，预计吸引1100+展商和40000+专业采购商参展。' : 'The 18th Weihai International Fishing Gear Exhibition will be held on October 17-19, 2026 at Weihai International Convention Center. This edition will set a new record in scale, attracting 1100+ exhibitors and 40,000+ professional buyers.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 8,
        title: language === 'zh' ? '智慧展厅功能全新升级' : 'Smart Exhibition Hall Features Comprehensive Upgrade',
        date: '2026-05-18',
        summary: language === 'zh' ? '本届展会推出全新的智慧展厅...' : 'This exhibition introduces a new smart exhibition hall...',
        content: language === 'zh' ? '全新的智慧展厅功能包括：720度全景展示、在线产品查询、精准商务配对、实时数据统计等功能，为参展商和采购商提供全新体验。' : 'The new smart exhibition hall features include: 720-degree panoramic display, online product search, precise business matching, real-time data statistics, etc., providing exhibitors and buyers with a new experience.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 9,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
        title: language === 'zh' ? '展会参展商报名火爆' : 'Exhibition Exhibitor Registration Booming',
        date: '2026-05-12',
        summary: language === 'zh' ? '展会开放报名以来，参展商报名...' : 'Since the exhibition opened for registration, exhibitor registration...',
        content: language === 'zh' ? '展会开放报名以来，参展商报名踊跃，目前已有800+企业确认参展，展位预订率已达80%。' : 'Since the exhibition opened for registration, exhibitor registrations have been enthusiastic, with 800+ companies already confirmed to participate, and booth reservation rate has reached 80%.',
      },
      {
        id: 10,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '国际采购商预登记启动' : 'International Buyer Pre-registration Launched',
        date: '2026-05-08',
        summary: language === 'zh' ? '国际采购商预登记现已启动...' : 'International buyer pre-registration is now open...',
        content: language === 'zh' ? '国际采购商预登记现已启动，来自全球57个国家的采购商已开始预登记，预计参展采购商将超过40000人。' : 'International buyer pre-registration is now open, with buyers from 57 countries worldwide already registering, with expected attendance exceeding 40,000 professional buyers.',
      },
      {
        id: 11,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '展会同期活动丰富多彩' : 'Rich and Colorful Concurrent Activities',
        date: '2026-05-03',
        summary: language === 'zh' ? '展会同期将举办多项活动...' : 'Multiple activities will be held during the exhibition...',
        content: language === 'zh' ? '展会同期将举办中国渔具产业高峰论坛、全球采购商对接会、新品发布会等多项活动，为参展商和采购商提供全方位的交流平台。' : 'Multiple activities will be held during the exhibition, including China Fishing Gear Industry Summit Forum, Global Buyer Matching Conference, New Product Launch Conference, etc., providing comprehensive communication platforms for exhibitors and buyers.',
      },
      {
        id: 12,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
        title: language === 'zh' ? '展会交通和住宿安排完善' : 'Complete Exhibition Transportation and Accommodation Arrangements',
        date: '2026-04-28',
        summary: language === 'zh' ? '展会组委会已完成交通和住宿...' : 'The exhibition organizing committee has completed transportation and accommodation...',
        content: language === 'zh' ? '展会组委会已完成交通和住宿安排，为参展商和采购商提供便利的交通接驳和优惠的酒店住宿。' : 'The exhibition organizing committee has completed transportation and accommodation arrangements, providing convenient shuttle services and discounted hotel accommodations for exhibitors and buyers.',
      },
    ],
    enterprise: [
      {
        id: 13,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '知名渔具企业A公司创新发展案例' : 'Innovative Development Case of Leading Fishing Gear Company A',
        date: '2026-05-19',
        summary: language === 'zh' ? 'A公司通过技术创新和市场...' : 'Company A through technological innovation and market...',
        content: language === 'zh' ? 'A公司通过持续的技术创新和市场开拓，成功开发了多款智能渔具产品，市场占有率不断提升，已成为行业领先企业。' : 'Through continuous technological innovation and market expansion, Company A has successfully developed multiple smart fishing gear products, with increasing market share, becoming an industry leader.',
      },
      {
        id: 14,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '环保渔具企业B公司绿色发展之路' : 'Green Development Path of Eco-friendly Fishing Gear Company B',
        date: '2026-05-14',
        summary: language === 'zh' ? 'B公司致力于环保渔具的研发...' : 'Company B is committed to the development of eco-friendly fishing gear...',
        content: language === 'zh' ? 'B公司致力于环保渔具的研发和生产，采用可回收材料，获得多项环保认证，成为行业的环保典范。' : 'Company B is committed to the development and production of eco-friendly fishing gear, using recyclable materials, and has obtained multiple environmental certifications, becoming an industry model for environmental protection.',
      },
      {
        id: 15,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
        title: language === 'zh' ? '跨境电商企业C公司国际拓展' : 'International Expansion of Cross-border E-commerce Company C',
        date: '2026-05-09',
        summary: language === 'zh' ? 'C公司通过跨境电商平台...' : 'Company C through cross-border e-commerce platforms...',
        content: language === 'zh' ? 'C公司通过跨境电商平台，成功将产品销售到全球50多个国家，成为跨境电商领域的佼佼者。' : 'Through cross-border e-commerce platforms, Company C has successfully sold products to over 50 countries worldwide, becoming a leader in the cross-border e-commerce field.',
      },
      {
        id: 16,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '智能渔具企业D公司技术突破' : 'Technology Breakthrough of Smart Fishing Gear Company D',
        date: '2026-05-04',
        summary: language === 'zh' ? 'D公司在智能渔具领域...' : 'Company D in the smart fishing gear field...',
        content: language === 'zh' ? 'D公司在智能渔具领域取得重大技术突破，开发了具有自主知识产权的核心技术，获得多项发明专利。' : 'Company D has made major technological breakthroughs in the smart fishing gear field, developing core technologies with independent intellectual property rights and obtaining multiple invention patents.',
      },
      {
        id: 17,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '传统渔具企业E公司转型升级' : 'Transformation and Upgrade of Traditional Fishing Gear Company E',
        date: '2026-04-29',
        summary: language === 'zh' ? 'E公司通过数字化转型...' : 'Company E through digital transformation...',
        content: language === 'zh' ? 'E公司通过数字化转型和产业升级，成功从传统制造向智能制造转变，实现了产业的高质量发展。' : 'Through digital transformation and industrial upgrading, Company E has successfully transformed from traditional manufacturing to smart manufacturing, achieving high-quality industrial development.',
      },
      {
        id: 18,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-rods-display-A3C9s7zVLNmxVdoG9nZPEj.webp',
        title: language === 'zh' ? '渔具配件企业F公司专业化发展' : 'Specialized Development of Fishing Gear Accessories Company F',
        date: '2026-04-24',
        summary: language === 'zh' ? 'F公司专注于渔具配件...' : 'Company F focuses on fishing gear accessories...',
        content: language === 'zh' ? 'F公司专注于渔具配件的研发和生产，形成了完整的产品线，成为行业配件供应的龙头企业。' : 'Company F focuses on the development and production of fishing gear accessories, forming a complete product line and becoming a leading supplier of fishing gear accessories in the industry.',
      },
    ],
  };

  const tabArticles = activeTab === 'industry' ? articles.industry : activeTab === 'exhibition' ? articles.exhibition : articles.enterprise;

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 py-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex gap-4 flex-wrap">
            {content.tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(['industry', 'exhibition', 'enterprise'][idx])}
                className={`px-6 py-3 font-bold text-lg transition-all ${
                  activeTab === ['industry', 'exhibition', 'enterprise'][idx]
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all text-left"
              >
                <div className="h-40 bg-cover bg-center">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted mb-2">{article.date}</p>
                  <h3 className="font-bold text-primary mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-foreground line-clamp-2">{article.summary}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const article = tabArticles.find(a => a.id === selectedArticle);
              return article ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-primary flex-1">{article.title}</h2>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-sm text-muted mb-6">{article.date}</p>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{article.content}</p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}

      <Footer language={language} />
    </div>
  );
}
