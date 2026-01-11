import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    discover: 'Discover',
    about: 'About',
    login: 'Login / Signup',
    logout: 'Logout',
    
    // Dashboard
    hello: 'Hello',
    welcome: 'Welcome',
    overview: 'Overview',
    opportunities: 'Opportunities',
    network: 'Network',
    coaches: 'Coaches',
    statsVideos: 'Stats & Videos',
    aiInsights: 'AI Insights',
    scoutAthletes: 'Scout Athletes',
    mySquad: 'My Squad',
    organizations: 'Organizations',
    messages: 'Messages',
    portfolio: 'Portfolio',
    myOpportunities: 'My Opportunities',
    shortlisted: 'Shortlisted',
    scoutCoaches: 'Scout Coaches',
    
    // Profile
    editProfile: 'Edit Profile',
    aiAssistant: 'AI Assistant',
    getVerified: 'Get Verified',
    postOpportunity: 'Post Opportunity',
    
    // Profile Fields
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    dateOfBirth: 'Date of Birth',
    gender: 'Gender',
    sport: 'Sport',
    category: 'Category',
    location: 'Location',
    aadharNumber: 'Aadhar Card Number',
    achievements: 'Key Achievements',
    bio: 'Bio',
    experience: 'Experience',
    specialization: 'Specialization',
    orgName: 'Organization Name',
    orgType: 'Organization Type',
    established: 'Established Year',
    website: 'Website',
    description: 'Description',
    facilities: 'Facilities Available',
    achievementsRecognition: 'Achievements & Recognition',
    
    // Buttons
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    uploadPhoto: 'Upload Photo',
    uploadLogo: 'Upload Logo',
    uploadCertificate: 'Upload Certificate',
    uploadAadhar: 'Upload Aadhar Card',
    apply: 'Apply',
    connect: 'Connect',
    message: 'Message',
    emailBtn: 'Email',
    recruit: 'Recruit',
    talk: 'Talk',
    shortlist: 'Shortlist',
    viewProfile: 'View Profile',
    removeFromShortlist: 'Remove',
    manage: 'Manage',
    edit: 'Edit',
    
    // Login Page
    createAccount: 'Create Account',
    welcomeBack: 'Welcome Back',
    iAmA: 'I am a...',
    yourName: 'Your name',
    password: 'Password',
    processing: 'Processing...',
    signUp: 'Sign Up',
    login: 'Login',
    continueWithGoogle: 'Continue with Google',
    alreadyHaveAccount: 'Already have an account? Login',
    dontHaveAccount: "Don't have an account? Sign up",
    athlete: 'Athlete',
    coach: 'Coach',
    organization: 'Organization',
    
    // Discover Page
    findScholarships: 'Find scholarships, trials, and tournaments curated for you.',
    scholarships: 'Scholarships',
    tournaments: 'Tournaments',
    trials: 'Trials',
    dontMissOpportunities: 'Don\'t miss out on opportunities',
    createAccountToSave: 'Create an account to save opportunities and apply directly.',
    createFreeAccount: 'Create Free Account',
    
    // About Page
    builtForPrivacy: 'Built for Privacy.',
    poweredByProgress: 'Powered by Progress.',
  },
  hi: {
    // Navigation
    home: 'होम',
    discover: 'खोजें',
    about: 'हमारे बारे में',
    login: 'लॉगिन / साइनअप',
    logout: 'लॉगआउट',
    
    // Dashboard
    hello: 'नमस्ते',
    welcome: 'स्वागत है',
    overview: 'अवलोकन',
    opportunities: 'अवसर',
    network: 'नेटवर्क',
    coaches: 'कोच',
    statsVideos: 'आंकड़े और वीडियो',
    aiInsights: 'AI जानकारी',
    scoutAthletes: 'एथलीट्स की खोज करें',
    mySquad: 'मेरी टीम',
    organizations: 'संगठन',
    messages: 'संदेश',
    portfolio: 'पोर्टफोलियो',
    myOpportunities: 'मेरे अवसर',
    shortlisted: 'छंटनी सूची में शामिल',
    scoutCoaches: 'कोच ढूंढें',
    
    // Profile
    editProfile: 'प्रोफ़ाइल संपादित करें',
    aiAssistant: 'AI सहायक',
    getVerified: 'सत्यापित करें',
    postOpportunity: 'अवसर पोस्ट करें',
    
    // Profile Fields
    fullName: 'पूरा नाम',
    email: 'ईमेल',
    phone: 'फ़ोन नंबर',
    dateOfBirth: 'जन्म तिथि',
    gender: 'लिंग',
    sport: 'खेल',
    category: 'श्रेणी',
    location: 'स्थान',
    aadharNumber: 'आधार कार्ड नंबर',
    achievements: 'प्रमुख उपलब्धियाँ',
    bio: 'जीवनी',
    experience: 'अनुभव',
    specialization: 'विशेषज्ञता',
    orgName: 'संगठन का नाम',
    orgType: 'संगठन का प्रकार',
    established: 'स्थापना वर्ष',
    website: 'वेबसाइट',
    description: 'विवरण',
    facilities: 'सुविधाएँ उपलब्ध',
    achievementsRecognition: 'उपलब्धियाँ और मान्यता',
    
    // Buttons
    saveChanges: 'परिवर्तन सहेजें',
    cancel: 'रद्द करें',
    uploadPhoto: 'फोटो अपलोड करें',
    uploadLogo: 'लोगो अपलोड करें',
    uploadCertificate: 'प्रमाणपत्र अपलोड करें',
    uploadAadhar: 'आधार कार्ड अपलोड करें',
    apply: 'आवेदन करें',
    connect: 'जुड़ें',
    message: 'संदेश भेजें',
    emailBtn: 'ईमेल',
    recruit: 'भर्ती करें',
    talk: 'बात करें',
    shortlist: 'छंटनी सूची में डालें',
    viewProfile: 'प्रोफ़ाइल देखें',
    removeFromShortlist: 'हटाएं',
    manage: 'प्रबंधित करें',
    edit: 'संपादित करें',
  },
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    discover: 'शोधा',
    about: 'आमच्याबद्दल',
    login: 'लॉगिन / नोंदणी',
    logout: 'बाहेर पडा',
    
    // Dashboard
    hello: 'नमस्कार',
    welcome: 'स्वागत आहे',
    overview: 'पुनरावलोकन',
    opportunities: 'संधी',
    network: 'नेटवर्क',
    coaches: 'प्रशिक्षक',
    statsVideos: 'आकडेवारी आणि व्हिडिओ',
    aiInsights: 'AI ज्ञान',
    scoutAthletes: 'खेळाडू शोधा',
    mySquad: 'माझी टीम',
    organizations: 'संस्था',
    messages: 'संदेश',
    portfolio: 'पोर्टफोलिओ',
    myOpportunities: 'माझ्या संधी',
    shortlisted: 'यादीत समाविष्ट केलेले',
    scoutCoaches: 'प्रशिक्षक शोधा',
    
    // Profile
    editProfile: 'प्रोफाइल संपादित करा',
    aiAssistant: 'AI सहाय्यक',
    getVerified: 'सत्यापित करा',
    postOpportunity: 'संधी पोस्ट करा',
    
    // Profile Fields
    fullName: 'पूर्ण नाव',
    email: 'ईमेल',
    phone: 'फोन क्रमांक',
    dateOfBirth: 'जन्मतारीख',
    gender: 'लिंग',
    sport: 'खेळ',
    category: 'श्रेणी',
    location: 'स्थान',
    aadharNumber: 'आधार कार्ड क्रमांक',
    achievements: 'मुख्य यश',
    bio: 'जीवनचरित्र',
    experience: 'अनुभव',
    specialization: 'तज्ज्ञता',
    orgName: 'संस्थेचे नाव',
    orgType: 'संस्थेचा प्रकार',
    established: 'स्थापना वर्ष',
    website: 'वेबसाइट',
    description: 'वर्णन',
    facilities: 'सुविधा उपलब्ध',
    achievementsRecognition: 'यश आणि मान्यता',
    
    // Buttons
    saveChanges: 'बदल सेव्ह करा',
    cancel: 'रद्द करा',
    uploadPhoto: 'फोटो अपलोड करा',
    uploadLogo: 'लोगो अपलोड करा',
    uploadCertificate: 'प्रमाणपत्र अपलोड करा',
    uploadAadhar: 'आधार कार्ड अपलोड करा',
    apply: 'अर्ज करा',
    connect: 'कनेक्ट करा',
    message: 'संदेश पाठवा',
    emailBtn: 'ईमेल',
    recruit: 'भरती करा',
    talk: 'बोला',
    shortlist: 'यादीत टाका',
    viewProfile: 'प्रोफाइल पहा',
    removeFromShortlist: 'काढा',
    manage: 'व्यवस्थापन',
    edit: 'संपादित करा',
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t, // Translation function
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};