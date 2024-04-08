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
          "Absolutely delighted with the results! T`he artist exceeded my expectations. The communication was smooth, and the delivery was on time. I highly recommend this gig.",
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
];

// {  username: "Muhammad Mubeen",

export const countries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia, Plurinational State of",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Democratic Republic of the Congo",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  PF: "French Polynesia",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  HT: "Haiti",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Republic of Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  MX: "Mexico",
  FM: "Micronesia, Federated States of",
  MD: "Republic of Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela, Bolivarian Republic of",
  VN: "Viet Nam",
  VI: "Virgin Islands",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

export const degreeOptions = [
  { value: "0", label: "Enter Title (e.g. B.Sc.,M.sc.) ", className: "hidden" },
  { value: "Associate", label: "Associate" },
  { value: "Certificate", label: "Certificate" },
  { value: "B.A.", label: "B.A." },
  { value: "BArch", label: "BArch" },
  { value: "BM", label: "BM" },
  { value: "BFA", label: "BFA" },
  { value: "B.Sc.", label: "B.Sc." },
  { value: "M.A.", label: "M.A." },
  { value: "M.B.A.", label: "M.B.A." },
  { value: "MFA", label: "MFA" },
  { value: "M.Sc.", label: "M.Sc." },
  { value: "J.D.", label: "J.D." },
  { value: "M.D.", label: "M.D." },
  { value: "Ph.D", label: "Ph.D" },
  { value: "LLB", label: "LLB" },
  { value: "LLM", label: "LLM" },
  { value: "Other", label: "Other" },
];
export const years = [
  { value: "0", label: "Select Year of Graduation ", className: "hidden" },
  { value: "2010", label: "2010" },
  { value: "2011", label: "2011" },
  { value: "2012", label: "2012" },
  { value: "2013", label: "2013" },
  { value: "2014", label: "2014" },
  { value: "2015", label: "2015" },
  { value: "2016", label: "2016" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "Other", label: "Other" },
];
