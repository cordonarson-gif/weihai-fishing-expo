import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExhibitionMap from '@/components/ExhibitionMap';
import { toast } from 'sonner';
import { ChevronDown } from 'lucide-react';

export default function Exhibit() {
  const [language, setLanguage] = useState('zh');
  const [activeTab, setActiveTab] = useState('exhibitor');
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  // Exhibitor Form
  const [exhibitorForm, setExhibitorForm] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    boothType: '',
    area: '',
  });

  // Visitor Form
  const [visitorForm, setVisitorForm] = useState({
    name: '',
    phone: '',
    company: '',
    position: '',
    needs: '',
  });

  const content = language === 'zh' ? {
    title: '参展观展',
    exhibitor: '展商服务',
    visitor: '观展服务',
    exhibitorForm: {
      title: '展位预订表单',
      company: '企业名称',
      contact: '联系人',
      phone: '联系电话',
      email: '邮箱',
      boothType: '展位类型',
      boothTypeOptions: ['标准展位', '特装展位'],
      area: '需求面积',
      areaOptions: ['9㎡', '18㎡', '36㎡及以上'],
      submit: '提交申请',
    },
    exhibitorInfo: {
      title: '展商须知',
      process: {
        title: '参展流程',
        content: '提交展位需求后，组委会将在1-2个工作日内完成资质沟通与展位建议，确认方案后进入合同签署、费用支付、展品报备和现场布展流程。',
      },
      rules: {
        title: '展馆规定',
        content: '特装搭建需提前提交设计图与用电需求，材料须符合消防安全规范；展品、宣传物料和现场演示需接受展馆安全检查。',
      },
      faq: {
        title: '常见问题',
        content: '如需咨询展位价格、展区位置、物流进场或商务配对服务，请联系组委会：0631-5225555。',
      },
    },
    visitorForm: {
      title: '观众预登记表单',
      name: '姓名',
      phone: '联系电话',
      company: '公司名称',
      position: '职位',
      needs: '采购需求',
      submit: '提交登记',
    },
    visitorInfo: {
      title: '观展指南',
      transport: {
        title: '交通指引',
        content: '威海国际博览中心位于威海市环翠区，距威海机场约30分钟车程。展期建议提前规划酒店至展馆通勤，并关注组委会发布的接驳车信息。',
      },
      hotel: {
        title: '周边住宿',
        content: '展馆周边覆盖商务酒店与经济型酒店，热门房源在展前较快售罄，建议完成预登记后尽早确认住宿。',
      },
      schedule: {
        title: '观展日程',
        content: '展会时间：2026年10月17-19日，每日9:00-17:00开放。专业采购商可优先使用预登记通道入场。',
      },
    },
  } : {
    title: 'Exhibit & Visit',
    exhibitor: 'Exhibitor Services',
    visitor: 'Visitor Services',
    exhibitorForm: {
      title: 'Booth Reservation Form',
      company: 'Company Name',
      contact: 'Contact Person',
      phone: 'Phone',
      email: 'Email',
      boothType: 'Booth Type',
      boothTypeOptions: ['Standard Booth', 'Custom Booth'],
      area: 'Required Area',
      areaOptions: ['9㎡', '18㎡', '36㎡+'],
      submit: 'Submit Application',
    },
    exhibitorInfo: {
      title: 'Exhibitor Guidelines',
      process: {
        title: 'Exhibition Process',
        content: 'After submitting booth requirements, the organizing committee will review qualifications and provide booth recommendations within 1-2 business days. Once the plan is confirmed, exhibitors proceed with contract signing, payment, exhibit filing, and on-site setup.',
      },
      rules: {
        title: 'Hall Rules',
        content: 'Custom booth builders must submit design drawings and power requirements in advance. Materials must meet fire safety standards, and exhibits, promotional materials, and live demonstrations are subject to venue safety inspection.',
      },
      faq: {
        title: 'FAQ',
        content: 'For booth pricing, hall location, logistics access, or business matching services, please contact the organizing committee: 0631-5225555.',
      },
    },
    visitorForm: {
      title: 'Visitor Pre-registration Form',
      name: 'Name',
      phone: 'Phone',
      company: 'Company',
      position: 'Position',
      needs: 'Purchasing Needs',
      submit: 'Submit Registration',
    },
    visitorInfo: {
      title: 'Visitor Guide',
      transport: {
        title: 'Transportation',
        content: 'Weihai International Convention Center is located in Huancui District, about 30 minutes by car from Weihai Airport. Visitors are advised to plan hotel-to-venue transfers in advance and follow shuttle updates from the organizer.',
      },
      hotel: {
        title: 'Accommodation',
        content: 'Business and budget hotels are available around the venue. Popular rooms may sell out before the show, so visitors should confirm accommodation soon after completing pre-registration.',
      },
      schedule: {
        title: 'Exhibition Schedule',
        content: 'The exhibition runs from October 17-19, 2026, and is open daily from 9:00 AM to 5:00 PM. Professional buyers can use the pre-registration channel for priority entry.',
      },
    },
  };

  const handleExhibitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'zh' ? '提交成功！我们将尽快与您联系。' : 'Submitted successfully! We will contact you soon.');
    setExhibitorForm({ company: '', contact: '', phone: '', email: '', boothType: '', area: '' });
  };

  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'zh' ? '提交成功！我们将尽快与您联系。' : 'Submitted successfully! We will contact you soon.');
    setVisitorForm({ name: '', phone: '', company: '', position: '', needs: '' });
  };

  const togglePanel = (panel: string) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Page Title */}
      <section className="page-hero pt-36 pb-16 px-4">
        <div className="container mx-auto relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200 mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{content.title}</h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 py-8 border-b border-border bg-white/80 backdrop-blur">
        <div className="container mx-auto">
          <div className="inline-flex w-full sm:w-auto rounded-full border border-border bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('exhibitor')}
              className={`flex-1 sm:flex-none px-6 py-3 font-bold text-base md:text-lg rounded-full transition-all ${
                activeTab === 'exhibitor'
                  ? 'bg-primary text-white shadow-lg shadow-blue-900/15'
                  : 'text-muted-foreground hover:text-primary hover:bg-blue-50'
              }`}
            >
              {content.exhibitor}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('visitor')}
              className={`flex-1 sm:flex-none px-6 py-3 font-bold text-base md:text-lg rounded-full transition-all ${
                activeTab === 'visitor'
                  ? 'bg-primary text-white shadow-lg shadow-blue-900/15'
                  : 'text-muted-foreground hover:text-primary hover:bg-blue-50'
              }`}
            >
              {content.visitor}
            </button>
          </div>
        </div>
      </section>

      {/* Exhibition Map Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto max-w-5xl">
          <ExhibitionMap language={language} />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {activeTab === 'exhibitor' ? (
            <>
              {/* Exhibitor Form */}
              <div id="exhibitor" className="section-shell p-6 md:p-8 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{content.exhibitorForm.title}</h2>
                <form onSubmit={handleExhibitorSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.company}</label>
                    <input
                      type="text"
                      value={exhibitorForm.company}
                      aria-label={content.exhibitorForm.company}
                      placeholder={content.exhibitorForm.company}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.contact}</label>
                    <input
                      type="text"
                      value={exhibitorForm.contact}
                      aria-label={content.exhibitorForm.contact}
                      placeholder={content.exhibitorForm.contact}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, contact: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.phone}</label>
                    <input
                      type="tel"
                      value={exhibitorForm.phone}
                      aria-label={content.exhibitorForm.phone}
                      placeholder={content.exhibitorForm.phone}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.email}</label>
                    <input
                      type="email"
                      value={exhibitorForm.email}
                      aria-label={content.exhibitorForm.email}
                      placeholder={content.exhibitorForm.email}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.boothType}</label>
                    <select
                      aria-label={content.exhibitorForm.boothType}
                      value={exhibitorForm.boothType}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, boothType: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    >
                      <option value="">{language === 'zh' ? '请选择' : 'Select'}</option>
                      {content.exhibitorForm.boothTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.area}</label>
                    <select
                      aria-label={content.exhibitorForm.area}
                      value={exhibitorForm.area}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, area: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    >
                      <option value="">{language === 'zh' ? '请选择' : 'Select'}</option>
                      {content.exhibitorForm.areaOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 w-full bg-gradient-to-r from-primary to-blue-800 text-white py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all"
                  >
                    {content.exhibitorForm.submit}
                  </button>
                </form>
              </div>

              {/* Exhibitor Info Panels */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold mb-6 text-primary">{content.exhibitorInfo.title}</h2>
                {[
                  { key: 'process', ...content.exhibitorInfo.process },
                  { key: 'rules', ...content.exhibitorInfo.rules },
                  { key: 'faq', ...content.exhibitorInfo.faq },
                ].map((panel) => (
                  <div key={panel.key} className="elevated-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => togglePanel(panel.key)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-blue-50 transition-colors"
                    >
                      <h3 className="font-bold text-primary">{panel.title}</h3>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform ${expandedPanel === panel.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedPanel === panel.key && (
                      <div className="px-6 py-4 bg-blue-50 border-t border-border">
                        <p className="text-foreground">{panel.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Visitor Form */}
              <div id="visitor" className="section-shell p-6 md:p-8 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{content.visitorForm.title}</h2>
                <form onSubmit={handleVisitorSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.name}</label>
                    <input
                      type="text"
                      value={visitorForm.name}
                      aria-label={content.visitorForm.name}
                      placeholder={content.visitorForm.name}
                      onChange={(e) => setVisitorForm({ ...visitorForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.phone}</label>
                    <input
                      type="tel"
                      value={visitorForm.phone}
                      aria-label={content.visitorForm.phone}
                      placeholder={content.visitorForm.phone}
                      onChange={(e) => setVisitorForm({ ...visitorForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.company}</label>
                    <input
                      type="text"
                      value={visitorForm.company}
                      aria-label={content.visitorForm.company}
                      placeholder={content.visitorForm.company}
                      onChange={(e) => setVisitorForm({ ...visitorForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.position}</label>
                    <input
                      type="text"
                      value={visitorForm.position}
                      aria-label={content.visitorForm.position}
                      placeholder={content.visitorForm.position}
                      onChange={(e) => setVisitorForm({ ...visitorForm, position: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.needs}</label>
                    <textarea
                      aria-label={content.visitorForm.needs}
                      placeholder={content.visitorForm.needs}
                      value={visitorForm.needs}
                      onChange={(e) => setVisitorForm({ ...visitorForm, needs: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition h-28"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 w-full bg-gradient-to-r from-primary to-blue-800 text-white py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all"
                  >
                    {content.visitorForm.submit}
                  </button>
                </form>
              </div>

              {/* Visitor Info Panels */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold mb-6 text-primary">{content.visitorInfo.title}</h2>
                {[
                  { key: 'transport', ...content.visitorInfo.transport },
                  { key: 'hotel', ...content.visitorInfo.hotel },
                  { key: 'schedule', ...content.visitorInfo.schedule },
                ].map((panel) => (
                  <div key={panel.key} className="elevated-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => togglePanel(panel.key)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-blue-50 transition-colors"
                    >
                      <h3 className="font-bold text-primary">{panel.title}</h3>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform ${expandedPanel === panel.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedPanel === panel.key && (
                      <div className="px-6 py-4 bg-blue-50 border-t border-border">
                        <p className="text-foreground">{panel.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
