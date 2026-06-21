import { Doctor, ServiceCategory } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 'richard-hannon',
    name: 'Dr. Richard Hannon',
    role: 'Principal Dentist',
    designation: 'Lead Dentist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    bio: 'Specializes in pain-free, modern general dentistry, advanced crown work, and complex restorative care in Ashtown.',
    longBio: 'Dr. Richard Hannon has over 15 years of clinical experience in general and restorative dentistry. He graduated with honors from Trinity College Dublin and went on to complete postgraduate qualifications from the Royal College of Surgeons in Ireland (MCCD). Richard is widely recognized for his calm, reassuring approach, making him particularly popular among nervous patients. He believes that outstanding dentistry lives at the intersection of aesthetic excellence and painless execution.',
    specialties: ['General Dentistry', 'Restorative Crowns & Bridges', 'Dental Implants', 'Sleep Apnea Appliances'],
    education: 'B.Dent.Sc (Hons), MDentSc, MCCD (RCSI)'
  },
  {
    id: 'jolene-molloy',
    name: 'Dr. Jolene Molloy',
    role: 'Associate Dentist',
    designation: 'Associate Dentist',
    image: 'https://images.unsplash.com/photo-1594824813573-246434e3b963?auto=format&fit=crop&q=80&w=600',
    bio: 'Highly experienced in children\'s dentistry, comfortable root canals, and modern cosmetic smile improvements.',
    longBio: 'Dr. Jolene Molloy joined Phoenix Dental with a passion for family dentistry and modern aesthetic solutions. She graduated from University College Cork and spent several years practicing in London before returning to Dublin. Jolene specializes in composite bonding, gentle root canal therapy, and clear aligners. Her empathetic consultation style ensures both children and adults leave the chair with absolute confidence.',
    specialties: ['Pediatric Dentistry', 'Composite Smile Bonding', 'Root Canal Therapy', 'Invisalign Aligners'],
    education: 'BDS (UCC), Dip. Aesthetic Dentistry'
  },
  {
    id: 'deirdre-odriscoll',
    name: 'Deirdre O\'Driscoll',
    role: 'Registered Dental Hygienist',
    designation: 'Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    bio: 'Passionate about gum health, plaque prevention, and delivering highly thorough, comfortable scale & polishes.',
    longBio: 'Deirdre O\'Driscoll is our registered clinical dental hygienist, specializing in preventative periodontal care. With over a decade of dedicated dental hygiene experience, Deirdre is committed to combating gum disease and helping clients maintan natural teeth for life. She is exceptionally thorough, gentle, and customizes brushing and flossing routines to fit each patient\'s unique lifestyle.',
    specialties: ['Standard Scale & Polish', 'Deep Periodontal Scaling', 'Air-Polishing Stains Removal', 'Oral Hygiene Instruction'],
    education: 'Dip. Dental Hygiene (TCD)'
  }
];

export const SERVICE_PRICESLog: ServiceCategory[] = [
  {
    category: 'Examinations & Diagnostics',
    items: [
      { name: 'Routine Examination', price: '€50.00', details: 'Full clinical hygiene checkup and oral cancer screening' },
      { name: 'New Patient Assessment', price: '€60.00', details: 'Comprehensive introductory exam of teeth, gums, and bite' },
      { name: 'Small Intraoral X-Ray', price: '€15.00', details: 'High-definition digital diagnosis' },
      { name: 'Panoramic OPG X-Ray', price: '€50.00', details: 'Full-jaw overview scanner' }
    ]
  },
  {
    category: 'Preventative & Hygiene',
    items: [
      { name: 'Routine Scale & Polish', price: '€70.00', details: 'Gentle debris and calculus removal by Registered Hygienist', subsidized: 'PRSI Subsidized option: €15.00 with qualified cover' },
      { name: 'Hygienist Deep Periodontal Clean', price: '€140.00', details: 'Under local anesthetic for deep pocket therapy (per session)' },
      { name: 'Fissure Sealant', price: '€30.00', details: 'Preventative surface coating (per tooth)' }
    ]
  },
  {
    category: 'Restorations & Fillings',
    items: [
      { name: 'White Composite Filling', price: '€110.00 - €180.00', details: 'Aesthetic tooth-colored resin matching your shade' },
      { name: 'Silver Amalgam Filling', price: '€90.00 - €130.00', details: 'Highly durable metal-alloy filling' },
      { name: 'Temporary Filling', price: '€50.00', details: 'Interim emergency protection' }
    ]
  },
  {
    category: 'Endodontics (Root Canals)',
    items: [
      { name: 'Incisor / Canine Root Canal', price: '€350.00', details: 'Single-canal treatment including digital verification' },
      { name: 'Premolar Root Canal', price: '€450.00', details: 'Dual-canal therapy' },
      { name: 'Molar Root Canal', price: '€650.00', details: 'Highly complex multi-canal therapy' }
    ]
  },
  {
    category: 'Surgical & Restorations',
    items: [
      { name: 'Routine Extraction', price: '€90.00 - €140.00', details: 'Smooth pain-free removal of single root' },
      { name: 'Surgical Extraction', price: '€180.00 - €250.00', details: 'Complex extraction with structural support' },
      { name: 'Premium Ceramic Crown', price: '€750.00', details: 'Handcrafted zirconium restoration for severe decay' },
      { name: 'Single Titanium Dental Implant', price: '€1,800.00', details: 'Biocompatible post including bespoke porcelain crown', subsidized: 'Tax relief of 20% claimable via Med 2 form' }
    ]
  }
];
