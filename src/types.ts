export interface Principle {
  id: string;
  number: number;
  title: string;
  tagalogTitle: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
}

export interface AcronymLetter {
  letter: string;
  word: string;
  meaning: string;
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  keyFigures: string[];
  badge?: string;
}

export interface Leader {
  name: string;
  callSign: string;
  role: string;
  division: string;
  bio: string;
  isIncorporator?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  region: 'NCR' | 'Luzon' | 'Visayas' | 'Mindanao' | 'International';
  countryOrProvince: string;
  cityOrState: string;
  establishedYear: string;
  chapterHead: string;
  status: 'Active & Good Standing' | 'Confirmed Chapter' | 'In Process';
  remittanceCleared: boolean;
  contactEmail?: string;
  memberCountApprox: number;
}

export interface CommunityProject {
  id: string;
  title: string;
  category: 'Education' | 'Disaster Relief' | 'Healthcare' | 'Environment' | 'Civic Rights';
  location: string;
  date: string;
  description: string;
  impactMetric: string;
  status: 'Completed' | 'Ongoing' | 'Annual Program';
}

export interface EthicRule {
  number: number;
  title: string;
  description: string;
  guideline: string;
}

export interface OfficialDocument {
  id: string;
  title: string;
  desc: string;
  filename: string;
  category: 'cbl' | 'ethics' | 'history' | 'principles' | 'mbc' | 'contact';
  categoryLabel: string;
  type: string;
  format: 'MD' | 'DOCX';
  githubUrl: string;
  rawUrl: string;
  readContent?: string;
  dateOrVersion?: string;
}

export interface MembershipFormData {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  occupation: string;
  address: string;
  region: string;
  preferredChapter: string;
  reasonForJoining: string;
  agreedToCreed: boolean;
}
