import { IMAGES } from "@/data/images";

export interface Club {
  id: string;
  name: string;
  tagline?: string;
  category: "STEM & Innovation" | "Arts & Culture" | "Sports & Wellness" | "Literary & Debate" | "Social & Eco";
  gradeLevel?: string;
  meetingSchedule: string;
  location: string;
  mentor: string;
  mentorRole: string;
  membersCount: number;
  description: string;
  badgeColor: string;
  accentGradient: string;
  image: string;
  keyActivities?: string[];
  learningOutcomes?: string[];
  recentHighlight: string;
}

export const CLUBS_DATA: Club[] = [
  {
    id: "stem-robotics",
    name: "Robotics & STEM Innovators Club",
    tagline: "Empowering young builders with coding, robotics, and creative problem solving",
    category: "STEM & Innovation",
    gradeLevel: "Classes IV to X",
    meetingSchedule: "Wednesday & Saturday (2:30 PM - 4:00 PM)",
    location: "Computer & Advanced STEM Innovation Lab",
    mentor: "Mr. K. Bikram Singh",
    mentorRole: "Head of Computer Science & Tinkering Lab",
    membersCount: 48,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    accentGradient: "from-blue-600 to-indigo-700",
    image: IMAGES.gallery.scienceLab,
    description:
      "A hands-on technology ecosystem where students bring code to life. Learners explore algorithmic thinking with Scratch and Python, build autonomous robots with sensor kits, design 3D models, and experiment with IoT concepts.",
    keyActivities: [
      "Lego Mindstorms EV3 & Arduino sensor programming",
      "Block-based Scratch and Python game development",
      "Line-following and obstacle-avoidance robot prototyping",
      "Annual Inter-School Science & Tech Fair preparation",
      "Basic electronics, circuitry, and 3D printing demos",
    ],
    learningOutcomes: [
      "Logical algorithmic reasoning and systematic debugging",
      "Hands-on electrical safety and circuit building",
      "Collaborative project management in student engineering teams",
    ],
    recentHighlight: "Won 1st Runner-Up at Manipur State Youth Robotics Olympiad 2025.",
  },
  {
    id: "eco-warriors",
    name: "Eco Warriors & Green Nature Club",
    tagline: "Nurturing environmental stewardship, biodiversity care, and sustainable habits",
    category: "Social & Eco",
    gradeLevel: "Classes II to X",
    meetingSchedule: "Tuesday & Friday (3:00 PM - 4:30 PM)",
    location: "Campus Botanical Garden & Eco Zone",
    mentor: "Mrs. L. Premila Devi",
    mentorRole: "Senior Environmental Science Educator",
    membersCount: 64,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentGradient: "from-emerald-600 to-teal-700",
    image: IMAGES.aboutCampus,
    description:
      "Dedicated to environmental conservation on and off campus. Members cultivate the school herbal garden, monitor zero-waste initiatives, lead seed-ball dispersion drives, and participate in nature trails around Imphal Valley.",
    keyActivities: [
      "Indigenous herbal garden curation and tree-tagging",
      "Organic kitchen waste composting and vermicomposting",
      "Single-use plastic audit and campus recycling drives",
      "Nature walks, bird spotting, and Loktak Lake conservation campaigns",
      "Green Chronicle newsletter contributions and environmental debates",
    ],
    learningOutcomes: [
      "Ecological literacy and knowledge of indigenous biodiversity",
      "Practical sustainable living practices for school and home",
      "Civic leadership in community environmental campaigns",
    ],
    recentHighlight: "Planted 250 indigenous saplings along Ghari Airport Corridor in 2025.",
  },
  {
    id: "literary-debate",
    name: "Literary, Debate & Model UN Society",
    tagline: "Cultivating articulate speakers, critical thinkers, and expressive writers",
    category: "Literary & Debate",
    gradeLevel: "Classes V to X",
    meetingSchedule: "Monday & Thursday (2:45 PM - 4:15 PM)",
    location: "School Audio-Visual Seminar Hall",
    mentor: "Ms. T. Romita Chanu",
    mentorRole: "Faculty of English & Debating Society Convener",
    membersCount: 42,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    accentGradient: "from-purple-600 to-indigo-800",
    image: IMAGES.academic.seniorSecondary,
    description:
      "The premier oratorical and writing forum at Kids' Foundation. Students hone public speaking, master Oxford-style and parliamentary debating, simulate UN diplomatic councils, and author creative prose.",
    keyActivities: [
      "Inter-house and state-level debate tournaments",
      "Model United Nations (MUN) simulation caucuses",
      "Creative writing workshops, slam poetry, and essay contests",
      "Book reviews, literary quizzes, and vocabulary challenges",
      "School assembly news reporting and podcast broadcasting",
    ],
    learningOutcomes: [
      "Persuasive public speaking without stage anxiety",
      "Fact-checking, evidence synthesis, and structured argumentation",
      "Global affairs literacy and diplomatic conflict resolution",
    ],
    recentHighlight: "Outstanding Delegation Trophy at Imphal Interschool MUN 2025.",
  },
  {
    id: "creative-arts",
    name: "Creative Fine Arts & Traditional Crafts Guild",
    tagline: "Unleashing imagination through fine arts, clay modeling, and indigenous crafts",
    category: "Arts & Culture",
    gradeLevel: "Classes I to X",
    meetingSchedule: "Saturday (9:30 AM - 12:00 PM)",
    location: "Art Studio & Crafts Workshop",
    mentor: "Mr. O. Rajen Sharma",
    mentorRole: "Master of Fine Arts & Creative Director",
    membersCount: 56,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    accentGradient: "from-amber-500 to-orange-600",
    image: IMAGES.academic.primary,
    description:
      "A joyful, vibrant studio space where students experiment with diverse visual arts mediums. From watercolors and charcoal sketches to traditional Manipuri handloom pattern designing and clay sculpture, creativity knows no bounds.",
    keyActivities: [
      "Watercolor, acrylic painting, and charcoal sketching",
      "Clay modeling, pottery shaping, and papier-mâché crafts",
      "Manipuri traditional decorative crafts and puppet making",
      "Annual Art Exhibition showcase in the central foyer",
      "Calligraphy, poster making, and festive campus decor",
    ],
    learningOutcomes: [
      "Fine motor coordination, spatial harmony, and visual literacy",
      "Appreciation for traditional regional craftsmanship and heritage",
      "Emotional expression through color, texture, and form",
    ],
    recentHighlight: "Curated 120 student art pieces for the Annual Cultural Day Exhibition.",
  },
  {
    id: "music-performing-arts",
    name: "Harmony Music & Performing Arts Troupe",
    tagline: "Discovering rhythm, melodies, and stage presence through music and theatrical arts",
    category: "Arts & Culture",
    gradeLevel: "Classes I to X",
    meetingSchedule: "Wednesday & Friday (3:00 PM - 4:30 PM)",
    location: "Performing Arts Hall & Music Room",
    mentor: "Mrs. N. Sanatombi Devi",
    mentorRole: "Cultural Director & Performing Arts Faculty",
    membersCount: 50,
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    accentGradient: "from-rose-600 to-pink-700",
    image: IMAGES.gallery.dance,
    description:
      "Combining musical rhythm, classical and contemporary dance, and theatrical drama. Students learn vocal pitch control, explore traditional Manipuri folk instruments (Pena, Pung) alongside modern keyboards and guitars.",
    keyActivities: [
      "School choir training and vocal harmony exercises",
      "Traditional Manipuri dance forms (Ras Lila, Thabal Chongba steps)",
      "Contemporary drama, mime, and theatrical stagecraft",
      "Percussion and instrumental training (keyboard, drums, guitar)",
      "Annual day thematic musical drama production",
    ],
    learningOutcomes: [
      "Rhythmic synchronization, stage confidence, and vocal projection",
      "Deep emotional intelligence and theatrical character portrayal",
      "Cultural pride through classical regional performing traditions",
    ],
    recentHighlight: "Produced the critically acclaimed musical drama 'Shumang Leela' at Annual Day.",
  },
  {
    id: "martial-arts-taekwondo",
    name: "Tae-Kwon-Do & Martial Arts Academy",
    tagline: "Instilling discipline, physical agility, mental resilience, and self-defense",
    category: "Sports & Wellness",
    gradeLevel: "Classes I to X",
    meetingSchedule: "Tuesday, Thursday & Saturday (6:30 AM - 7:45 AM)",
    location: "School Martial Arts Arena / Multipurpose Court",
    mentor: "Master H. Tombi Singh",
    mentorRole: "Chief Martial Arts Coach (Black Belt 4th Dan)",
    membersCount: 72,
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    accentGradient: "from-red-600 to-rose-700",
    image: IMAGES.gallery.taekwondo,
    description:
      "A rigorous, discipline-centered martial arts program emphasizing self-defense, focus, balance, and athletic agility. Students prepare for belt grading ceremonies and state and national CBSE competitions.",
    keyActivities: [
      "Kicking, punching, blocking drills, and Taekwondo Poomsae forms",
      "Practical self-defense tactics and situational awareness drills",
      "Sparring sessions with complete protective gear",
      "Official belt grading examinations supervised by accredited judges",
      "Physical flexibility, cardiovascular endurance, and core conditioning",
    ],
    learningOutcomes: [
      "Unshakable self-confidence, respect, and emotional self-control",
      "High cardiovascular endurance, agility, and reflex coordination",
      "Principled understanding that martial arts is purely for defense and character",
    ],
    recentHighlight: "Clinched 6 Gold and 4 Silver medals at the All-Manipur Interschool Championship.",
  },
  {
    id: "chess-mind-sports",
    name: "Chess & Mind Sports Society",
    tagline: "Sharpening strategic forethought, patience, and concentration on the 64 squares",
    category: "Sports & Wellness",
    gradeLevel: "Classes II to X",
    meetingSchedule: "Monday & Wednesday (3:00 PM - 4:15 PM)",
    location: "Indoor Mind Sports Arena",
    mentor: "Mr. S. Rajesh Singh",
    mentorRole: "FIDE Rated Coach & Mathematics Faculty",
    membersCount: 36,
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    accentGradient: "from-slate-700 to-slate-900",
    image: IMAGES.gallery.examHall,
    description:
      "A quiet haven for deep tactical calculations and friendly rivalries. Students master chess openings, middlegame tactics, endgame techniques, and test their logical prowess with timed blitz matches and puzzle battles.",
    keyActivities: [
      "Opening repertoire analysis and grandmaster game breakdowns",
      "Tactical puzzle tournaments and rapid chess ladders",
      "Simultaneous exhibition matches against faculty masters",
      "Inter-house chess leagues and CBSE cluster qualifiers",
      "Cognitive logic games, Sudoku, and Rubik’s cube speedsolving",
    ],
    learningOutcomes: [
      "Anticipatory calculation and consequence mapping",
      "Grace in victory and emotional composure under time pressure",
      "Prolonged concentration span and spatial problem solving",
    ],
    recentHighlight: "Student Master represented Manipur at CBSE National Chess Championship 2025.",
  },
  {
    id: "heritage-community",
    name: "Young Heritage & Social Service Club",
    tagline: "Connecting with cultural roots, civic responsibility, and community outreach",
    category: "Social & Eco",
    gradeLevel: "Classes V to X",
    meetingSchedule: "Every 2nd & 4th Saturday (10:00 AM - 1:00 PM)",
    location: "Social Sciences Center & Off-Campus Field Sites",
    mentor: "Mrs. M. Sunita Devi",
    mentorRole: "Social Sciences Coordinator & Community Outreach Head",
    membersCount: 45,
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    accentGradient: "from-teal-600 to-cyan-800",
    image: IMAGES.gallery.schoolGroup,
    description:
      "Committed to preserving the rich historical heritage of Manipur while fostering empathy and civic service. Students organize visits to eldercare homes, run book-donation drives, and explore ancient cultural monuments.",
    keyActivities: [
      "Historical monument preservation visits (Kangla Fort, Langthabal)",
      "Community cleanliness drives and literacy outreach for underprivileged kids",
      "Festive food and winter garment distribution drives",
      "Oral history preservation: recording folk tales from village elders",
      "Road safety and civic manners awareness campaigns",
    ],
    learningOutcomes: [
      "Empathy, altruism, and active civic responsibility",
      "Deep appreciation of regional Manipuri history and folklore",
      "Organizational skills in executing social welfare projects",
    ],
    recentHighlight: "Donated 500+ storybooks to rural community libraries across Manipur.",
  },
];
