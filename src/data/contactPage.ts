export const CONTACT_PAGE_DATA = {
  banner: {
    title: "Contact Us",
    breadcrumb: ["Contact"],
  },

  info: {
    address: {
      label: "Address",
      value: "Kids' Foundation, Airport Road, Ghari, Imphal-West, Manipur – 795001, India",
      icon: "map-pin",
    },
    phone: {
      label: "Phone",
      value: "0385-2456231",
      icon: "phone",
    },
    mobile: {
      label: "Mobile",
      values: ["+91 8974426944", "+91 8787302983"],
      icon: "smartphone",
    },
    email: {
      label: "Email",
      value: "kidsfoundationimphal@gmail.com",
      icon: "mail",
    },
    hours: {
      label: "Office Hours",
      value: "Monday – Friday: 9:00 AM – 3:00 PM",
      icon: "clock",
    },
  },

  form: {
    heading: "Send Us a Message",
    description: "Have questions about admissions, campus tours, or anything else? We'd love to hear from you.",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "Enter your full name", required: true },
      { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: false },
      { name: "subject", label: "Subject", type: "text", placeholder: "What is this regarding?", required: true },
    ],
    messageField: { name: "message", label: "Message", placeholder: "Write your message here...", required: true },
    submitLabel: "Send Message",
  },

  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.123456789!2d93.9!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKids%20Foundation!5e0!3m2!1sen!2sin!4v1234567890",
    title: "Kids' Foundation Location",
  },
};
