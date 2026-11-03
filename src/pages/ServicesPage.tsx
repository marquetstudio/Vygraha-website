import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { PageId } from '../components/Navbar';
import { ArrowRight, CheckCircle2, Building2, Home, Factory, Store, Utensils, Stethoscope, Briefcase, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'construction' | 'interiors'>('all');

  const constructionService = SERVICES_DATA.find((s) => s.id === 'construction');
  const interiorsService = SERVICES_DATA.find((s) => s.id === 'interiors');

  const residentialSub = interiorsService?.subCategories.find((sub) => sub.id === 'residential');
  const commercialSub = interiorsService?.subCategories.find((sub) => sub.id === 'commercial-interiors');

  return (
    <div className="space-y-16 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section: Services */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.18]">
                Services
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                End-to-end architectural execution bridging robust civil construction with bespoke interior architecture and custom furnishings. Delivered with single-point accountability and transparent BOQ across Bengaluru.
              </p>

              {/* Filter Tabs */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'all'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  All Services
                </button>
                <button
                  onClick={() => setActiveTab('construction')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'construction'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab('interiors')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'interiors'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  Interiors &amp; Furnishings
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Vygraha services overview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            CONSTRUCTION
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'construction') && constructionService && (
          <section className="space-y-8" id="construction">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {constructionService.title}
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                {constructionService.tagline}
              </p>
            </div>

            {/* What we do under Construction: Home, Industrial, Commercial */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {constructionService.subCategories.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div>
                    <div className="aspect-[16/10] w-full bg-neutral-100 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-md">
                        {idx === 0 && <span className="inline-flex items-center gap-1.5"><Home className="w-3.5 h-3.5 text-[#E5A93C]" /> Home</span>}
                        {idx === 1 && <span className="inline-flex items-center gap-1.5"><Factory className="w-3.5 h-3.5 text-[#E5A93C]" /> Industrial</span>}
                        {idx === 2 && <span className="inline-flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-[#E5A93C]" /> Commercial</span>}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#D4952B] mt-1">
                          {item.shortDesc}
                        </p>
                      </div>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>

                      {item.features && item.features.length > 0 && (
                        <div className="pt-2 space-y-2 border-t border-neutral-100">
                          <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                            What We Do
                          </div>
                          <ul className="space-y-1.5">
                            {item.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-[#D4952B] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-[#E5A93C] hover:text-neutral-950 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire for {item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            INTERIORS
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'interiors') && interiorsService && (
          <section className="space-y-12" id="interiors">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {interiorsService.title}
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                {interiorsService.tagline}
              </p>
            </div>

            {/* 1. Residential Interiors (Highlighting Custom Furniture & Furnishings) */}
            {residentialSub && (
              <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4952B] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      Living Spaces &amp; Furnishings
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                      Residential Interiors &amp; Bespoke Furniture
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {residentialSub.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-neutral-100">
                      <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                        What We Deliver
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {residentialSub.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-[#D4952B] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="py-3 px-5 text-xs font-semibold text-neutral-900 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-lg transition-colors inline-flex items-center gap-2"
                      >
                        <span>Consult on Residential Interiors</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100 shadow-sm">
                      <img
                        src={residentialSub.image}
                        alt="Vygraha Residential Interiors and Custom Furniture"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Commercial Interiors: Restaurant, Retail, Healthcare, Office Space */}
            {commercialSub && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Commercial Interiors
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                    Specialized interior architecture engineered for high footfall, brand distinction, and operational productivity across 4 key commercial environments:
                  </p>
                </div>

                {/* 4 Dedicated Cards: Restaurant, Retail, Healthcare, Office Space */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {commercialSub.commercialSubCategories?.map((comm) => (
                    <div
                      key={comm.id}
                      className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                    >
                      <div>
                        <div className="aspect-[16/11] w-full bg-neutral-100 overflow-hidden relative">
                          <img
                            src={comm.image}
                            alt={comm.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-md">
                            {comm.id === 'restaurant' && <span className="inline-flex items-center gap-1.5"><Utensils className="w-3.5 h-3.5 text-[#E5A93C]" /> Restaurant</span>}
                            {comm.id === 'retail' && <span className="inline-flex items-center gap-1.5"><Store className="w-3.5 h-3.5 text-[#E5A93C]" /> Retail</span>}
                            {comm.id === 'healthcare' && <span className="inline-flex items-center gap-1.5"><Stethoscope className="w-3.5 h-3.5 text-[#E5A93C]" /> Healthcare</span>}
                            {comm.id === 'office-space' && <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#E5A93C]" /> Office Space</span>}
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <div>
                            <h4 className="text-base font-bold text-neutral-900">
                              {comm.name}
                            </h4>
                            <p className="text-xs font-semibold text-[#D4952B] mt-0.5">
                              {comm.shortDesc}
                            </p>
                          </div>

                          <p className="text-xs text-neutral-600 leading-relaxed">
                            {comm.description}
                          </p>

                          {comm.highlights && comm.highlights.length > 0 && (
                            <div className="pt-2 space-y-1.5 border-t border-neutral-100">
                              <div className="text-2xs font-bold text-neutral-700 uppercase tracking-wider">
                                What We Do
                              </div>
                              {comm.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4952B] mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => onNavigate('contact')}
                          className="w-full py-2 px-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-[#E5A93C] hover:text-neutral-950 rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <span>Plan {comm.name.split(' ')[0]}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Call to Action (CTA) */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Plan Your Space with Vygraha
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              From turnkey construction to custom residential and commercial interior execution, receive a transparent preliminary BOQ with zero hidden fees.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};
