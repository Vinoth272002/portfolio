export const PROFILE = {
  name: "Vinothkumar E",
  role: "Frontend Developer",
  location: "Chennai, Tamil Nadu",
  phone: "+91-7305228015",
  email: "vinoth27172002@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinothcodes/",
  github: "https://github.com/Vinoth272002",
  tagline: "Building friction-free web experiences.",
  summary: "I build clean, easy-to-use web experiences that help people get work done without friction. I care about how users feel when they use a product—whether things make sense, respond smoothly, and don’t get in their way.",
  resumeLink: "https://drive.google.com/file/d/1ut_ISgHhl5ecW9eqGakQySurw0oTYKeJ/view?usp=sharing" // Replace with your actual hosted PDF link
};

export const EXPERIENCE = [
  {
    id: 1,
    company: "Astravue Technologies Pvt Ltd",
    role: "Frontend Developer",
    period: "Jan 2024 – Present",
    description: "Spearheading frontend architecture for a SaaS Project Management platform. Focused on scalability, real-time collaboration, and complex UI logic.",
    highlights: [
      "Designed rule-based Recurring Tasks (daily, weekly, custom) with calendar previews.",
      "Built a complete Analytics Dashboard using Chart.js, visualizing project health.",
      "Integrated CometChat SDK for a custom real-time messaging system with presence & groups.",
      "Optimized performance by diagnosing memory leaks & implementing lazy loading.",
      "Migrated legacy Options API modules to Composition API for better maintainability.",
      "Implemented JWT Authentication & Role-based access control."
    ],
    tech: ["Vue.js", "Vuex", "CometChat", "Chart.js"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Project Management SaaS",
    status: "Completed",
    role: "Professional Product (Astravue)",
    description: "A comprehensive platform for task management, time tracking, and team collaboration. Features include Kanban boards, Gantt charts, and real-time chat.",
    link: "https://app.astravue.com",
    tech: ["Vue 3", "Vite", "vuex"]
  },
  {
    id: 2,
    title: "Movie & TV Browser",
    status: "Completed",
    role: "Personal Project",
    description: "A Netflix-style responsive streaming dashboard. Built to master API integration and dynamic content rendering.",
    link: "https://vinoth272002.github.io/reactflix",
    tech: ["React", "TMDB API", "CSS3"]
  },
  {
    id: 3,
    title: "Hotilier Home",
    status: "Completed",
    role: "Personal Project",
    description: "A luxurious hotel landing page featuring room exploration, service showcases, and staff profiles. Designed with a focus on elegance and user experience.",
    link: "https://vinoth272002.github.io/Hotilier_Home/",
    tech: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 4,
    title: "Homyz Estate",
    status: "Completed",
    role: "Personal Project",
    description: "A real estate application built with React, featuring property listings and a responsive UI.",
    link: "https://vinoth272002.github.io/react-homyz/",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    id: 5,
    title: "FlowBit",
    status: "Inprogress",
    role: "Personal Project",
    description: "A personal finance application that helps users track income and expenses to gain clear visibility into their financial health.",
    link: "https://github.com/Vinoth272002/expense-tracker-client",
    tech: ["Node", "PostgreSQL", "React", "Zustand", "Tailwind"]
  }
];

export const SKILLS = [
  { category: "Core", items: ["Vue.js (Options/Composition)", "React.js", "Node.js", "PostgreSQL", "Zustand", "JavaScript (ES6+)", "HTML5/CSS3"] },
  { category: "State & API", items: ["Vuex", "REST APIs", "WebSockets", "JWT Auth"] },
  { category: "UI & Tools", items: ["Tailwind CSS", "Chart.js", "Flatpickr", "Git/GitHub"] },
  { category: "Performance", items: ["Lazy Loading", "Code Splitting", "Lighthouse Optimization"] }
];
