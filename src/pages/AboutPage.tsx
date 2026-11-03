import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/siteData';
import { PageId } from '../components/Navbar';
import { TeamMember } from '../types';
import { getAssetUrl } from '../utils/assets';
import { ArrowRight, Compass, ShieldCheck, Sun, Layers, GraduationCap } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const TeamMemberPhoto: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [hasError, setHasError] = useState(false);

  // If image fails to load or hasn't been uploaded yet, render a dignified professional executive portrait placeholder
  if (hasError || !member.image) {
    const initials = member.name
      .split(' ')
      .map((n) => n[0])
      .filter(Boolean)
      .join('')
      .slice(0, 3);

    return (
      <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-950 flex flex-col items-center justify-center p-4 text-center text-white relative overflow-hidden">
        <div className="w-14 h-14 rounded-full bg-neutral-800 border border-[#D4952B] flex items-center justify-center text-lg font-bold text-[#F5B82E] shadow-inner mb-2">
          {initials}
        </div>
        <div className="font-bold text-white text-sm">{member.name}</div>
        <div className="text-xs text-[#E5A93C] font-semibold mt-0.5">{member.role}</div>
      </div>
    );
  }

  return (
    <img
      src={getAssetUrl(member.image)}
      alt={`${member.name} — ${member.role}`}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-300"
    />
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Beautified Hero Section: About Us */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4952B] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
                Studio Philosophy
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.18]">
                About Us
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                Founded in Bengaluru, Vygraha bridges the gap between raw construction durability and refined interior aesthetics. We are a premiere design and construction studio blending traditional and contemporary architectural elements to deliver beautiful, functional, and livable residential and commercial spaces.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                  alt="Vygraha architectural studio practice in Bengaluru"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 space-y-6 shadow-sm">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Balancing spatial utility, natural light, Vastu considerations, and modern materials. We prioritize seamless integration of modern design with timeless architectural aesthetics, clear bills of quantities (BOQ) with zero hidden fees, and single-point accountability from foundation laying to final handed-over keys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-neutral-100">
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <Sun className="w-5 h-5 text-[#D4952B]" />
              <div className="font-bold text-neutral-900 text-sm">Spatial Utility &amp; Light</div>
              <div className="text-xs text-neutral-600 leading-relaxed">Maximizing airflow and daylighting adapted to Bengaluru’s tropical climate.</div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <Compass className="w-5 h-5 text-[#D4952B]" />
              <div className="font-bold text-neutral-900 text-sm">Vastu Considerations</div>
              <div className="text-xs text-neutral-600 leading-relaxed">Harmonizing spatial orientation with clean contemporary layouts.</div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#D4952B]" />
              <div className="font-bold text-neutral-900 text-sm">Clear BOQ</div>
              <div className="text-xs text-neutral-600 leading-relaxed">Detailed line-item bills of quantities with zero hidden fees.</div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <Layers className="w-5 h-5 text-[#D4952B]" />
              <div className="font-bold text-neutral-900 text-sm">Single-Point Accountability</div>
              <div className="text-xs text-neutral-600 leading-relaxed">Direct ownership from foundation excavation to final handed-over keys.</div>
            </div>
          </div>
        </section>

        {/* Leadership Team: Vertical Stack with Uniform, Proportional Headshots */}
        <section className="space-y-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4952B] mb-1">
              Founding Partners
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Leadership Team
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
              Vygraha is led by a multi-disciplinary founding team uniting civil engineering mastery, high-stakes project governance, and strategic real estate development across South India.
            </p>
          </div>

          <div className="space-y-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm hover:border-neutral-300 transition-colors flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
              >
                {/* Disciplined, Uniform Headshot Frame (Consistent across all members) */}
                <div className="w-40 sm:w-44 md:w-48 aspect-[3/4] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm shrink-0">
                  <TeamMemberPhoto member={member} />
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-3.5 text-center sm:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                      {member.name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-sm mt-1">
                      <span className="font-semibold text-[#D4952B]">
                        {member.role}
                      </span>
                      {member.education && (
                        <>
                          <span className="text-neutral-300">·</span>
                          <span className="text-neutral-600 flex items-center gap-1.5 font-medium">
                            <GraduationCap className="w-4 h-4 text-neutral-400 shrink-0" />
                            <span>{member.education}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="space-y-3 pt-3 border-t border-neutral-100 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {member.paragraphs ? (
                      member.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))
                    ) : (
                      <p>{member.bio}</p>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Call to Action (CTA) */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Work With Our Team
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Connect with us for your residential or commercial build.
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
