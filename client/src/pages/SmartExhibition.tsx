import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';

export default function SmartExhibition() {
  const [language, setLanguage] = useState('zh');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  const content = language === 'zh' ? {
    title: '智慧展厅',
    panorama: '720° 全景展厅',
    products: '展品查询',
    matching: '精准商务配对服务',
    categories: [
      { label: '全部', value: 'all' },
      { label: '鱼竿', value: 'fishing-rod' },
      { label: '渔轮', value: 'fishing-reel' },
      { label: '配件', value: 'accessories' },
    ],
    matchingDesc: '我们采用人工每日整理匹配模式，采购商发布采购需求，展商发布供应信息，组委会专人每日整理后推送给双方，确保对接精准高效。可在此页面先筛选品类、搜索企业并了解展区热点。',
  } : {
    title: 'Smart Exhibition',
    panorama: '360° Panoramic Exhibition Hall',
    products: 'Product Search',
    matching: 'Precise Business Matching Service',
    categories: [
      { label: 'All', value: 'all' },
      { label: 'Fishing Rod', value: 'fishing-rod' },
      { label: 'Fishing Reel', value: 'fishing-reel' },
      { label: 'Accessories', value: 'accessories' },
    ],
    matchingDesc: 'We use daily manual matching. Buyers post purchasing needs, exhibitors post supply information, and our team matches and pushes to both parties daily for precise and efficient connections. Use this page to filter categories, search exhibitors, and review hall hotspots before the show.',
  };

  // Sample products
  const products = [
    { id: 1, name: language === 'zh' ? '专业鱼竿' : 'Professional Fishing Rod', company: language === 'zh' ? '威海海威钓具' : 'Weihai Haiwei Tackle', category: 'fishing-rod', image: '/generated-products/professional-rod.jpg' },
    { id: 2, name: language === 'zh' ? '高速渔轮' : 'High-Speed Reel', company: language === 'zh' ? '荣成精工渔轮' : 'Rongcheng Precision Reel', category: 'fishing-reel', image: '/generated-products/high-speed-reel.jpg' },
    { id: 3, name: language === 'zh' ? '鱼线配件' : 'Fishing Line', company: language === 'zh' ? '环翠线组科技' : 'Huancui Line Tech', category: 'accessories', image: '/generated-products/fishing-line.jpg' },
    { id: 4, name: language === 'zh' ? '碳素鱼竿' : 'Carbon Fishing Rod', company: language === 'zh' ? '威海碳素钓具' : 'Weihai Carbon Tackle', category: 'fishing-rod', image: '/generated-products/carbon-rod.jpg' },
    { id: 5, name: language === 'zh' ? '电动渔轮' : 'Electric Reel', company: language === 'zh' ? '蓝海智能渔轮' : 'Blue Ocean Smart Reel', category: 'fishing-reel', image: '/generated-products/electric-reel.jpg' },
    { id: 6, name: language === 'zh' ? '钓鱼包' : 'Fishing Bag', company: language === 'zh' ? '海岸户外装备' : 'Coast Outdoor Gear', category: 'accessories', image: '/generated-products/fishing-bag.jpg' },
    { id: 7, name: language === 'zh' ? '竞技鱼竿' : 'Competition Rod', company: language === 'zh' ? '冠军竞技钓具' : 'Champion Tackle', category: 'fishing-rod', image: '/generated-products/competition-rod.jpg' },
    { id: 8, name: language === 'zh' ? '精密渔轮' : 'Precision Reel', company: language === 'zh' ? '远洋精密制造' : 'Ocean Precision Works', category: 'fishing-reel', image: '/generated-products/precision-reel.jpg' },
    { id: 9, name: language === 'zh' ? '鱼钩套装' : 'Hook Set', company: language === 'zh' ? '金钩配件' : 'Gold Hook Accessories', category: 'accessories', image: '/generated-products/hook-set.jpg' },
    { id: 10, name: language === 'zh' ? '海竿' : 'Sea Rod', company: language === 'zh' ? '深蓝海钓装备' : 'Deep Blue Sea Fishing', category: 'fishing-rod', image: '/generated-products/sea-rod.jpg' },
    { id: 11, name: language === 'zh' ? '纺车轮' : 'Spinning Reel', company: language === 'zh' ? '海星渔轮制造' : 'Starfish Reel Manufacturing', category: 'fishing-reel', image: '/generated-products/spinning-reel.jpg' },
    { id: 12, name: language === 'zh' ? '鱼饵' : 'Fish Bait', company: language === 'zh' ? '诱渔生物科技' : 'Lure Bio-Tech', category: 'accessories', image: '/generated-products/fish-bait.jpg' },
  ];

  // Hotspot data
  const hotspots = [
    { id: 1, position: 'left-[25%] top-[35%]', company: language === 'zh' ? '鱼竿展区' : 'Fishing Rod Zone', products: language === 'zh' ? '专业鱼竿、竞技竿、海竿' : 'Professional rods, competition rods, sea rods' },
    { id: 2, position: 'left-[75%] top-[40%]', company: language === 'zh' ? '渔轮展区' : 'Fishing Reel Zone', products: language === 'zh' ? '高速轮、纺车轮、电动轮' : 'High-speed reels, spinning reels, electric reels' },
    { id: 3, position: 'left-1/2 top-[70%]', company: language === 'zh' ? '配件展区' : 'Accessories Zone', products: language === 'zh' ? '鱼线、鱼钩、钓鱼包' : 'Lines, hooks, fishing bags' },
  ];

  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const searchMatch = !normalizedQuery ||
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.company.toLowerCase().includes(normalizedQuery);

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="page-hero pt-36 pb-16 px-4">
        <div className="container mx-auto relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200 mb-4">Smart Exhibition</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
        </div>
      </section>

      {/* Panorama Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-3">Panorama</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{content.panorama}</h2>
          </div>

          {/* Panorama Image with Hotspots */}
          <div className="relative w-full h-96 md:h-[560px] rounded-3xl overflow-hidden mb-8 cursor-pointer shadow-2xl shadow-blue-900/10 border border-white group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp"
              alt="Panoramic Exhibition Hall"
              loading="lazy"
              decoding="async"
              width="1280"
              height="560"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/55 via-transparent to-blue-950/10"></div>

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <button
                type="button"
                aria-label={language === 'zh' ? `查看${hotspot.company}` : `View ${hotspot.company}`}
                key={hotspot.id}
                onClick={() => setSelectedHotspot(selectedHotspot === hotspot.id ? null : hotspot.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full border-2 border-white hover:scale-110 transition-transform shadow-lg shadow-orange-500/30 after:absolute after:inset-[-8px] after:rounded-full after:border after:border-white/60 after:animate-ping ${hotspot.position}`}
              >
                <span className="relative z-10 w-full h-full flex items-center justify-center text-white text-xs font-bold">
                  {hotspot.id}
                </span>
              </button>
            ))}
          </div>

          {/* Hotspot Info */}
          {selectedHotspot ? (
            <div className="section-shell p-6 mb-8 animate-fade-in border-l-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-2">
                {hotspots.find(h => h.id === selectedHotspot)?.company}
              </h3>
              <p className="text-foreground">
                {hotspots.find(h => h.id === selectedHotspot)?.products}
              </p>
            </div>
          ) : (
            <div className="section-shell p-5 mb-8 text-sm text-muted-foreground">
              {language === 'zh' ? '点击全景图中的编号热点，快速了解对应展区与重点品类。' : 'Click a numbered hotspot in the panorama to preview each zone and its key categories.'}
            </div>
          )}
        </div>
      </section>

      {/* Product Search Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-3">Catalogue</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{content.products}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{language === 'zh' ? `共 ${filteredProducts.length} 件展品` : `${filteredProducts.length} products found`}</p>
          </div>

          {/* Search and Filter */}
          <div className="section-shell p-5 md:p-6 mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                aria-label={language === 'zh' ? '搜索展品' : 'Search products'}
                placeholder={language === 'zh' ? '搜索展品、公司名称' : 'Search products or companies'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {content.categories.map((cat) => (
                  <button
                    type="button"
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-primary text-white shadow-lg shadow-blue-900/15'
                        : 'bg-white text-primary border border-border hover:bg-blue-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  {language === 'zh' ? '重置筛选' : 'Reset filters'}
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="elevated-card overflow-hidden group"
                >
                  <div className="w-full h-44 bg-cover bg-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      width="320"
                      height="176"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.company}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="section-shell col-span-full p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-2">{language === 'zh' ? '暂无匹配展品' : 'No matching products'}</h3>
                <p className="text-muted-foreground">{language === 'zh' ? '请尝试更换关键词或选择其他品类。' : 'Try another keyword or category.'}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Business Matching Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/80">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent mb-3">Matching</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{content.matching}</h2>
          </div>

          {/* Exhibition Booth Image */}
          <div className="w-full h-64 md:h-80 rounded-3xl mb-12 overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp"
              alt="Business Matching Conference"
              loading="lazy"
              decoding="async"
              width="1280"
              height="320"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Matching Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Buyer Needs */}
            <div className="elevated-card p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">{language === 'zh' ? '采购需求' : 'Buyer Needs'}</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-blue-50/70 p-4 rounded-2xl border border-border hover:bg-blue-50 transition-colors">
                    <p className="font-medium text-foreground">
                      {language === 'zh'
                        ? ['采购轻量化碳素路亚竿', '寻找中高端纺车轮供应商', '采购环保鱼线与鱼钩套装'][idx - 1]
                        : ['Sourcing lightweight carbon lure rods', 'Seeking mid-to-high-end spinning reel suppliers', 'Buying eco-friendly lines and hook sets'][idx - 1]}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'zh' ? '已进入每日人工匹配池' : 'Added to daily manual matching pool'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Info */}
            <div className="elevated-card p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">{language === 'zh' ? '供应信息' : 'Supply Information'}</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-orange-50/80 p-4 rounded-2xl border border-orange-100 hover:bg-orange-50 transition-colors">
                    <p className="font-medium text-foreground">
                      {language === 'zh'
                        ? ['碳素材鱼竿 OEM/ODM 供给', '高速渔轮新品与配件', '钓鱼包与户外收纳系列'][idx - 1]
                        : ['Carbon rod OEM/ODM supply', 'High-speed reel launches and parts', 'Fishing bags and outdoor storage series'][idx - 1]}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'zh' ? '可对接采购商询盘' : 'Ready for buyer inquiries'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Matching Description */}
          <div className="brand-gradient text-white p-8 rounded-3xl shadow-2xl shadow-blue-900/20">
            <p className="text-lg leading-relaxed">{content.matchingDesc}</p>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
