// =============================================================================
// Luxe Parfum - Luxury Perfume Brand Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Luxe Parfum | Artisan Fragrances Since 1924",
  description: "Discover the art of fine perfumery with Luxe Parfum. Handcrafted fragrances using the world's most precious ingredients. Experience luxury scents that tell your unique story.",
  language: "en",
  keywords: "luxury perfume, fine fragrance, artisan perfume, niche fragrance, eau de parfum, perfume house",
  ogImage: "/images/og-image.jpg",
  canonical: "https://luxeparfum.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "LUXE",
  brandSubname: "Parfum",
  tagline: "Artisan Fragrances",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { 
      name: "Collections", 
      href: "#collections", 
      icon: "Sparkles",
      dropdown: [
        { name: "Signature Line", href: "#collections" },
        { name: "Limited Editions", href: "#collections" },
        { name: "Bespoke Creations", href: "#collections" },
      ]
    },
    { name: "Atelier", href: "#atelier", icon: "Users" },
    { name: "Heritage", href: "#heritage", icon: "BookOpen" },
    { name: "Journal", href: "#journal", icon: "Newspaper" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Discover Scents",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "LUXE",
  brandSubname: "Parfum",
  yearText: "Est. 1924",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "The Art of Fine Fragrance",
  mainTitle: "Scents That\nDefine You",
  ctaButtonText: "Explore Collection",
  ctaTarget: "#collections",
  stats: [
    { value: 100, suffix: "+", label: "Unique Fragrances" },
    { value: 99, suffix: "%", label: "Natural Ingredients" },
    { value: 100, suffix: "K+", label: "Happy Clients" },
  ],
  decorativeText: "ARTISAN PERFUMERY",
  backgroundImage: "/images/hero-perfume.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config (transformed to Perfume Showcase)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Our Collections",
  subtitle: "SIGNATURE FRAGRANCES",
  mainTitle: "Discover Your Signature Scent",
  wines: [
    {
      id: "noir-essence",
      name: "Noir Essence",
      subtitle: "Eau de Parfum",
      year: "2024",
      image: "/images/perfume-noir.png",
      filter: "",
      glowColor: "bg-purple-900/20",
      description: "A mysterious blend of black orchid, amber, and dark vanilla. Noir Essence captures the allure of midnight gardens and whispered secrets.",
      tastingNotes: "Top: Bergamot, Black Pepper | Heart: Orchid, Jasmine | Base: Amber, Vanilla, Patchouli",
      alcohol: "20%",
      temperature: "Room",
      aging: "12 Months",
    },
    {
      id: "rose-dor",
      name: "Rose d'Or",
      subtitle: "Eau de Parfum",
      year: "2024",
      image: "/images/perfume-rose.png",
      filter: "brightness(1.15) sepia(0.2) hue-rotate(-10deg) saturate(1.2)",
      glowColor: "bg-rose-500/15",
      description: "An opulent rose fragrance enhanced with golden honey and white musk. Rose d'Or embodies timeless femininity and grace.",
      tastingNotes: "Top: Damask Rose, Pink Pepper | Heart: Honey, Peony | Base: White Musk, Sandalwood",
      alcohol: "18%",
      temperature: "Cool",
      aging: "18 Months",
    },
    {
      id: "velvet-oud",
      name: "Velvet Oud",
      subtitle: "Extrait de Parfum",
      year: "2023",
      image: "/images/perfume-oud.png",
      filter: "brightness(0.95) sepia(0.3) hue-rotate(20deg) saturate(0.8)",
      glowColor: "bg-amber-700/20",
      description: "Rich oud wood wrapped in velvet spices and precious resins. Velvet Oud is a statement of power and sophistication.",
      tastingNotes: "Top: Saffron, Cardamom | Heart: Oud, Rose, Incense | Base: Leather, Amber, Musk",
      alcohol: "25%",
      temperature: "Warm",
      aging: "24 Months",
    },
    {
      id: "citrus-vert",
      name: "Citrus Vert",
      subtitle: "Eau Fraîche",
      year: "2024",
      image: "/images/perfume-citrus.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(10deg) saturate(1.1)",
      glowColor: "bg-lime-500/15",
      description: "A refreshing burst of Mediterranean citrus with aromatic herbs and sea breeze. Citrus Vert awakens the senses with pure vitality.",
      tastingNotes: "Top: Sicilian Lemon, Bergamot | Heart: Basil, Neroli | Base: Sea Salt, Cedarwood",
      alcohol: "15%",
      temperature: "Cool",
      aging: "6 Months",
    },
  ],
  features: [
    {
      icon: "Sparkles",
      title: "Pure Ingredients",
      description: "Sourced from the world's finest growers and distillers",
    },
    {
      icon: "Thermometer",
      title: "Optimal Storage",
      description: "Climate-controlled aging for perfect maturation",
    },
    {
      icon: "Clock",
      title: "Timeless Craft",
      description: "Months of careful blending and maceration",
    },
  ],
  quote: {
    text: "A fragrance is like a signature, something that identifies you before you even speak.",
    attribution: "— Marie Laurent, Master Perfumer",
    prefix: "Words of",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config (transformed to Atelier Carousel)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "The Atelier",
  subtitle: "WHERE MAGIC HAPPENS",
  mainTitle: "Our Creative Sanctuary",
  locationTag: "Grasse, France",
  slides: [
    {
      image: "/images/atelier-1.jpg",
      title: "The Perfumer's Studio",
      subtitle: "Heart of Creation",
      area: "500",
      unit: "sqm",
      description: "Where our master perfumers blend rare ingredients into olfactory masterpieces. Every formula is crafted with precision and passion.",
    },
    {
      image: "/images/atelier-2.jpg",
      title: "Ingredient Library",
      subtitle: "Treasury of Scents",
      area: "2,000",
      unit: "oils",
      description: "Over 2,000 precious essences from around the world. From Bulgarian rose to Indian sandalwood, our collection is unparalleled.",
    },
    {
      image: "/images/atelier-3.jpg",
      title: "Maceration Chambers",
      subtitle: "Time & Patience",
      area: "30",
      unit: "days",
      description: "Our signature fragrances mature for weeks in temperature-controlled chambers, allowing notes to harmonize perfectly.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config (transformed to Heritage)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Our Heritage",
  subtitle: "A CENTURY OF EXCELLENCE",
  mainTitle: "The Luxe Parfum Legacy",
  introText: "For nearly a century, Luxe Parfum has been at the forefront of fine fragrance creation. Our journey began in the perfume capital of the world and continues to set standards of excellence.",
  timeline: [
    { year: "1924", event: "Founded in Grasse by Henri Laurent" },
    { year: "1948", event: "First boutique opens in Paris" },
    { year: "1972", event: "Introduction of Signature Collection" },
    { year: "1998", event: "Expansion to 50 countries worldwide" },
    { year: "2024", event: "Celebrating 100 years of artistry" },
  ],
  tabs: [
    {
      id: "history",
      name: "Our History",
      icon: "History",
      image: "/images/heritage-history.jpg",
      content: {
        title: "From Grasse to the World",
        description: "What began as a small atelier in the hills of Grasse has grown into an internationally celebrated house of perfumery, yet our commitment to artisanal craftsmanship remains unchanged.",
        highlight: "100 Years of Passion",
      },
    },
    {
      id: "philosophy",
      name: "Philosophy",
      icon: "BookOpen",
      image: "/images/heritage-philosophy.jpg",
      content: {
        title: "The Art of Perfumery",
        description: "We believe that fragrance is the most intimate form of self-expression. Each creation is designed to evoke emotion, memory, and desire.",
        highlight: "Emotion in Every Drop",
      },
    },
    {
      id: "awards",
      name: "Recognition",
      icon: "Award",
      image: "/images/heritage-awards.jpg",
      content: {
        title: "Award-Winning Creations",
        description: "Our fragrances have been honored with prestigious awards from the Fragrance Foundation and international perfume academies.",
        highlight: "50+ Industry Awards",
      },
    },
  ],
  openingHours: "Mon-Sat 10:00 AM - 7:00 PM",
  openingHoursLabel: "Boutique Hours",
  ctaButtonText: "Visit Our Boutiques",
  yearBadge: "1924",
  yearBadgeLabel: "Founded",
  quote: {
    prefix: "The",
    text: "true art of perfumery lies not in the ingredients alone, but in the soul of the creator who blends them.",
    attribution: "— Henri Laurent, Founder",
  },
  founderPhotoAlt: "Henri Laurent, Founder of Luxe Parfum",
  founderPhoto: "/images/founder.jpg",
};

// -----------------------------------------------------------------------------
// News Config (transformed to Journal/Reviews)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "The Journal",
  subtitle: "NEWS & INSIGHTS",
  mainTitle: "Stories from the World of Fragrance",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/journal-1.jpg",
      title: "The Art of Layering Fragrances",
      excerpt: "Discover how to create your unique scent signature by combining multiple fragrances harmoniously.",
      date: "March 1, 2024",
      category: "Tips & Guides",
    },
    {
      id: 2,
      image: "/images/journal-2.jpg",
      title: "Sustainable Sourcing: Our Commitment",
      excerpt: "Learn about our partnerships with ethical growers and our journey toward fully sustainable ingredients.",
      date: "February 15, 2024",
      category: "Sustainability",
    },
    {
      id: 3,
      image: "/images/journal-3.jpg",
      title: "Behind the Scent: Noir Essence",
      excerpt: "An exclusive look at the creation of our latest masterpiece with Master Perfumer Marie Laurent.",
      date: "January 28, 2024",
      category: "Behind the Scenes",
    },
    {
      id: 4,
      image: "/images/journal-4.jpg",
      title: "Fragrance Trends for 2024",
      excerpt: "From skin scents to bold statements, explore the fragrance trends defining this year.",
      date: "January 10, 2024",
      category: "Trends",
    },
  ],
  testimonialsScriptText: "Testimonials",
  testimonialsSubtitle: "WHAT OUR CLIENTS SAY",
  testimonialsMainTitle: "Words of Love",
  testimonials: [
    {
      name: "Isabella Romano",
      role: "Fashion Editor, Vogue Italia",
      text: "Noir Essence has become my signature scent. The complexity and longevity are unmatched. Every time I wear it, I receive compliments.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Creative Director",
      text: "I've been collecting fragrances for 20 years, and Luxe Parfum consistently delivers exceptional quality. Velvet Oud is a masterpiece.",
      rating: 5,
    },
    {
      name: "Sophie Dubois",
      role: "Perfume Enthusiast",
      text: "The attention to detail in every bottle is remarkable. From the scent to the packaging, everything exudes luxury and craftsmanship.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "THE JOURNEY",
  storyTitle: "A Century of Scent",
  storyParagraphs: [
    "What started as a dream in a small Grasse atelier has blossomed into one of the world's most respected perfume houses. For four generations, the Laurent family has preserved the art of traditional perfumery while embracing innovation.",
    "Today, under the guidance of Master Perfumer Marie Laurent, we continue to create fragrances that capture moments, evoke memories, and express the inexpressible. Each bottle is a testament to our unwavering commitment to excellence.",
  ],
  storyTimeline: [
    { value: "100", label: "Years of Heritage" },
    { value: "50+", label: "Countries" },
    { value: "4", label: "Generations" },
  ],
  storyQuote: {
    prefix: "Our Promise",
    text: "Every fragrance we create carries our family's legacy and our promise of uncompromising quality.",
    attribution: "— Marie Laurent",
  },
  storyImage: "/images/story-image.jpg",
  storyImageCaption: "The Laurent family atelier in Grasse, 1952",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get in Touch",
  subtitle: "CONTACT US",
  mainTitle: "Experience Luxe Parfum",
  introText: "Visit our boutiques for a personalized fragrance consultation, or reach out to learn more about our bespoke services.",
  contactInfoTitle: "Visit Us",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Flagship Boutique",
      value: "12 Rue Saint-Honoré, Paris",
      subtext: "Open daily 10am - 7pm",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+33 1 42 60 00 00",
      subtext: "Mon-Fri 9am - 6pm CET",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "bonjour@luxeparfum.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: "Clock",
      label: "Atelier Tours",
      value: "Book a Visit",
      subtext: "Grasse, France",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    visitDateLabel: "Preferred Visit Date",
    visitorsLabel: "Number of Guests",
    visitorsOptions: ["1", "2", "3-5", "6-10", "10+"],
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your fragrance preferences or any questions you have...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll be in touch soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "LUXE",
  tagline: "Parfum",
  description: "Artisan fragrances crafted with passion since 1924. Discover scents that tell your unique story.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Youtube", label: "YouTube", href: "https://youtube.com" },
  ],
  linkGroups: [
    {
      title: "Collections",
      links: [
        { name: "Signature Line", href: "#collections" },
        { name: "Limited Editions", href: "#collections" },
        { name: "Bespoke Creations", href: "#collections" },
        { name: "Gift Sets", href: "#collections" },
      ],
    },
    {
      title: "Discover",
      links: [
        { name: "Our Heritage", href: "#heritage" },
        { name: "The Atelier", href: "#atelier" },
        { name: "Journal", href: "#journal" },
        { name: "Find a Boutique", href: "#contact" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "12 Rue Saint-Honoré, Paris" },
    { icon: "Phone", text: "+33 1 42 60 00 00" },
    { icon: "Mail", text: "bonjour@luxeparfum.com" },
  ],
  newsletterLabel: "Subscribe to Our Newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2024 Luxe Parfum. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  icpText: "",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
