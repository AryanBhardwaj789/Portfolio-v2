import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Bhardwaj",
  initials: "AB",
  url: "https://aryanbhardwaj.vercel.app/",
  location: "Oakville, ON",
  locationLink: "https://www.google.com/maps/place/oakville",
  description:
    "Innovating Through Code: Transforming Visions into Digital Realities",
  summary:
    "[I am a dedicated Software Development graduate from Sheridan College](#education) and currently a [Headstarter AI SWE Fellow](#work). " +
    "I specialize in creating intuitive applications that prioritize user experience and actively seek out emerging technologies to enhance my skills. " +
    "I am passionate about connecting with others in the field to share insights and collaborate on innovative projects. " +
    "Feel free to explore my portfolio and blog to learn more about my work. " +
    "If you find my projects intriguing, [Let’s Connect!](#contact)🤝💻",
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
        url: "https://drive.google.com/file/d/1Pc5cp_nO8ohtxlccGBcqQPSPPihhSQCM/view?usp=sharing",
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
      degree: "Computer Programming (PCPRG)",
      logoUrl: "/sheridan.jpeg",
      start: "January 2022",
      end: "April 2024",
    }
  ],
  projects: [
    {
      title: "Pinterest Clone (Full-Stack)",
      href: "https://pinterest-clone-nodejs.onrender.com/",
      active: true,
      description:
        "Envision a digital canvas where users curate their passions through personalized boards, effortlessly organizing a diverse array of pins. With secure authentication, a dynamic feed, and seamless profile management, this platform enhances content discovery while showcasing my expertise in crafting user-friendly experiences.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js",
        "EJS",
        "Multer",
        "dotenv"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/Pinterest-Clone-Nodejs",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/RZ9S9louqgA",
          icon: <Icons.video className="size-3" />,
        },
      ],
      image: "/pinterestclone.jpg",
      video: "",
    },    
    {
      title: "ProfAdvisor",
      href: "https://profadvisor.vercel.app/",
      active: true,
      description:
        "Platform designed to empower students and helps them make informed decisions when selecting professors. With detailed reviews and personalized recommendations, students can find the perfect match for their academic needs.",
      technologies: [
        "Python",
        "OpenAI",
        "Pinecone",
        "Next.js",
        "React",
        "MUI",
        "Clerk",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/ProfAdvisor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/profadvisor.jpg",
      video: "",
    },    
    {
      title: "Jamming",
      href: "https://jammmify.vercel.app",
      active: true,
      description:
        "Spotify Playlist Manager that integrates with the Spotify API, allowing users to search for songs, create playlists, and save them directly to their Spotify accounts. Enjoy real-time search results and a user-friendly interface for easy playlist management.",
      technologies: [
        "React.js",
        "Spotify API",
        "OAuth"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/Jammming-React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jamming.jpg",
      video: "",
    },    
    {
      title: "PantryBuddy",
      href: "https://pantryybuddy.vercel.app/",
      active: true,
      description:
        "Engineered a smart kitchen management solution that streamlines pantry organization and meal planning through intelligent recipe recommendations and real-time synchronization.",
      technologies: [
        "Next.js",
        "Firebase",
        "Material-UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/PantryBuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pantrybuddy.png",
      video: "",
    },
    {
      title: "Ravenous",
      href: "https://github.com/AryanBhardwaj789/Ravenous-React",
      active: true,
      description:
        "Dynamic business discovery platform that empowers users to discover businesses in real-time through location-based search and sorting options. By leveraging the Yelp API, the app delivers seamless, up-to-date results, providing an optimized user experience for finding restaurants, hotels, and more.",
      technologies: [
        "React.js",
        "Yelp API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AryanBhardwaj789/Ravenous-React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ravenous.jpg",
      video: "",
    },
    {
      title: "Coffee Express",
      href: "https://www.linkedin.com/posts/aryanbhardwaj789_java-javafx-softwaredevelopment-activity-7241267711865942017-vzd6?utm_source=share&utm_medium=member_desktop",
      active: true,
      description:
        "Modern JavaFX app that transforms your coffee experience with real-time price updates and easy customization. Enjoy a seamless ordering journey with an intuitive interface and efficient order management.",
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
      href: "https://www.linkedin.com/posts/aryanbhardwaj789_uxdesign-uiux-productdesign-activity-7244848125218029568-Elk0?utm_source=share&utm_medium=member_desktop",
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
      href: "https://www.linkedin.com/posts/aryanbhardwaj789_java-springboot-fullstackdevelopment-activity-7249651634614546433-9v05?utm_source=share&utm_medium=member_desktop",
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
