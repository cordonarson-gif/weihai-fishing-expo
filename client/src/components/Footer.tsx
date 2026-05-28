import { Link } from 'wouter';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const content = language === 'zh' ? {
    contact: '联系方式',
    address: '地址：威海国际博览中心',
    phone: '电话：0631-5225555',
    email: '邮箱：info@weihaifishing.com',
    qrcode: '官方微信',
    copyright: '© 2026 威海国际渔具博览会 版权所有',
    nav: [
      { label: '展会概况', href: '/overview' },
      { label: '参展观展', href: '/exhibit' },
      { label: '智慧展厅', href: '/smart-exhibition' },
      { label: '产业资讯', href: '/news' },
    ],
    date: '2026.10.17-19',
    slogan: '连接全球渔具产业，打造永不落幕的专业展会',
  } : {
    contact: 'Contact',
    address: 'Address: Weihai International Convention Center',
    phone: 'Phone: +86-631-5225555',
    email: 'Email: info@weihaifishing.com',
    qrcode: 'Official WeChat',
    copyright: '© 2026 Weihai International Fishing Gear Exhibition. All rights reserved.',
    nav: [
      { label: 'Overview', href: '/overview' },
      { label: 'Exhibit', href: '/exhibit' },
      { label: 'Smart Exhibition', href: '/smart-exhibition' },
      { label: 'News', href: '/news' },
    ],
    date: 'Oct 17-19, 2026',
    slogan: 'Connecting the global fishing gear industry with an evergreen professional exhibition',
  };

  return (
    <footer id="contact" className="relative mt-20 overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,125,0,0.18),transparent_18rem)]"></div>
      <div className="container mx-auto px-4 py-14 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_0.8fr] gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{content.contact}</h3>
            <p className="text-blue-100 max-w-md mb-6">{content.slogan}</p>
            <div className="space-y-2 text-sm text-blue-100">
              <p>{content.address}</p>
              <p>{content.phone}</p>
              <p>{content.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'zh' ? '快速导航' : 'Quick Links'}</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-100 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <h3 className="text-xl font-bold mb-4">{content.qrcode}</h3>
            <div className="w-28 h-28 rounded-2xl bg-white p-2 flex items-center justify-center shadow-2xl shadow-blue-950/20">
              <img
                src="/mock-wechat-qr.png"
                alt={language === 'zh' ? '官方微信二维码占位图' : 'Official WeChat QR placeholder'}
                loading="lazy"
                decoding="async"
                width="112"
                height="112"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-blue-100">{content.date}</p>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6">
          <p className="text-center text-sm text-blue-100">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
