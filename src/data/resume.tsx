import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Bhardwaj",
  initials: "AB",
  url: "https://aryanbhardwaj.vercel.app/",
  location: "Oakville, ON",
  locationLink: "https://www.google.com/maps/place/oakville",
  description:
    "Crafting Solutions, One Line at a Time. Love turning ideas into reality.",
  summary:
    "[As a recent Sheridan College grad, and current Headstarter AI SWE Fellow](#education), I specialize in crafting dynamic, user-centric applications and exploring the latest tech trends. My portfolio showcases a [blend of full-stack projects and cutting-edge UI/UX designs](#). Passionate about AI and always eager to learn, I thrive on solving complex problems and pushing the boundaries of technology. [Let’s connect, share ideas, and create something amazing together](#)! 🚀",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "Java",
    "Javascript",
    "Python",
    "C",
    "C#",
    "AWS",
    "Firebase",
    "MongoDB",
    "Postgres",
    "Spring Boot",
    "Github",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aryanbhardwaj98126@gmail.com",
    tel: "+1 289-623-0010",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AryanBhardwaj789",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryanbhardwaj789/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discordapp.com/users/861160195858497536",
        icon: Icons.discord,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1ZohaDN-OiFVaG8OVyFPHyfrJytecuU-M/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aryanbhardwaj98126@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpeg",
      start: "June 2024",
      end: "Present",
      description:
        "Building 5+ AI apps and APIs using Nextjs, OpenAI, Pinecone, and StripeAPI with 98% accuracy as seen by 1000 users with mentorship from Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and Developed projects from design to deployment leading 3 engineering fellows using MVC design patterns.",
    },
  ],
  education: [
    {
      school: "Sheridan College, Oakville",
      href: "https://www.sheridancollege.ca/",
      degree: "Computer Programming Diploma (PCPRG)",
      logoUrl: "/sheridan.jpeg",
      start: "January 2022",
      end: "April 2024",
    }
  ],
  projects: [
    {
      title: "Coffee Express",
      href: "#",
      dates: "July 2023 - August 2023",
      active: true,
      description:
        "Coffee Express is a JavaFX app that transforms your coffee experience with real-time price updates and easy customization. Enjoy a seamless ordering journey with an intuitive interface and efficient order management.",
      technologies: [
        "JavaFX",
        "FXML",
        "Scene Builder",
        "File Handling",
        "Polymorphism"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/CoffeeExpress",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coffeefx.png",
      video: "",
    },
    {
      title: "Budget Master",
      href: "",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Figma UI prototype that simplifies financial management with features like custom budget categories, expense tracking, and budget visualization. Effortlessly set goals and get reminders to stay on top of your finances.",
      technologies: [
        "Figma",
        "Wireframes"
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/file/Drjb3v8aA2yM2HpRjCWnkg/Budget-Master-UI?type=design&node-id=0%3A1&mode=design&t=F35WUJwcEL4Pd2Z1-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/BudgetMasterUI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/budgetui.png",
      video: "",
    },
    {
      title: "Book Wise",
      href: "",
      dates: "November 2023 - December 2023",
      active: true,
      description:
        "Developed an go-to online bookstore built with Java Spring Boot! Dive into a world of books with secure login, easy browsing, and a smooth shopping experience.",
      technologies: [
        "Spring Boot",
        "Thymeleaf",
        "HTML",
        "CSS",
        "Javascript",
        "MySQL"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/BookWise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bookspring.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon - Headstarter",
      dates: "July 28, 2024",
      location: "",
      description:
        "Developed a secure password manager application built with React and Next.js, featuring Firebase authentication, password generation, and secure storage.",
      image:
        "/headstarter.jpeg",
      mlh: "",
      links: [{
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/AryanBhardwaj789/CipherSafe",
      },
      ],
    },
  ],
} as const;
