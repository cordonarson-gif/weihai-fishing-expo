import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
        content: '1. 填写报名表 2. 审核确认 3. 签订合同 4. 支付费用 5. 参展',
      },
      rules: {
        title: '展馆规定',
        content: '展位搭建需符合安全规范，禁止使用易燃材料，所有展品需通过安全检查。',
      },
      faq: {
        title: '常见问题',
        content: '如有问题，请联系组委会：0631-5225555',
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
        content: '威海国际博览中心位于威海市环翠区，距威海机场30分钟车程，公共交通便利。',
      },
      hotel: {
        title: '周边住宿',
        content: '展馆周边有多家五星级酒店和经济型酒店，满足不同需求。',
      },
      schedule: {
        title: '观展日程',
        content: '展会时间：2026年10月17-19日，每日9:00-17:00开放。',
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
        content: '1. Fill Form 2. Review 3. Sign Contract 4. Payment 5. Exhibit',
      },
      rules: {
        title: 'Hall Rules',
        content: 'Booth construction must comply with safety standards. Flammable materials prohibited. All products must pass safety inspection.',
      },
      faq: {
        title: 'FAQ',
        content: 'For questions, contact: 0631-5225555',
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
        content: 'Weihai Convention Center is located in Huancui District, 30 minutes from Weihai Airport with convenient public transport.',
      },
      hotel: {
        title: 'Accommodation',
        content: 'Multiple 5-star and budget hotels available near the venue to meet different needs.',
      },
      schedule: {
        title: 'Exhibition Schedule',
        content: 'Exhibition dates: October 17-19, 2026, 9:00 AM - 5:00 PM daily.',
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
      <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 py-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('exhibitor')}
              className={`px-6 py-3 font-bold text-lg transition-all ${
                activeTab === 'exhibitor'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {content.exhibitor}
            </button>
            <button
              onClick={() => setActiveTab('visitor')}
              className={`px-6 py-3 font-bold text-lg transition-all ${
                activeTab === 'visitor'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {content.visitor}
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          {activeTab === 'exhibitor' ? (
            <>
              {/* Exhibitor Form */}
              <div id="exhibitor" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">{content.exhibitorForm.title}</h2>
                <form onSubmit={handleExhibitorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.company}</label>
                    <input
                      type="text"
                      value={exhibitorForm.company}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, company: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.contact}</label>
                    <input
                      type="text"
                      value={exhibitorForm.contact}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, contact: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.phone}</label>
                    <input
                      type="tel"
                      value={exhibitorForm.phone}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.email}</label>
                    <input
                      type="email"
                      value={exhibitorForm.email}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.exhibitorForm.boothType}</label>
                    <select
                      value={exhibitorForm.boothType}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, boothType: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                      value={exhibitorForm.area}
                      onChange={(e) => setExhibitorForm({ ...exhibitorForm, area: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
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
                  <div key={panel.key} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => togglePanel(panel.key)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
                    >
                      <h3 className="font-bold text-primary">{panel.title}</h3>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${expandedPanel === panel.key ? 'rotate-180' : ''}`}
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
              <div id="visitor" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">{content.visitorForm.title}</h2>
                <form onSubmit={handleVisitorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.name}</label>
                    <input
                      type="text"
                      value={visitorForm.name}
                      onChange={(e) => setVisitorForm({ ...visitorForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.phone}</label>
                    <input
                      type="tel"
                      value={visitorForm.phone}
                      onChange={(e) => setVisitorForm({ ...visitorForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.company}</label>
                    <input
                      type="text"
                      value={visitorForm.company}
                      onChange={(e) => setVisitorForm({ ...visitorForm, company: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.position}</label>
                    <input
                      type="text"
                      value={visitorForm.position}
                      onChange={(e) => setVisitorForm({ ...visitorForm, position: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{content.visitorForm.needs}</label>
                    <textarea
                      value={visitorForm.needs}
                      onChange={(e) => setVisitorForm({ ...visitorForm, needs: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
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
                  <div key={panel.key} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => togglePanel(panel.key)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
                    >
                      <h3 className="font-bold text-primary">{panel.title}</h3>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${expandedPanel === panel.key ? 'rotate-180' : ''}`}
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
