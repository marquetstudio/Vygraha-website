import React, { useState } from 'react';
import { BRAND_INFO } from '../data/siteData';
import { ContactFormState } from '../types';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, CheckCircle, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: '',
    projectLocation: '',
    budgetRange: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone Number is required';
    if (!formData.email.trim()) errs.email = 'Email Address is required';
    if (!formData.projectType) errs.projectType = 'Please select a Project Type';
    if (!formData.projectLocation.trim()) errs.projectLocation = 'Project Location is required';
    if (!formData.budgetRange) errs.budgetRange = 'Please select an Estimated Budget Range';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Beautified Hero: Contact */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4952B] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
              Direct Inquiries
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.18]">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Connect directly with our Bengaluru architecture and site execution leads. Submit your project requirements below for a consultation and transparent preliminary BOQ discussion.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4952B]" />
                <span>Response within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">Registered Office:</span>
                <span>Koramangala, Bengaluru</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form and Office Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Lead Capture Form Specification (Fields 1 to 6) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="border-b border-neutral-100 pb-4 mb-6">
                <h2 className="text-xl font-bold text-neutral-900">
                  Lead Capture Form Specification
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  All 6 fields required for preliminary site analysis &amp; scheduling.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Field 1: Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Field 2: Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Field 2: Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 99455 62825"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                      {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Field 3: Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Field 3: Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@domain.com"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Field 4: Project Type (Dropdown: New Construction / Full Home Interiors / Renovation / Commercial) */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Field 4: Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                      >
                        <option value="">Select Project Type...</option>
                        <optgroup label="Construction">
                          <option value="Home Construction">Construction: Home</option>
                          <option value="Industrial Construction">Construction: Industrial</option>
                          <option value="Commercial Construction">Construction: Commercial</option>
                        </optgroup>
                        <optgroup label="Interiors">
                          <option value="Residential Interiors">Interiors: Residential (with Furniture)</option>
                          <option value="Commercial Interiors - Restaurant">Interiors: Restaurant / F&amp;B</option>
                          <option value="Commercial Interiors - Retail">Interiors: Retail &amp; Showrooms</option>
                          <option value="Commercial Interiors - Healthcare">Interiors: Healthcare &amp; Clinics</option>
                          <option value="Commercial Interiors - Office">Interiors: Office Spaces</option>
                        </optgroup>
                      </select>
                      {errors.projectType && <p className="text-xs text-red-600 mt-1">{errors.projectType}</p>}
                    </div>

                    {/* Field 5: Project Location */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Field 5: Project Location *
                      </label>
                      <input
                        type="text"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        placeholder="e.g. Koramangala, Indiranagar"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                      {errors.projectLocation && <p className="text-xs text-red-600 mt-1">{errors.projectLocation}</p>}
                    </div>
                  </div>

                  {/* Field 6: Estimated Budget Range */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Field 6: Estimated Budget Range *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['₹25L – ₹50L', '₹50L – ₹1 Cr', '₹1 Cr – ₹2.5 Cr', '₹2.5 Cr+'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                            formData.budgetRange === range
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:border-neutral-400'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                    {errors.budgetRange && <p className="text-xs text-red-600 mt-1">{errors.budgetRange}</p>}
                  </div>

                  {/* Submission Action: [Schedule a Design Consultation] */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold text-neutral-900 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-lg transition-colors mt-2 shadow-xs"
                  >
                    Schedule a Design Consultation
                  </button>
                </form>
              ) : (
                <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    Consultation Scheduled
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your inquiry for {formData.projectType} at {formData.projectLocation} has been registered. Our principal team will reach out directly on {formData.phoneNumber}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        projectType: '',
                        projectLocation: '',
                        budgetRange: '',
                        notes: '',
                      });
                    }}
                    className="text-xs font-semibold text-neutral-900 hover:underline pt-2 inline-block"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Office Details & Location (Page 6 Specification) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral-900">
                Office Details &amp; Location
              </h2>

              {/* Registered Address */}
              <div className="flex items-start gap-3.5 text-sm text-neutral-700">
                <MapPin className="w-5 h-5 text-[#D4952B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900">Registered Address:</div>
                  <div className="text-neutral-600 mt-1 leading-relaxed">
                    {BRAND_INFO.registeredAddress}
                  </div>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="flex items-start gap-3.5 text-sm text-neutral-700">
                <Phone className="w-5 h-5 text-[#D4952B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900">Direct Lines:</div>
                  <div className="text-neutral-600 mt-1 flex flex-col gap-0.5">
                    <a href={`tel:${BRAND_INFO.phone1.replace(/\s/g, '')}`} className="hover:text-neutral-900 font-medium">
                      {BRAND_INFO.phone1}
                    </a>
                    <a href={`tel:${BRAND_INFO.phone2.replace(/\s/g, '')}`} className="hover:text-neutral-900 font-medium">
                      {BRAND_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3.5 text-sm text-neutral-700">
                <Mail className="w-5 h-5 text-[#D4952B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900">Official Email:</div>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-neutral-600 hover:text-neutral-900 mt-1 block font-medium">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              {/* Social Channels: Instagram | LinkedIn | Facebook */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="font-semibold text-xs text-neutral-900 uppercase tracking-wider mb-2.5">
                  Social Channels
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg text-neutral-700 border border-neutral-200 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-neutral-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg text-neutral-700 border border-neutral-200 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-neutral-600" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg text-neutral-700 border border-neutral-200 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-neutral-600" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Integration: Embedded Google Map targeting Koramangala office */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <div className="p-3.5 border-b border-neutral-200 text-xs font-semibold text-neutral-900 flex items-center justify-between">
                <span>Map Integration: Koramangala Office</span>
                <span className="text-neutral-500 font-normal">Bengaluru – 560029</span>
              </div>
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Vygraha Interiors and Constructions Koramangala Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.228515082147!2d77.6186!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e5e40702d%3A0x6a1c5d947118bf53!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
