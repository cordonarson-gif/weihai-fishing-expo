import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { X, CalendarDays, ArrowRight } from 'lucide-react';

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
        summary: language === 'zh' ? '智能化、环保材料、跨境渠道与供应链协同正在重塑渔具行业竞争格局。' : 'Smart products, eco-friendly materials, cross-border channels, and supply-chain collaboration are reshaping fishing gear competition.',
        content: language === 'zh' ? '2026年渔具行业的核心关键词将集中在智能化升级、环保材料应用、跨境电商发展和产业链整合。对制造企业而言，产品研发能力、稳定交付能力与品牌出海能力将共同决定增长质量。' : 'In 2026, the fishing gear industry will focus on smart upgrades, eco-friendly materials, cross-border commerce, and supply-chain integration. For manufacturers, product R&D, stable delivery, and brand globalization will jointly define growth quality.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 2,
        title: language === 'zh' ? '全球渔具市场规模持续扩大' : 'Global Fishing Gear Market Continues to Expand',
        date: '2026-05-15',
        summary: language === 'zh' ? '来自全球市场的采购需求持续释放，亚洲制造和品牌供应链保持增长优势。' : 'Global sourcing demand continues to expand, while Asian manufacturing and branded supply chains retain growth advantages.',
        content: language === 'zh' ? '全球渔具市场在过去五年保持稳健增长，休闲垂钓、户外运动和电商渠道共同推动消费升级。亚洲市场凭借制造基础和品类完整度，仍是全球采购的重要增长引擎。' : 'The global fishing gear market has grown steadily over the past five years, driven by recreational fishing, outdoor sports, and e-commerce channels. With strong manufacturing capability and complete product categories, Asia remains a major growth engine for global sourcing.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 3,
        title: language === 'zh' ? '环保渔具成为新的市场热点' : 'Eco-friendly Fishing Gear Becomes New Market Hotspot',
        date: '2026-05-10',
        summary: language === 'zh' ? '可回收材料、低污染工艺与耐用设计成为品牌差异化的新方向。' : 'Recyclable materials, lower-impact processes, and durable design are becoming new levers for brand differentiation.',
        content: language === 'zh' ? '环保渔具正在从概念走向产品化，企业开始关注可回收材料、耐用结构和包装减量。采购商也更加重视产品合规、供应链透明度和长期售后能力。' : 'Eco-friendly fishing gear is moving from concept to productization. Companies are focusing on recyclable materials, durable structures, and reduced packaging, while buyers increasingly value compliance, supply-chain transparency, and long-term after-sales support.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 4,
        title: language === 'zh' ? '智能渔具技术创新加快' : 'Smart Fishing Gear Technology Innovation Accelerates',
        date: '2026-05-05',
        summary: language === 'zh' ? '智能化技术加速进入鱼竿、渔轮、探鱼设备与赛事场景，推动产品体验升级。' : 'Smart technologies are entering rods, reels, fish finders, and competition scenarios, upgrading product experience.',
        content: language === 'zh' ? '智能渔具正在从单点功能走向系统化体验，传感器、蓝牙连接、数据记录和辅助决策能力被更多应用到产品中。对企业而言，真正的竞争重点不只是硬件参数，而是稳定性、易用性和售后服务体系。' : 'Smart fishing gear is moving from single features to integrated experiences, with sensors, Bluetooth connectivity, data records, and decision support appearing in more products. For companies, the real competition is not only hardware specification, but also stability, usability, and after-sales service capability.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 5,
        title: language === 'zh' ? '渔具出口市场前景看好' : 'Fishing Gear Export Market Outlook Positive',
        date: '2026-04-30',
        summary: language === 'zh' ? '订单结构从低价代工转向品牌化、套装化与跨境渠道协同，出口质量持续提升。' : 'Export orders are shifting from low-price OEM toward branding, bundled products, and cross-border channel collaboration.',
        content: language === 'zh' ? '中国渔具出口正在从规模增长转向质量增长。海外采购商更关注交期稳定、产品合规、包装体验和小批量快速补货能力，具备研发与柔性供应链能力的企业将更容易获得长期订单。' : 'China\'s fishing gear exports are shifting from scale growth to quality growth. Overseas buyers increasingly value delivery stability, product compliance, packaging experience, and small-batch replenishment, giving long-term advantages to companies with R&D and flexible supply-chain capabilities.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 6,
        title: language === 'zh' ? '渔具行业并购活动频繁' : 'Frequent M&A Activities in Fishing Gear Industry',
        date: '2026-04-25',
        summary: language === 'zh' ? '头部企业围绕渠道、品牌和核心零部件进行整合，中小企业加速寻找差异化定位。' : 'Leading companies are consolidating channels, brands, and core components, while smaller suppliers seek differentiated positioning.',
        content: language === 'zh' ? '渔具行业并购与合作活动增多，背后反映的是渠道成本上升、海外品牌竞争和供应链效率压力。未来企业竞争将更依赖产品线协同、渠道资源和全球化服务能力。' : 'More M&A and partnership activity in fishing gear reflects rising channel costs, overseas brand competition, and supply-chain efficiency pressure. Future competition will rely more on product-line synergy, channel resources, and global service capability.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
    ],
    exhibition: [
      {
        id: 7,
        title: language === 'zh' ? '第十八届威海国际渔具博览会即将开幕' : '18th Weihai International Fishing Gear Exhibition Coming Soon',
        date: '2026-05-22',
        summary: language === 'zh' ? '本届展会将进一步强化智慧展厅、展商展示、采购对接与现场服务。' : 'This edition will further strengthen smart hall access, exhibitor showcases, buyer matching, and on-site services.',
        content: language === 'zh' ? '第十八届威海国际渔具博览会将于2026年10月17-19日在威海国际博览中心举办。本届展会预计吸引1100+展商和40000+专业采购商，并通过线上展厅与人工配对提升对接效率。' : 'The 18th Weihai International Fishing Gear Exhibition will be held on October 17-19, 2026 at Weihai International Convention Center. This edition is expected to attract 1100+ exhibitors and 40,000+ professional buyers, with online hall access and manual matching improving connection efficiency.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
      },
      {
        id: 8,
        title: language === 'zh' ? '智慧展厅功能全新升级' : 'Smart Exhibition Hall Features Comprehensive Upgrade',
        date: '2026-05-18',
        summary: language === 'zh' ? '采购商可提前浏览展区热点、搜索产品目录，并提交精准采购需求。' : 'Buyers can browse hall hotspots, search product catalogues, and submit targeted sourcing needs before the show.',
        content: language === 'zh' ? '本届展会智慧展厅升级覆盖全景展示、产品查询、展区热点和人工商务配对。采购商可提前筛选目标品类，展商也能通过供应信息获得更精准的潜在客户。' : 'The upgraded smart hall covers panoramic display, product search, hall hotspots, and manual business matching. Buyers can screen target categories in advance, while exhibitors can receive more qualified leads through supply information.',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
      },
      {
        id: 9,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '展会参展商报名火爆' : 'Exhibition Exhibitor Registration Booming',
        date: '2026-05-12',
        summary: language === 'zh' ? '展位预订率持续提升，鱼竿、渔轮及跨境电商展区需求较为集中。' : 'Booth reservations continue to rise, with strong demand in rod, reel, and cross-border commerce zones.',
        content: language === 'zh' ? '展会开放报名以来，参展商报名踊跃。目前已有800+企业确认参展，重点集中在鱼竿、渔轮、配件、户外装备和跨境电商服务等展区。组委会将根据展品品类、展位面积和商务配对需求提供展位建议。' : 'Since exhibitor registration opened, applications have been active, with 800+ companies already confirmed. Demand is concentrated in rods, reels, accessories, outdoor equipment, and cross-border commerce services. The organizer will provide booth recommendations based on product category, booth area, and matching needs.',
      },
      {
        id: 10,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '国际采购商预登记启动' : 'International Buyer Pre-registration Launched',
        date: '2026-05-08',
        summary: language === 'zh' ? '境内外采购商可通过预登记提前提交采购方向，提高现场对接效率。' : 'Domestic and international buyers can submit sourcing directions during pre-registration to improve on-site matching efficiency.',
        content: language === 'zh' ? '国际采购商预登记现已启动，来自全球57个国家的采购商已开始预登记，预计参展采购商将超过40000人。' : 'International buyer pre-registration is now open, with buyers from 57 countries worldwide already registering, with expected attendance exceeding 40,000 professional buyers.',
      },
      {
        id: 11,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '展会同期活动丰富多彩' : 'Rich and Colorful Concurrent Activities',
        date: '2026-05-03',
        summary: language === 'zh' ? '论坛、采购对接与新品发布将共同构成本届展会的专业交流矩阵。' : 'Forums, buyer matching, and product launches will form the professional exchange matrix of this edition.',
        content: language === 'zh' ? '展会同期将举办中国渔具产业高峰论坛、全球采购商对接会、新品发布会等多项活动，为参展商和采购商提供全方位的交流平台。' : 'Multiple activities will be held during the exhibition, including China Fishing Gear Industry Summit Forum, Global Buyer Matching Conference, New Product Launch Conference, etc., providing comprehensive communication platforms for exhibitors and buyers.',
      },
      {
        id: 12,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '展会交通和住宿安排完善' : 'Complete Exhibition Transportation and Accommodation Arrangements',
        date: '2026-04-28',
        summary: language === 'zh' ? '组委会将围绕交通接驳、酒店协同与现场指引持续发布服务信息。' : 'The organizer will continue to publish service information for shuttles, hotel coordination, and venue guidance.',
        content: language === 'zh' ? '展会组委会已完成交通和住宿安排，为参展商和采购商提供便利的交通接驳和优惠的酒店住宿。' : 'The exhibition organizing committee has completed transportation and accommodation arrangements, providing convenient shuttle services and discounted hotel accommodations for exhibitors and buyers.',
      },
    ],
    enterprise: [
      {
        id: 13,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '知名渔具企业A公司创新发展案例' : 'Innovative Development Case of Leading Fishing Gear Company A',
        date: '2026-05-19',
        summary: language === 'zh' ? 'A公司以新材料鱼竿、智能配件和海外渠道协同为重点，持续提升品牌影响力。' : 'Company A focuses on new-material rods, smart accessories, and overseas channel collaboration to strengthen brand influence.',
        content: language === 'zh' ? 'A公司通过持续研发和渠道拓展，形成了覆盖中高端鱼竿、智能配件和售后服务的产品体系。其经验表明，渔具企业的增长不只来自单品爆款，更来自稳定交付、品牌内容和海外服务网络。' : 'Through continuous R&D and channel expansion, Company A has built a portfolio covering mid-to-high-end rods, smart accessories, and after-sales service. Its case shows that fishing gear growth comes not only from hit products, but also stable delivery, brand content, and overseas service networks.',
      },
      {
        id: 14,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '环保渔具企业B公司绿色发展之路' : 'Green Development Path of Eco-friendly Fishing Gear Company B',
        date: '2026-05-14',
        summary: language === 'zh' ? 'B公司围绕可回收材料、减量包装和合规认证建立绿色产品体系。' : 'Company B builds a green product system around recyclable materials, reduced packaging, and compliance certification.',
        content: language === 'zh' ? 'B公司将环保要求前置到设计、采购和生产环节，重点推进可回收材料、低损耗工艺和包装减量。随着海外采购商更重视合规证明和供应链透明度，绿色能力正在成为企业参与国际竞争的重要门槛。' : 'Company B embeds environmental requirements into design, sourcing, and production, focusing on recyclable materials, lower-loss processes, and reduced packaging. As overseas buyers value compliance proof and supply-chain transparency, green capability is becoming an important threshold for international competition.',
      },
      {
        id: 15,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '跨境电商企业C公司国际拓展' : 'International Expansion of Cross-border E-commerce Company C',
        date: '2026-05-09',
        summary: language === 'zh' ? 'C公司通过独立站、平台店铺和海外仓协同，提升跨境订单履约效率。' : 'Company C improves cross-border fulfillment through DTC sites, marketplace stores, and overseas warehouse coordination.',
        content: language === 'zh' ? 'C公司以跨境电商为核心渠道，围绕选品、内容营销、库存预测和海外仓履约建立完整运营体系。其经验显示，渔具出海不仅是把产品上架，更需要本地化内容、稳定售后和数据化运营能力。' : 'Company C uses cross-border commerce as its core channel and has built an operating system around product selection, content marketing, inventory forecasting, and overseas warehouse fulfillment. Its experience shows that global expansion requires more than listing products: localized content, reliable after-sales, and data-driven operations are essential.',
      },
      {
        id: 16,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp',
        title: language === 'zh' ? '智能渔具企业D公司技术突破' : 'Technology Breakthrough of Smart Fishing Gear Company D',
        date: '2026-05-04',
        summary: language === 'zh' ? 'D公司在传感器、数据记录和智能配件联动方面取得阶段性成果。' : 'Company D has made progress in sensors, data recording, and smart accessory integration.',
        content: language === 'zh' ? 'D公司将智能化能力应用于钓具使用场景，围绕传感器稳定性、低功耗连接和数据记录体验持续迭代。技术突破的价值不仅体现在专利数量，更体现在产品是否能真正降低用户操作门槛。' : 'Company D applies smart capabilities to fishing scenarios and iterates on sensor stability, low-power connectivity, and data recording experience. The value of technological breakthroughs lies not only in patent counts, but in whether products truly reduce user friction.',
      },
      {
        id: 17,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '传统渔具企业E公司转型升级' : 'Transformation and Upgrade of Traditional Fishing Gear Company E',
        date: '2026-04-29',
        summary: language === 'zh' ? 'E公司通过数字化排产、质量追溯和柔性供应链推进制造升级。' : 'Company E advances manufacturing upgrades through digital scheduling, quality traceability, and flexible supply chains.',
        content: language === 'zh' ? 'E公司从传统加工模式转向数字化制造，重点建设订单排产、质量追溯和库存协同系统。转型后，企业能更快响应小批量、多品类、短交期订单，也更适合跨境渠道的快速补货节奏。' : 'Company E is shifting from traditional processing to digital manufacturing, focusing on order scheduling, quality traceability, and inventory coordination. After transformation, it can respond faster to small-batch, multi-category, short-lead-time orders and better support cross-border replenishment cycles.',
      },
      {
        id: 18,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-tackle-booth-kYj5XNKvTJvp7xHuHJaaQA.webp',
        title: language === 'zh' ? '渔具配件企业F公司专业化发展' : 'Specialized Development of Fishing Gear Accessories Company F',
        date: '2026-04-24',
        summary: language === 'zh' ? 'F公司深耕鱼线、鱼钩与收纳配件，通过专业化产品线提升客户黏性。' : 'Company F focuses on lines, hooks, and storage accessories, improving customer retention through specialized product lines.',
        content: language === 'zh' ? 'F公司围绕渔具配件建立细分产品线，覆盖鱼线、鱼钩、连接件、收纳和户外辅助用品。配件企业的优势来自稳定品质、快速补货和组合销售能力，这也让其在采购商长期订单中具备更高黏性。' : 'Company F has built segmented accessory lines covering fishing lines, hooks, connectors, storage, and outdoor support products. Accessory suppliers win through stable quality, fast replenishment, and bundled selling capability, which gives them stronger retention in long-term buyer orders.',
      },
    ],
  };

  const tabArticles = activeTab === 'industry' ? articles.industry : activeTab === 'exhibition' ? articles.exhibition : articles.enterprise;

  useEffect(() => {
    if (!selectedArticle) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArticle(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="page-hero pt-36 pb-16 px-4">
        <div className="container mx-auto relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200 mb-4">Newsroom</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 py-8 border-b border-border bg-white/80 backdrop-blur">
        <div className="container mx-auto">
          <div className="inline-flex w-full flex-wrap gap-1 rounded-3xl border border-border bg-white p-1 shadow-sm sm:w-auto sm:rounded-full">
            {content.tabs.map((tab, idx) => {
              const tabKey = ['industry', 'exhibition', 'enterprise'][idx];
              return (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setActiveTab(tabKey)}
                  className={`flex-1 sm:flex-none px-5 py-3 font-bold text-sm md:text-base rounded-full transition-all ${
                    activeTab === tabKey
                      ? 'bg-primary text-white shadow-lg shadow-blue-900/15'
                      : 'text-muted-foreground hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-3">Latest</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{content.tabs[['industry', 'exhibition', 'enterprise'].indexOf(activeTab)]}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{language === 'zh' ? `共 ${tabArticles.length} 篇资讯` : `${tabArticles.length} articles`}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabArticles.map((article) => (
              <button
                type="button"
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className="elevated-card group overflow-hidden text-left"
              >
                <div className="h-48 bg-cover bg-center overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    width="384"
                    height="192"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                    <CalendarDays size={14} />
                    {article.date}
                  </p>
                  <h3 className="font-bold text-xl text-primary mb-3 line-clamp-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-foreground line-clamp-2 mb-5">{article.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-transform group-hover:translate-x-1">
                    {language === 'zh' ? '阅读全文' : 'Read more'}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-blue-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'zh' ? '文章详情' : 'Article details'}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-950/30 overscroll-contain"
            onClick={(event) => event.stopPropagation()}
          >
            {(() => {
              const article = tabArticles.find(a => a.id === selectedArticle);
              return article ? (
                <article>
                  <div className="relative h-56 overflow-hidden rounded-t-3xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      width="768"
                      height="224"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <button
                      type="button"
                      aria-label={language === 'zh' ? '关闭文章' : 'Close article'}
                      onClick={() => setSelectedArticle(null)}
                      className="absolute right-4 top-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                        <CalendarDays size={14} />
                        {article.date}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">{article.title}</h2>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{article.summary}</p>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">{article.content}</p>
                    </div>
                  </div>
                </article>
              ) : null;
            })()}
          </div>
        </div>
      )}

      <Footer language={language} />
    </div>
  );
}
