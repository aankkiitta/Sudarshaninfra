// src/data/featured-project-data.js




// rubyy dadar

import rubyDadar1 from "../image/Ruby-dadar/1.jpg";
import rubyDadar2 from "../image/Ruby-dadar/2.jpg";
import rubyDadar3 from "../image/Ruby-dadar/3.jpg";
import rubyDadar4 from "../image/Ruby-dadar/4.jpg";
import rubyDadar5 from "../image/Ruby-dadar/5.jpg";
import rubyDadar6 from "../image/Ruby-dadar/6.jpg";
import rubyDadar7 from "../image/Ruby-dadar/7.jpg";
import rubyDadar8 from "../image/Ruby-dadar/8.jpg";
import rubyDadar10 from "../image/Ruby-dadar/10.jpg";









// rajkot gujrat

// Rajkot Gujarat project images
import rajkot1 from "../image/Rajkot/1.jpg";
import rajkot2 from "../image/Rajkot/2.jpg";
import rajkot3 from "../image/Rajkot/3.jpg";
import rajkot4 from "../image/Rajkot/4.jpg";
import rajkot5 from "../image/Rajkot/5.jpg";
import rajkot6 from "../image/Rajkot/6.jpg";
import rajkot7 from "../image/Rajkot/7.jpg";
import rajkot8 from "../image/Rajkot/8.jpg";
import rajkot9 from "../image/Rajkot/9.jpg";
import rajkot10 from "../image/Rajkot/10.jpg";
import rajkot11 from "../image/Rajkot/11.jpg";
import rajkot12 from "../image/Rajkot/12.jpg";
import rajkotvideo from "../image/Rajkot/rajkotvideo.mp4";








import video1 from '../components/video/video1.mp4';

// =========================================
// MATERIAL CATEGORIES
// =========================================
export const materialCategories = [
  { id: "electrical", name: "Electrical Materials", icon: "electrical" },
  { id: "carpentry", name: "Carpentry & Furniture", icon: "carpentry" },
  { id: "plumbing", name: "Plumbing Materials", icon: "plumbing" },
  { id: "civil", name: "Civil & Flooring Materials", icon: "civil" },
  { id: "paint", name: "Interior & Finishing Materials", icon: "paint" },
  { id: "hvac", name: "HVAC & AC Materials", icon: "hvac" },
  { id: "glass", name: "Glass & Aluminium Works", icon: "glass" },
  { id: "waterproofing", name: "Waterproofing Materials", icon: "waterproofing" },
  { id: "fire", name: "Fire Safety Materials", icon: "fire" },
  { id: "security", name: "Security & Access Control", icon: "security" },
  { id: "ceiling", name: "Ceiling & Acoustic Materials", icon: "ceiling" },
  { id: "flooring", name: "Flooring Materials", icon: "flooring" }
];

// =========================================
// FEATURED PROJECTS
// =========================================
export const featuredProjects = [
{
  id: 1,
  slug: "ruby-dadar-office-infrastructure",
  title: "Ruby Dadar Office Infrastructure",
image: rubyDadar1,
heroImage: rubyDadar1,
  tag: "OFFICE INFRASTRUCTURE",

  description: "Commercial office infrastructure solutions including electrical installations, structured Cat6 data cabling, RJ45 connectivity, plumbing works, lighting fixtures, and workspace infrastructure modifications.",

  location: "Dadar, Mumbai",
  year: "Completed",
  type: "Commercial",
  size: "Office Workspace",

  aboutTitle: "Reliable Office Infrastructure by Sudarshan Infra",

  aboutParagraphs: [
    "Sudarshan Infra carried out electrical, networking, and plumbing works at Ruby Dadar, helping establish a functional and well-connected office workspace. The electrical work included installing cylindrical light fixtures, modifying existing electrical points, providing 16A switch-controlled socket outlets, and installing RJ45 connectors. The team also laid 140 metres of D-Link Cat6 data cable to support office connectivity.",
"Additional work included cable routing provisions through partitions, removing and refixing grid ceiling tiles, and providing the necessary carpentry support. Plumbing work involved installing S.S. jet sprays with flexible pipes. These services were executed to meet the office's infrastructure requirements, with a focus on practical functionality and reliable workmanship."
  ],

  details: [
    { label: "Client", value: "Ruby Dadar" },
    { label: "Location", value: "Dadar, Mumbai" },
    { label: "Project Type", value: "Commercial Office" },
    { label: "Work Scope", value: "Electrical, Networking & Plumbing" },
    { label: "Networking", value: "D-Link Cat6 Cabling" },
    { label: "Completion", value: "As per project records" }
  ],

  // MATERIALS & SERVICES USED
  materials: [
    { name: "D-Link Cat6 Cable", category: "Networking" },
    { name: "RJ45 Connectors", category: "Networking" },
    { name: "Cylindrical Light Fixtures", category: "Electrical" },
    { name: "16A Switches & Sockets", category: "Electrical" },
    { name: "S.S. Jet Spray", category: "Plumbing" },
    { name: "Flexible Plumbing Pipes", category: "Plumbing" },
    { name: "Cable Routing", category: "Infrastructure" },
    { name: "Grid Ceiling Tiles", category: "Civil Works" }
  ],

  materialCategories: [
    "networking",
    "electrical",
    "plumbing",
    "infrastructure",
    "civil"
  ],

  // VIDEO TOUR
  video: {
    src: video1,
    poster: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1920",
    title: "Ruby Dadar Project Walkthrough",
    subtitle: "Office infrastructure and workspace improvements",
    description: "Explore the Ruby Dadar project featuring electrical modifications, structured data cabling, RJ45 connectivity, lighting installations, plumbing works, and essential office infrastructure improvements.",
    highlights: [
      "Structured D-Link Cat6 data cabling",
      "Electrical installations and socket provisions",
      "Plumbing and workspace infrastructure works"
    ]
  },

  features: [
    {
      icon: "layers",
      title: "Office Infrastructure",
      desc: "Essential infrastructure for functional workspaces"
    },
    {
      icon: "building",
      title: "Commercial Setup",
      desc: "Practical solutions for modern office environments"
    },
    {
      icon: "zap",
      title: "Electrical & Networking",
      desc: "Lighting, power points and structured connectivity"
    }
  ],

  stats: [
    { value: "Cat6", label: "DATA CABLING" },
    { value: "RJ45", label: "CONNECTIVITY" },
    { value: "3+", label: "WORK CATEGORIES" },
    { value: "1", label: "OFFICE PROJECT" }
  ],

  gallery: [
  { src: rubyDadar1, label: "Modern Office Lounge" },
  { src: rubyDadar2, label: "Contemporary Seating Area" },
  { src: rubyDadar3, label: "Open Office Dining Space" },
  { src: rubyDadar4, label: "Collaborative Workstations" },
  { src: rubyDadar5, label: "Spacious Corporate Workspace" },
  { src: rubyDadar6, label: "Ergonomic Office Workstations" },
  { src: rubyDadar7, label: "Individual Workstation Setup" },
  { src: rubyDadar8, label: "Modern Office Desk Installation" },
  { src: rubyDadar10, label: "Completed Office Workstation Area" }
]
},
 



{
  id: 2,
  slug: "rajkot-office-interior-works",
  title: "Rajkot Office Interior & Civil Works",

  image: rajkot1,
  heroImage: rajkot1,

  tag: "CIVIL & INTERIOR",

  description: "Comprehensive civil, carpentry, electrical, and interior works at Dr. Yagnik Road, Rajkot, Gujarat, including flooring, partitions, false ceilings, painting, office furniture, toilet and pantry works, lighting, and related infrastructure improvements.",

  location: "Dr. Yagnik Road, Rajkot, Gujarat",
  year: "Completed",
  type: "Commercial",
  size: "Office Interior Project",

  aboutTitle: "Transforming Spaces Through Quality Workmanship",

  aboutParagraphs: [
    "Sudarshan Infra undertook a comprehensive range of civil and interior works for a commercial office project at Dr. Yagnik Road, Rajkot, Gujarat. The scope included masonry, cement plastering, wall preparation, vitrified tile flooring, false ceiling installation, partitions, and customized interior finishing.",
    "The project also covered electrical works with light fittings, toilet and pantry improvements, office doors, storage units, reception furniture, painting, frosted film, roller blinds, and other supporting installations. These integrated services were designed to create a more functional, organized, and professionally finished office environment."
  ],

  details: [
    { label: "Client", value: "As per project records" },
    { label: "Location", value: "Dr. Yagnik Road, Rajkot, Gujarat" },
    { label: "Project Type", value: "Commercial Office Interiors" },
    { label: "Civil & Interior Works", value: "₹18,13,273.75 Estimated" },
    { label: "Electrical Works", value: "₹3,61,240 Actual" },
    { label: "Completion", value: "As per project records" }
  ],

  materials: [
    { name: "Vitrified Tiles", category: "Flooring" },
    { name: "Cement & Wall Putty", category: "Civil Works" },
    { name: "Gypsum Ceiling", category: "False Ceiling" },
    { name: "Modular Ceiling", category: "Ceiling" },
    { name: "Laminate Partitions", category: "Carpentry" },
    { name: "Glass Partitions", category: "Glazing" },
    { name: "Office Storage Units", category: "Furniture" },
    { name: "Light Fittings", category: "Electrical" }
  ],

  materialCategories: [
    "flooring",
    "civil",
    "ceiling",
    "carpentry",
    "glass",
    "furniture",
    "electrical",
    "painting"
  ],

  features: [
    {
      icon: "civil",
      title: "Civil & Interior",
      desc: "Flooring, masonry, partitions and finishing works"
    },
    {
      icon: "electrical",
      title: "Electrical Works",
      desc: "Lighting fixtures and essential electrical installations"
    },
    {
      icon: "carpentry",
      title: "Complete Fit-Out",
      desc: "Ceilings, storage, furniture, toilet and pantry works"
    }
  ],

  stats: [
    { value: "18+", label: "INTERIOR WORK ITEMS" },
    { value: "3+", label: "CORE WORK CATEGORIES" },
    { value: "1", label: "OFFICE PROJECT" },
    { value: "360°", label: "FIT-OUT SOLUTIONS" }
  ],

  gallery: [
    { src: rajkot1, label: "Conference Room" },
    { src: rajkot2, label: "Pantry Counter & Sink" },
    { src: rajkot3, label: "Modular Office Workstation" },
    { src: rajkot4, label: "Glass Partition & Office Passage" },
    { src: rajkot5, label: "Executive Workstation" },
    { src: rajkot6, label: "Workstation & Storage" },
    { src: rajkot7, label: "Office Storage Cabinets" },
    { src: rajkot8, label: "Workspace Layout" },
    { src: rajkot9, label: "Office Lounge Seating" },
    { src: rajkot10, label: "Glass Meeting Room" },
    { src: rajkot11, label: "Reception Counter" },
    { src: rajkot12, label: "Modern Washroom Fixtures" }
  ],

  // 👇 VIDEO SECTION — Added Here
  video: {
    src: rajkotvideo, // Replace with your actual video URL
    poster: rajkot1,                                    // Poster image (uses your existing image)
    title: "Rajkot Office — Video Walkthrough",
    subtitle: "A quick cinematic tour of the completed office interior and civil works at Dr. Yagnik Road, Rajkot.",
    highlights: [
      "Complete civil & interior fit-out",
      "Modular workstations and storage",
      "Glass partitions & false ceilings",
      "Electrical, plumbing and pantry works"
    ]
  }
},












  {
    id: 3,
    slug: "luxury-home-renovation",
    title: "Luxury Home Renovation",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920",
    tag: "HOME",
    description: "Professional civil construction, renovation, remodeling, painting, flooring, waterproofing, and structural improvement services.",
    location: "Thane, India",
    year: "Completed 2025",
    type: "Residential",
    size: "1,800 sq ft",

    aboutTitle: "A Complete Home Transformation",
    aboutParagraphs: [
      "A complete home renovation project transforming an older property into a modern luxury living space. The project included civil construction, interior and exterior painting, premium flooring, kitchen and bathroom remodeling, and comprehensive waterproofing solutions.",
      "Every decision was made with the family's lifestyle in mind — from smart storage solutions to open, light-filled spaces. The result is a home that feels both spacious and cozy, designed for modern family living."
    ],

    details: [
      { label: "Client", value: "Mr. Sharma" },
      { label: "Location", value: "Thane, India" },
      { label: "Area", value: "1,800 sq.ft" },
      { label: "Budget", value: "₹85 Lakh" },
      { label: "Duration", value: "3 Months" },
      { label: "Completion", value: "August 2025" }
    ],

    materials: [
      { name: "Kajaria Tiles", category: "Flooring" },
      { name: "Plywood", category: "Furniture" },
      { name: "POP", category: "False Ceiling" },
      { name: "Dr. Fixit", category: "Waterproofing" },
      { name: "Berger Paints", category: "Painting" },
      { name: "Jaquar Fittings", category: "Bathroom" },
      { name: "Finolex Wires", category: "Electrical" },
      { name: "Astral Pipes", category: "Plumbing" }
    ],

    materialCategories: ["flooring", "carpentry", "ceiling", "waterproofing", "paint", "plumbing", "electrical", "civil"],

    features: [
      { icon: "home", title: "Complete Makeover", desc: "Full home transformation" },
      { icon: "hammer", title: "Structural Work", desc: "Civil & waterproofing" },
      { icon: "layers", title: "Premium Finishes", desc: "Flooring, painting & tiling" }
    ],

    stats: [
      { value: "1,800", label: "SQUARE FEET" },
      { value: "3", label: "BEDROOMS" },
      { value: "2", label: "BATHROOMS" },
      { value: "3", label: "MONTHS" }
    ],

    gallery: [
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", label: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Bathroom" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "Balcony" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Dining" }
    ]
  },
  {
    id: 4,
    slug: "modern-living-room",
    title: "Modern Living Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920",
    tag: "INTERIOR",
    description: "Contemporary living room designs with elegant furniture, ambient lighting, and premium finishes tailored for modern homes.",
    location: "Dombivli, India",
    year: "Completed 2025",
    type: "Residential",
    size: "850 sq ft",

    aboutTitle: "Where Comfort Meets Contemporary Design",
    aboutParagraphs: [
      "A contemporary living room transformation with elegant custom furniture, ambient lighting, and premium wall finishes. The design maximizes space while creating a warm, inviting atmosphere for modern family living.",
      "Every piece of furniture was custom-designed to fit the space perfectly, from the modular sofa to the accent wall unit. Soft lighting and natural textures complete the look, making this living room the heart of the home."
    ],

    details: [
      { label: "Client", value: "Mrs. Desai" },
      { label: "Location", value: "Dombivli, India" },
      { label: "Area", value: "850 sq.ft" },
      { label: "Budget", value: "₹18 Lakh" },
      { label: "Duration", value: "2 Weeks" },
      { label: "Completion", value: "September 2025" }
    ],

    materials: [
      { name: "Engineered Wood", category: "Flooring" },
      { name: "Velvet Fabric", category: "Sofa" },
      { name: "MDF Board", category: "TV Unit" },
      { name: "Philips Cove Lights", category: "Lighting" },
      { name: "Texture Paint", category: "Wall Finish" },
      { name: "Brass Hardware", category: "Fittings" },
      { name: "Glass Top", category: "Center Table" },
      { name: "Wool Rug", category: "Flooring" }
    ],

    materialCategories: ["flooring", "carpentry", "paint", "electrical", "glass", "ceiling"],

    features: [
      { icon: "sofa", title: "Custom Furniture", desc: "Tailored to your space" },
      { icon: "bolt", title: "Ambient Lighting", desc: "Modern LED & cove lights" },
      { icon: "layers", title: "Premium Finishes", desc: "Wall treatments & flooring" }
    ],

    stats: [
      { value: "850", label: "SQUARE FEET" },
      { value: "1", label: "LIVING ROOM" },
      { value: "2", label: "WEEKS" },
      { value: "15", label: "FURNITURE PIECES" }
    ],

    gallery: [
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Living Area" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "Sofa Setup" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "TV Unit" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Lighting" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", label: "Accent Wall" },
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", label: "Corner Detail" }
    ]
  },
  {
    id: 5,
    slug: "luxury-apartment",
    title: "Luxury Apartment",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
    tag: "RESIDENTIAL",
    description: "Complete luxury apartment interior solutions including modular kitchens, wardrobes, false ceilings, and premium wall finishes.",
    location: "Kalyan, India",
    year: "Completed 2024",
    type: "Residential",
    size: "1,200 sq ft",

    aboutTitle: "Redefining Modern Apartment Living",
    aboutParagraphs: [
      "An end-to-end luxury apartment interior project featuring modular kitchen, custom wardrobes, false ceilings, premium wall finishes, and thoughtful space planning for a refined modern lifestyle.",
      "The design language balances elegance with functionality — every storage solution is discreetly integrated, every light fixture serves a purpose, and every surface invites touch. This apartment is a true reflection of its owner's refined taste."
    ],

    details: [
      { label: "Client", value: "Mr. & Mrs. Patel" },
      { label: "Location", value: "Kalyan, India" },
      { label: "Area", value: "1,200 sq.ft" },
      { label: "Budget", value: "₹32 Lakh" },
      { label: "Duration", value: "2.5 Months" },
      { label: "Completion", value: "November 2024" }
    ],

    materials: [
      { name: "Hettich Hardware", category: "Kitchen" },
      { name: "Granite Top", category: "Kitchen Counter" },
      { name: "HDF Board", category: "Wardrobes" },
      { name: "Gypsum Ceiling", category: "False Ceiling" },
      { name: "Asian Paints Royale", category: "Painting" },
      { name: "Havells Wiring", category: "Electrical" },
      { name: "Jaquar Fittings", category: "Bathroom" },
      { name: "Somany Tiles", category: "Flooring" }
    ],

    materialCategories: ["carpentry", "ceiling", "paint", "electrical", "plumbing", "flooring", "glass", "hvac"],

    features: [
      { icon: "home", title: "Modular Kitchen", desc: "Modern & functional design" },
      { icon: "storage", title: "Custom Wardrobes", desc: "Tailored storage solutions" },
      { icon: "layers", title: "False Ceilings", desc: "Stylish ceiling designs" }
    ],

    stats: [
      { value: "1,200", label: "SQUARE FEET" },
      { value: "2", label: "BEDROOMS" },
      { value: "2", label: "BATHROOMS" },
      { value: "2.5", label: "MONTHS" }
    ],

    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "Modular Kitchen" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", label: "Wardrobe" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "False Ceiling" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Balcony" }
    ]
  },
  {
    id: 6,
    slug: "corporate-workspace",
    title: "Corporate Workspace",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920",
    tag: "OFFICE",
    description: "Turnkey corporate office solutions with modern workstations, conference rooms, reception areas, and ergonomic design.",
    location: "Pune, India",
    year: "Completed 2023",
    type: "Commercial",
    size: "8,000 sq ft",

    aboutTitle: "A Workspace Built for the Future",
    aboutParagraphs: [
      "A complete turnkey corporate workspace built from the ground up. The project included modern workstations, executive cabins, conference rooms, reception area, ergonomic furniture, and full MEP integration for a productive work environment.",
      "Designed to foster collaboration and innovation, the workspace features open-plan areas balanced with private cabins, abundant natural light, and carefully planned circulation. This is a workplace that employees are proud to call their office."
    ],

    details: [
      { label: "Client", value: "XYZ Corp" },
      { label: "Location", value: "Pune, India" },
      { label: "Area", value: "8,000 sq.ft" },
      { label: "Budget", value: "₹4.2 Cr" },
      { label: "Duration", value: "6 Months" },
      { label: "Completion", value: "August 2023" }
    ],

    materials: [
      { name: "Kajaria Vitrified", category: "Flooring" },
      { name: "Armstrong Ceiling", category: "False Ceiling" },
      { name: "Saint-Gobain Glass", category: "Partitions" },
      { name: "Godrej Furniture", category: "Furniture" },
      { name: "Philips LED", category: "Lighting" },
      { name: "Legrand Switches", category: "Electrical" },
      { name: "Asian Paints", category: "Painting" },
      { name: "Dorma Hardware", category: "Fittings" }
    ],

    materialCategories: ["flooring", "ceiling", "glass", "carpentry", "electrical", "paint", "fire", "security"],

    features: [
      { icon: "building", title: "120 Workstations", desc: "Ergonomic & functional" },
      { icon: "conference", title: "10 Cabins", desc: "Private executive spaces" },
      { icon: "reception", title: "Reception", desc: "Elegant first impression" }
    ],

    stats: [
      { value: "8,000", label: "SQUARE FEET" },
      { value: "120", label: "WORKSTATIONS" },
      { value: "10", label: "CABINS" },
      { value: "6", label: "MONTHS" }
    ],

    gallery: [
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", label: "Workspace" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Reception" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", label: "Conference Room" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "Executive Cabin" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "Breakout Zone" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Cafeteria" }
    ]
  }
];