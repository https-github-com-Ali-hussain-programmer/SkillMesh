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
import currentprofileImg from "../public/mubeen.jpg";
export const ConditionalRendering = [
  "/Payment",
  "/Payment/ConfirmPay",
  "/Payment/SubmitRequirement",
  "/helpSupport",
  "/parternships",
];
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
export const CurrentUser = {
  username: "Muhammad Mubeen",
  userid: "5f4b5e6d7a8b9c0d1e2f3a4",
  profileImg: currentprofileImg.src,
  country: "Pakistan",
  memberSince: "Dec 2023",
  AverageResponseTime: "1 Hour",
  lastDelivery: "none",
  languages: ["Urdu", "English"],
  desc: "Hey there, I'm Mubeen – a cybersecurity aficionado on a perpetual quest to decode the intricacies of the digital universe. With a keyboard as my paintbrush, I meticulously explore the vast canvas of code, seeking out vulnerabilities like hidden treasures. My journey is fueled by an insatiable passion for ethical hacking, a dance with the binary unknown where each line of code is a step toward digital resilience. I'm not just unraveling vulnerabilities; I'm sculpting a secure tomorrow, one keystroke at a time.In this ever-evolving tech symphony, I'm not just a player; I'm the composer, harmonizing the notes of cybersecurity with a fervor that echoes through the digital corridors. Join me in this code-breaking odyssey, where every challenge is an opportunity to fortify the virtual realms we inhabit",
  skills: ["Linux Os", "Metaspolit", "Wireshark", "Microsoft Word"],
  education: [
    {
      level: "Matric",
      institution: "Crescent College",
      location: "Lahore",
      duration: "2015-2017",
    },
    {
      level: "Intermediate",
      institution: "Islamia College",
      location: "Lahore",
      duration: "2017-2019",
    },
    {
      level: "University",
      status: "In Progress",
      institution: "Riphah University",
      location: "Currently Enrolled",
      duration: "2020-2024",
    },
  ],
  certifications: [],
  gigs: [],
};
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
    coverImg: gig1.src,
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
    coverImg: gig2.src,
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
    coverImg: gig3.src,
  },
];
export const gigs = [
  {
    id: "abc123",
    img: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create AI art character from your images and prompts",
    desc: "Experienced in transforming client images and prompts into unique and creative AI-generated character art.",
    price: 59,
    star: 5,
    category: "Graphics & Design",
    subcategory: "Typography & Illustration",
    ordersCompleted: 10,
    about:
      "With a profound expertise in graphic design, I bring a wealth of experience to the table. My skills encompass a wide spectrum, from conceptualizing visually appealing concepts to executing them with precision. Over the years, I've honed my ability to seamlessly blend creativity with functionality, producing graphics that not only captivate but also convey a clear message. My proficiency extends to various design tools and techniques, ensuring a versatile approach to projects. Whether it's crafting eye-catching marketing materials or developing engaging digital content, my commitment to delivering visually stunning results remains unwavering. My experience is a testament to my adaptability and commitment to staying at the forefront of design trends, making me a reliable and innovative graphic design professional",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image: "https://example.com/jane.jpg",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image: "https://example.com/alice.jpg",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image: "https://example.com/chris.jpg",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image: "https://example.com/eva.jpg",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Anna Bell",
      userid: "6d7a8b9c0d1e2f3a4b5c6",
      profileImg:
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      country: "Canada",
      memberSince: "Aug 2021",
      averageResponseTime: "10 hours",
      lastDelivery: "2 day",
      languages: ["English", "Hindi", "Urdu"],
      desc: " My name is Anna, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result",
    },
  },

  {
    id: "def456",
    img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create ultra high-quality character art with AI",
    desc: "Specialized in producing top-notch character art using advanced AI techniques, with a proven track record of client satisfaction.",
    price: 79,
    star: 5,
    category: "Graphics & Design",
    subcategory: "Web Design",
    ordersCompleted: 30,
    about:
      "In the realm of Web Development, my experience encompasses a robust understanding of linguistic patterns and machine learning algorithms. I have successfully developed and implemented NLP models for tasks such as sentiment analysis, named entity recognition, and language translation. Proficient in NLP libraries and frameworks, I've crafted solutions that enable machines to comprehend, interpret, and generate human-like text. My expertise extends to working with diverse language datasets, ensuring the adaptability of NLP applications across various linguistic contexts. With a commitment to staying current with advancements in NLP research, I bring a forward-thinking approach to projects, leveraging the power of language understanding to create intelligent and effective solutions. My experience in NLP underscores a dedication to pushing the boundaries of what can be achieved in Web Design",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Lannie Coleman",
      userid: "7a8b9c0d1e2f3a4b5c6d7e",
      profileImg:
        "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600",
      country: "Italy",
      memberSince: "Aug 2019",
      averageResponseTime: "2 hours",
      lastDelivery: "1 day",
      languages: ["Chinese", "French"],
      desc: " My name is Lannie Coleman, a creative spirit who finds joy in crafting AI-generated art during their moments of respite. With a wealth of experience in navigating the intricacies of AI programs, Lannie possesses the acumen to prompt the AI in a way that consistently yields outstanding and exceptionally detailed results",
    },
  },
  {
    id: "ghi789",
    img: "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create unique AI-generated artworks mid-journey AI artist",
    desc: "Skilled in generating unique and artistic AI-based artworks as a mid-journey AI artist.",
    price: 112,
    star: 5,
    category: "AI Services",
    subcategory: "NLP Services",
    ordersCompleted: 1,
    about:
      "In the realm of Natural Language Processing (NLP), my experience encompasses a robust understanding of linguistic patterns and machine learning algorithms. I have successfully developed and implemented NLP models for tasks such as sentiment analysis, named entity recognition, and language translation. Proficient in NLP libraries and frameworks, I've crafted solutions that enable machines to comprehend, interpret, and generate human-like text. My expertise extends to working with diverse language datasets, ensuring the adaptability of NLP applications across various linguistic contexts. With a commitment to staying current with advancements in NLP research, I bring a forward-thinking approach to projects, leveraging the power of language understanding to create intelligent and effective solutions. My experience in NLP underscores a dedication to pushing the boundaries of what can be achieved in natural language processing",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Carol Steve",
      userid: "8b9c0d1e2f3a4b5c6d7e8f",
      profileImg:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      country: "USA",
      memberSince: "Aug 2022",
      averageResponseTime: "9 hours",
      lastDelivery: "10 day",
      languages: ["English", "Chinese", "French", "Urdu", "Telegu", "Hindi"],
      desc: " My name is Anna,",
    },
  },
  {
    id: "jkl012",
    img: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create custom AI-generated artwork using your photos",
    desc: "Experienced in crafting custom AI-generated artwork using client photos, with a portfolio of satisfied customers.",
    price: 99,
    star: 4,

    category: "AI Services",
    subcategory: "Computer Vision",
    ordersCompleted: 100,
    about:
      "In the domain of computer vision, my experience is marked by a strong foundation in image processing and machine vision techniques. I have applied advanced algorithms to analyze and interpret visual data, enabling systems to comprehend and respond to their surroundings. Proficient in computer vision libraries and frameworks, I've developed solutions for object detection, image segmentation, and facial recognition. My expertise extends to creating applications that leverage computer vision for automation, surveillance, and augmented reality. With a focus on staying abreast of cutting-edge advancements, I bring a forward-thinking approach to harnessing the potential of computer vision technologies. My experience reflects a commitment to developing innovative solutions that enhance the capabilities of systems through the power of visual data analysis.",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Don Weber",
      userid: "9c0d1e2f3a4b5c6d7e8f9a",
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      country: "USA",
      memberSince: "Aug 2022",
      averageResponseTime: " 2.5hours",
      lastDelivery: "7 day",
      languages: ["English"],
    },
  },
  {
    id: "mno345",
    img: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will recreate your dreams in high-quality pictures",
    desc: "Specialized in turning dreams into high-quality visual representations through skilled graphic design and 3D modeling.",
    price: 59,
    star: 5,
    category: "Graphics & Design",
    subcategory: "3D Modeling",
    ordersCompleted: 24,
    about:
      "In the realm of graphics, my experience is a testament to a comprehensive skill set that combines creativity with technical proficiency. From conceptualizing visually compelling designs to executing them with precision, I bring a nuanced understanding of design principles and aesthetics. Proficient in industry-standard software, my work spans a spectrum of graphic design applications, including branding, print materials, and digital assets. I've demonstrated the ability to create visually engaging content that aligns with brand identities and effectively communicates messages. With an eye for detail and a commitment to staying current with design trends, my experience in graphics reflects a dedication to producing visually impactful and meaningful work across various mediums.",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Polglotdev",
      userid: "e2f3a4b5c6d7e8f9a0b1c2",
      profileImg:
        "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      country: "UK",
      memberSince: "DEC 2015",
      averageResponseTime: "9 hours",
      lastDelivery: "8 day",
      languages: ["English"],
      desc: "Meet Polglotdev, the creative force behind a world where design transcends boundaries. As a polyglot in the realm of development and design, I seamlessly navigate between diverse languages—both programming and visual—to craft a symphony of aesthetics and functionality.",
    },
  },
  {
    id: "pqr678",
    img: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create AI digital art illustration hyper-realistic painting",
    desc: "Proficient in creating hyper-realistic digital art illustrations through advanced AI techniques.",
    price: 79,
    star: 4,

    category: "Graphics & Design",
    subcategory: "Thumbnails",
    ordersCompleted: 40,
    about:
      " In the realm of AI, my experience is marked by a deep understanding of machine learning algorithms and artificial intelligence principles. From designing and implementing intricate models to solving complex problems through data-driven approaches, I have consistently demonstrated proficiency in the AI landscape. My expertise spans natural language processing, computer vision, and other AI domains, allowing me to develop innovative solutions for a variety of applications. I have a track record of successfully deploying AI models that enhance efficiency and decision-making processes. With a commitment to staying abreast of the latest advancements in AI, I bring a forward-thinking approach to projects, ensuring they harness the full potential of artificial intelligence. My experience in AI reflects a dedication to pushing the boundaries of what's possible in this rapidly evolving field.",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Walton Shepard",
      userid: "0a1b2c3d4e5f6a7b8c9d0e1",
      profileImg:
        "https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=600",
      country: "England",
      memberSince: "Aug 2019",
      averageResponseTime: "4 hours",
      lastDelivery: "11 day",
      languages: ["English"],
      desc: "Meet Walton Shepard, a maestro in the realm of graphic design whose creativity knows no bounds. With an innate ability to turn ideas into visually stunning realities, Walton's work transcends the ordinary, leaving an indelible mark on the canvas of design.",
    },
  },

  {
    id: "vwx234",
    img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create custom art using Midjourney generator",
    desc: "Experienced in crafting custom art using the Midjourney generator, ensuring unique and personalized creations.",
    price: 110,
    star: 4,

    category: "Web Development",
    subcategory: "Frontend Development",
    ordersCompleted: 3,
    about:
      "Wilton's journey in web development is a testament to a meticulous understanding of programming languages, frameworks, and design principles. With an eye for detail and a commitment to staying on the cutting edge of technology, Wilton transforms ideas into interactive and visually compelling websites",
    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Wilton Hunt",
      userid: "5e6d7a8b9c0d1e2f3a4b5",
      profileImg:
        "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      country: "USA",
      memberSince: "Aug 2022",
      averageResponseTime: "4 hours",
      lastDelivery: "1 day",
      languages: ["English"],
      desc: " Meet Wilton Hunt, a virtuoso in the dynamic world of web development, where lines of code are woven into captivating digital experiences. As a seasoned architect of the web, Wilton's expertise lies in crafting online landscapes that seamlessly blend functionality, aesthetics, and user experience.",
    },
  },
  {
    id: "yza567",
    img: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "I will create custom AI-generated artwork using your photos",
    desc: "Skilled in creating custom AI-generated artwork using client photos.",
    price: 199,
    star: 4,

    category: "AI Services",
    subcategory: "Computer Vision",
    ordersCompleted: 10,
    about:
      " In the realm of AI, my experience is marked by a deep understanding of machine learning algorithms and artificial intelligence principles. From designing and implementing intricate models to solving complex problems through data-driven approaches, I have consistently demonstrated proficiency in the AI landscape. My expertise spans natural language processing, computer vision, and other AI domains, allowing me to develop innovative solutions for a variety of applications. I have a track record of successfully deploying AI models that enhance efficiency and decision-making processes. With a commitment to staying abreast of the latest advancements in AI, I bring a forward-thinking approach to projects, ensuring they harness the full potential of artificial intelligence. My experience in AI reflects a dedication to pushing the boundaries of what's possible in this rapidly evolving field.",

    reviews: [
      {
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
          name: "United States",
        },
        rating: 5,
        review:
          "I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon",
        helpful: {
          yes: 10,
          no: 2,
        },
      },
      {
        name: "Jane Smith",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
          name: "Canada",
        },
        rating: 4,
        review:
          "Great service! The artist was prompt and professional. I received high-quality work and would definitely recommend this gig to others.",
        helpful: {
          yes: 8,
          no: 1,
        },
      },
      {
        name: "Alice Johnson",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
          name: "Australia",
        },
        rating: 5,
        review:
          "Absolutely delighted with the results! The artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
        helpful: {
          yes: 12,
          no: 0,
        },
      },
      {
        name: "Chris Williams",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
          name: "Germany",
        },
        rating: 3,
        review:
          "Decent service. The artist was cooperative, but there were a few hiccups along the way. Overall, satisfied with the final result.",
        helpful: {
          yes: 5,
          no: 3,
        },
      },
      {
        name: "Eva Martinez",
        image:
          "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
        country: {
          flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1fa.png",
          name: "Spain",
        },
        rating: 4,
        review:
          "Good experience overall. The artist was responsive to my requests, and the end product met my expectations. I would consider using this service again.",
        helpful: {
          yes: 6,
          no: 1,
        },
      },
    ],
    packages: {
      Basic: {
        name: "Basic",
        price: "53000",
        desc: "I will create single page static website",
        delivery: 2,
        Revision: 1,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Standard: {
        name: "Standard",
        price: "70000",
        desc: "I will create 3 pages with backend integrations",
        delivery: 5,
        Revision: 2,
        functionalities: ["speedOptimized", "contentUpload", "LicensedImages"],
      },
      Premium: {
        name: "Premium",
        price: "20000",
        desc: "I will create a medium-sized web app",
        delivery: 10,
        Revision: 3,
        functionalities: [
          "speedOptimized",
          "contentUpload",
          "LicensedImages",
          "backendIntegration",
          "StripeIntegration",
        ],
      },
    },
    gigimages: [
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],

    userInformation: {
      username: "Johnny",
      userid: "a1b2c3d4e5f6a7b8c9d0e1f2",
      profileImg:
        "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      country: "England",
      memberSince: "Jan 2012",
      averageResponseTime: "9 hours",
      lastDelivery: "8 day",
      languages: ["English"],
      desc: " Johnny's expertise lies in harnessing the power of machines to interpret, understand, and extract meaningful information from images and videos.",
    },
  },
];
export const Category = [
  {
    category: "Web Development",
    imageUrl:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subfields: [
      "Frontend Development",
      "Backend Development",
      "UI/UXDesign",
      "Ecommerce Development",
      "Wordpress Development",
    ],
    TotalNoofGigsAvailable: 10,
    SubCategoryNo: {
      "Frontend Development": 2,
      "Backend Development": 3,
      "UI/UXDesign": 2,
      "Ecommerce Development": 1,
      "Wordpress Development": 2,
    },
  },
  {
    category: "Graphics & Design",
    imageUrl:
      "https://images.pexels.com/photos/2860810/pexels-photo-2860810.jpeg?auto=compress&cs=tinysrgb&w=600",
    subfields: [
      "Typography & Illustration",
      "Web Design",
      "Logo Designs",
      "Thumbnails",
      "3D Modeling",
    ],
    TotalNoofGigsAvailable: 20,
    imageUrl:
      "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    SubCategoryNo: {
      "Typography & Illustration": 5,
      "Web Design": 4,
      "Logo Designs": 3,
      Thumbnails: 4,
      "3D Modeling": 4,
    },
  },
  {
    category: "Digital Marketing",
    subfields: [
      "SEO",
      "Content Marketing",
      "Pay-Per-Click Ads",
      "Marketing Automation",
      "Google Ads",
    ],
    imageUrl:
      "https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    TotalNoofGigsAvailable: 5,
    SubCategoryNo: {
      SEO: 1,
      "Content Marketing": 2,
      "Pay-Per-Click PPC Ads": 1,
      "Marketing Automation": 1,
      "Google Ads": 0,
    },
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
    imageUrl:
      "https://images.pexels.com/photos/3539899/pexels-photo-3539899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    TotalNoofGigsAvailable: 15,
    SubCategoryNo: {
      "Technical Writing": 3,
      "Ghost Writing": 4,
      "Content Writing": 4,
      "Creative Writing": 2,
      "Copy Writing": 2,
    },
  },
  {
    category: "Video Animations",
    subfields: [
      "2D Animations",
      "3D Animations",
      "Infographic Videos",
      "VirtualReality VR",
      "Character Animation",
    ],
    TotalNoofGigsAvailable: 7,
    imageUrl:
      "https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    SubCategoryNo: {
      "2D Animations": 2,
      "3D Animations": 1,
      "Infographic Videos": 1,
      "VirtualReality VR": 2,
      "Character Animation": 1,
    },
  },
  {
    category: "AI Services",
    subfields: [
      "NLP Services",
      "Computer Vision",
      "Neural Networks",
      "ChatBots",
      "ML Model Development",
    ],
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    TotalNoofGigsAvailable: 12,
    SubCategoryNo: {
      "NLP Services": 3,
      "Computer Vision": 3,
      "Neural Networks": 2,
      ChatBots: 2,
      "ML Model Development": 2,
    },
  },
  {
    category: "SQA",
    subfields: [
      "Functional Testing",
      "Non-functional Testing",
      "UAT",
      "Quality Metrics",
      "Alpha & Beta Testing",
    ],
    imageUrl:
      "https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    TotalNoofGigsAvailable: 3,
    SubCategoryNo: {
      FunctionalTesting: 1,
      "Non-functional Testing": 0,
      UAT: 1,
      "Quality Metrics": 0,
      "Alpha & Beta Testing": 1,
    },
  },
  {
    category: "Digital Marketing",
    subfields: [
      "SEO",
      "Content Marketing",
      "Pay-Per-Click Ads",
      "Marketing Automation",
      "Google Ads",
    ],
    imageUrl:
      "https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    TotalNoofGigsAvailable: 5,
    SubCategoryNo: {
      SEO: 1,
      "Content Marketing": 2,
      "Pay-Per-Click PPC Ads": 1,
      "Marketing Automation": 1,
      "Google Ads": 0,
    },
  },
];

export const Users = [
  // {  username: "Muhammad Mubeen",
  {
    username: "Wilton Hunt",
    userid: "5e6d7a8b9c0d1e2f3a4b5",
    profileImg:
      "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    country: "USA",
    memberSince: "Aug 2022",
    averageResponseTime: "4 hours",
    lastDelivery: "1 day",
    languages: ["English"],
    desc: " Meet Wilton Hunt, a virtuoso in the dynamic world of web development, where lines of code are woven into captivating digital experiences. As a seasoned architect of the web, Wilton's expertise lies in crafting online landscapes that seamlessly blend functionality, aesthetics, and user experience.",
    skills: ["C++", "NextJS", "ReactJs", "NodeJs"],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Johnny",
    userid: "a1b2c3d4e5f6a7b8c9d0e1f2",
    profileImg:
      "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    country: "England",
    memberSince: "Jan 2012",
    averageResponseTime: "9 hours",
    lastDelivery: "8 day",
    languages: ["English"],
    desc: "Johnny's expertise lies in harnessing the power of machines to interpret, understand, and extract meaningful information from images and videos.",
    skills: ["Linux Os", "Metaspolit", "Wireshark", "Microsoft Word"],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Walton Shepard",
    userid: "0a1b2c3d4e5f6a7b8c9d0e1",
    profileImg:
      "https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=600",
    country: "England",
    memberSince: "Aug 2019",
    averageResponseTime: "4 hours",
    lastDelivery: "11 day",
    languages: ["English"],
    desc: "Meet Walton Shepard, a maestro in the realm of graphic design whose creativity knows no bounds. With an innate ability to turn ideas into visually stunning realities, Walton's work transcends the ordinary, leaving an indelible mark on the canvas of design",
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Polglotdev",
    userid: "e2f3a4b5c6d7e8f9a0b1c2",
    profileImg:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    country: "UK",
    memberSince: "DEC 2015",
    averageResponseTime: "9 hours",
    lastDelivery: "8 day",
    languages: ["English"],
    desc: "Meet Polglotdev, the creative force behind a world where design transcends boundaries. As a polyglot in the realm of development and design, I seamlessly navigate between diverse languages—both programming and visual—to craft a symphony of aesthetics and functionality.",
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Don Weber",
    userid: "9c0d1e2f3a4b5c6d7e8f9a",
    profileImg:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    country: "USA",
    memberSince: "Aug 2022",
    averageResponseTime: " 2.5hours",
    lastDelivery: "7 day",
    languages: ["English"],
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Carol Steve",
    userid: "8b9c0d1e2f3a4b5c6d7e8f",
    profileImg:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    country: "USA",
    memberSince: "Aug 2022",
    averageResponseTime: "9 hours",
    lastDelivery: "10 day",
    languages: ["English", "Chinese", "French", "Urdu", "Telegu", "Hindi"],
    desc: " My name is Anna,Immersing myself in the captivating world of AI-generated art is a passion that defines my leisure hours. My journey through the intricacies of AI programs has been more than a mere exploration—it's a seasoned navigation that allows me to intricately choreograph the dance between creativity and code. This wealth of experience serves as my compass, guiding me to discern the precise prompts that coax not just great but truly extraordinary and intricately detailed results from the AI canvas.",
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Lannie Coleman",
    userid: "7a8b9c0d1e2f3a4b5c6d7e",
    profileImg:
      "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Italy",
    memberSince: "Aug 2019",
    averageResponseTime: "2 hours",
    lastDelivery: "1 day",
    languages: ["Chinese", "French"],
    desc: " My name is Lannie Coleman, a creative spirit who finds joy in crafting AI-generated art during their moments of respite. With a wealth of experience in navigating the intricacies of AI programs, Lannie possesses the acumen to prompt the AI in a way that consistently yields outstanding and exceptionally detailed results",
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
  {
    username: "Anna Bell",
    userid: "6d7a8b9c0d1e2f3a4b5c6",
    profileImg:
      "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    country: "Canada",
    memberSince: "Aug 2021",
    averageResponseTime: "10 hours",
    lastDelivery: "2 day",
    languages: ["English", "Hindi", "Urdu"],
    desc: " My name is Anna, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result",
    skills: [],
    education: [],
    certifications: [],
    gigs: [],
  },
];
