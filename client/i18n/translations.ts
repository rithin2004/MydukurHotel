export type Language = "en" | "te";

type Dish = { name: string; description: string };
type Service = { title: string; description: string };
type Testimonial = { name: string; quote: string };

export type Translations = {
  brand: string;
  logoAlt: string;
  switchLanguage: { label: string; ariaLabel: string };
  nav: {
    home: string;
    menu: string;
    services: string;
    quality: string;
    contact: string;
  };
  hero: {
    titleBefore: string;
    titleAfter: string;
    text: string;
    signatureButton: string;
    contactButton: string;
  };
  signature: {
    title: string;
    subtitle: string;
    dishes: {
      masala: Dish;
      karam: Dish;
      gheeKaram: Dish;
      plain: Dish;
      gheeKaramPodi: Dish;
      idlySambar: Dish;
    };
  };
  menu: {
    title: string;
    subtitle: string;
    mainTitle: string;
    sideTitle: string;
    mainItems: string[];
    sideItems: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: [Service, Service, Service, Service];
  };
  quality: {
    title: string;
    years: string;
    customers: string;
    dishes: string;
    testimonials: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    visitTitle: string;
    addressLines: [string, string, string];
    directions: string;
    callTitle: string;
    whatsapp: string;
    chatOnWhatsapp: string;
    hoursTitle: string;
    days: string;
    hours: string;
    formTitle: string;
    name: string;
    mobile: string;
    email: string;
    message: string;
    send: string;
    nameInvalid: string;
    mobileInvalid: string;
    emailInvalid: string;
    messageRequired: string;
    agreeBefore: string;
    agreeBetween: string;
    agreeTermsLink: string;
    agreeAfter: string;
    agreeRequired: string;
    mapTitle: string;
  };
  whatsapp: {
    quickMessage: string;
    formMessage: (f: {
      name: string;
      mobile: string;
      email: string;
      message: string;
    }) => string;
  };
  status: {
    openNow: string;
    closedNow: string;
    closedToday: string;
    closesAt: string;
    opensToday: string;
    opensTomorrow: string;
    opensOn: (day: string) => string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    addressLines: [string, string];
    phone: string;
    openDaily: string;
    rights: string;
    madeWith: string;
    privacy: string;
    terms: string;
  };
  pages: {
    backHome: string;
    effectiveDate: string;
    effectiveDateValue: string;
    translationNote: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundButton: string;
    privacyTitle: string;
    termsTitle: string;
  };
};

export const en: Translations = {
  brand: "Mydukur Hotel",
  logoAlt: "Mydukur Hotel Logo",
  switchLanguage: { label: "తెలుగు", ariaLabel: "Switch to Telugu" },
  nav: {
    home: "Home",
    menu: "Menu",
    services: "Services",
    quality: "Quality",
    contact: "Contact",
  },
  hero: {
    titleBefore: "Welcome to ",
    titleAfter: "",
    text: "Experience the authentic taste of South Indian cuisine with our traditional recipes and warm hospitality that has been serving families for two generations.",
    signatureButton: "View Our Signature Dishes",
    contactButton: "Contact Us",
  },
  signature: {
    title: "Our Signature Dishes",
    subtitle:
      "Discover our most beloved creations that have made Mydukur Hotel a culinary destination",
    dishes: {
      masala: {
        name: "Masala Dosa",
        description:
          "Golden crispy dosa filled with spiced potato masala, served with coconut chutney and sambar. Our most popular dish!",
      },
      karam: {
        name: "Karam Dosa",
        description:
          "Spicy dosa with special red chilli onion chutney that adds a fiery kick to every bite. Perfect for spice lovers!",
      },
      gheeKaram: {
        name: "Ghee Karam Dosa",
        description:
          "Hot and crispy dosa topped with spicy red chilli onion chutney and a touch of ghee for that fiery kick you just can't resist.",
      },
      plain: {
        name: "Plain Dosa",
        description:
          "Classic thin and crispy dosa, light and delicious. The perfect canvas for our homemade chutneys.",
      },
      gheeKaramPodi: {
        name: "Ghee Karam Podi Dosa",
        description:
          "Crispy dosa topped with flavorful red chilli onion chutney, homemade podi and a drizzle of ghee that creates a bold and fiery taste in every bite. A must-try for spice enthusiasts.",
      },
      idlySambar: {
        name: "Idly Sambar",
        description:
          "Soft and fluffy idlis served with hot, flavorful sambar for a wholesome South Indian classic.",
      },
    },
  },
  menu: {
    title: "Our Delicious Menu",
    subtitle:
      "Savor the authentic flavors of South India with our carefully crafted traditional dishes",
    mainTitle: "Main Dishes",
    sideTitle: "Side Dishes",
    mainItems: [
      "Plain Dosa",
      "Karam Dosa",
      "Podi Dosa",
      "Karam Podi Dosa",
      "Ghee Karam Podi Dosa",
      "Karam Masala Dosa",
      "Ghee Karam Dosa",
      "Ghee Masala Dosa",
      "Idly",
      "Idly Sambar",
      "Vada",
      "Vada Sambar",
      "Poori",
      "Bonda",
    ],
    sideItems: [
      "Coconut Chutney",
      "Red Chilli Onion Chutney",
      "Masala for Poori",
      "Sambar",
    ],
  },
  services: {
    title: "Our Services",
    subtitle:
      "We pride ourselves on delivering exceptional dining experiences with quality and tradition",
    items: [
      {
        title: "Authentic South Indian Cuisine",
        description:
          "Traditional recipes passed down through generations, prepared with the finest ingredients.",
      },
      {
        title: "Fresh Daily Preparation",
        description:
          "All our items are prepared fresh daily using traditional cooking methods.",
      },
      {
        title: "Hygienic Kitchen",
        description:
          "Maintaining the highest standards of cleanliness and food safety.",
      },
      {
        title: "Catering Services",
        description:
          "We provide professional catering services for events, parties, and special occasions with authentic South Indian cuisine.",
      },
    ],
  },
  quality: {
    title: "Quality That Speaks for Itself",
    years: "Years of Experience",
    customers: "Happy Customers Weekly",
    dishes: "Authentic Dishes",
    testimonials: [
      {
        name: "Paritala Vaibhav",
        quote:
          "The most authentic South Indian food I've ever tasted. Mydukur Hotel brings the true flavors of traditional cuisine to every plate.",
      },
      {
        name: "S Sai Rithin",
        quote:
          "I love the Masala Dosa here. The red karam combined with the poori curry is a perfect match. I like it so much that I sometimes eat here every day!",
      },
      {
        name: "Menta Sathya Hemanth",
        quote:
          "The dosas here are delicious and very affordable. One of my favourite places to eat.",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Visit us today and experience the authentic taste of South Indian cuisine",
    visitTitle: "Visit Us",
    addressLines: [
      "Mydukur Hotel",
      "Main Bazaar, Atmakur, Nellore",
      "Andhra Pradesh, India",
    ],
    directions: "Get Directions",
    callTitle: "Call Us",
    whatsapp: "WhatsApp",
    chatOnWhatsapp: "Chat on WhatsApp",
    hoursTitle: "Opening Hours",
    days: "Monday - Sunday",
    hours: "7:00 AM - 11:00 AM",
    formTitle: "Get in Touch",
    name: "Name",
    mobile: "Mobile Number",
    email: "Email",
    message: "Message",
    send: "Send Message via WhatsApp",
    nameInvalid: "Please enter your name (letters only, at least 2)",
    mobileInvalid: "Please enter a 10-digit mobile number",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Please enter your message",
    agreeBefore: "I agree to the ",
    agreeBetween: " and ",
    agreeTermsLink: "Terms of Use",
    agreeAfter: ".",
    agreeRequired:
      "Please agree to the Privacy Policy and Terms of Use before sending",
    mapTitle: "Mydukur Hotel on Google Maps",
  },
  whatsapp: {
    quickMessage: "Hello, I would like to know more details of Mydukur Hotel.",
    formMessage: ({ name, mobile, email, message }) => `Hello Mydukur Hotel!

Greetings! My name is ${name}.

${message}

Please contact me at ${mobile}${email ? ` or email ${email}` : ""}.

Thank you for your time and I look forward to hearing from you soon!`,
  },
  status: {
    openNow: "Open now",
    closedNow: "Closed now",
    closedToday: "Closed today",
    closesAt: "Closes at 11:00 AM",
    opensToday: "Opens today at 7:00 AM",
    opensTomorrow: "Opens tomorrow at 7:00 AM",
    opensOn: (day) => `Opens ${day} at 7:00 AM`,
  },
  footer: {
    tagline:
      "Serving authentic South Indian cuisine with traditional recipes and warm hospitality for over 25 years.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    addressLines: ["Main Bazaar, Atmakur, Nellore", "Andhra Pradesh, India"],
    phone: "Phone",
    openDaily: "Open daily: 7:00 AM - 11:00 AM",
    rights: "Mydukur Hotel. All rights reserved.",
    madeWith: "Made with ❤️ for authentic South Indian cuisine lovers.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  pages: {
    backHome: "Back to home",
    effectiveDate: "Effective date",
    effectiveDateValue: "12 October 2026",
    translationNote: "",
    notFoundTitle: "Page not found",
    notFoundText:
      "Sorry, we couldn't find that page. Our dosas are waiting on the home page!",
    notFoundButton: "Back to Home",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
  },
};

export const te: Translations = {
  brand: "మైదుకూరు హోటల్",
  logoAlt: "మైదుకూరు హోటల్ లోగో",
  switchLanguage: { label: "English", ariaLabel: "ఇంగ్లీష్‌కు మార్చండి" },
  nav: {
    home: "హోమ్",
    menu: "మెనూ",
    services: "సేవలు",
    quality: "నాణ్యత",
    contact: "సంప్రదించండి",
  },
  hero: {
    titleBefore: "",
    titleAfter: "‌కు స్వాగతం",
    text: "సంప్రదాయ వంటకాలు, ఆత్మీయ ఆతిథ్యంతో రెండు తరాలుగా కుటుంబాలకు సేవ చేస్తున్న మా హోటల్‌లో అసలైన దక్షిణ భారత రుచులను ఆస్వాదించండి.",
    signatureButton: "మా ప్రత్యేక వంటకాలు చూడండి",
    contactButton: "మమ్మల్ని సంప్రదించండి",
  },
  signature: {
    title: "మా ప్రత్యేక వంటకాలు",
    subtitle:
      "మైదుకూరు హోటల్‌కు రుచుల గమ్యస్థానంగా పేరు తెచ్చిన మా అత్యంత ప్రియమైన వంటకాలు",
    dishes: {
      masala: {
        name: "మసాలా దోశ",
        description:
          "మసాలా దట్టించిన బంగాళాదుంప కూరతో నింపిన బంగారు రంగు కరకరలాడే దోశ, కొబ్బరి చట్నీ, సాంబార్‌తో వడ్డిస్తాం. మా అత్యంత ప్రజాదరణ పొందిన వంటకం!",
      },
      karam: {
        name: "కారం దోశ",
        description:
          "ప్రత్యేకమైన ఎర్ర కారం ఉల్లి చట్నీతో ప్రతి ముద్దలో ఘాటైన రుచినిచ్చే దోశ. కారం ఇష్టపడేవారికి సరైన ఎంపిక!",
      },
      gheeKaram: {
        name: "నెయ్యి కారం దోశ",
        description:
          "ఘాటైన ఎర్ర కారం ఉల్లి చట్నీ, కాస్త నెయ్యితో వేడివేడిగా వడ్డించే కరకరలాడే దోశ. ఆ ఘాటైన రుచిని వదులుకోలేరు.",
      },
      plain: {
        name: "సాదా దోశ",
        description:
          "పలుచగా, కరకరలాడే సంప్రదాయ దోశ - తేలికగా, రుచికరంగా ఉంటుంది. మా ఇంట్లో తయారుచేసిన చట్నీలకు చక్కని జోడీ.",
      },
      gheeKaramPodi: {
        name: "నెయ్యి కారం పొడి దోశ",
        description:
          "రుచికరమైన ఎర్ర కారం ఉల్లి చట్నీ, ఇంట్లో తయారుచేసిన పొడి, పైన నెయ్యితో ప్రతి ముద్దలో ఘాటైన రుచినిచ్చే కరకరలాడే దోశ. కారం ఇష్టపడేవారు తప్పక రుచి చూడాలి.",
      },
      idlySambar: {
        name: "ఇడ్లీ సాంబార్",
        description:
          "వేడివేడి, రుచికరమైన సాంబార్‌తో మెత్తని, మృదువైన ఇడ్లీలు - సంపూర్ణమైన దక్షిణ భారత అల్పాహారం.",
      },
    },
  },
  menu: {
    title: "మా రుచికరమైన మెనూ",
    subtitle:
      "శ్రద్ధగా తయారుచేసిన మా సంప్రదాయ వంటకాలతో దక్షిణ భారత అసలైన రుచులను ఆస్వాదించండి",
    mainTitle: "ప్రధాన వంటకాలు",
    sideTitle: "చట్నీలు & కూరలు",
    mainItems: [
      "సాదా దోశ",
      "కారం దోశ",
      "పొడి దోశ",
      "కారం పొడి దోశ",
      "నెయ్యి కారం పొడి దోశ",
      "కారం మసాలా దోశ",
      "నెయ్యి కారం దోశ",
      "నెయ్యి మసాలా దోశ",
      "ఇడ్లీ",
      "ఇడ్లీ సాంబార్",
      "వడ",
      "వడ సాంబార్",
      "పూరీ",
      "బోండా",
    ],
    sideItems: [
      "కొబ్బరి చట్నీ",
      "ఎర్ర కారం ఉల్లి చట్నీ",
      "పూరీ కూర",
      "సాంబార్",
    ],
  },
  services: {
    title: "మా సేవలు",
    subtitle:
      "నాణ్యత, సంప్రదాయంతో అద్భుతమైన భోజన అనుభవాన్ని అందించడమే మా గర్వకారణం",
    items: [
      {
        title: "అసలైన దక్షిణ భారత వంటకాలు",
        description:
          "తరతరాలుగా వస్తున్న సంప్రదాయ వంటకాలను అత్యుత్తమ పదార్థాలతో తయారుచేస్తాం.",
      },
      {
        title: "ప్రతిరోజూ తాజా తయారీ",
        description:
          "మా వంటకాలన్నీ సంప్రదాయ పద్ధతుల్లో ప్రతిరోజూ తాజాగా తయారుచేస్తాం.",
      },
      {
        title: "పరిశుభ్రమైన వంటగది",
        description: "శుభ్రత, ఆహార భద్రతలో అత్యున్నత ప్రమాణాలు పాటిస్తాం.",
      },
      {
        title: "క్యాటరింగ్ సేవలు",
        description:
          "శుభకార్యాలు, పార్టీలు, ప్రత్యేక సందర్భాలకు అసలైన దక్షిణ భారత వంటకాలతో క్యాటరింగ్ సేవలు అందిస్తాం.",
      },
    ],
  },
  quality: {
    title: "మా నాణ్యతే మా గుర్తింపు",
    years: "సంవత్సరాల అనుభవం",
    customers: "ప్రతి వారం సంతోషంగా వచ్చే కస్టమర్లు",
    dishes: "అసలైన వంటకాలు",
    testimonials: [
      {
        name: "పరిటాల వైభవ్",
        quote:
          "నేను ఇప్పటివరకు రుచి చూసిన వాటిలో ఇదే అసలైన దక్షిణ భారత భోజనం. మైదుకూరు హోటల్ ప్రతి ప్లేట్‌లో సంప్రదాయ వంటకాల నిజమైన రుచిని అందిస్తుంది.",
      },
      {
        name: "ఎస్. సాయి రిథిన్",
        quote:
          "ఇక్కడి మసాలా దోశ నాకు చాలా ఇష్టం. ఎర్ర కారం, పూరీ కూర కలయిక అద్భుతంగా ఉంటుంది. ఎంత ఇష్టమంటే కొన్నిసార్లు రోజూ ఇక్కడే తింటాను!",
      },
      {
        name: "మెంటా సత్య హేమంత్",
        quote:
          "ఇక్కడి దోశలు చాలా రుచిగా ఉంటాయి, ధరలు కూడా చాలా తక్కువ. నాకు ఇష్టమైన హోటళ్లలో ఇది ఒకటి.",
      },
    ],
  },
  contact: {
    title: "మమ్మల్ని సంప్రదించండి",
    subtitle: "ఈరోజే రండి, అసలైన దక్షిణ భారత రుచిని ఆస్వాదించండి",
    visitTitle: "మా చిరునామా",
    addressLines: [
      "మైదుకూరు హోటల్",
      "మెయిన్ బజార్, ఆత్మకూరు, నెల్లూరు",
      "ఆంధ్రప్రదేశ్, భారతదేశం",
    ],
    directions: "దారి చూపించు",
    callTitle: "కాల్ చేయండి",
    whatsapp: "వాట్సాప్",
    chatOnWhatsapp: "వాట్సాప్‌లో చాట్ చేయండి",
    hoursTitle: "పని వేళలు",
    days: "సోమవారం - ఆదివారం",
    hours: "ఉదయం 7:00 - ఉదయం 11:00",
    formTitle: "మాకు సందేశం పంపండి",
    name: "పేరు",
    mobile: "మొబైల్ నంబర్",
    email: "ఈమెయిల్",
    message: "సందేశం",
    send: "వాట్సాప్ ద్వారా సందేశం పంపండి",
    nameInvalid: "దయచేసి మీ పేరు నమోదు చేయండి (అక్షరాలు మాత్రమే, కనీసం 2)",
    mobileInvalid: "దయచేసి 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి",
    emailInvalid: "దయచేసి సరైన ఈమెయిల్ చిరునామా నమోదు చేయండి",
    messageRequired: "దయచేసి మీ సందేశాన్ని రాయండి",
    agreeBefore: "నేను ",
    agreeBetween: ", ",
    // Joins with agreeAfter to read "వినియోగ నిబంధనలకు".
    agreeTermsLink: "వినియోగ నిబంధనల",
    agreeAfter: "కు అంగీకరిస్తున్నాను.",
    agreeRequired:
      "పంపే ముందు దయచేసి గోప్యతా విధానం, వినియోగ నిబంధనలకు అంగీకరించండి",
    mapTitle: "గూగుల్ మ్యాప్స్‌లో మైదుకూరు హోటల్",
  },
  whatsapp: {
    quickMessage:
      "నమస్కారం, మైదుకూరు హోటల్ గురించి మరిన్ని వివరాలు తెలుసుకోవాలనుకుంటున్నాను.",
    formMessage: ({ name, mobile, email, message }) => `నమస్కారం మైదుకూరు హోటల్!

నా పేరు ${name}.

${message}

దయచేసి నన్ను ${mobile} నంబర్‌లో${email ? ` లేదా ${email} ఈమెయిల్‌లో` : ""} సంప్రదించండి.

ధన్యవాదాలు!`,
  },
  status: {
    openNow: "ఇప్పుడు తెరిచి ఉంది",
    closedNow: "ఇప్పుడు మూసి ఉంది",
    closedToday: "ఈరోజు సెలవు",
    closesAt: "ఉదయం 11:00 కి మూసివేస్తాం",
    opensToday: "ఈరోజు ఉదయం 7:00 కి తెరుస్తాం",
    opensTomorrow: "రేపు ఉదయం 7:00 కి తెరుస్తాం",
    opensOn: (day) => `${day} ఉదయం 7:00 కి తెరుస్తాం`,
  },
  footer: {
    tagline:
      "25 సంవత్సరాలకు పైగా సంప్రదాయ వంటకాలు, ఆత్మీయ ఆతిథ్యంతో అసలైన దక్షిణ భారత రుచులను అందిస్తున్నాం.",
    quickLinks: "త్వరిత లింకులు",
    contactInfo: "సంప్రదింపు వివరాలు",
    addressLines: [
      "మెయిన్ బజార్, ఆత్మకూరు, నెల్లూరు",
      "ఆంధ్రప్రదేశ్, భారతదేశం",
    ],
    phone: "ఫోన్",
    openDaily: "ప్రతిరోజూ: ఉదయం 7:00 - ఉదయం 11:00",
    rights: "మైదుకూరు హోటల్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
    madeWith: "అసలైన దక్షిణ భారత రుచుల ప్రియుల కోసం ❤️ తో తయారుచేయబడింది.",
    privacy: "గోప్యతా విధానం",
    terms: "వినియోగ నిబంధనలు",
  },
  pages: {
    backHome: "హోమ్‌కు వెళ్ళండి",
    effectiveDate: "అమలు తేదీ",
    effectiveDateValue: "12 అక్టోబర్ 2026",
    translationNote:
      "ఈ తెలుగు అనువాదం మీ సౌలభ్యం కోసం అందిస్తున్నాం. ఏదైనా తేడా ఉంటే, ఇంగ్లీష్ వెర్షన్ వర్తిస్తుంది.",
    notFoundTitle: "పేజీ కనబడలేదు",
    notFoundText:
      "క్షమించండి, ఆ పేజీ దొరకలేదు. మా దోశలు హోమ్ పేజీలో మీ కోసం ఎదురుచూస్తున్నాయి!",
    notFoundButton: "హోమ్‌కు వెళ్ళండి",
    privacyTitle: "గోప్యతా విధానం",
    termsTitle: "వినియోగ నిబంధనలు",
  },
};

export const translations: Record<Language, Translations> = { en, te };
