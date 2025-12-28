export interface Service {
  title: string;
  image: string;
  href: string;
}

export interface ServiceType {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface NavLink {
  label: string;
  href: string;
}
