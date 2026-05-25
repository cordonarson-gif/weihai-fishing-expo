import { useState } from 'react';
import { X } from 'lucide-react';

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
  exhibitorCount: number;
  mainProducts: string[];
  mainProductsEn: string[];
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
    name: 'A馆 - 鱼竿展区',
    nameEn: 'Hall A - Fishing Rod Zone',
    x: 50,
    y: 100,
    width: 200,
    height: 150,
    exhibitorCount: 280,
    mainProducts: ['专业鱼竿', '竞技竿', '海竿', '配件'],
    mainProductsEn: ['Professional Rods', 'Competition Rods', 'Sea Rods', 'Accessories'],
    exhibitors: [
      { name: '鱼竿制造商A', nameEn: 'Rod Manufacturer A', products: '专业鱼竿系列', productsEn: 'Professional Rod Series' },
      { name: '竞技竿公司B', nameEn: 'Competition Rod Co. B', products: '竞技竿及配件', productsEn: 'Competition Rods & Accessories' },
      { name: '海竿专家C', nameEn: 'Sea Rod Expert C', products: '海竿系列产品', productsEn: 'Sea Rod Products' },
    ],
  },
  {
    id: 'zone-b',
    name: 'B馆 - 渔轮展区',
    nameEn: 'Hall B - Fishing Reel Zone',
    x: 320,
    y: 100,
    width: 200,
    height: 150,
    exhibitorCount: 250,
    mainProducts: ['高速轮', '纺车轮', '电动轮', '精密轮'],
    mainProductsEn: ['High-Speed Reels', 'Spinning Reels', 'Electric Reels', 'Precision Reels'],
    exhibitors: [
      { name: '渔轮制造商D', nameEn: 'Reel Manufacturer D', products: '高速渔轮系列', productsEn: 'High-Speed Reel Series' },
      { name: '纺车轮公司E', nameEn: 'Spinning Reel Co. E', products: '纺车轮产品', productsEn: 'Spinning Reel Products' },
      { name: '电动轮专家F', nameEn: 'Electric Reel Expert F', products: '电动渔轮系列', productsEn: 'Electric Reel Series' },
    ],
  },
  {
    id: 'zone-c',
    name: 'C馆 - 配件与电商展区',
    nameEn: 'Hall C - Accessories & E-commerce Zone',
    x: 185,
    y: 300,
    width: 200,
    height: 150,
    exhibitorCount: 220,
    mainProducts: ['鱼线', '鱼钩', '钓鱼包', '饵料'],
    mainProductsEn: ['Fishing Lines', 'Hooks', 'Fishing Bags', 'Baits'],
    exhibitors: [
      { name: '配件供应商G', nameEn: 'Accessory Supplier G', products: '鱼线及鱼钩', productsEn: 'Lines & Hooks' },
      { name: '钓鱼包制造商H', nameEn: 'Fishing Bag Maker H', products: '专业钓鱼包', productsEn: 'Professional Fishing Bags' },
      { name: '电商平台I', nameEn: 'E-commerce Platform I', products: '跨境电商服务', productsEn: 'Cross-border E-commerce' },
    ],
  },
];

export default function ExhibitionMap({ language }: ExhibitionMapProps) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const content = language === 'zh' ? {
    title: '交互式展馆平面图',
    instruction: '点击下方展区了解详情',
    exhibitors: '主要展商',
    mainProducts: '主要产品',
    exhibitorCount: '展商数量',
  } : {
    title: 'Interactive Exhibition Hall Map',
    instruction: 'Click on the zones below to view details',
    exhibitors: 'Main Exhibitors',
    mainProducts: 'Main Products',
    exhibitorCount: 'Number of Exhibitors',
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-4 text-primary">{content.title}</h3>
      <p className="text-muted mb-6">{content.instruction}</p>

      {/* Exhibition Hall Map SVG */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 mb-8 border border-border">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-auto"
          style={{ maxHeight: '500px' }}
        >
          {/* Background */}
          <rect width="600" height="500" fill="#f9fafb" />

          {/* Title */}
          <text x="300" y="30" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#005792">
            {language === 'zh' ? '威海国际博览中心' : 'Weihai Convention Center'}
          </text>

          {/* Zones */}
          {zones.map((zone) => (
            <g key={zone.id}>
              {/* Zone Rectangle */}
              <rect
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                fill="#e8f0f7"
                stroke="#005792"
                strokeWidth="2"
                rx="8"
                style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.setAttribute('fill', '#d0e3f0');
                  e.currentTarget.setAttribute('stroke-width', '3');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.setAttribute('fill', '#e8f0f7');
                  e.currentTarget.setAttribute('stroke-width', '2');
                }}
                onClick={() => setSelectedZone(zone)}
              />

              {/* Zone Label */}
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height / 2 - 10}
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                fill="#005792"
                style={{ pointerEvents: 'none' }}
              >
                {language === 'zh' ? zone.name.split(' - ')[0] : zone.nameEn.split(' - ')[0]}
              </text>

              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height / 2 + 15}
                fontSize="12"
                textAnchor="middle"
                fill="#86909C"
                style={{ pointerEvents: 'none' }}
              >
                {language === 'zh' ? zone.name.split(' - ')[1] : zone.nameEn.split(' - ')[1]}
              </text>

              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height - 10}
                fontSize="11"
                textAnchor="middle"
                fill="#FF7D00"
                style={{ pointerEvents: 'none' }}
              >
                {zone.exhibitorCount}+ {language === 'zh' ? '展商' : 'Exhibitors'}
              </text>
            </g>
          ))}

          {/* Legend */}
          <text x="20" y="480" fontSize="12" fill="#86909C">
            {language === 'zh' ? '点击展区查看详细信息' : 'Click zones for details'}
          </text>
        </svg>
      </div>

      {/* Zone Details Panel */}
      {selectedZone && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-blue-900 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{language === 'zh' ? selectedZone.name : selectedZone.nameEn}</h2>
              </div>
              <button
                onClick={() => setSelectedZone(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted mb-1">{content.exhibitorCount}</p>
                  <p className="text-3xl font-bold text-primary">{selectedZone.exhibitorCount}+</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted mb-1">{content.mainProducts}</p>
                  <p className="text-lg font-bold text-accent">{selectedZone.mainProducts.length} {language === 'zh' ? '类' : 'Types'}</p>
                </div>
              </div>

              {/* Main Products */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">{content.mainProducts}</h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'zh' ? selectedZone.mainProducts : selectedZone.mainProductsEn).map((product, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Exhibitors */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">{content.exhibitors}</h3>
                <div className="space-y-3">
                  {selectedZone.exhibitors.map((exhibitor, idx) => (
                    <div
                      key={idx}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-foreground mb-1">
                        {language === 'zh' ? exhibitor.name : exhibitor.nameEn}
                      </h4>
                      <p className="text-sm text-muted">
                        {language === 'zh' ? exhibitor.products : exhibitor.productsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-foreground">
                  {language === 'zh'
                    ? '此展区汇聚了行业内最优质的展商，提供专业的产品展示和商务对接服务。'
                    : 'This zone brings together the industry\'s leading exhibitors, offering professional product displays and business matching services.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
