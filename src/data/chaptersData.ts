// Official Chapters Directory Information
// Sourced directly from public/assets/aistudio/Chapters_List_8c1e752d.txt and GitHub repo archives

export type ChapterScope = 'all' | 'international' | 'local';

export interface OfficialChapter {
  id: string;
  category: 'International' | 'Local / Regional (Philippines)';
  regionOrCountry: string;
  chapterName: string;
  leadership: string;
  leadershipRole: string;
  flagEmoji?: string;
  jurisdiction: string;
  notes?: string;
  status: 'Recognized Chapter' | 'Interim Jurisdiction' | 'Special Chapter';
}

export const OFFICIAL_CHAPTERS_LIST: OfficialChapter[] = [
  // --- International Chapters ---
  {
    id: 'int-ksa',
    category: 'International',
    regionOrCountry: 'Kingdom of Saudi Arabia',
    chapterName: 'Kingdom of Saudi Arabia Chapter',
    leadership: 'SNF JID',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇸🇦',
    jurisdiction: 'Middle East & Gulf Region',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-macau',
    category: 'International',
    regionOrCountry: 'Macau SAR, China',
    chapterName: 'Macau SAR China Chapter',
    leadership: 'SNF Trooper',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇲🇴',
    jurisdiction: 'East Asia / SAR Jurisdiction',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-brunei',
    category: 'International',
    regionOrCountry: 'Brunei Darussalam',
    chapterName: 'Brunei Darussalam Regional Chapter',
    leadership: 'NF Climbu',
    leadershipRole: 'Regional Chapter Head',
    flagEmoji: '🇧🇳',
    jurisdiction: 'Southeast Asia / Borneo',
    notes: 'Remittance cleared for 41st Summit & Convention',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-uae',
    category: 'International',
    regionOrCountry: 'United Arab Emirates',
    chapterName: 'United Arab Emirates Chapter',
    leadership: 'NF Alfred',
    leadershipRole: 'Regional Chapter Head',
    flagEmoji: '🇦🇪',
    jurisdiction: 'Middle East / Emirates Jurisdiction',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-korea',
    category: 'International',
    regionOrCountry: 'South Korea',
    chapterName: 'South Korea Regional Chapter',
    leadership: 'Interim Regional Leadership',
    leadershipRole: 'Interim Regional Founder',
    flagEmoji: '🇰🇷',
    jurisdiction: 'East Asia / Republic of Korea',
    notes: 'Under Interim Regional Founder oversight',
    status: 'Interim Jurisdiction'
  },
  {
    id: 'int-seafarer',
    category: 'International',
    regionOrCountry: 'Global Maritime / Seafarers',
    chapterName: 'Seafarer International Chapter',
    leadership: 'SNF Malakas',
    leadershipRole: 'Regional Chapter Head',
    flagEmoji: '⚓',
    jurisdiction: 'International Waters & Merchant Marine Fleet',
    notes: 'Worldwide brotherhood afloat across commercial and marine vessels',
    status: 'Special Chapter'
  },
  {
    id: 'int-singapore',
    category: 'International',
    regionOrCountry: 'Singapore',
    chapterName: 'Singapore Regional Chapter',
    leadership: 'NF Anne Rial',
    leadershipRole: 'Regional Chapter Head',
    flagEmoji: '🇸🇬',
    jurisdiction: 'Southeast Asia / Singapore City',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-turkey',
    category: 'International',
    regionOrCountry: 'Turkey',
    chapterName: 'Turkey Regional Chapter',
    leadership: 'NF Yagi / Elmo',
    leadershipRole: 'Regional Founder & Leadership',
    flagEmoji: '🇹🇷',
    jurisdiction: 'Eurasia / Mediterranean Region',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-usa-oic',
    category: 'International',
    regionOrCountry: 'United States',
    chapterName: 'Downey, California Chapter (OIC Jurisdiction)',
    leadership: 'Officer-In-Charge Jurisdiction',
    leadershipRole: 'OIC International Jurisdiction',
    flagEmoji: '🇺🇸',
    jurisdiction: '8500 Boyne Street, Downey, California 90242',
    notes: 'Official overseas branch office of TGBI-TO',
    status: 'Recognized Chapter'
  },
  {
    id: 'int-qatar',
    category: 'International',
    regionOrCountry: 'Qatar',
    chapterName: 'Qatar Regional Chapter',
    leadership: 'Regional Leadership',
    leadershipRole: 'Regional Chapter Head',
    flagEmoji: '🇶🇦',
    jurisdiction: 'Middle East / Doha',
    notes: 'Remittance cleared for 41st Summit & Convention',
    status: 'Recognized Chapter'
  },

  // --- Local / Philippines Regional Chapters ---
  {
    id: 'loc-ncr',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'NCR - National Capital Region',
    chapterName: 'NCR Regional Chapter',
    leadership: 'NF Lawinhead',
    leadershipRole: 'Regional Leadership',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Metro Manila / GHQ Jurisdiction (Quezon City Base)',
    notes: 'Remittance cleared for 41st Summit & Convention',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-r2-macabebe',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'Region 2 / Macabebe',
    chapterName: 'R2 Macabebe Chapter',
    leadership: 'Founder Needle',
    leadershipRole: 'Chapter Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Northern Luzon Jurisdiction',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-r4b-mimaropa',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'Region 4B - MIMAROPA',
    chapterName: 'R4B MIMAROPA Regional Chapter',
    leadership: 'SNF Parjac',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Mindoro, Marinduque, Romblon, Palawan',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-r5-bicol',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'Region 5 - Bicol Region',
    chapterName: 'R5 Bicol Regional Chapter',
    leadership: 'MF Nald',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Albay, Camarines Norte, Camarines Sur, Catanduanes, Masbate, Sorsogon',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-nir',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'NIR - Negros Island Region',
    chapterName: 'Negros Island Regional Chapter',
    leadership: 'RF Sards',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Negros Occidental, Negros Oriental, Siquijor',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-r6-passi',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'Region 6 - Western Visayas',
    chapterName: 'R6 Passi City, Iloilo Chapter',
    leadership: 'RF Abet',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Passi City, Iloilo Province, Western Visayas',
    status: 'Recognized Chapter'
  },
  {
    id: 'loc-r7-cebu',
    category: 'Local / Regional (Philippines)',
    regionOrCountry: 'Region 7 - Central Visayas',
    chapterName: 'R7 Cebu Regional Chapter',
    leadership: 'RF Arch',
    leadershipRole: 'Regional Founder',
    flagEmoji: '🇵🇭',
    jurisdiction: 'Cebu City & Central Visayas Provinces',
    notes: 'Pioneer regional charter and active host chapter',
    status: 'Recognized Chapter'
  }
];
