// 100% Original and Audited Data strictly from github.com/tgbi-to/repo
// No invented information. Direct match to README.md, docs/principles/, docs/legal/, docs/cbl/, and websites/global-main/

export interface OrganizationalInfo {
  name: string;
  shortName: string;
  legalIdentifier: string;
  secRegNumber: string;
  secRegDate: string;
  motto: string;
  tagline: string;
  closingTagline: string;
  officialEmail: string;
  ghqAddress: {
    line1: string;
    city: string;
    zipCode: string;
    country: string;
  };
  oicAddress: {
    line1: string;
    city: string;
    stateZip: string;
    country: string;
  };
}

export const ORGANIZATIONAL_INFO: OrganizationalInfo = {
  name: "THE GUARDIANS BROTHERHOOD, INC.",
  shortName: "TGBI-TO",
  legalIdentifier: "THE ORIGINAL (TGBI-TO)",
  secRegNumber: "123899",
  secRegDate: "December 10, 1984",
  motto: "Brotherhood for peace and prosperity",
  tagline: "Since 1976 - Uniting True Brothers and Sisters",
  closingTagline: "Mabuhay ang TGBI - The Original! We serve with pride and honor, we lead with purpose, we stand as one.",
  officialEmail: "theguardiansv@gmail.com",
  ghqAddress: {
    line1: "43-A Pangasinan St., Bago Bantay",
    city: "Quezon City",
    zipCode: "1105",
    country: "Philippines"
  },
  oicAddress: {
    line1: "8500 Boyne Street",
    city: "Downey",
    stateZip: "California 90242",
    country: "USA"
  }
};

export const GUARDIANS_ACRONYM_ITEMS = [
  { letter: "G", word: "Gentlemen" },
  { letter: "U", word: "United" },
  { letter: "A", word: "Associates" },
  { letter: "R", word: "Race (Filipino Race)" },
  { letter: "D", word: "Dauntless" },
  { letter: "I", word: "Ingenious" },
  { letter: "A", word: "Advocators" },
  { letter: "N", word: "Nation" },
  { letter: "S", word: "Society" }
];

export const GUARDIANS_ACRONYM_FILIPINO = 
  "Mga Maginoo, Nagkakaisang Katuwang Ng Lahing Filipino, Magigiting at Matapat na Tagapagtanggol ng Bansa at Lipunan";

export interface PrincipleItem {
  id: string;
  number: number;
  title: string;
  emoji: string;
}

export const SEVEN_PRINCIPLES: PrincipleItem[] = [
  { id: "brotherhood", number: 1, title: "Brotherhood", emoji: "🤝" },
  { id: "integrity", number: 2, title: "Integrity", emoji: "🎯" },
  { id: "peace", number: 3, title: "Peace", emoji: "🕊️" },
  { id: "discipline", number: 4, title: "Discipline", emoji: "📋" },
  { id: "service", number: 5, title: "Service", emoji: "🤲" },
  { id: "equality", number: 6, title: "Equality", emoji: "⚖️" },
  { id: "justice", number: 7, title: "Justice", emoji: "🔱" }
];

export interface VisionPillar {
  title: string;
  content: string;
}

export const MISSION_AND_VISION = {
  mission: "The Guardians Brotherhood is a fraternity of men and women committed to the tenets of self-development, brotherhood, and charity for the betterment of society and its people of various colors, persuasion, and creed.",
  visionPillars: [
    {
      title: "About Education",
      content: "We always keep learning and increasing the amount of knowledge and skills. We readily share what we know openly. We love and respect the creativity of other people. We travel, learn new things and develop ourselves."
    },
    {
      title: "About Family",
      content: "We always treat our family and members of other families with respect. We try to support others in difficult times, rejoice at success, and help with everything we can. We are ready to sacrifice a lot for the family. We protect their relatives and friends from anything. We build relationships - only for love. We accept others as they are."
    },
    {
      title: "About Health",
      content: "Take care of your appearance, and observe the rules of personal hygiene. Keep your body clean and tidy. Wash your hands before meals, take a shower regularly, and monitor your body condition. If you have any symptoms, do not hesitate to treat them and think about why this disease appeared. Eat only healthy food, and drink plenty of clean water. Go in for sports, improve your body, and don't run it. No alcohol, tobacco, or other toxic substances. Walk a lot in nature and move, movement is life. Getting enough sleep, good sleep is very important. Observe the regime. Get up earlier. Listen to your body, it can tell you a lot."
    },
    {
      title: "About Behavior",
      content: "Always act according to your conscience. Never overstep the will of another person. Respect others, but don't be offended by yourself and others. Be friendly, courageous, and decent. Respect and help your elders. Do not be offended by the younger and weaker than you. Do not get mad. Defend your rights and your property. Don't harm another. All people are different - remember that. Help out in trouble. Give to the one asking. Be honest with others as well as with yourself. Take responsibility for your actions and your life. Take responsibility and go to the end. If you chose the path, follow them, make adjustments, and set goals for yourself. Be reasonable and patient. Do not harm nature, do not litter, and keep your home in order and clean. Smile more."
    },
    {
      title: "About Friends",
      content: "Friends are a small family. Your environment is a part of you, so choose your friends very carefully. Understand people. Choose those who are close in spirit, those with whom you do not stand still, but you develop and grow - kind, strong, honest and decent. Help in trouble."
    },
    {
      title: "About Speech",
      content: "Develop eloquence, do not flap. Silence is gold. Tell only the truth, and hide it only in the most exceptional moments, for the good of your loved ones and yourself. No swear words. Be flexible, and be able to find a common language with others. Speak only good things about the absence. Know how to agree in any situation. Do not argue if you are guilty, admit your mistake and apologize. Do not mock others. Don't speak without thinking."
    },
    {
      title: "About Loyalty & Responsibility",
      content: "Remain devoted no matter what. First of all - yourself. Do not be afraid of responsibility, and if you take it, remain responsible to the end. Know how to be responsible for your actions. Make decisions, and be strong. Respect your country, and your city, and remember that this is the environment where you and your children live. Do something useful to develop them."
    },
    {
      title: "About Material Well-being",
      content: "The material component of life is very important. Enrich yourself and your family. Save money. Do not waste your time on trifles. Always find the best choice. Earn only honestly. The money will come and go. Remember that money is not the main thing, but the well-being, life, rest, education, and development of your family depend on it. Don't cheat. Start small and grow. Think about the welfare of your children. Take care of their education and future in advance. Give them a start but don't put them on your neck. Teach and let them go."
    }
  ]
};

export const OFFICIAL_ABOUT_TEXT = {
  welcome: "Welcome to the official website of The Guardians Brotherhood Incorporated - The Original",
  paragraphs: [
    "We, MEN AND WOMEN OF GOODWILL AND INTENTION, in good standing in our communities, with the help of God, have come together to promote and maintain our social, intellectual, moral, economic, and general well-being; protect and defend our individual and collective rights; strengthen our fraternal bonds; and enhancing the spirit of unity, brotherhood, justice, righteousness, and self-sufficiency.",
    "From a vision born in the jungles of Mindanao, the Diablo Squad emerged—a Brotherhood forged by courage and Unity. As times passed it evolved into Diablo Squad Crime Buster, embracing a deeper commitment to public service, peace and justice. On December 10, 1984 this dream took form and became a legal and lasting legacy, The Guardians Brotherhood Incorporated.",
    "For over four decades our organization has weathered countless challenges from internal struggles to external misunderstanding. We have faced trials that tested our loyalty, our values and even our very identity, but through it all, we never gave up, we remained strong, and today we proudly declare to the Philippines and the world, we are stronger than ever!",
    "I am Master Founder Alamid, one of the new breed of leaders who have taken up the mantle with pride, courage and Honor. I carried with me the lessons of the past, and the vision of a better tomorrow. It is time to break the chains that have hindered our Brotherhood for too long. We will not allow division or conflicts of personal interest to destroy what generations of Brothers and Sisters have built with sweat and loyalty.",
    "Under the firm and guiding leadership of our International Chairman, UPMF CARLOMAGNO, one of the original Incorporators of The Guardians Brotherhood Incorporated, we are writing a new chapter, one that is rooted in Unity, purpose and reform. Together we aim to bring back the true essence of Brotherhood and reaffirm our unshakeable commitment to our Founding Principles.",
    "We live by seven Guiding Principles that define our Identity and mission: Brotherhood, Integrity, Peace, Discipline, Service, Equality, Justice. They are not just words; they are the foundation of our organization, the values that bind us together and the commitment we make to every member and to the community we serve.",
    "We invite you to explore the website, to reconnect, to learn and to be inspired by the legacy and future of TGBI-TO. Whether you are a founding member, a returning Brother, or a newly inducted recruit, know that you are part of something bigger than yourself: A family, A movement, A Brotherhood with a mission."
  ]
};

export const GUARDIANS_CREED = [
  "I am GUARDIANS",
  "I stand firm in the spirit of Brotherhood.",
  "Bound not by blood, but by loyalty, respect, and unity.",
  "I live with unwavering Integrity.",
  "Doing what is right",
  "Even when no one is watching.",
  "I uphold Peace",
  "Resolving conflicts with reason,",
  "Compassion and calm strength.",
  "I fight for Justice, defending the innocent,",
  "Confronting the anguist, and standing as a shield",
  "For those who cannot protect themselves.",
  "I believe in Equality,",
  "Treating every person with fairness, respect, and dignity,",
  "Regardless of race, status or belief.",
  "I embrace Discipline",
  "In thoughts, in words, and in actions",
  "A reflection of Honor and self-mastery.",
  "I commit to Service,",
  "Placing the welfare of others along with myself,",
  "And answering the call of duty without mental reservation",
  "With these seven principles as my guide,",
  "I walk the path of true Guardians,",
  "Faithful to my Brotherhood,",
  "Loyal to my Mission and Steadfast in my Purpose.",
  "I am GUARDIANS,",
  "I endure with Honor,",
  "and I live by the CODE."
];

export const GUARDIANS_PRAYER = [
  "God teach us to be;",
  "Courteous and not overcome by fear,",
  "Disciplined with the lowly and the high,",
  "Brotherly among friends and enemies;",
  "Righteous in the face of greed;",
  "Just when prone to prejudice;",
  "God help us to be;",
  "Ingenious protector of the helpless;",
  "Dauntless advocators of the Filipino banner, liberty and oneness;",
  "Kind, expecting no thanks nor treat;",
  "Loyal, to our country and creed;",
  "Mild in anger or in tears;",
  "Noble in victory or defeat;",
  "Sincere without pretense & without pride;",
  "God, we beseech thee;",
  "Grant us Wisdom to know the way;",
  "The Light to show the way;",
  "The Strength to go the way.",
  "Amen."
];

export const CODE_OF_ETHICS_PARAGRAPHS = [
  "As an officer/member of THE GUARDIANS BROTHERHOOD, INC-THE ORIGINAL, my fundamental duty is to serve the Association wholeheartedly; adhere to its seven (7) guiding principles of brotherhood, discipline, equality, service, peace, justice, and integrity; treat my fellow officers/members equally with the utmost respect the way I respect myself and want others to respect me; respect the women, the elders, and persons in authority, respect the Constitutional rights of everyone; help my fellow officers/members in times of need to the best of my capability; perform the job inherent to my position diligently, honestly and in good faith; and continuously uphold the honor and integrity of the Association.",
  "I will do my best to keep my private life unsullied as an example to all. Honest in thought and deed, I will be exemplary in obeying the laws of the land and the By-Laws of THE GUARDIANS BROTHERHOOD, INC-THE ORIGINAL. I will harbor no grudges or hatred against anyone, as love, peace, humility, and understanding will reign in my heart. I will not take advantage of my position to promote my self-interest.",
  "I recognize the authority of my leaders and seek their guidance if necessary. In case of any misunderstanding within the Association, I will refrain from airing the same to the public. Still, I will course my concern through the proper procedure, such as the grievance machinery. I will not do any illegal or untoward activity that will put the Association in a bad light. I will take responsibility for my action without passing the blame to others or trying to evade personal liability.",
  "I will constantly strive to achieve these objectives and ideals, dedicating myself before God and my chosen Association, THE GUARDIANS BROTHERHOOD, INC.-THE ORIGINAL."
];

export const CODE_OF_ETHICS_BULLETS = [
  "Adhere to its seven (7) guiding principles of brotherhood, discipline, equality, service, peace, justice, and integrity.",
  "Treat my fellow officers/members equally with the utmost respect the way I respect myself and want others to respect me.",
  "Respect the women, the elders, and persons in authority; respect the Constitutional rights of everyone.",
  "Help my fellow officers/members in times of need to the best of my capability.",
  "Perform the job inherent to my position diligently, honestly, and in good faith.",
  "Continuously uphold the honor and integrity of the Association.",
  "Keep my private life unsullied as an example to all, honest in thought and deed.",
  "Harbor no grudges or hatred against anyone, as love, peace, humility, and understanding will reign in my heart.",
  "Never take advantage of my position to promote self-interest.",
  "Course any internal misunderstandings through the proper grievance machinery and refrain from airing them to the public."
];

export const HISTORY_TIMELINE = [
  {
    year: "1976",
    title: "Diablo Squad Formation",
    description: "The movement begins in the jungles of Mindanao as the military unit Diablo Squad, founded by the legendary Leborio Jangao Jr., known as 'BFG ABRAHAM' — the Brain and Father of all GUARDIANS."
  },
  {
    year: "1984",
    title: "Official SEC Registration",
    description: "On December 10, 1984, The Guardians Brotherhood, Inc. is officially registered with the SEC as a peaceful civil-military legal organization under Registration No. 123899, following the transformation from DSCB (Diablo Squad Crime Buster)."
  },
  {
    year: "Today",
    title: "Reform & Unity",
    description: "Under the leadership of International Chairman UPMF CARLOMAGNO, the organization is implementing reforms to return to its roots, eradicate internal disputes, and unite true brothers and sisters worldwide."
  }
];

export const LEADERSHIP_DATA = [
  {
    name: "ELPIDIO “UPMF CARLOMAGNO” SELETARIA JR., LLB.",
    role: "International Chairman",
    subtitle: "Founder & Head Executive Officer",
    description: "One of the original Incorporators of 1984, guiding TGBI-TO with wisdom, unity, and reform."
  },
  {
    name: "MF ALAMID",
    role: "Founding Member & Pioneer Leader",
    subtitle: "Pioneer of the Brotherhood",
    description: "Pioneer of the Brotherhood, whose vision, courage, and dedication laid the foundation for our organization and leads the new breed of reformers."
  },
  {
    name: "MF PROGRAMMER / Oscar Sinco Ozoa",
    role: "International Secretary",
    subtitle: "International Executive Secretary",
    description: "Respected elder and leader, committed to upholding the principles, administrative records, and traditions of TGBI-TO."
  }
];

export const JOINING_PROCESS = {
  eligibility: [
    "Filipino citizen (foreign nationals with significant contributions may be considered)",
    "At least 21 years old (for Magic Group / MG)",
    "Good standing in the community",
    "Willing to uphold the 7 Guiding Principles",
    "Must have a bona fide member as Sponsor"
  ],
  stages: [
    {
      step: 1,
      title: "Application",
      desc: "Complete official form endorsed by a Sponsor"
    },
    {
      step: 2,
      title: "Presentation",
      desc: "Present to local Membership Committee"
    },
    {
      step: 3,
      title: "Background Investigation (BI)",
      desc: "Verification of credentials and standing"
    },
    {
      step: 4,
      title: "Orientation Seminar",
      desc: "Introduction to principles, history, and obligations"
    },
    {
      step: 5,
      title: "Mandatory Basic Course (MBC)",
      desc: "12-hour training program (POI)"
    },
    {
      step: 6,
      title: "Indoctrination Rites",
      desc: "Final acceptance into the Brotherhood"
    }
  ]
};

export const OFFICIAL_DOCUMENTS = [
  {
    title: "TGBI-TO CBL (Amended)",
    desc: "Amended Constitution and By-Laws of TGBI-TO",
    filename: "TGBI-TO CBL (Amended).docx",
    type: "Document",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/cbl/TGBI-TO%20CBL%20(Amended).docx"
  },
  {
    title: "Amended By-Laws",
    desc: "Full text version of the Amended By-Laws with qualification guidelines",
    filename: "Amended-By-Laws.md",
    type: "Text",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/cbl/Amended-By-Laws.md"
  },
  {
    title: "Mandatory Basic Course",
    desc: "Official 12-Hour Training Program of Instruction (POI)",
    filename: "TGBI-TO MBC.docx",
    type: "Courseware",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/mbc/TGBI-TO%20MBC.docx"
  },
  {
    title: "History of GBI by UPMF Carlomagno",
    desc: "Comprehensive memoirs and official account of Diablo Squad & TGBI 1984",
    filename: "History.md",
    type: "Historical Record",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/history/History.md"
  },
  {
    title: "Official Code of Ethics",
    desc: "Organizational ethics, tenets, and moral duties of all members",
    filename: "Code-of-Ethics.md",
    type: "Legal & Ethics",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/legal/Code-of-Ethics.md"
  },
  {
    title: "The Guardians Creed & Prayer",
    desc: "Official liturgical creed, spiritual prayer, and declarations",
    filename: "Creed.md",
    type: "Guiding Principles",
    link: "https://github.com/tgbi-to/TGBI_TO/blob/main/docs/principles/Creed.md"
  }
];

export const OFFICIAL_GALLERY = [
  {
    title: "Tropang Guardians Song (TGBI-TO)",
    subtitle: "Official Brotherhood Hymn & Video Presentation",
    type: "Official Song",
    link: "https://www.youtube.com/watch?v=6ePUHwvxhDU"
  },
  {
    title: "39th Founding Anniversary Anthem",
    subtitle: "Celebration at Batangas City, Philippines - December 10, 2023",
    type: "Video",
    link: "https://www.youtube.com/watch?v=Za916BIglec"
  },
  {
    title: "Day 1 | TGBI-TO 39th Founding Anniversary",
    subtitle: "Opening ceremonies, arrival of delegates, and summit discussions",
    type: "Anniversary Event",
    link: "https://www.youtube.com/watch?v=QNmPmreOwEk"
  },
  {
    title: "Day 2 | TGBI-TO 39th Founding Anniversary",
    subtitle: "General assembly, recognition rites, and fellowship evening",
    type: "Anniversary Event",
    link: "https://www.youtube.com/watch?v=XNJ9pREwNwk"
  },
  {
    title: "STA. Catalina Guardians Night",
    subtitle: "Community celebration and fellowship album",
    type: "Photo Album",
    link: "https://photos.app.goo.gl/bh8yMtK1uniy1YK76"
  },
  {
    title: "41st Founding Anniversary Summit",
    subtitle: "Official national & international delegation gallery",
    type: "Photo Album",
    link: "https://photos.app.goo.gl/npsUKFesEFv3zzsA9"
  }
];

export const OFFICIAL_LINKS = {
  inquiryForm: "https://docs.google.com/forms/d/e/1FAIpQLSd1ykxvUvAQDeK5oMX_8cPyBtPXTPwySnPvCbAroRsYflWXyA/viewform?usp=sf_link",
  contactForm: "https://docs.google.com/forms/d/e/1FAIpQLSe5HjtwbEKrKWVJfyFFrYzUx_ksclfyo5kul03-IchxexOv-w/viewform",
  idAndCertForm: "https://docs.google.com/forms/d/e/1FAIpQLSerUSzdelAZefEeRHbA8CIMpEbbNb_1VVEEGTpFf0fQCP7Euw/viewform?usp=sf_link",
  registerChapterContacts: "https://docs.google.com/forms/d/e/1FAIpQLScPeTymetoyjtV5Q30SshvxYYqUTXc4y7XzBv9AO5MJVbtDag/viewform",
  offerNews: "https://docs.google.com/forms/d/e/1FAIpQLSdIKMYInpedFlD7XGyTmYzG5z_nCXDRun9MuNDKpZCZx8onjQ/viewform",
  startProject: "https://docs.google.com/forms/d/e/1FAIpQLScgAEjjwFyaf56FysR0jKTPCnz1jvoXxTUXdTwn698yVBDnFw/viewform"
};

export const ANNOUNCEMENTS = [
  {
    tag: "[Memo - Oct 28, 2025]",
    text: "Acknowledgment of Mandatory Remittances for the 41st Founding Anniversary, Summit, and Convention from Brunei, Qatar, and NCR Regional Chapters."
  },
  {
    tag: "[Procedure]",
    text: "Implementation of Parliamentary Procedure in all official organizational meetings."
  }
];

export const REGIONS_DATA = [
  {
    country: "Philippines",
    region: "Region 7",
    province: "Cebu",
    chapter: "Cebu City Chapter",
    path: "regions/ph/region-7/cebu/cebu-city"
  },
  {
    country: "United States",
    region: "California",
    province: "Downey",
    chapter: "Downey Chapter (OIC Jurisdiction)",
    path: "regions/us/california/downey"
  },
  {
    country: "Brunei Darussalam",
    region: "International",
    province: "Brunei",
    chapter: "Brunei Regional Chapter (Remittance Cleared)",
    path: "regions/international/brunei"
  },
  {
    country: "Qatar",
    region: "International",
    province: "Doha",
    chapter: "Qatar Regional Chapter (Remittance Cleared)",
    path: "regions/international/qatar"
  },
  {
    country: "Philippines",
    region: "NCR",
    province: "Metro Manila",
    chapter: "NCR Regional Chapters (Remittance Cleared)",
    path: "regions/ph/ncr"
  }
];
