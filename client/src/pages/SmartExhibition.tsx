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
    categories: ['全部', '鱼竿', '渔轮', '配件'],
    matchingDesc: '我们采用人工每日整理匹配模式，采购商发布采购需求，展商发布供应信息，组委会专人每日整理后推送给双方，确保对接精准高效。',
  } : {
    title: 'Smart Exhibition',
    panorama: '360° Panoramic Exhibition Hall',
    products: 'Product Search',
    matching: 'Precise Business Matching Service',
    categories: ['All', 'Fishing Rod', 'Fishing Reel', 'Accessories'],
    matchingDesc: 'We use daily manual matching. Buyers post purchasing needs, exhibitors post supply information, and our team matches and pushes to both parties daily for precise and efficient connections.',
  };

  // Sample products
  const products = [
    { id: 1, name: language === 'zh' ? '专业鱼竿' : 'Professional Fishing Rod', company: 'Company A', category: 'fishing-rod', image: 'https://picsum.photos/300/200?random=1' },
    { id: 2, name: language === 'zh' ? '高速渔轮' : 'High-Speed Reel', company: 'Company B', category: 'fishing-reel', image: 'https://picsum.photos/300/200?random=2' },
    { id: 3, name: language === 'zh' ? '鱼线配件' : 'Fishing Line', company: 'Company C', category: 'accessories', image: 'https://picsum.photos/300/200?random=3' },
    { id: 4, name: language === 'zh' ? '碳素鱼竿' : 'Carbon Fishing Rod', company: 'Company D', category: 'fishing-rod', image: 'https://picsum.photos/300/200?random=4' },
    { id: 5, name: language === 'zh' ? '电动渔轮' : 'Electric Reel', company: 'Company E', category: 'fishing-reel', image: 'https://picsum.photos/300/200?random=5' },
    { id: 6, name: language === 'zh' ? '钓鱼包' : 'Fishing Bag', company: 'Company F', category: 'accessories', image: 'https://picsum.photos/300/200?random=6' },
    { id: 7, name: language === 'zh' ? '竞技鱼竿' : 'Competition Rod', company: 'Company G', category: 'fishing-rod', image: 'https://picsum.photos/300/200?random=7' },
    { id: 8, name: language === 'zh' ? '精密渔轮' : 'Precision Reel', company: 'Company H', category: 'fishing-reel', image: 'https://picsum.photos/300/200?random=8' },
    { id: 9, name: language === 'zh' ? '鱼钩套装' : 'Hook Set', company: 'Company I', category: 'accessories', image: 'https://picsum.photos/300/200?random=9' },
    { id: 10, name: language === 'zh' ? '海竿' : 'Sea Rod', company: 'Company J', category: 'fishing-rod', image: 'https://picsum.photos/300/200?random=10' },
    { id: 11, name: language === 'zh' ? '纺车轮' : 'Spinning Reel', company: 'Company K', category: 'fishing-reel', image: 'https://picsum.photos/300/200?random=11' },
    { id: 12, name: language === 'zh' ? '鱼饵' : 'Fish Bait', company: 'Company L', category: 'accessories', image: 'https://picsum.photos/300/200?random=12' },
  ];

  // Hotspot data
  const hotspots = [
    { id: 1, x: 25, y: 35, company: language === 'zh' ? '鱼竿展区' : 'Fishing Rod Zone', products: language === 'zh' ? '专业鱼竿、竞技竿、海竿' : 'Professional rods, competition rods, sea rods' },
    { id: 2, x: 75, y: 40, company: language === 'zh' ? '渔轮展区' : 'Fishing Reel Zone', products: language === 'zh' ? '高速轮、纺车轮、电动轮' : 'High-speed reels, spinning reels, electric reels' },
    { id: 3, x: 50, y: 70, company: language === 'zh' ? '配件展区' : 'Accessories Zone', products: language === 'zh' ? '鱼线、鱼钩、钓鱼包' : 'Lines, hooks, fishing bags' },
  ];

  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategory === 'all' || 
      (selectedCategory === '鱼竿' && p.category === 'fishing-rod') ||
      (selectedCategory === '渔轮' && p.category === 'fishing-reel') ||
      (selectedCategory === '配件' && p.category === 'accessories') ||
      (selectedCategory === 'Fishing Rod' && p.category === 'fishing-rod') ||
      (selectedCategory === 'Fishing Reel' && p.category === 'fishing-reel') ||
      (selectedCategory === 'Accessories' && p.category === 'accessories') ||
      (selectedCategory === 'All');
    
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </div>
      </section>

      {/* Panorama Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">{content.panorama}</h2>
          
          {/* Panorama Image with Hotspots */}
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-8 cursor-pointer shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/fishing-exhibition-crowd-k9nZmr7KEEutsgnWKR97LP.webp" 
              alt="Panoramic Exhibition Hall"
              className="w-full h-full object-cover"
            />
            
            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => setSelectedHotspot(selectedHotspot === hotspot.id ? null : hotspot.id)}
                className="absolute w-8 h-8 bg-accent rounded-full border-2 border-white hover:scale-110 transition-transform shadow-lg"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                  {hotspot.id}
                </div>
              </button>
            ))}
          </div>

          {/* Hotspot Info */}
          {selectedHotspot && (
            <div className="bg-blue-50 border-l-4 border-accent p-6 rounded-lg mb-8 animate-fade-in">
              <h3 className="text-xl font-bold text-primary mb-2">
                {hotspots.find(h => h.id === selectedHotspot)?.company}
              </h3>
              <p className="text-foreground">
                {hotspots.find(h => h.id === selectedHotspot)?.products}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Search Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">{content.products}</h2>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input
                type="text"
                placeholder={language === 'zh' ? '搜索展品...' : 'Search products...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {content.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-primary hover:bg-blue-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-40 bg-cover bg-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted">{product.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Matching Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">{content.matching}</h2>

          {/* Exhibition Booth Image */}
          <div className="w-full h-64 md:h-80 rounded-lg mb-12 overflow-hidden shadow-lg">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/business-matching-conference-nL8qTuSwXy5aI3zO7wD6Eq.webp" 
              alt="Business Matching Conference"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Matching Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Buyer Needs */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">{language === 'zh' ? '采购需求' : 'Buyer Needs'}</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-border hover:shadow-md transition-shadow">
                    <p className="font-medium text-foreground">
                      {language === 'zh' ? `采购需求 ${idx}` : `Purchasing Need ${idx}`}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {language === 'zh' ? '寻求优质渔具供应商' : 'Seeking quality fishing gear suppliers'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Info */}
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">{language === 'zh' ? '供应信息' : 'Supply Information'}</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-border hover:shadow-md transition-shadow">
                    <p className="font-medium text-foreground">
                      {language === 'zh' ? `供应信息 ${idx}` : `Supply Info ${idx}`}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {language === 'zh' ? '提供专业渔具产品' : 'Providing professional fishing gear products'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Matching Description */}
          <div className="bg-gradient-to-r from-primary to-blue-900 text-white p-8 rounded-lg">
            <p className="text-lg leading-relaxed">{content.matchingDesc}</p>
          </div>
        </div>
      </section>

      <Footer language={language} />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
