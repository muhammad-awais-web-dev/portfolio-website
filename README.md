# Portfolio Website - React.js

A modern, responsive personal portfolio website built with React.js, showcasing projects, certifications, and professional services with a clean design system and dynamic data management.

## 🌟 Live Demo
[View Portfolio](https://muhammad-awais-web-dev.github.io/portfolio-website) *(Deployment in progress)*

## 📸 Screenshots

### Homepage
![Homepage Mockup](./Readme%20Images/Home%20Mockup.jpg)

### Projects Page
![Projects Mockup](./Readme%20Images/Projects%20Mockup.jpg)

### Certifications Page
![Certifications Mockup](./Readme%20Images/Certifications%20Mockup.jpg)

### About Page
![About Mockup](./Readme%20Images/About%20Mockup.jpg)

### Services Page
![Services Mockup](./Readme%20Images/Services%20Mockup.jpg)

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Data Management**: Centralized data files for easy content updates
- **Component-Based Architecture**: Reusable React components with CSS modules
- **React Router Integration**: Multi-page application with smooth navigation
- **Accessibility Focused**: WCAG compliant with 10.57:1 contrast ratio
- **Modern UI/UX**: Clean design with deep green (#002424) and yellow accent colors
- **Interactive Elements**: Hover effects, smooth transitions, and user feedback
- **Project Filtering**: Featured vs. other projects categorization
- **Certification Management**: Professional and course certifications with verification links
- **Contact Form**: Client-side validation with real-time feedback using useState Hook
- **ScrollToTop**: Automatic scroll-to-top functionality on route changes

## 🛠️ Tech Stack

- **Frontend**: React.js (v19.1.1), CSS Modules
- **Routing**: React Router DOM (v6.30.1)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Testing**: React Testing Library, Jest
- **Development**: Visual Studio Code
- **Version Control**: Git & GitHub
- **Deployment**: GitHub Pages (in progress)

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── assets/
│   │   ├── CV.pdf
│   │   └── Profile_pic.webp
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProjectL.js              # Individual project card component
│   │   ├── ProjectL.module.css      # Project card styles
│   │   ├── ProjectsList.js          # Projects container with filtering
│   │   ├── ProjectsList.module.css  # Projects list layout styles
│   │   ├── CertificationL.js        # Individual certification card
│   │   ├── CertificationL.module.css # Certification card styles
│   │   ├── CertificationsList.js    # Certifications container with filtering
│   │   ├── CertificationsList.module.css # Certifications list layout
│   │   ├── Contact.js               # Contact section component
│   │   ├── ContactForm.js           # Contact form with validation
│   │   ├── Footer.js                # Footer component
│   │   ├── Navbar.js                # Navigation component
│   │   └── ScrollToTop.js           # Scroll to top functionality
│   ├── data/
│   │   ├── projectsData.js          # Projects data array
│   │   ├── CertificationsData.js    # Certifications data array
│   │   ├── ServicesData.js          # Services data array
│   │   ├── Skills.js                # Skills data array
│   │   └── Technologies.js          # Technologies data array
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js              # Homepage main component
│   │   │   ├── Hero.js              # Hero section
│   │   │   ├── HomeAbout.js         # About section preview
│   │   │   ├── HomeProjects.js      # Projects section preview
│   │   │   └── HomeCertifications.js # Certifications preview
│   │   ├── about/
│   │   │   ├── About.js             # About page main component
│   │   │   └── Skill.js             # Skills component
│   │   ├── projects/
│   │   │   ├── Projects.js          # Projects page main component
│   │   │   ├── FeaturedProjects.js  # Featured projects section
│   │   │   └── OthersProjects.js    # Other projects section
│   │   ├── certifications/
│   │   │   ├── Certifications.js    # Certifications page main component
│   │   │   ├── FeaturedCertifications.js # Featured certs section
│   │   │   └── OthersCertifications.js # Other certs section
│   │   └── services/
│   │       ├── Services.js          # Services page main component
│   │       ├── Service.js           # Individual service component
│   │       └── MyProcess.js         # Process section
│   ├── App.js                       # Main app component with routing
│   └── index.js                     # React app entry point
└── Readme Images/                   # Mockups and wireframes
```


## 🎯 Data Flow Architecture

### Projects Data Management
```javascript
// projectsData.js → ProjectsList.js → ProjectL.js

// 1. Data Source (src/data/projectsData.js)
const projectsData = [
  {
    id: 1,
    image: "https://placehold.co/472x262",
    category: "UI/UX Design",
    title: "CtrlAlt Shop UI Case Study",
    description: "Mobile e-commerce concept for gaming gear...",
    tags: ["UI", "UX", "Research"],
    buttons: [...],
    featured: true
  }
  // ... more projects
];

// 2. Page Component (FeaturedProjects.js)
function FeaturedProjects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <ProjectsList showFeaturedOnly={true}/>
    </section>
  );
}

// 3. Container Component (ProjectsList.js)
const ProjectsList = ({ showFeaturedOnly, showOthersOnly }) => {
  let projectsToShow = projectsData;
  
  if (showFeaturedOnly) {
    projectsToShow = projectsData.filter(project => project.featured);
  } else if (showOthersOnly) {
    projectsToShow = projectsData.filter(project => !project.featured);
  }
  
  return (
    <div className={styles.projectsContainer}>
      {projectsToShow.map((project) => (
        <ProjectL key={project.id} {...project} />
      ))}
    </div>
  );
};

// 4. Individual Component (ProjectL.js)
const ProjectL = ({ image, category, title, description, tags, buttons }) => {
  return (
    <div className={styles.projectCard}>
      {/* Render project data */}
    </div>
  );
};
```

### Certifications Data Management
```javascript
// CertificationsData.js → CertificationsList.js → CertificationL.js

// Filtering Options in FeaturedCertifications.js:
<CertificationsList showFeaturedOnly={true} />

// Filtering Options in OthersCertifications.js:
<CertificationsList showOthersOnly={true} />

// Additional filtering available:
// - showProfessionalOnly: Display only professional certificates
```

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/muhammad-awais-web-dev/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

5. **Run tests**
```bash
npm test
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#002424` (Deep Green)
- **Accent Color**: `#FFFF00` (Bright Yellow)
- **Text Color**: `#002424` on white backgrounds
- **Contrast Ratio**: 10.57:1 (WCAG AAA compliant)

### Typography
- **Font Family**: 'Roboto', sans-serif
- **Hierarchy**: 
  - Page Titles: H1 elements
  - Section Titles: H2 elements  
  - Card Titles: H3 elements, 20px, font-weight: 700
  - Categories: 16px, font-weight: 500  
  - Descriptions: 16px, font-weight: 400
  - Tags: 14px, font-weight: 400

### Component Specifications
- **Border Radius**: 20px for cards, 12px for tags
- **Card Width**: 30% on desktop, 100% on mobile
- **Spacing**: Consistent 16px-24px padding
- **Hover Effects**: Transform translateY(-2px) with color transitions

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (max-width: 768px) {
  .projectCard {
    max-width: 100%;
  }
  
  .projectInfo {
    padding: 16px 12px;
  }
  
  .tagsContainer {
    flex-wrap: wrap;
  }
}

@media (max-width: 1200px) {
  .projectCard {
    max-width: 45%;
  }
}
```

## 🗂️ Data Management

### Adding New Projects
```javascript
// Add to src/data/projectsData.js
{
  id: unique_id,
  image: "image_url",
  category: "Project Category",
  title: "Project Title",
  description: "Project description...",
  tags: ["Tag1", "Tag2"],
  buttons: [
    {
      text: "View Project",
      ref: "https://project-link.com",
      icon_Class: "fa-solid fa-arrow-right"
    }
  ],
  featured: true/false
}
```

### Adding New Certifications
```javascript
// Add to src/data/CertificationsData.js
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  image: "certificate_image_url",
  professional: true/false,
  partof: "Program Name (if applicable)",
  verifications: [
    {
      text: "Coursera",
      ref: "verification_link"
    }
  ],
  featured: true/false
}
```

## 🎯 Usage Examples

### Display Featured Projects Only
```jsx
import ProjectsList from '../../components/ProjectsList';

function FeaturedProjects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <ProjectsList showFeaturedOnly={true} />
    </section>
  );
}
```

### Display Professional Certifications
```jsx
import CertificationsList from '../../components/CertificationsList';

function FeaturedCertifications() {
  return (
    <section>
      <h2>Professional Certifications</h2>
      <CertificationsList showFeaturedOnly={true} />
    </section>
  );
}
```

## 📈 Development Timeline

### Day 1: Planning & Wireframes
- **Focus**: Foundation and structure planning
- Started with homepage wireframe
- Planned layout, structure, and section flow
- Set foundation before moving to design and development

### Day 2: Extended Wireframes
- **Focus**: Comprehensive page planning
- Expanded wireframes for About, Projects, Certifications, and Services pages
- Structured showcase of journey, skills, projects, and achievements
- Ensured natural portfolio flow highlighting technical abilities and professional growth

### Day 3: UI Design & Accessibility
- **Focus**: Visual design and UX principles
- Moved from wireframes to actual UI design
- **Color & Contrast**: Deep green background with bright yellow accent (10.57:1 contrast ratio)
- **Layout Consistency**: Refined sizing, paddings, and border radiuses
- **UX Principles Applied**:
  - **Hierarchy**: Prominent placement of name, role, and CTAs
  - **Proximity & Similarity**: Grouped related elements
  - **Consistency**: Uniform button, card, and section styles
- **Accessibility**: Color and font choices for readability across devices

### Day 4: Mockups & Design Refinement
- **Focus**: Complete visual transformation
- Transformed wireframes into complete mockups with color, typography, and cohesive design
- **Challenge Solved**: Certifications page design
  - Original plan: Download Coursera PDFs → Convert to JPEGs → Convert to WebP
  - **Solution**: Custom certification badges with "Verify Certificate" links for cleaner, professional look

### Day 5: Component System Design
- **Focus**: Design system foundation
- Created comprehensive component sheet with reusable UI elements:
  - Buttons (primary, secondary, outlined)
  - Cards (projects, services, certifications)
  - Navigation bars and footers
  - Input fields and form layouts
  - Badge styles for certifications
- Established consistent, reusable system for polished, unified appearance

### Day 6: Development Setup
- **Focus**: React application foundation
- Set up React app with dependencies
- Installed React Router DOM for navigation
- Created foundational components: Header and Footer
- Established navigation structure
- Transitioned from mockups to live browser development

### Day 7: Contact Form Implementation
- **Focus**: Interactive form functionality
- Built reusable Form Section and Form components
- **Client-side validation** using useState Hook
- **Features implemented**:
  - Real-time form field validation
  - Dynamic input updates
  - Immediate feedback for missing/invalid inputs
  - Success confirmation with option to send another message

### Day 8: Hero Section & Profile Enhancement
- **Focus**: Homepage core components
- **Completed Hero Section**:
  - Headline, role title, and supporting description
  - CTA buttons: "View Projects" and "Download CV" with hover interactions
  - Availability badge: "Available for Projects"
- **Profile Card Design**:
  - Profile image integration
  - Title & role display
  - Key statistics: 1+ Years Experience, 10+ Projects, 15+ Clients
- **Improvements**: Typography hierarchy, color contrast, responsive layouts

### Day 9: Projects & Certifications Integration
- **Focus**: Dynamic data integration
- **Projects Section**:
  - Implemented structured `projectsData.js` file
  - Featured projects with images, categories, tags, interactive buttons
  - **Highlighted projects**:
    - CtrlAlt Shop UI Case Study (UX for gaming gear)
    - Freelancer Portfolios Initiative (5 WordPress sites)
    - Little Lemon (React.js restaurant website)
    - Delicacy Food Delivery Website
    - Personal Portfolio + Rang-O-Riwayat eCommerce
- **Certifications Section**:
  - Dynamic `CertificationsData.js` file implementation
  - **Key credentials integrated**:
    - Google UX Design Certificate (8-course program)
    - Meta Front-End Developer Professional Certificate
    - Google AI Essentials Professional Certificate
  - Verification links (Coursera + Credly)
- **System Improvements**: Centralized data handling, consistent card design, enhanced responsiveness

### Day 10: Projects Page Completion
- **Focus**: Dedicated projects showcase
- **Featured Projects Section**: Major case studies & full-scale builds with clear visual hierarchy
- **Other Projects Section**: Dedicated space for smaller meaningful builds
- **Technical Implementation**: React components + data arrays for reusability and consistency
- **Design**: Maintained responsive design and consistent card system from Home section

### Day 11: Certifications & Services Pages
- **Focus**: Portfolio completion
- **Completed**: Certifications Page with dynamic rendering, issuer details, verification links
- **Partially Completed**: Services Page structure and web development/design offerings
- **Next Steps**: Portfolio finalization and GitHub Pages deployment preparation

## 🚀 Deployment

The portfolio is being prepared for deployment to GitHub Pages. Build process:

```bash
npm run build
# Deploy to gh-pages branch
```

**Deployment Timeline**: Within 2 days of Day 11 completion

## ⚡ Performance Features

- **React 19.1.1**: Latest React version with improved performance
- **CSS Modules**: Scoped styling preventing conflicts
- **Component Reusability**: Efficient rendering and code reuse
- **Lazy Loading**: Images loaded as needed
- **Responsive Images**: Optimized for different screen sizes
- **Clean Code Architecture**: Maintainable and scalable codebase

## ♿ Accessibility Features

- **WCAG AAA Compliance**: 10.57:1 contrast ratio
- **Semantic HTML**: Proper heading hierarchy and structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and alt text
- **Focus Management**: Clear focus indicators
- **Color Accessibility**: High contrast design

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to:
- Open issues for bugs or improvements
- Suggest new features
- Provide design feedback
- Share your thoughts on the development journey

## 📧 Contact

For any questions or collaborations, feel free to reach out through the contact form on the portfolio or connect with me on [LinkedIn](https://www.linkedin.com/in/muhammad-awais-web-dev/).

## 📄 License

This project is open source and available under the MIT License.

---

⭐ **Star this repository if you found it helpful!**

*Portfolio development journey: 11 days from wireframes to deployment-ready React application*