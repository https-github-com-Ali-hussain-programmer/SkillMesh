import img1 from "../public/1.jpg";
import img38 from "../public/38.jpg";
import img31 from "../public/31.jpg";
import img4 from "../public/4.jpg";
import img5 from "../public/5.jpg";
import img6 from "../public/6.jpg";
import img39 from "../public/39.jpg";
import img8 from "../public/8.jpg";
import p1 from "../public/people-01.png";
import p2 from "../public/people-02.png";
import p3 from "../public/people-03.png";
import gig1 from "../public/gig1.jpg";
import gig2 from "../public/gig2.jpg";
import gig3 from "../public/gig3.jpg";

export const SliderData = [
  {
    id: 1,
    title: "AI Artists",
    desc: "Add talent to AI",
    img: img1.src,
  
  },
  {
    id: 2,
    title: "Logo Design",
    desc: "Build yor brand",
    img: img38.src,
  },
  {
    id: 3,
    title: "WordPress",
    desc: "Customize your site",
    img: img31.src,
  },
  {
    id: 4,
    title: "Voice Over",
    desc: "Share your message",
    img: img4.src,
  },
  {
    id: 5,
    title: "Video Explainer",
    desc: "Engage your audience",
    img: img5.src,
  },
  {
    id: 6,
    title: "Social Media",
    desc: "Reach more customers",
    img: img6.src,
  },
  {
    id: 7,
    title: "SEO",
    desc: "Unlock growth online",
    img: img39.src,
  },
  {
    id: 8,
    title: "Illustration",
    desc: "Color you dreams",
    img: img8.src,
  },
];

export const topRated = [
  {
    id: 1,
    name: "Dexterols",
    rating: 4.8,
    desc: "Experienced WordPress developer providing custom website solutions.",
    numOrders: 120,
    category: "Web Development",
    status: "Top Rated",
    img: p1.src,
    pricing: "PKR 80,000 - PKR 160,000",
    coverImg: gig1.src
  },
  {
    id: 2,
    name: "Smith",
    rating: 4.9,
    desc: "DevOps specialist with a focus on automation and continuous integration.",
    numOrders: 90,
    category: "DevOps",
    status: "Level 2",
    img: p2.src,
    pricing: "PKR 50,000 - PKR 120,000",
    coverImg: gig2.src
  },
  {
    id: 3,
    name: "Arslan akhtar",
    rating: 4.7,
    desc: "Skilled frontend developer creating user-friendly and responsive web interfaces.",
    numOrders: 150,
    category: "Web Development",
    status: "Pro",
    img: p3.src,
    pricing: "PKR 5,000 - PKR 20,000 ",
    coverImg: gig3.src
  }
];
export const categoriesData = [
  {
    category: "Web Development",
    subfields: [
      "Front-End Development",
      "Back-End Development",
      "UI/UX Design",
      "E-Commerce Development",
      "WordPress Development",
    ],
  },
  {
    category: "Graphics Design",
    subfields: [
      "Typography & Illustration",
      "Web Design",
      "Logo Designs",
      "Social Media Graphics",
      "3D Modeling and Rendering",
    ],
  },
  {
    category: "Digital Marketing",
    subfields: [
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Marketing Automation",
      "Social Media Marketing",
    ],
  },
  {
    category: "Writing & Translation",
    subfields: [
      "Technical Writing",
      "Ghost Writing",
      "Content Writing",
      "Creative Writing",
      "Copy Writing",
    ],
  },
  {
    category: "Video Animation",
    subfields: [
      "2D Animations",
      "3D Animations",
      "Infographic Videos",
      "Virtual Reality (VR) Animation",
      "Character Animation",
    ],
  },
  {
    category: "AI Services",
    subfields: [
      "Natural Language Processing (NLP) Services",
      "Computer Vision Solutions",
      "Infographic Videos",
      "AI in Customer Service",
      "Machine Learning Model Development",
    ],
  },
  {
    category: "Software Quality Assurance",
    subfields: [
      "Functional Testing",
      "Non-functional Testing",
      "User Acceptance Testing (UAT)",
      "Quality Metrics and Measurement",
      "Alpha and Beta Testing",
    ],
  },
];
