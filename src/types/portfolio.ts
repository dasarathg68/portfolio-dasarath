export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  github?: string;
  link?: string;
  docs?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  details: string;
  github?: string;
  live?: string;
  docs?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  name: string;
  about: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  activities_and_achievements: string[];
  certifications: Certification[];
}
