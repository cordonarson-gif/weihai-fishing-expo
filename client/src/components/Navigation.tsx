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

  const isActive = (href: string) => location === `${import.meta.env.BASE_URL.replace(/\/$/, '')}${href}` || location === href;

  const withBasePath = (href: string) => {
    if (href.startsWith('#')) return href;
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${basePath}${href}` || '/';
  };

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      const contact = document.getElementById('contact');
      contact?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label={language === 'zh' ? '主导航' : 'Main navigation'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,57,104,0.12)] border-b border-white/70'
          : 'bg-white/70 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href={withBasePath('/')} className="group flex items-center gap-3 font-bold text-primary">
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-blue-700 to-accent rounded-2xl flex items-center justify-center text-white text-base shadow-lg shadow-blue-900/20 transition-transform group-hover:scale-105">
            渔
          </div>
          <div className="leading-tight">
            <span className="hidden sm:block text-base md:text-lg tracking-tight">威海国际渔具博览会</span>
            <span className="sm:hidden text-base">威海渔博会</span>
            <span className="hidden md:block text-[11px] font-medium text-muted">Asia Leading Fishing Gear Expo</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-white/70 p-1 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={withBasePath(item.href)}
              onClick={() => handleNavClick(item.href)}
              className={`relative px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                item.highlight
                  ? 'bg-gradient-to-r from-accent to-orange-500 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30'
                  : isActive(item.href)
                  ? 'text-primary bg-blue-50 shadow-sm'
                  : 'text-foreground/80 hover:text-primary hover:bg-blue-50/70'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
            onClick={() => onLanguageChange(language === 'zh' ? 'en' : 'zh')}
            className="px-3 py-2 rounded-full border border-border/80 bg-white/80 text-sm font-semibold text-primary hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? (language === 'zh' ? '关闭菜单' : 'Close menu') : (language === 'zh' ? '打开菜单' : 'Open menu')}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border/70 bg-white/95 backdrop-blur-xl shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={withBasePath(item.href)}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-3 rounded-2xl transition-all duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  item.highlight
                    ? 'bg-gradient-to-r from-accent to-orange-500 text-white'
                    : isActive(item.href)
                    ? 'text-primary bg-blue-50'
                    : 'text-foreground hover:bg-blue-50'
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
