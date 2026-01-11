import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
        { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
    ];

    const currentLang = languages.find(lang => lang.code === language);

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'transparent',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                }}
            >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <span>▼</span>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 0.5rem)',
                        right: 0,
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1000,
                        minWidth: '150px',
                        overflow: 'hidden'
                    }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: language === lang.code ? 'var(--accent-glow)' : 'transparent',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                color: language === lang.code ? 'var(--accent-primary)' : 'var(--text-primary)',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                if (language !== lang.code) {
                                    e.target.style.background = 'var(--bg-secondary)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (language !== lang.code) {
                                    e.target.style.background = 'transparent';
                                }
                            }}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Close dropdown when clicking outside */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999
                    }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default LanguageSelector;