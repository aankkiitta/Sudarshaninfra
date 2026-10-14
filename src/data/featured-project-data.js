// src/data/featured-project-data.js

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
  slug: "modern-minimalist-penthouse",
  title: "Modern Minimalist Penthouse",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
  heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1920",
  tag: "FURNITURE",
  description: "High-quality office furniture solutions including workstations, executive cabins, conference tables, storage units, and customized furniture for modern workplaces.",
  location: "Manhattan, NYC",
  year: "Completed 2025",
  type: "Residential",
  size: "2,400 sq ft",

  aboutTitle: "A Sculptural Urban Sanctuary",
  aboutParagraphs: [
    "Perched high above the Manhattan skyline, this 2,400-square-foot penthouse redefines urban luxury through a lens of minimalist sophistication. The design philosophy centered on creating a serene retreat that feels both expansive and intimate — a place where light, texture, and proportion come together in perfect harmony.",
    "Every surface, material, and detail was meticulously curated to evoke a sense of calm and timeless elegance. From the floor-to-ceiling windows that frame panoramic city views to the hand-selected natural stone and custom millwork, every element speaks to a refined design language."
  ],

  details: [
    { label: "Client", value: "Private Resident" },
    { label: "Location", value: "Manhattan, NYC" },
    { label: "Area", value: "2,400 sq.ft" },
    { label: "Budget", value: "$1.2M" },
    { label: "Duration", value: "6 Months" },
    { label: "Completion", value: "March 2025" }
  ],

  // 👇 MATERIALS USED
  materials: [
    { name: "Italian Marble", category: "Flooring" },
    { name: "Teak Wood", category: "Furniture" },
    { name: "Gypsum Board", category: "False Ceiling" },
    { name: "Asian Paints Royale", category: "Painting" },
    { name: "Saint-Gobain Glass", category: "Windows" },
    { name: "Kohler Fittings", category: "Bathroom" },
    { name: "Havells Wiring", category: "Electrical" },
    { name: "Godrej Locks", category: "Security" }
  ],

  // 👇 MATERIAL CATEGORIES (random assignment)
  materialCategories: ["flooring", "carpentry", "ceiling", "paint", "glass", "plumbing", "electrical", "security"],

  // 👇👇👇 VIDEO TOUR — YE NAYA ADD KARO 👇👇👇
  video: {
    src: video1,
    poster: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1920",
    title: "Penthouse Walkthrough",
    subtitle: "A cinematic tour of this sculptural urban sanctuary",
    description: "Explore every corner of this 2,400 sq ft penthouse — from the floor-to-ceiling windows to the hand-selected natural stone and custom millwork.",
    highlights: [
      "2,400 sq ft of refined luxury",
      "Floor-to-ceiling skyline views",
      "Italian marble + teak wood finishes"
    ]
  },
  // 👆👆👆 VIDEO TOUR END 👆👆👆

  features: [
    { icon: "home", title: "1 & 2 BHK", desc: "Thoughtfully planned residences" },
    { icon: "layers", title: "6+ Lifestyle", desc: "Amenities & conveniences" },
    { icon: "building", title: "Green Spaces", desc: "Designed for relaxed living" }
  ],

  stats: [
    { value: "2,400", label: "SQUARE FEET" },
    { value: "4", label: "BEDROOMS" },
    { value: "3.5", label: "BATHROOMS" },
    { value: "6", label: "MONTHS" }
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "Living Room" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Balcony" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "Bedroom" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Kitchen" },
    { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", label: "Library" },
    { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", label: "Conference Room" }
  ]
},
  {
    id: 2,
    slug: "corporate-office-fitout",
    title: "Corporate Office Fit-Out",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
    tag: "COMMERCIAL",
    description: "Complete office interior fit-outs including partitions, false ceilings, flooring, modular workspaces, lighting, and turnkey workspace solutions.",
    location: "Mumbai, India",
    year: "Completed 2024",
    type: "Commercial",
    size: "5,200 sq ft",

    aboutTitle: "Where Innovation Meets Productivity",
    aboutParagraphs: [
      "A complete corporate office fit-out designed to create a productive and inspiring workspace. The project blends modern aesthetics with functional efficiency, ensuring every corner of the office serves a purpose while maintaining a cohesive design language.",
      "From modular partitions to premium flooring, false ceilings to custom workstations, each element was carefully selected to support collaboration and focus. The result is a workspace that feels both professional and welcoming, fostering creativity and productivity at every level."
    ],

    details: [
      { label: "Client", value: "ABC Pvt Ltd" },
      { label: "Location", value: "Mumbai, India" },
      { label: "Area", value: "5,200 sq.ft" },
      { label: "Budget", value: "₹2.5 Cr" },
      { label: "Duration", value: "4 Months" },
      { label: "Completion", value: "December 2024" }
    ],

    materials: [
      { name: "Vitrified Tiles", category: "Flooring" },
      { name: "Gypsum Board", category: "False Ceiling" },
      { name: "Saint-Gobain Glass", category: "Partitions" },
      { name: "Godrej Workstations", category: "Furniture" },
      { name: "Philips LED Lights", category: "Lighting" },
      { name: "Havells Wiring", category: "Electrical" },
      { name: "Asian Paints", category: "Painting" },
      { name: "Kone Elevators", category: "Elevators" }
    ],

    materialCategories: ["flooring", "ceiling", "glass", "carpentry", "electrical", "paint", "hvac", "security"],

    features: [
      { icon: "workstation", title: "80 Workstations", desc: "Modular & ergonomic design" },
      { icon: "conference", title: "Conference Rooms", desc: "6 premium meeting spaces" },
      { icon: "reception", title: "Reception Area", desc: "Elegant first impression" }
    ],

    stats: [
      { value: "5,200", label: "SQUARE FEET" },
      { value: "80", label: "WORKSTATIONS" },
      { value: "6", label: "CABINS" },
      { value: "4", label: "MONTHS" }
    ],

    gallery: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", label: "Reception" },
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", label: "Workstations" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", label: "Conference Room" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", label: "Cabin" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", label: "Lounge" },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", label: "Meeting Pod" }
    ]
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