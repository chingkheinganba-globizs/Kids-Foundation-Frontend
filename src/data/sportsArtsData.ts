import { IMAGES } from "@/data/images";

export interface ActivityItem {
  name: string;
  description: string;
}

export interface GalleryCard {
  title: string;
  category: string;
  image: string;
}

export const SPORTS_ARTS_DATA = {
  banner: {
    title: "Sports & Arts",
    breadcrumb: ["About", "Sports & Arts"],
  },

  intro: {
    label: "SPORTS & ARTS",
    title: "Sports & Arts",
    lead: "SPORTS AND SPORTSMANSHIP – we aim to encourage both in our students. As a part of our pursuit of truly holistic education, Kids’ Foundation offers an enjoyable balance between physical activity and learning. Physical Education (P.E.) at Kids’ Foundation is an integral part of our curricula.",
  },

  activities: [
    {
      name: "YOGA",
      description:
        "To help concentration and breathing. Yoga means union of body with spirit. Learning Yoga in early life will prove advantages for the child in later life.",
    },
    {
      name: "AEROBICS",
      description:
        "To help the students to develop a liking for physical movements and rhythm. It also helps in the development of gross and fine motor skills through movements, music and dance.",
    },
    {
      name: "MARTIAL ARTS",
      description:
        "Martial arts is a sports basically used for combat and for physical and spiritual development. It is also used for self-defence. Kids’ Foundation has a regular course of various martial arts like karate, taekwondo, judo etc.",
    },
    {
      name: "WATER-POOL",
      description:
        "KIDS’ FOUNDATION has a pool for water games. The pool is constructed to fit their height and the level of water is kept very shallow. Pool games will help the child to overcome the fear of water and will also help in learning how to swim.",
    },
    {
      name: "FINE ARTS",
      description:
        "Art teacher teaches innovative and creative thinking. It allows them to think of new ideas.",
    },
    {
      name: "PERFORMING ARTS",
      description:
        "Performing arts such as Drama, Music and Dance encourages students to develop their artistic expressions.",
    },
  ],

  facilitiesCallout: [
    "At our school, we pride ourselves on providing top-notch sports and arts facilities that cater to the diverse interests and talents of our students. Our sports facilities are designed to promote physical fitness, teamwork, and sportsmanship across various disciplines.",
    "In the realm of sports, we offer a wide range of options to suit every interest and skill level. Football enthusiasts can hone their skills on our well-maintained football field, while basketball lovers can enjoy competitive matches on our indoor and outdoor courts. For those who prefer indoor games, we have dedicated spaces for chess and carrom, fostering strategic thinking and friendly competition among students.",
  ],

  gallery: [
    {
      title: "Karate Training",
      category: "Sports",
      image: IMAGES.gallery.taekwondo,
    },
    {
      title: "Cultural Performances",
      category: "Culture",
      image: IMAGES.gallery.dance,
    },
    {
      title: "Innovation & Creativity",
      category: "Education",
      image: IMAGES.gallery.scienceLab,
    },
    {
      title: "Inter House Football",
      category: "Sports",
      image: IMAGES.gallery.schoolGroup,
    },
    {
      title: "Cultural Day",
      category: "Culture",
      image: IMAGES.news.culturalMeet,
    },
    {
      title: "Basketball",
      category: "Sports",
      image: IMAGES.aboutCampus,
    },
    {
      title: "Music Classes",
      category: "Arts",
      image: IMAGES.news.workshop,
    },
    {
      title: "Swimming",
      category: "Sports",
      image: IMAGES.academic.earlyYears,
    },
  ] satisfies GalleryCard[],
};
