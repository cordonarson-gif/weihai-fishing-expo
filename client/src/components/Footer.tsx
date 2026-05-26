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
  } : {
    contact: 'Contact',
    address: 'Address: Weihai International Convention Center',
    phone: 'Phone: +86-631-5225555',
    email: 'Email: info@weihaifishing.com',
    qrcode: 'Official WeChat',
    copyright: '© 2026 Weihai International Fishing Gear Exhibition. All rights reserved.',
  };

  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{content.contact}</h3>
            <div className="space-y-2 text-sm text-blue-100">
              <p>{content.address}</p>
              <p>{content.phone}</p>
              <p>{content.email}</p>
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-bold mb-4">{content.qrcode}</h3>
            <div className="w-24 h-24 bg-white rounded-lg p-1 flex items-center justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537547174/SfzzuD4bAUANatVB4Tmxwq/wechat-qrcode-official-mK7pQsRvWx4zH2yN6vC5Dp.webp" 
                alt="Official WeChat QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <p className="text-center text-sm text-blue-100">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
