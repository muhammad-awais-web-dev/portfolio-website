const projectsData = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/assets/Projects/CtrlAlt Shop.webp',
    category: "UI/UX Design",
    title: "CtrlAlt Shop UI Case Study",
    description: "Mobile e-commerce concept for gaming gear with comprehensive UX research.",
    tags: ["UI", "UX", "Research"],
    buttons: [
      {
        text: "View Project",
        ref: "https://drive.google.com/file/d/1Mku4B2tyCME5JuWsHLbX8Vj01tVByW1l/view?usp=drivesdk",
        icon_Class: "fa-solid fa-arrow-right"
      }
    ],
    featured: true
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/assets/Projects/Freelancer Portfolio.webp',
    category: "Wordpress",
    title: "Freelancer Portfolios Initiative",
    description: "Custom portfolios for 5 freelancers across creative fields.",
    tags: ["Wordpress", "Design"],
    buttons: [
      {
        text: "1",
        ref: "https://dev-haroon-editor.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },{
        text: "2",
        ref: "https://dev-esaarfatima.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },{
        text: "3",
        ref: "https://dev-kashafalvi.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },{
        text: "4",
        ref: "https://dev-waqas-malik.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },{
        text: "5",
        ref: "https://dev-uswafatima.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },
    ],
    featured: true
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/assets/Projects/Little Lemon.webp',
    category: "React.js",
    title: "Little Lemon",
    description: "A responsive website built for a restaurant using React.js.",
    tags: ["React", "JavaScript"],
    buttons: [
      {
        text: "View Project",
        ref: "https://muhammad-awais-web-dev.github.io/little-lemon",
        icon_Class: "fa-solid fa-arrow-right"
      },
      {
        text: "Code",
        ref: "https://github.com/muhammad-awais-web-dev/little-lemon",
        icon_Class: "fa-brands fa-github"
      }
    ],
    featured: false
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + '/assets/Projects/Delicacy.webp',
    category: "Wordpress",
    title: "Delicacy - Food Delivery",
    description: "A sleek website for food delivery services.",
    tags: ["Wordpress", "Design"],
    buttons: [
      {
        text: "View Project",
        ref: "https://dev-practical-2.pantheonsite.io/",
        icon_Class: "fa-solid fa-arrow-right"
      }
    ],
    featured: false
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + '/assets/Projects/Personal Portfolio.webp',
    category: "HTML/CSS/JS",
    title: "Personal Portfolio",
    description: "A sleek, modern portfolio website to showcase projects and skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    buttons: [
      {
        text: "View Project",
        ref: "https://muhammad-awais-web-dev.github.io/Portfolio-HTML-CSS-JS",
        icon_Class: "fa-solid fa-arrow-right"
      },
      {
        text: "Code",
        ref: "https://github.com/muhammad-awais-web-dev/Portfolio-HTML-CSS-JS",
        icon_Class: "fa-brands fa-github"
      }
    ],
    featured: false
  },
  {
    id: 6,
    image: process.env.PUBLIC_URL + '/assets/Projects/Rang-o-Riwayat.webp',
    category: "WordPress",
    title: "Rang-O-Riwayat",
    description: "An eCommerce platform blending heritage, craftsmanship, and modern design.",
    tags: ["UI", "UX", "Research"],
    buttons: [
      {
        text: "View Project",
        ref: "https://rangoriwayat.com/",
        icon_Class: "fa-solid fa-arrow-right"
      }
    ],
    featured: false
  },
  {
    id: 7,
    image: process.env.PUBLIC_URL + '/assets/Projects/This.webp',
    category: "React.js",
    title: "Personal Portfolio - React.js",
    description: "A personal portfolio website built with React.js.",
    tags: ["React", "JavaScript"],
    buttons: [
      {
        text: "View Project",
        ref: "https://muhammad-awais-web-dev.github.io/",
        icon_Class: "fa-solid fa-arrow-right"
      },
      {
        text: "Code",
        ref: "https://github.com/muhammad-awais-web-dev/muhammad-awais-web-dev.github.io",
        icon_Class: "fa-brands fa-github"
      }
    ],
    featured: true
  },
  {
    id:8,
    image: process.env.PUBLIC_URL + '/assets/Projects/filmfind.webp',
    category: "React.js + API",
    title: "FilmFind - Movie Search App",
    description: "A React.js app that fetches and displays movie, and tv show data from TMDB API.",
    tags: ["React", "API", "JavaScript"],
    buttons: [
      {
        text: "View Project",
        ref: "https://muhammad-awais-web-dev.github.io/filmfind/",
        icon_Class: "fa-solid fa-arrow-right"
      },
      {
        text: "Code",
        ref: "https://github.com/muhammad-awais-web-dev/filmfind/",
        icon_Class: "fa-brands fa-github"
      }
    ],
    featured: true
  }
];

export default projectsData;
