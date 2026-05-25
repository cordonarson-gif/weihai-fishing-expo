import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = language === 'zh' ? [
    { label: '展会概况', href: '/overview' },
    { label: '参展观展', href: '/exhibit' },
    { label: '智慧展厅', href: '/smart-exhibition', highlight: true },
    { label: '产业资讯', href: '/news' },
    { label: '联系我们', href: '#contact' },
  ] : [
    { label: 'Overview', href: '/overview' },
    { label: 'Exhibit', href: '/exhibit' },
    { label: 'Smart Exhibition', href: '/smart-exhibition', highlight: true },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-sm">
            渔
          </div>
          <span className="hidden sm:inline">威海国际渔具博览会</span>
          <span className="sm:hidden">威海渔博会</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                item.highlight
                  ? 'bg-accent text-white hover:bg-orange-600'
                  : isActive(item.href)
                  ? 'text-primary bg-blue-50'
                  : 'text-foreground hover:text-primary hover:bg-gray-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onLanguageChange(language === 'zh' ? 'en' : 'zh')}
            className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100 transition-colors"
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                  item.highlight
                    ? 'bg-accent text-white'
                    : isActive(item.href)
                    ? 'text-primary bg-blue-50'
                    : 'text-foreground hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
