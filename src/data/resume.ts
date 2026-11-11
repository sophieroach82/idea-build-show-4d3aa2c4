import resumeAsset from '@/assets/sophie-roach-resume.pdf.asset.json';
import { assetUrl } from '@/lib/asset-url';

export const resumeUrl = assetUrl(resumeAsset.url);
export const education = {
  degree: 'Bachelor of Science in Industrial Design',
  minor: 'History',
  period: 'August 2024 – Present',
  graduation: '2028',
  coursework: ['Introduction to Computer Science', 'Fundamentals of Design Studio I & II', 'Materials II', 'User-Centered Design Methods', 'Digital Design Methods'],
};

export interface Experience { title: string; organization: string; period: string; location: string; description: string[] }
export const experiences: Experience[] = [
  {
    title: 'President', organization: 'Collegiate Panhellenic Council', period: 'October 2026 – Present', location: 'Atlanta, GA',
    description: [
      'Lead the Panhellenic Council, overseeing executive board operations and coordinating initiatives with eight campus chapters to advance community-wide goals.',
      'Serve as a liaison between the Panhellenic community, university administration, campus organizations, and national advisors, advocating for chapter interests.',
      'Oversee executive board meetings and officer responsibilities, promoting communication, collaboration, and accountability.',
    ],
  },
  {
    title: 'Engineering Intern, Product Development', organization: 'Brasseler USA', period: 'May 2026 – July 2026', location: 'Savannah, GA',
    description: [
      'Produced Device Medical Record documentation for hundreds of Nordent products by reverse-engineering physical devices using Keyence, RAM, and toolmaker gauges, Artec 3D scanning, and bending macros to create SolidWorks part models and engineering drawings.',
      'Contributed to Device Medical Record compliance documentation for Nordent scaler hardened-point tips by defining user requirements and translating them into a traceability matrix.',
      'Analyzed years of production data, cycle times, and machine run times for approximately 50 cylindrical parts across four families (quick connect drills, twist drills, burs, and pins), shadowing operators to build a capacity model.',
    ],
  },
  {
    title: 'Diversity, Equity, & Inclusion Vice President', organization: 'Collegiate Panhellenic Council', period: 'October 2025 – October 2026', location: 'Atlanta, GA',
    description: [
      'Led initiatives and programming across eight chapters, representing approximately 1,700 women, to advance diversity, equity, and inclusion.',
      'Held bi-weekly meetings with chapter delegates to foster inclusive practices across all chapters.',
    ],
  },
];