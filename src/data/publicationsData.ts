export interface Publication {
  id: string;
  title: string;
  category: "Magazine & Newsletter" | "Academic Handbook" | "Annual Report" | "Parent & Student Guide";
  edition: string;
  publishedDate: string;
  academicYear: string;
  pages: number;
  fileSize: string;
  format: "PDF";
  language: string;
  description: string;
  highlights: string[];
  coverImage?: string;
  pdfUrl?: string;
  downloadFileName: string;
  editorOrAuthor: string;
  featured?: boolean;
}

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-budding-sprouts-2026",
    title: "The Budding Sprouts - Annual School Magazine",
    category: "Magazine & Newsletter",
    edition: "Vol. XIX, 2025-26",
    publishedDate: "January 15, 2026",
    academicYear: "2025-2026",
    pages: 72,
    fileSize: "14.2 MB",
    format: "PDF",
    language: "English & Manipuri",
    coverImage: "/images/news-cultural-meet.jpg",
    editorOrAuthor: "School Editorial Board & Literary Guild",
    featured: true,
    description:
      "The flagship annual publication of Kids' Foundation School celebrating student creativity, original poetry, creative essays, artwork, faculty reflections, and school achievements across sports, academics, and performing arts.",
    highlights: [
      "Founder's & Principal's Annual Keynote",
      "Student Literary Section: 40+ Original Poems & Short Stories",
      "Visual Arts Showcase: Paintings from Fine Arts Guild",
      "CBSE Board Achievers & Merit Roll of Honour",
      "Annual Sports & Cultural Meet Photo Journal",
      "Alumni Reflections & Faculty Contributions",
    ],
    downloadFileName: "Kids_Foundation_The_Budding_Sprouts_2025_26.pdf",
  },
  {
    id: "pub-academic-handbook-2026-27",
    title: "Curriculum & Academic Assessment Handbook",
    category: "Academic Handbook",
    edition: "Session 2026-27",
    publishedDate: "February 01, 2026",
    academicYear: "2026-2027",
    pages: 48,
    fileSize: "4.8 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/gallery-exam-hall.jpg",
    editorOrAuthor: "Academic Council & Curriculum Committee",
    featured: true,
    description:
      "An in-depth guide detailing CBSE curriculum structures, competency-based learning modules, continuous assessment blueprints, examination schedules, and subject weightages across Foundational, Preparatory, Middle, and Secondary stages.",
    highlights: [
      "NEP 2020 Pedagogical Framework Alignment",
      "Subject-wise Term Blueprint & Grading Criteria",
      "Internal Assessment & Project Work Guidelines",
      "Co-Scholastic & Skill Development Pathways",
      "Academic Calendar with Key Assessment Dates",
    ],
    downloadFileName: "Kids_Foundation_Curriculum_Handbook_2026_27.pdf",
  },
  {
    id: "pub-green-chronicle-vol4",
    title: "The Green Chronicle - Science & Eco-Club Bulletin",
    category: "Magazine & Newsletter",
    edition: "Issue 4, Winter 2025",
    publishedDate: "December 20, 2025",
    academicYear: "2025-2026",
    pages: 28,
    fileSize: "6.5 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/gallery-science-lab.jpg",
    editorOrAuthor: "Eco Warriors Club & Dept. of Science",
    featured: false,
    description:
      "A student-edited science and environmental newsletter spotlighting campus green initiatives, biodiversity preservation studies in Manipur, renewable energy projects, and tips for zero-waste living.",
    highlights: [
      "Campus Herbal Garden Flora Documentation",
      "Student Innovations at Regional Science Fair",
      "Loktak Lake Ecosystem Awareness Article",
      "DIY Sustainable Composting for Households",
      "Young Environmentalist Awards & Interviews",
    ],
    downloadFileName: "Kids_Foundation_Green_Chronicle_Vol4.pdf",
  },
  {
    id: "pub-annual-sports-souvenir-2026",
    title: "Annual Sports & Cultural Meet Souvenir",
    category: "Annual Report",
    edition: "20th Annual Meet Edition",
    publishedDate: "November 28, 2025",
    academicYear: "2025-2026",
    pages: 56,
    fileSize: "18.1 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/gallery-taekwondo.jpg",
    editorOrAuthor: "Physical Education Dept. & Cultural Cell",
    featured: false,
    description:
      "A commemorative photo-rich publication documenting the thrilling 20th Annual Sports & Cultural Meet. Contains complete medal tallies, record-breaking performances, Taekwondo demonstrations, and traditional dance performances.",
    highlights: [
      "Complete House-wise Points Table & Champions Trophy",
      "Track & Field New School Records",
      "Martial Arts (Taekwondo & Karate) Medal Winners",
      "Traditional Manipuri Folk Dance Extravaganza",
      "Parent & Teacher Exhibition Matches",
    ],
    downloadFileName: "Kids_Foundation_Sports_Souvenir_2025_26.pdf",
  },
  {
    id: "pub-parent-student-guide-2026",
    title: "Parent & Student Information Handbook",
    category: "Parent & Student Guide",
    edition: "Updated 2026-27 Edition",
    publishedDate: "January 05, 2026",
    academicYear: "2026-2027",
    pages: 36,
    fileSize: "3.2 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/academic-primary.jpg",
    editorOrAuthor: "School Administration & Student Welfare Cell",
    featured: true,
    description:
      "Essential institutional guide outlining school timings, code of conduct, uniform guidelines, transport routes, healthcare facilities, digital portal access, and parent-teacher communication protocols.",
    highlights: [
      "School Timing, Bell Schedule & Attendance Norms",
      "School Uniform & Dress Code Specifications",
      "Bus Routes, Pickup Nodes & Fleet Safety Norms",
      "Infirmary & Emergency Healthcare Guidelines",
      "Parent-School Communication Protocol & Visiting Hours",
    ],
    downloadFileName: "Kids_Foundation_Parent_Student_Handbook_2026.pdf",
  },
  {
    id: "pub-foundational-learning-framework",
    title: "Foundational Stage Pedagogical Framework (Pre-Nursery to Grade II)",
    category: "Academic Handbook",
    edition: "NEP 2020 NCF-FS Aligned",
    publishedDate: "October 14, 2025",
    academicYear: "2025-2026",
    pages: 40,
    fileSize: "5.1 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/academic-early-years.jpg",
    editorOrAuthor: "Early Childhood Care & Education (ECCE) Faculty",
    featured: false,
    description:
      "A comprehensive guide on play-way and toy-based learning methodologies practiced at Kids' Foundation for developing foundational literacy, numeracy, social-emotional development, and physical motor skills in early learners.",
    highlights: [
      "Panchakosha Holistic Child Development Model",
      "Play-Based Numeracy & Early Literacy Modules",
      "Sensory Play & Fine Motor Coordination Activities",
      "Assessment Without Exam Stress: Observation Rubrics",
      "Guidance for Parents on Home Learning Environments",
    ],
    downloadFileName: "Kids_Foundation_Foundational_Stage_Framework.pdf",
  },
  {
    id: "pub-young-voices-anthology",
    title: "Young Voices - Literary Guild Anthology",
    category: "Magazine & Newsletter",
    edition: "Spring Edition 2026",
    publishedDate: "February 20, 2026",
    academicYear: "2025-2026",
    pages: 44,
    fileSize: "7.8 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/news-scholarship.jpg",
    editorOrAuthor: "The Kids' Foundation Literary & Debate Society",
    featured: false,
    description:
      "A curated collection of short fiction, haikus, reflective prose, and argumentative essays penned exclusively by students from Grades VI to X, celebrating adolescent expression and critical thinking.",
    highlights: [
      "Winning Entries from the Inter-School Creative Writing Fest",
      "Bilingual Poetry Section (English & Meiteilon)",
      "Book Reviews & Cinematic Critiques by Students",
      "Debate Transcripts on Youth & Artificial Intelligence",
      "Illustrations and Sketches by Student Artists",
    ],
    downloadFileName: "Kids_Foundation_Young_Voices_Anthology_2026.pdf",
  },
  {
    id: "pub-annual-governance-report-2025",
    title: "Annual Institutional & Academic Progress Report",
    category: "Annual Report",
    edition: "Annual Review 2024-25",
    publishedDate: "September 30, 2025",
    academicYear: "2024-2025",
    pages: 52,
    fileSize: "8.9 MB",
    format: "PDF",
    language: "English",
    coverImage: "/images/campus-aerial.jpg",
    editorOrAuthor: "School Managing Committee (SMC)",
    featured: false,
    description:
      "Official institutional report presented to the School Managing Committee and stakeholders, detailing academic board results, infrastructure upgrades, faculty professional development programs, and future developmental horizons.",
    highlights: [
      "CBSE Secondary School Examination Performance Summary",
      "Campus Infrastructure Upgrades: New STEM Lab & Library Wing",
      "Faculty Capacity Building & Pedagogical Workshops",
      "Community Outreach Initiatives & Scholarships Conferred",
      "Financial Prudence & Development Plan 2025-2030",
    ],
    downloadFileName: "Kids_Foundation_Annual_Institutional_Report_2025.pdf",
  },
];
