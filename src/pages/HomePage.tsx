import React, { useRef } from 'react';
import { BRAND_INFO, SERVICES_DATA, FEATURED_PROJECTS, TESTIMONIALS } from '../data/siteData';
import { PageId } from '../components/Navbar';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 pb-24 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: Heroic Architectural Hero */}
        <section className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[560px] flex items-center p-8 sm:p-14 lg:p-20 text-white shadow-2xl bg-neutral-950 border border-neutral-800">
          
          {/* Background Architectural Photography with Atmospheric Layering */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury modern architectural residence in Bengaluru"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-102"
            />
            {/* Multi-stop directional gradient overlays for pristine typographic contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/40 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
          </div>

          {/* Primary Hero Content */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Crafting Timeless Spaces, From Groundwork to Fine Detail.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed max-w-2xl">
              End-to-End Architectural Construction &amp; Bespoke Interior Design in Bengaluru.
            </p>

            {/* Dual Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 text-sm font-semibold text-neutral-950 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-xl transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2.5"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md rounded-xl transition-all inline-flex items-center gap-2"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 text-neutral-300" />
              </button>
            </div>
          </div>

        </section>

        {/* Section 2: About Snippet */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            About
          </div>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl">
            Founded in Bengaluru, Vygraha bridges the gap between raw construction durability and refined interior aesthetics. Premiere design and construction studio blending traditional and contemporary architectural elements to deliver beautiful, functional, and livable residential and commercial spaces.
          </p>

          {/* Action Link: [Read More About Us →] */}
          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="text-sm font-semibold text-neutral-900 hover:text-neutral-700 inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Read More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 3: Services (Construction & Interiors) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Services
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Turnkey architectural execution across civil construction and bespoke interiors.
              </p>
            </div>

            {/* Button: [Explore All Services] */}
            <button
              onClick={() => onNavigate('services')}
              className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-all cursor-pointer group hover:shadow-md"
              >
                <div className="aspect-[16/9] w-full bg-neutral-100 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[#D4952B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-neutral-900 group-hover:text-[#D4952B] transition-colors">
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Featured Work (Pixel-Perfect Uniform Grid Height & Baseline Alignment) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Featured Projects
              </h2>
            </div>

            {/* Action Button: [View Portfolio] */}
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {FEATURED_PROJECTS.slice(0, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate('portfolio')}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full hover:border-neutral-300 transition-all cursor-pointer group hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full bg-neutral-100 overflow-hidden shrink-0 relative">
                  <img
                    src={project.completedImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-neutral-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
                    {project.categoryLabel}
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-[#D4952B] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-neutral-600 mt-1 leading-relaxed line-clamp-2">
                      {project.scopeOfWork}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 flex items-center text-xs font-semibold text-neutral-900 group-hover:text-[#D4952B] transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Testimonials Scroll (Multi-card Strip/Scroll with Star Rating, Text, Name & Company) */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Testimonials
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Verified client reviews emphasizing transparent BOQ execution, quality craftsmanship, and turnkey project delivery.
              </p>
            </div>

            {/* Scroll Navigation Controls */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-neutral-700 transition-colors"
                aria-label="Scroll testimonials left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-neutral-700 transition-colors"
                aria-label="Scroll testimonials right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Strip / Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-neutral-300"
            style={{ scrollbarWidth: 'thin' }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="min-w-[300px] sm:min-w-[340px] max-w-[360px] bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shrink-0 snap-start shadow-sm"
              >
                <div className="space-y-3">
                  {/* Star Rating (5 Stars) */}
                  <div className="flex items-center gap-1 text-[#F4BA28]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-semibold text-neutral-600 ml-1.5">
                      5.0
                    </span>
                  </div>

                  {/* Highlight & Review Text */}
                  <div className="text-sm font-semibold text-neutral-900 leading-snug">
                    &ldquo;{t.highlight}&rdquo;
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
                    {t.review}
                  </p>
                </div>

                {/* Client Name, Company / Residence & Project Type */}
                <div className="pt-4 mt-4 border-t border-neutral-200">
                  <div className="font-bold text-neutral-900 text-sm">
                    {t.clientName}
                  </div>
                  {t.company && (
                    <div className="text-xs font-medium text-neutral-700 mt-0.5">
                      {t.company}
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {t.projectType} · {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Call to Action (CTA) */}
        <section className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          {/* Headline: Ready to Start Your Project? */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>

          {/* Sub-headline: Single-point accountability from foundation laying to final handed-over keys. */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Single-point accountability from foundation laying to final handed-over keys.
          </p>

          {/* Primary Button: [Schedule a Design Consultation] */}
          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-sm font-semibold text-neutral-900 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-lg transition-colors inline-block"
            >
              Schedule a Design Consultation
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
