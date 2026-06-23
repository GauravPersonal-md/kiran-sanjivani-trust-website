import founderImg from "@/images/founder.jpg";
import { LucideYoutube,LucideInstagram } from "lucide-react";
export const siteConfig = {
  name: "Kiran Sanjivani Trust",
  shortName: "KST",
  tagline: "Empowering Lives, Building an Inclusive & Healthy Society",
  description:
    "Kiran Sanjivani Trust is a registered NGO dedicated to education, healthcare, women empowerment, community development, and inclusion. Join us in creating lasting change.",
  url: "https://kiransanjivani.org",
  email: "kiransanjivani108@gmail.com",
  phone: "+91 8475802710",
  address: "Gangotri vihar kaniya, Ramnagar, Nainital, Uttarakhand, India",
  founded: "2026",
  /** Logo — place your image in /public/ and update src below */
  logo: {
    /** Path relative to /public (e.g. "/logo.png", "/logo.svg") — leave empty to use default icon */
    src: "/logo.jpeg",
    alt: "Kiran Sanjivani Trust Logo",
    width: 40,
    height: 40,
    showText: true,
    textPrimary: "Kiran Sanjivani",
    textSecondary: "Trust",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/projects", label: "Projects" },
  // { href: "/media", label: "Our Work" },
  { href: "/donate", label: "Donate" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Volunteers", value: 10, suffix: "+" },
  { label: "Projects", value: 8, suffix: "+" },
  { label: "Beneficiaries", value: 50, suffix: "+" },
  { label: "Communities Served", value: 12, suffix: "+" },
];

export const coreValues = [
  {
    title: "Compassion",
    description: "We lead with empathy, treating every individual with dignity and care.",
    icon: "Heart",
  },
  {
    title: "Integrity",
    description: "Transparency and accountability guide every decision we make.",
    icon: "Shield",
  },
  {
    title: "Inclusion",
    description: "We champion accessibility and equal opportunity for all.",
    icon: "Users",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in every program we deliver.",
    icon: "Award",
  },
];

export const impactAreas = [
  {
    title: "Education",
    description:
      "Scholarships, digital literacy, and after-school programs empowering students.",
    icon: "GraduationCap",
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
  },
  {
    title: "Healthcare",
    description:
      "Free medical camps, maternal health initiatives, and mobile clinics reaching remote communities.",
    icon: "HeartPulse",
    gradientFrom: "#22c55e",
    gradientTo: "#059669",
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development, microfinance support, and leadership training women.",
    icon: "Sparkles",
    gradientFrom: "#f59e0b",
    gradientTo: "#ca8a04",
  },
  {
    title: "Community Development",
    description:
      "Infrastructure projects, clean water access, and sustainable livelihood programs.",
    icon: "Building2",
    gradientFrom: "#84cc16",
    gradientTo: "#16a34a",
  },
  {
    title: "Inclusion & Accessibility",
    description:
      "Disability support, assistive technology, and inclusive education for differently-abled individuals.",
    icon: "Accessibility",
    gradientFrom: "#14b8a6",
    gradientTo: "#0891b2",
  },
];

export const volunteerBenefits = [
  {
    title: "Certificate Opportunities",
    description: "Earn recognized certificates for your volunteer hours and contributions.",
    icon: "FileBadge",
  },
  {
    title: "Leadership Experience",
    description: "Lead community projects and develop real-world leadership skills.",
    icon: "Crown",
  },
  {
    title: "Skill Development",
    description: "Gain hands-on experience in social work, event management, and more.",
    icon: "TrendingUp",
  },
  {
    title: "Network & Community",
    description: "Connect with like-minded changemakers and CSR partners nationwide.",
    icon: "Network",
  },
];



export const galleryImages = [
  { src: "/images/IMG_0026.jpg", alt: "Education program", category: "Education" },
  { src: "/images/IMG_8606.jpg", alt: "Yoga", category: "Yoga" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop", alt: "Volunteer team", category: "Volunteers" },
  { src: "/images/IMG_5795.JPG.jpeg", alt: "Marathon event", category: "Event" },
  { src: "/images/IMG_1439.JPG.jpeg", alt: "Dandiya Event", category: "Event" },
  { src: "/images/IMG_8652.jpg", alt: "Fitness", category: "Fitness" },
  { src: "/images/IMG_2475.jpg", alt: "Women Empowerment", category: "Women Empowerment" },
  { src: "/images/IMG_8994.jpg", alt: "Travel", category: "Women Empowerment" },
  { src: "/images/IMG_0333.jpg.jpeg", alt: "Fitness", category: "Fitness" },
  { src: "/images/IMG_9700.jpg", alt: "Zumba", category: "Zumba" },
  { src: "/images/IMG_9624.jpg", alt: "Healthcare", category: "Education" },
  { src: "/images/IMG_1488.jpg.jpeg", alt: "Fitness", category: "Zumba" },
  { src: "/images/IMG_0329.jpg.jpeg", alt: "Fitness", category: "Fitness" },
  { src: "/images/IMG_0502.jpg.jpeg", alt: "Marathon event", category: "Event" },
  { src: "/images/IMG_5800.jpg.jpeg", alt: "Marathon event", category: "Event" },
  { src: "/images/IMG_5875.jpg.jpeg", alt: "Event", category: "Event" },
  { src: "/images/IMG_0400.jpg.jpeg", alt: "Fitness", category: "Zumba" },
  { src: "/images/IMG_8603.jpg", alt: "Yoga", category: "Yoga" },
  { src: "/images/IMG_8652.jpg", alt: "Yoga", category: "Yoga" },
  { src: "/images/IMG_9041.jpg", alt: "Fitness", category: "Zumba" },
];

export const teamMembers = {
  founder: {
    name: "Mrs. Kiran Mathpal",
    role: "Founder & Chairperson",
    bio: "A visionary social entrepreneur with 10+ years in teaching and community development. Kiran Mathpal founded Kiran Sanjivani Trust to bridge the gap between privilege and opportunity.",
    image: founderImg,
    social: { YoutubeIcon: "https://www.youtube.com/@kiransanjivani", Instagram: "https://www.instagram.com/kiransanjivanitrust" },
  },
  /** 
  trustees: [
    {
      name: "Mr. Vikram Singh",
      role: "Trustee",
      bio: "Former IAS officer dedicated to rural development and policy advocacy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#" },
    },
    {
      name: "Mrs. Sunita Reddy",
      role: "Trustee",
      bio: "Healthcare administrator with expertise in public health programs.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: { linkedin: "#" },
    },
    {
      name: "Mr. Arjun Mehta",
      role: "Trustee",
      bio: "Corporate leader and CSR strategist bridging business and social impact.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      social: { linkedin: "#" },
    },
  ],
  volunteers: [
    {
      name: "Anjali Desai",
      role: "Lead Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Rahul Verma",
      role: "Education Program Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Kavita Nair",
      role: "Healthcare Volunteer Lead",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      name: "Suresh Pillai",
      role: "Community Outreach Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
  ],
  */
};

export const donationImpacts = [
  { amount: "₹500", impact: "Provides school supplies for 2 children for a month" },
  { amount: "₹2,000", impact: "Sponsors a health checkup camp for 10 people" },
  { amount: "₹5,000", impact: "Funds skill training for one woman entrepreneur" },
  { amount: "₹10,000", impact: "Supports a child's education for one full year" },
];

/**
 * Donation payment details — update UPI ID, bank info, and QR image here.
 *
 * UPI QR: save your image as `public/images/upi-qr.jpg` (or change `qrImage` below).
 * Supported: .jpg, .jpeg, .png, .webp
 */
export const donationDetails = {
  upi: {
    id: "kirankittu314@okaxis",
    payeeName: "Kiran Mathpal",
    qrImage: "/images/upi.jpeg",
    qrAlt: "UPI QR code for Kiran Sanjivani Trust donations",
  },
  bank: {
    accountName: "Kiran Mathpal",
    bankName: "Punjab National Bank",
    accountNumber: "7783000100049012",
    ifsc: "PUNB0778300",
    accountType: "Saving Account",
    branch: "KANIYA, PO RAMNAGAR NAINITAL",
  },
};
/*
export const projects = [
  {
    id: 1,
    title: "Digital Learning Initiative",
    category: "Education",
    description: "Equipping 50 rural schools with computers and internet connectivity.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    status: "Ongoing",
    beneficiaries: "8,000+",
  },
  {
    id: 2,
    title: "Mobile Health Clinics",
    category: "Healthcare",
    description: "Four mobile units providing free healthcare in underserved areas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    status: "Ongoing",
    beneficiaries: "25,000+",
  },
  {
    id: 3,
    title: "Saksham Women Program",
    category: "Women Empowerment",
    description: "Vocational training and microfinance for women in 20 villages.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    status: "Ongoing",
    beneficiaries: "5,000+",
  },
  {
    id: 4,
    title: "Clean Water Project",
    category: "Community Development",
    description: "Installing water purification systems in 30 villages.",
    image: "https://images.unsplash.com/photo-1548839140-29a7493991ef?w=600&h=400&fit=crop",
    status: "Completed",
    beneficiaries: "15,000+",
  },
  {
    id: 5,
    title: "Inclusive Education Hub",
    category: "Inclusion & Accessibility",
    description: "Special education center with assistive technology for 200+ children.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    status: "Ongoing",
    beneficiaries: "200+",
  },
  {
    id: 6,
    title: "Green Communities",
    category: "Community Development",
    description: "Solar power and waste management solutions for 15 communities.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3eff68?w=600&h=400&fit=crop",
    status: "Ongoing",
    beneficiaries: "10,000+",
  },
];
*/
export const socialLinks = {
  instagram: "https://instagram.com/kiransanjivanitrust",
  youtube: "https://youtube.com/@kiransanjivani",
};

export const socialProfiles = {
  youtube: {
    handle: "@kiransanjivani",
    url: socialLinks.youtube,
    subscribers: "63.5K",
    description: "Watch our impact stories, event highlights, and volunteer journeys on YouTube.",
  },
  instagram: {
    handle: "@kiransanjivanitrust",
    url: socialLinks.instagram,
    description: "Follow daily updates from the field — health camps, education drives, and community celebrations.",
  },
};

export const youtubeVideos = [
  {
    id: "LXb3EKWsInQ",
    title: "Kiran Sanjivani Trust — Impact Documentary 2025",
    description: "A glimpse into our programs transforming lives across 85+ communities in India.",
    duration: "4:32",
    views: "45K",
  },
  {
    id: "ScMzIvxBSi4",
    title: "Annual Health Camp 2025 — Full Coverage",
    description: "Free health checkups and vaccinations for 1,000+ beneficiaries in New Delhi.",
    duration: "6:18",
    views: "28K",
  },
  {
    id: "eVTXPUF4Oz4",
    title: "Education for All — Scholarship Program",
    description: "Meet the students whose lives changed through our scholarship initiative.",
    duration: "3:45",
    views: "19K",
  },
  {
    id: "nA1Awt0bGJE",
    title: "Women Empowerment Summit 2025",
    description: "500 women trained in vocational skills and entrepreneurship.",
    duration: "5:02",
    views: "15K",
  },
  {
    id: "hY7m5jjJ9mM",
    title: "Volunteer Orientation — Join the Movement",
    description: "Learn how to become a volunteer and lead community projects with KST.",
    duration: "2:58",
    views: "11K",
  },
  {
    id: "QH2-TGUlwu4",
    title: "Clean Water Project — Village Transformation",
    description: "How we brought clean drinking water to 500 families in rural Maharashtra.",
    duration: "7:14",
    views: "32K",
  },
];

export const instagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop",
    caption: "Health camp serving 200+ families today. Grateful for our volunteer doctors! 🏥",
    category: "Healthcare",
    likes: "1.2K",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop",
    caption: "New digital learning center inaugurated in rural UP. 200 students enrolled! 📚",
    category: "Education",
    likes: "980",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop",
    caption: "300 volunteers united for World Environment Day tree plantation drive 🌳",
    category: "Environment",
    likes: "1.5K",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop",
    caption: "Women's skill workshop — 50 new entrepreneurs trained in tailoring & crafts ✨",
    category: "Empowerment",
    likes: "876",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop",
    caption: "Youth leadership camp — empowering the next generation of changemakers 🙌",
    category: "Youth",
    likes: "1.1K",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1593113598132-c776954426e4?w=600&h=600&fit=crop",
    caption: "Community food distribution — no one sleeps hungry on our watch ❤️",
    category: "Community",
    likes: "2.3K",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=600&fit=crop",
    caption: "Inclusive education hub opening — assistive tech for 200+ children 🎓",
    category: "Inclusion",
    likes: "743",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3eff68?w=600&h=600&fit=crop",
    caption: "5,000 trees planted across 12 villages. Green communities, brighter future 🌿",
    category: "Environment",
    likes: "1.8K",
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop",
    caption: "First graduates from our scholarship program — dreams fulfilled! 🎉",
    category: "Education",
    likes: "3.1K",
  },
];

export const footerLinks = {
  quick: [
    { href: "/about", label: "About Us" },
    // { href: "/projects", label: "Our Projects" },
    // { href: "/media", label: "Our Work" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};
