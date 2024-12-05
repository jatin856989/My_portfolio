import {
    java,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    cplus,
    tailwind,
    // nodejs,
    // mongodb,
    // git,
    java1,
    sql,
    think,
    codroid,
    vs,
    //shopify,
    face,
    exam,
    port,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "Java",
      icon: java1,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "AI/Ml Python",
      company_name: "CodroidHub",
      icon: codroid,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Participated in AI/ML training using Python, incorporating both no-code and coded approaches to AI/ML research.",
        "Gained hands-on experience with the OpenCV module in AI, using Python to deepen understanding of OpenCV concepts.",
        "Developed and implemented projects to apply OpenCV techniques within AI applications.",
        "Achieved first place in the AI/ML training program.",
      ],
    },
    {
      title: "Core Java",
      company_name: "VS Computers",
      icon: vs,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        "Enrolled in a Core Java training program with VS Computers.",
        "Acquired knowledge of essential Core Java concepts through hands-on training.",
        "Engaged in discussions on the practical applications and usefulness of Core Java.",
        "Developed an online exam question-attempting tool as a project.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "ThinkNext Technologies",
      icon: think,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Completed a training program with ThinkNext Technologies focused on web development basics.",
        "Gained foundational skills in HTML, CSS, and JavaScript.",
        "Advanced to working with React, applying these skills to build dynamic interfaces.",
        "Developed this portfolio project as a practical application of React and web development knowledge.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Face Recognition",
      description:
        "Developed a Face Recognition system using Python and OpenCV, designed to access the user's camera, detect facial landmarks, and identify faces based on provided data. This project demonstrates practical applications of computer vision techniques for real-time face recognition.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyterNotebook",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: face,
      source_code_link: "https://github.com/jatin856989/Face-Detection-and-Recognition",
    },
    {
      name: "Exam_Display",
      description:
        "A Java-based Exam Management System with a user-friendly GUI for administering multiple-choice quizzes. Features include question navigation, bookmarking for review, score tracking, and a custom background. This application is ideal for simulating exam environments and enhancing study sessions.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "awt",
          color: "pink-text-gradient",
        },
      ],
      image: exam,
      source_code_link: "https://github.com/jatin856989/Exam_Display",
    },
    {
      name: "My Portfolio",
      description:
        "Created a comprehensive portfolio website that highlights my background, work, and technical skills, alongside the technologies I know. The site includes interactive 3D models, adding a unique and dynamic visual appeal to enhance the user experience and showcase my creativity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/jatin856989/My_portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };