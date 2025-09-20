const projectsData = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/assets/Projects/CtrlAlt Shop.webp',
    category: "UI/UX Design",
    title: "CtrlAlt Shop UI Case Study",
    description: "CtrlAlt Shop is a mobile e-commerce concept designed specifically for gaming enthusiasts who want a seamless experience when browsing and purchasing gaming gear. This case study highlights the full UX research process, starting with understanding the needs of gamers, exploring pain points in existing online stores, and developing user personas. The design prioritizes easy navigation, bold visuals, and quick checkout functionality. Prototypes were tested with target users to refine the interface and ensure intuitive flows. The project demonstrates how thoughtful design and research can transform a simple shopping app into a high-engagement platform that resonates with a niche audience, combining functionality with an immersive user experience.",
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
    description: "This initiative involved designing and developing five custom WordPress portfolios tailored to the unique needs of freelancers from various creative fields, such as writing, photography, design, and digital services. Each portfolio was carefully crafted with a clean, modern design to highlight the individual’s skills, projects, and professional brand identity. The goal was to give each freelancer an online presence that would help them stand out, attract clients, and showcase their expertise in a user-friendly way. With responsive layouts, clear navigation, and customization flexibility, the portfolios provided a strong digital foundation for these freelancers. This project showcases both technical WordPress development skills and an understanding of branding and UX principles to deliver meaningful results for real-world users.",
    tags: ["Wordpress", "Design"],
    buttons: [
      { text: "1", ref: "https://dev-haroon-editor.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "2", ref: "https://dev-esaarfatima.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "3", ref: "https://dev-kashafalvi.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "4", ref: "https://dev-waqas-malik.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "5", ref: "https://dev-uswafatima.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" },
    ],
    featured: true
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/assets/Projects/Little Lemon.webp',
    category: "React.js",
    title: "Little Lemon",
    description: "Little Lemon is a fully responsive restaurant website created using React.js to demonstrate modern front-end development practices. The website highlights the restaurant’s branding, menu, and reservation features in a user-friendly layout that adapts seamlessly to different screen sizes. Built with a component-based architecture, the project emphasizes reusability, scalability, and clean code structure. The interactive features include dynamic navigation, real-time updates for menu categories, and accessible design to ensure usability for all users. Special attention was given to performance optimization, ensuring quick load times and smooth transitions. This project served as an excellent opportunity to deepen knowledge in React hooks, state management, and responsive design, resulting in a practical solution that combines creativity with technical expertise.",
    tags: ["React", "JavaScript"],
    buttons: [
      { text: "View Project", ref: "https://muhammad-awais-web-dev.github.io/little-lemon", icon_Class: "fa-solid fa-arrow-right" },
      { text: "Code", ref: "https://github.com/muhammad-awais-web-dev/little-lemon", icon_Class: "fa-brands fa-github" }
    ],
    featured: false
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + '/assets/Projects/Delicacy.webp',
    category: "Wordpress",
    title: "Delicacy - Food Delivery",
    description: "Delicacy is a modern WordPress-powered website designed for a food delivery service. The project focuses on creating a professional digital presence that highlights the restaurant’s offerings while making the ordering process smooth and intuitive. The design integrates bold visuals of food items, clear calls-to-action, and a streamlined interface that encourages customers to place orders quickly. Custom sections were developed to display menu categories, delivery information, and customer testimonials. The website is fully responsive, ensuring accessibility and usability across mobile, tablet, and desktop devices. This project demonstrates proficiency in WordPress development and theme customization while keeping the user journey simple and effective for both customers and business owners.",
    tags: ["Wordpress", "Design"],
    buttons: [
      { text: "View Project", ref: "https://dev-practical-2.pantheonsite.io/", icon_Class: "fa-solid fa-arrow-right" }
    ],
    featured: false
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + '/assets/Projects/Personal Portfolio.webp',
    category: "HTML/CSS/JS",
    title: "Personal Portfolio",
    description: "This project is a personal portfolio website built using HTML, CSS, and JavaScript, serving as a digital showcase of professional skills and creative work. The design emphasizes simplicity and clarity, with a modern, sleek interface that makes navigation intuitive for visitors. Each section highlights different aspects such as skills, projects, and contact information, ensuring that potential clients or employers can quickly grasp the developer’s expertise. Special attention was given to responsive design, ensuring the site works flawlessly on both mobile and desktop devices. Interactive elements and smooth animations were added with JavaScript to enhance the user experience. This project reflects strong front-end development fundamentals and design sensibilities, providing a strong first impression for professional networking.",
    tags: ["HTML", "CSS", "JavaScript"],
    buttons: [
      { text: "View Project", ref: "https://muhammad-awais-web-dev.github.io/Portfolio-HTML-CSS-JS", icon_Class: "fa-solid fa-arrow-right" },
      { text: "Code", ref: "https://github.com/muhammad-awais-web-dev/Portfolio-HTML-CSS-JS", icon_Class: "fa-brands fa-github" }
    ],
    featured: false
  },
  {
    id: 6,
    image: process.env.PUBLIC_URL + '/assets/Projects/Rang-o-Riwayat.webp',
    category: "WordPress",
    title: "Rang-O-Riwayat",
    description: "Rang-O-Riwayat is an eCommerce website developed for a brand that blends cultural heritage with modern craftsmanship. Built on WordPress, the project required creating a visually rich and functional platform that could showcase clothing collections and handcrafted items. The website emphasizes storytelling through design, using bold imagery, elegant typography, and a structured layout to reflect the brand’s identity. It integrates essential eCommerce features such as product categories, shopping cart functionality, and secure checkout processes. The site is fully responsive and optimized for performance, ensuring smooth browsing for customers. This project highlights the ability to combine branding, UX design, and WordPress development to deliver a polished, business-ready eCommerce solution.",
    tags: ["UI", "UX", "Research"],
    buttons: [
      { text: "View Project", ref: "https://rangoriwayat.com/", icon_Class: "fa-solid fa-arrow-right" }
    ],
    featured: false
  },
  {
    id: 7,
    image: process.env.PUBLIC_URL + '/assets/Projects/This.webp',
    category: "React.js",
    title: "Personal Portfolio - React.js",
    description: "This personal portfolio website was developed using React.js to showcase technical expertise, projects, and professional background in a modern, interactive format. Unlike static HTML-based portfolios, this React.js version leverages a component-based structure, making it scalable and easier to maintain. The site features reusable UI components, smooth animations, and responsive layouts to ensure a professional presentation across devices. It integrates sections for projects, skills, certifications, and services, all dynamically rendered through clean data structures. The project also demonstrates effective use of GitHub Pages for deployment, allowing for a live, accessible demo. By combining design principles with React functionality, this portfolio provides a polished platform for professional branding and networking.",
    tags: ["React", "JavaScript"],
    buttons: [
      { text: "View Project", ref: "https://muhammad-awais-web-dev.github.io/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "Code", ref: "https://github.com/muhammad-awais-web-dev/muhammad-awais-web-dev.github.io", icon_Class: "fa-brands fa-github" }
    ],
    featured: true
  },
  {
    id: 8,
    image: process.env.PUBLIC_URL + '/assets/Projects/filmfind.webp',
    category: "React.js + API",
    title: "FilmFind - Movie Search App",
    description: "FilmFind is a React.js application that integrates with the TMDB API to allow users to search for movies and TV shows. The app fetches real-time data and displays key information such as titles, ratings, genres, and release dates in a visually appealing interface. The design emphasizes usability, featuring a responsive layout and a clean, card-based structure for browsing results. Users can explore trending films or perform specific searches, making it both functional and engaging. This project showcases proficiency in working with APIs, handling asynchronous data fetching, and managing state in React. It also highlights the importance of combining technical problem-solving with front-end design to create a smooth and interactive user experience.",
    tags: ["React", "API", "JavaScript"],
    buttons: [
      { text: "View Project", ref: "https://muhammad-awais-web-dev.github.io/filmfind/", icon_Class: "fa-solid fa-arrow-right" },
      { text: "Code", ref: "https://github.com/muhammad-awais-web-dev/filmfind/", icon_Class: "fa-brands fa-github" }
    ],
    featured: true
  }
];

export default projectsData;
