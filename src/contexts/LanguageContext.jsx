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
    
    // Landing Page
    theProblemWithSports: 'The Problem with Sports Today',
    talentIsEverywhere: 'Talent is everywhere, but opportunity is not. Fragmented information, lack of visibility, and limited access to resources hold back millions of athletes.',
    readyToStartJourney: 'Ready to Start Your Journey?',
    joinEcosystem: 'Join the ecosystem that powers Indian sports.',
    getStartedNow: 'Get Started Now',
    
    // Hero Section
    oneNation: 'One Nation.',
    oneAthletePlatform: 'One Athlete Platform.',
    centralEcosystem: 'The central ecosystem for opportunity discovery, athlete development, and fair visibility in Indian sports.',
    getStarted: 'Get Started',
    howItWorks: 'How It Works',
    
    // Features Section
    centralizedDiscovery: 'Centralized Discovery',
    onePlatformForSchemes: 'One platform for government schemes, private scholarships, and selection trials.',
    structuredProfiles: 'Structured Profiles',
    noSocialNoise: 'No social noise. Just verified stats, achievements, and readiness data.',
    fairVisibility: 'Fair Visibility',
    getRecognizedByMerit: 'Get recognized by coaches and organizations based on merit, not followers.',
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
    
    // Login Page
    createAccount: 'खाता बनाएं',
    welcomeBack: 'वापसी पर स्वागत है',
    iAmA: 'मैं हूं...',
    yourName: 'आपका नाम',
    password: 'पासवर्ड',
    processing: 'प्रसंस्करण...',
    signUp: 'साइन अप करें',
    login: 'लॉगिन करें',
    continueWithGoogle: 'Google के साथ जारी रखें',
    alreadyHaveAccount: 'पहले से खाता है? लॉगिन करें',
    dontHaveAccount: 'खाता नहीं है? साइन अप करें',
    athlete: 'एथलीट',
    coach: 'कोच',
    organization: 'संगठन',
    
    // Discover Page
    findScholarships: 'आपके लिए बनाए गए छात्रवृत्ति, परीक्षण और प्रतियोगिताएं खोजें।',
    scholarships: 'छात्रवृत्ति',
    tournaments: 'प्रतियोगिता',
    trials: 'परीक्षण',
    dontMissOpportunities: 'अवसरों से चूकें नहीं',
    createAccountToSave: 'अवसरों को सहेजने और सीधे आवेदन करने के लिए एक खाता बनाएं।',
    createFreeAccount: 'निःशुल्क खाता बनाएं',
    
    // About Page
    builtForPrivacy: 'गोपनीयता के लिए निर्मित।',
    poweredByProgress: 'प्रगति द्वारा संचालित।',
    
    // Landing Page
    theProblemWithSports: 'आज के खेल में समस्या',
    talentIsEverywhere: 'प्रतिभा हर जगह है, लेकिन अवसर नहीं है। टूटी हुई जानकारी, दृश्यता की कमी और संसाधनों तक सीमित पहुंच लाखों एथलीट्स को पीछे रखती है।',
    readyToStartJourney: 'अपनी यात्रा शुरू करने के लिए तैयार हैं?',
    joinEcosystem: 'भारतीय खेल को संचालित करने वाले पारिस्थितिकी तंत्र में शामिल हों।',
    getStartedNow: 'अभी शुरू करें',
    
    // Hero Section
    oneNation: 'एक राष्ट्र।',
    oneAthletePlatform: 'एक एथलीट मंच।',
    centralEcosystem: 'भारतीय खेल में अवसर खोज, एथलीट विकास, और निष्पक्ष दृश्यता के लिए केंद्रीय पारिस्थितिकी तंत्र।',
    getStarted: 'शुरू करें',
    howItWorks: 'यह कैसे काम करता है',
    
    // Features Section
    centralizedDiscovery: 'केंद्रीकृत खोज',
    onePlatformForSchemes: 'सरकारी योजनाओं, निजी छात्रवृत्ति और चयन परीक्षण के लिए एक मंच।',
    structuredProfiles: 'संरचित प्रोफाइल',
    noSocialNoise: 'कोई सामाजिक शोर नहीं। केवल सत्यापित आंकड़े, उपलब्धियां और तैयारी का डेटा।',
    fairVisibility: 'निष्पक्ष दृश्यता',
    getRecognizedByMerit: 'योग्यता के आधार पर कोच और संगठनों द्वारा पहचाने जाएं, अनुयायियों के आधार पर नहीं।',
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
    
    // Login Page
    createAccount: 'खाते तयार करा',
    welcomeBack: 'परत येण्यास स्वागत आहे',
    iAmA: 'मी आहे...',
    yourName: 'तुमचे नाव',
    password: 'पासवर्ड',
    processing: 'प्रक्रिया सुरू आहे...',
    signUp: 'साइन अप करा',
    login: 'लॉगिन करा',
    continueWithGoogle: 'गूगल सह सुरू ठेवा',
    alreadyHaveAccount: 'आधीपासूनच खाते आहे? लॉगिन करा',
    dontHaveAccount: 'खाते नाही? साइन अप करा',
    athlete: 'एथलीट',
    coach: 'प्रशिक्षक',
    organization: 'संस्था',
    
    // Discover Page
    findScholarships: 'तुमच्यासाठी निर्माण केलेले शिष्यवृत्ती, चाचणी आणि स्पर्धा शोधा.',
    scholarships: 'शिष्यवृत्ती',
    tournaments: 'स्पर्धा',
    trials: 'चाचणी',
    dontMissOpportunities: 'संधी सोडू नका',
    createAccountToSave: 'संधी जतन करण्यासाठी आणि थेट अर्ज करण्यासाठी एक खाते तयार करा.',
    createFreeAccount: 'विनामूल्य खाते तयार करा',
    
    // About Page
    builtForPrivacy: 'गोपनीयतेसाठी निर्माण केलेले.',
    poweredByProgress: 'प्रगतीने समर्थित.',
    
    // Landing Page
    theProblemWithSports: 'आजच्या खेळात समस्या',
    talentIsEverywhere: 'प्रतिभा सर्वत्र आहे, पण संधी नाही. तुटलेली माहिती, दृश्यतेची कमतरता आणि संसाधनांपर्यंत मर्यादित प्रवेश यामुळे दर्जनो खेळाडू मागे राहतात.',
    readyToStartJourney: 'तुमची प्रवास सुरू करण्यास तयार आहात?',
    joinEcosystem: 'भारतीय खेळाला सूत्रसंचालित करणाऱ्या पारिस्थितिकीतंत्रात सामील व्हा.',
    getStartedNow: 'आता सुरु करा',
    
    // Hero Section
    oneNation: 'एक राष्ट्र.',
    oneAthletePlatform: 'एक एथलीट प्लॅटफॉर्म.',
    centralEcosystem: 'भारतीय खेळातील संधी शोध, खेळाडू विकास आणि निष्पक्ष दृश्यता साठी केंद्रीय पारिस्थितिकीतंत्र.',
    getStarted: 'सुरु करा',
    howItWorks: 'हे कसे काम करते',
    
    // Features Section
    centralizedDiscovery: 'केंद्रित शोध',
    onePlatformForSchemes: 'सरकारी योजना, खाजगी शिष्यवृत्ती आणि निवड परीक्षणांसाठी एकच प्लॅटफॉर्म.',
    structuredProfiles: 'संरचित प्रोफाइल',
    noSocialNoise: 'सामाजिक गोंधळ नाही. फक्त सत्यापित आकडेवारी, उपलब्धी आणि तयारीचा डेटा.',
    fairVisibility: 'निष्पक्ष दृश्यता',
    getRecognizedByMerit: 'कोच आणि संस्थांद्वारे योग्यतेनुसार ओळखले जा, अनुयायांनुसार नाही.',
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