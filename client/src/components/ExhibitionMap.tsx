import { useState } from 'react';
import { X, MapPin, Users, Package } from 'lucide-react';

interface ExhibitionMapProps {
  language: string;
}

interface Zone {
  id: string;
  name: string;
  nameEn: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  exhibitorCount: number;
  mainProducts: string[];
  mainProductsEn: string[];
  description: string;
  descriptionEn: string;
  exhibitors: Array<{
    name: string;
    nameEn: string;
    products: string;
    productsEn: string;
  }>;
}

const zones: Zone[] = [
  {
    id: 'zone-a',
    name: 'A馆',
    nameEn: 'Hall A',
    x: 80,
    y: 80,
    width: 140,
    height: 120,
    color: '#0066CC',
    exhibitorCount: 280,
    mainProducts: ['专业鱼竿', '竞技竿', '海竿'],
    mainProductsEn: ['Professional Rods', 'Competition Rods', 'Sea Rods'],
    description: '鱼竿展区 - 汇聚全球顶级鱼竿制造商',
    descriptionEn: 'Fishing Rod Zone - Leading rod manufacturers worldwide',
    exhibitors: [
      { name: '鱼竿制造商A', nameEn: 'Rod Manufacturer A', products: '专业鱼竿系列', productsEn: 'Professional Rod Series' },
      { name: '竞技竿公司B', nameEn: 'Competition Rod Co. B', products: '竞技竿及配件', productsEn: 'Competition Rods & Accessories' },
      { name: '海竿专家C', nameEn: 'Sea Rod Expert C', products: '海竿系列产品', productsEn: 'Sea Rod Products' },
    ],
  },
  {
    id: 'zone-b',
    name: 'B馆',
    nameEn: 'Hall B',
    x: 280,
    y: 80,
    width: 140,
    height: 120,
    color: '#FF7D00',
    exhibitorCount: 250,
    mainProducts: ['高速轮', '纺车轮', '电动轮'],
    mainProductsEn: ['High-Speed Reels', 'Spinning Reels', 'Electric Reels'],
    description: '渔轮展区 - 专业渔轮及配件集中地',
    descriptionEn: 'Fishing Reel Zone - Professional reel products hub',
    exhibitors: [
      { name: '渔轮制造商D', nameEn: 'Reel Manufacturer D', products: '高速渔轮系列', productsEn: 'High-Speed Reel Series' },
      { name: '纺车轮公司E', nameEn: 'Spinning Reel Co. E', products: '纺车轮产品', productsEn: 'Spinning Reel Products' },
      { name: '电动轮专家F', nameEn: 'Electric Reel Expert F', products: '电动渔轮系列', productsEn: 'Electric Reel Series' },
    ],
  },
  {
    id: 'zone-c',
    name: 'C馆',
    nameEn: 'Hall C',
    x: 180,
    y: 250,
    width: 140,
    height: 120,
    color: '#00AA66',
    exhibitorCount: 220,
    mainProducts: ['鱼线', '鱼钩', '钓鱼包'],
    mainProductsEn: ['Fishing Lines', 'Hooks', 'Fishing Bags'],
    description: '配件展区 - 渔具配件及电商平台',
    descriptionEn: 'Accessories Zone - Tackle accessories & e-commerce',
    exhibitors: [
      { name: '配件供应商G', nameEn: 'Accessory Supplier G', products: '鱼线及鱼钩', productsEn: 'Lines & Hooks' },
      { name: '钓鱼包制造商H', nameEn: 'Fishing Bag Maker H', products: '专业钓鱼包', productsEn: 'Professional Fishing Bags' },
      { name: '电商平台I', nameEn: 'E-commerce Platform I', products: '跨境电商服务', productsEn: 'Cross-border E-commerce' },
    ],
  },
];

export default function ExhibitionMap({ language }: ExhibitionMapProps) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const content = language === 'zh' ? {
    title: '交互式展馆平面图',
    subtitle: '点击展区了解详细信息',
    exhibitors: '主要展商',
    mainProducts: '主要产品',
    exhibitorCount: '展商数量',
    location: '位置',
    description: '展区介绍',
  } : {
    title: 'Interactive Exhibition Hall Map',
    subtitle: 'Click on halls to view details',
    exhibitors: 'Main Exhibitors',
    mainProducts: 'Main Products',
    exhibitorCount: 'Number of Exhibitors',
    location: 'Location',
    description: 'Hall Description',
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-2 text-primary">{content.title}</h3>
        <p className="text-muted text-lg">{content.subtitle}</p>
      </div>

      {/* Exhibition Hall Map */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 mb-8 border border-border shadow-lg">
        <svg
          viewBox="0 0 500 450"
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        >
          {/* Background */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="500" height="450" fill="url(#bgGradient)" />

          {/* Title */}
          <text x="250" y="35" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#005792">
            {language === 'zh' ? '威海国际博览中心' : 'Weihai Convention Center'}
          </text>

          {/* Floor indicator */}
          <text x="250" y="55" fontSize="12" textAnchor="middle" fill="#86909C">
            {language === 'zh' ? '一楼展馆分布' : 'Ground Floor Layout'}
          </text>

          {/* Zones */}
          {zones.map((zone) => (
            <g key={zone.id}>
              {/* Zone Rectangle with shadow effect */}
              <filter id={`shadow-${zone.id}`}>
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
              </filter>

              <rect
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                fill={hoveredZone === zone.id ? zone.color : `${zone.color}20`}
                stroke={zone.color}
                strokeWidth={hoveredZone === zone.id ? '3' : '2'}
                rx="12"
                filter={`url(#shadow-${zone.id})`}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => setSelectedZone(zone)}
              />

              {/* Zone Label - Hall Name */}
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + 35}
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill={hoveredZone === zone.id ? '#ffffff' : zone.color}
                style={{ pointerEvents: 'none', transition: 'all 0.3s ease' }}
              >
                {zone.name}
              </text>

              {/* Zone Description */}
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + 60}
                fontSize="11"
                textAnchor="middle"
                fill={hoveredZone === zone.id ? '#ffffff' : '#86909C'}
                style={{ pointerEvents: 'none', transition: 'all 0.3s ease' }}
              >
                {language === 'zh' ? zone.description.split(' - ')[1] : zone.descriptionEn.split(' - ')[1]}
              </text>

              {/* Exhibitor Count Badge */}
              <circle
                cx={zone.x + zone.width - 15}
                cy={zone.y + 15}
                r="12"
                fill={zone.color}
                opacity={hoveredZone === zone.id ? 1 : 0.8}
              />
              <text
                x={zone.x + zone.width - 15}
                y={zone.y + 20}
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
                fill="#ffffff"
                style={{ pointerEvents: 'none' }}
              >
                {Math.floor(zone.exhibitorCount / 50)}+
              </text>

              {/* Hover indicator */}
              {hoveredZone === zone.id && (
                <text
                  x={zone.x + zone.width / 2}
                  y={zone.y + zone.height - 8}
                  fontSize="10"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontStyle="italic"
                  style={{ pointerEvents: 'none' }}
                >
                  {language === 'zh' ? '点击查看详情' : 'Click for details'}
                </text>
              )}
            </g>
          ))}

          {/* Legend */}
          <g>
            <rect x="20" y="400" width="460" height="35" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="6" />
            <text x="30" y="420" fontSize="11" fill="#86909C">
              {language === 'zh' ? '💡 提示：鼠标悬停查看展区信息，点击查看详细展商列表' : '💡 Tip: Hover to preview, click for full exhibitor list'}
            </text>
          </g>
        </svg>
      </div>

      {/* Zone Details Modal */}
      {selectedZone && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95">
            {/* Header */}
            <div
              className="sticky top-0 text-white p-8 flex items-start justify-between"
              style={{ backgroundColor: selectedZone.color }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h2 className="text-3xl font-bold">
                    {language === 'zh' ? selectedZone.name : selectedZone.nameEn}
                  </h2>
                </div>
                <p className="text-white/90 text-lg">
                  {language === 'zh' ? selectedZone.description : selectedZone.descriptionEn}
                </p>
              </div>
              <button
                onClick={() => setSelectedZone(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-primary" />
                    <p className="text-sm text-muted font-medium">{content.exhibitorCount}</p>
                  </div>
                  <p className="text-4xl font-bold text-primary">{selectedZone.exhibitorCount}+</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Package size={20} className="text-accent" />
                    <p className="text-sm text-muted font-medium">{content.mainProducts}</p>
                  </div>
                  <p className="text-4xl font-bold text-accent">{selectedZone.mainProducts.length}</p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-green-600" />
                    <p className="text-sm text-muted font-medium">{content.location}</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    {language === 'zh' ? selectedZone.name : selectedZone.nameEn}
                  </p>
                </div>
              </div>

              {/* Main Products */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package size={20} className="text-primary" />
                  {content.mainProducts}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(language === 'zh' ? selectedZone.mainProducts : selectedZone.mainProductsEn).map(
                    (product, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-primary rounded-full text-sm font-semibold border border-blue-200 hover:shadow-md transition-shadow"
                      >
                        {product}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Main Exhibitors */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  {content.exhibitors}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedZone.exhibitors.map((exhibitor, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-border rounded-xl p-5 hover:shadow-lg hover:border-primary transition-all"
                    >
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        {language === 'zh' ? exhibitor.name : exhibitor.nameEn}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {language === 'zh' ? exhibitor.products : exhibitor.productsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-foreground leading-relaxed">
                  {language === 'zh'
                    ? '此展区汇聚了行业内最优质的展商，提供专业的产品展示、商务对接和采购服务。欢迎展商和采购商前来洽谈合作！'
                    : 'This zone brings together the industry\'s leading exhibitors, offering professional product displays, business matching, and procurement services. Welcome exhibitors and buyers to explore cooperation opportunities!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
