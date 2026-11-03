export type ServiceCategory = 'construction' | 'interiors';

export interface CommercialInteriorSubCategory {
  id: 'restaurant' | 'retail' | 'healthcare' | 'office-space';
  name: string;
  shortDesc: string;
  description: string;
  features?: string[];
  highlights?: string[];
  image: string;
}

export interface SubCategoryDetail {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  commercialSubCategories?: CommercialInteriorSubCategory[];
}

export interface ServiceDiscipline {
  id: ServiceCategory;
  title: string;
  tagline?: string;
  badge?: string;
  shortDesc: string;
  image: string;
  subCategories: SubCategoryDetail[];
}

// Backwards compatibility alias if needed
export type SubService = SubCategoryDetail;

export type ProjectCategory = 'all' | 'restaurant' | 'retail' | 'healthcare' | 'full-builds' | 'residential-interiors' | 'commercial';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  categoryLabel?: string;
  scopeOfWork: string;
  metrics: {
    plotArea?: string;
    totalArea?: string;
    completionTimeframe?: string;
    styleTheme?: string;
    costEfficiency?: string;
  };
  summary: string;
  renderingImage?: string;
  completedImage: string;
  additionalImages?: string[];
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  experience: string;
  specialization: string;
  image?: string;
  education?: string;
  paragraphs?: string[];
  brands?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  highlight: string;
  completionYear: string;
}

export interface ContactFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: 'Construction' | 'Interiors' | 'New Construction' | 'Full Home Interiors' | 'Renovation' | 'Commercial' | '';
  projectLocation: string;
  budgetRange: string;
  notes: string;
}
