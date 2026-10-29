export interface NewsUpdateItem {
  id: string;
  date: string;
  timestamp: number; // for exact descending sort
  title: string;
  subtitle?: string;
  category: "Circulars & Notices" | "Academic & Exams" | "Admissions" | "Achievements" | "Events & Culture" | "Governance";
  hasDocument: boolean;
  documentName?: string;
  documentSize?: string;
  documentType?: string;
  documentUrl?: string;
  sortId?: number;
  fullContent?: string[];
  noticeImage?: string;
  isLatest?: boolean;
}

export const NEWS_UPDATES_DATA: NewsUpdateItem[] = [
  {
    id: "notice-final-exam-timetable-class-xi",
    date: "November 18, 2026",
    timestamp: new Date("2026-11-18").getTime(),
    title: "TIME TABLE FOR FINAL EXAMINATION 2024–25 FOR CLASS XI",
    category: "Academic & Exams",
    hasDocument: true,
    documentName: "Time_Table_Final_Exam_Class_XI.png",
    documentSize: "200 KB",
    documentType: "IMAGE",
    noticeImage: "/images/news/time-table-class-xi.png",
    isLatest: true,
  },
  {
    id: "notice-2026-11-10",
    date: "November 10, 2026",
    timestamp: new Date("2026-11-10").getTime(),
    title: "CBSE Mid-Term Examination Results & Report Card Distribution",
    subtitle: "Official declaration of mid-term assessment outcomes for Classes VI to XII with scheduled parent-teacher meeting slots.",
    category: "Academic & Exams",
    hasDocument: true,
    documentName: "CBSE_MidTerm_Results_Summary_2026-27.pdf",
    documentSize: "420 KB",
    documentType: "PDF",
    isLatest: true,
    fullContent: [
      "The Academic Assessment Council of Kids' Foundation School has formally compiled and ratified the Mid-Term Examination results for the academic session 2026-27 across Middle, Secondary, and Senior Secondary stages (Classes VI through XII).",
      "Individual report cards, subject-wise mark rubrics, and formative learning observations will be distributed during the scheduled Parent-Teacher Meeting (PTM) on Saturday, November 18, 2026, from 8:30 AM to 1:00 PM. Parents and guardians must accompany their wards in complete school uniform.",
      "Subject-wise remedial clinic schedules and guidance sessions will also be provided during the meeting for students requiring reinforcement in mathematics, science, and languages.",
    ],
  },
  {
    id: "notice-2026-11-03",
    date: "November 3, 2026",
    timestamp: new Date("2026-11-03").getTime(),
    title: "Admissions Open for Academic Session 2027-28 (Pre-Nursery to Class XI)",
    subtitle: "Registration process, prospectus availability, entrance evaluation guidelines, and timeline for prospective new admissions.",
    category: "Admissions",
    hasDocument: true,
    documentName: "Admission_Guidelines_Prospectus_2027-28.pdf",
    documentSize: "1.8 MB",
    documentType: "PDF",
    fullContent: [
      "Kids' Foundation School, Imphal announces the commencement of registration for new student admissions for the upcoming academic year 2027-28. Admissions are open for Pre-Nursery, Nursery, Kindergarten, and Classes I to IX & Class XI (Science & Humanities streams).",
      "The registration window is active from November 3, 2026 to January 15, 2027. Application forms and the official school prospectus can be obtained at the school administrative counter (9:00 AM - 2:00 PM on working days) or downloaded directly online.",
      "Interactive evaluation sessions for foundational stage applicants will begin on December 5, 2026. Merit and sports scholarships are available for deserving candidates.",
    ],
  },
  {
    id: "notice-2026-10-25",
    date: "October 25, 2026",
    timestamp: new Date("2026-10-25").getTime(),
    title: "State Level Cultural & Dance Festival: Kids' Foundation Wins 3 Gold Medals",
    subtitle: "Outstanding performance by school performing arts troupe at the 34th Manipur State Interschool Cultural Meet.",
    category: "Achievements",
    hasDocument: false,
    fullContent: [
      "The management, faculty, and student fraternity proudly congratulate the Kids' Foundation Performing Arts Guild for their historic victory at the 34th Manipur State Inter-School Cultural Competition held at Maharaj Chandrakirti Auditorium, Imphal.",
      "Our classical troupe clinched Gold in the Traditional Folk Dance division (featuring a 16-member student ensemble), while the school choir secured Gold in Choral Harmony. Class IX student Linthoi Chanu was awarded the Special Juror's Prize for Best Vocal Artistry.",
      "The school troupe will represent Manipur at the National Youth Performing Festival in New Delhi in January 2027.",
    ],
  },
  {
    id: "notice-2026-10-18",
    date: "October 18, 2026",
    timestamp: new Date("2026-10-18").getTime(),
    title: "Important Notice: Second Quarter Tuition & Transportation Fee Schedule",
    subtitle: "Mandatory guidelines and payment deadlines for second quarter institutional dues for the 2026-27 academic term.",
    category: "Circulars & Notices",
    hasDocument: true,
    documentName: "Fee_Payment_Schedule_Q2_2026-27.pdf",
    documentSize: "310 KB",
    documentType: "PDF",
    fullContent: [
      "Parents and guardians are kindly reminded that second quarterly school tuition and transportation dues (covering October through December 2026) are scheduled for settlement on or before October 31, 2026.",
      "Payments can be completed online through the school payment gateway using UPI, RuPay, or Net Banking, or physically at the school fee counter between 9:30 AM and 1:30 PM on working days. Please ensure payment receipts are retained for your records.",
      "For sibling concession applications or payment extension requests, please visit the Accounts Bureau Desk (Window 2) before October 28, 2026.",
    ],
  },
  {
    id: "notice-2026-09-28",
    date: "September 28, 2026",
    timestamp: new Date("2026-09-28").getTime(),
    title: "Smart Classroom Digital Learning Initiative Rolled Out Across All Wings",
    subtitle: "Installation of next-generation interactive digital displays and experiential STEM software across Classes I through XII.",
    category: "Circulars & Notices",
    hasDocument: false,
    fullContent: [
      "As part of our continuous commitment to modern, experiential pedagogy, Kids' Foundation has completed the full-scale deployment of 32 new 75-inch ultra-high-definition interactive displays across classrooms from Class I to Class XII.",
      "The panels integrate NEP 2020 aligned digital content, 3D STEM simulations, interactive geometry toolkits, and language labs, equipped with certified low-blue-light hardware for optimal eye comfort.",
      "Faculty members have concluded specialized pedagogical training to seamlessly integrate these interactive digital resources into everyday classroom instruction.",
    ],
  },
  {
    id: "notice-2026-09-12",
    date: "September 12, 2026",
    timestamp: new Date("2026-09-12").getTime(),
    title: "District Taekwondo Championship: Kids' Foundation Clinches 8 Medals",
    subtitle: "Magnificent display of martial discipline, agility, and sportsmanship at the Imphal West District Meet.",
    category: "Achievements",
    hasDocument: true,
    documentName: "Taekwondo_Championship_Medal_Tally_2026.pdf",
    documentSize: "260 KB",
    documentType: "PDF",
    fullContent: [
      "Our school martial arts athletes delivered a stellar performance at the Imphal West District Taekwondo Championship, winning 4 Gold, 2 Silver, and 2 Bronze medals across Cadet and Sub-Junior sparring divisions.",
      "Coached by Master H. Tombi Singh (4th Dan Black Belt), the team also received the prestigious 'Best Disciplined Contingent' trophy among 24 participating schools. Five medalists have now qualified to represent the district at the upcoming Manipur State Games.",
      "A formal felicitation ceremony will take place during the morning assembly on Monday to honor all participating athletes and their coaches.",
    ],
  },
  {
    id: "notice-2026-09-01",
    date: "September 1, 2026",
    timestamp: new Date("2026-09-01").getTime(),
    title: "New Academic Year 2026–27 Orientation Seminar & Welcome Note",
    subtitle: "Founder and Principal's message to incoming and continuing students detailing academic expectations and values.",
    category: "Circulars & Notices",
    hasDocument: true,
    documentName: "Welcome_Orientation_Guidelines_2026-27.pdf",
    documentSize: "510 KB",
    documentType: "PDF",
    fullContent: [
      "The Principal and entire faculty of Kids' Foundation School warmly welcome all returning and newly enrolled students and their families to the commencement of the academic term 2026-27.",
      "School gates open daily at 7:45 AM, and morning assembly starts strictly at 8:15 AM. Full uniform specifications, including black polished shoes and proper school badges, must be adhered to from the first day of attendance.",
      "Weekly co-curricular club activities, sports training, and library research sessions will commence in full schedule from the second week of September.",
    ],
  },
  {
    id: "notice-2026-08-18",
    date: "August 18, 2026",
    timestamp: new Date("2026-08-18").getTime(),
    title: "Class XI Final Board Preparation & Unit Evaluation Timetable",
    subtitle: "Complete subject-wise examination schedule, syllabus portions, and examination center code instructions.",
    category: "Academic & Exams",
    hasDocument: true,
    documentName: "Class_XI_Examination_Timetable_Aug2026.pdf",
    documentSize: "340 KB",
    documentType: "PDF",
    fullContent: [
      "The Board Examination Cell has released the timetable for the Class XI Term Examinations for Science and Humanities cohorts. Assessments will be held from September 4 to September 19, 2026, in the Central Examination Hall from 9:30 AM to 12:30 PM.",
      "A mandatory 15-minute question-paper reading time will precede each assessment. Admit cards will be distributed from the academic office on August 28, 2026. Students must carry their school ID and original admit card to all sessions.",
      "Subject portions, mark distribution blueprints, and sample question paper patterns are detailed in the official schedule document attached below.",
    ],
  },
  {
    id: "notice-2026-08-10",
    date: "August 10, 2026",
    timestamp: new Date("2026-08-10").getTime(),
    title: "Class X CBSE Board Examination Results – 100% Pass Record Conferred",
    subtitle: "School records another flawless 100% pass rate in CBSE Secondary School Examination with 42 distinctions.",
    category: "Academic & Exams",
    hasDocument: true,
    documentName: "Class_X_CBSE_Results_Merit_Roll_2026.pdf",
    documentSize: "680 KB",
    documentType: "PDF",
    fullContent: [
      "Kids' Foundation School, Imphal is delighted to announce that 100% of our students have successfully qualified the Central Board of Secondary Education (CBSE) Class X Board Examinations, maintaining our 21-year unbroken 100% pass record.",
      "Out of the total cohort, 42% achieved aggregate scores above 90%, with 14 students achieving perfect 100/100 scores in Mathematics and Science. School topper Master Th. Yaiphaba Meitei led the state merit roll with 98.4% aggregate.",
      "The School Managing Committee extends heartfelt gratitude to all educators, parents, and students whose collaborative diligence produced these stellar outcomes.",
    ],
  },
  {
    id: "notice-2026-07-28",
    date: "July 28, 2026",
    timestamp: new Date("2026-07-28").getTime(),
    title: "Scholarship Awardees Declared – Academic Session 2026–27",
    subtitle: "Institutional merit and need-based tuition fee waivers awarded to 28 deserving student candidates.",
    category: "Achievements",
    hasDocument: true,
    documentName: "Merit_Scholarship_Awardees_List_2026-27.pdf",
    documentSize: "290 KB",
    documentType: "PDF",
    fullContent: [
      "The Kids' Foundation Educational Trust has published the approved list of scholarship beneficiaries for the academic year 2026-27 across three categories: Academic Merit (12 awards), Sports Excellence (8 awards), and Need-Based Assistance (8 awards).",
      "Selected students from Classes IV through XII receive full or partial tuition fee exemptions to support their educational progress and foster ongoing excellence.",
      "Formal merit certificates and allotment letters will be conferred during the Independence Day Special Assembly.",
    ],
  },
  {
    id: "notice-2026-07-15",
    date: "July 15, 2026",
    timestamp: new Date("2026-07-15").getTime(),
    title: "Central Library Modernization – 2,000+ New Reference Volumes Added",
    subtitle: "Significant expansion of reference reading resources, encyclopedias, and regional literature in the school library.",
    category: "Circulars & Notices",
    hasDocument: false,
    fullContent: [
      "The Central Library of Kids' Foundation has completed an extensive expansion, adding over 2,000 new volumes spanning science encyclopedias, world literature, competitive exam prep, and Manipuri folklore.",
      "A computerized catalogue and barcode system has been activated for effortless book browsing and reservation. The library is open Monday through Saturday from 8:00 AM to 3:30 PM with a dedicated early readers' corner.",
      "All students are encouraged to make active use of the expanded reading halls and newly subscribed educational journals.",
    ],
  },
];
