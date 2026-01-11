import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const OpportunityCard = ({ title, type, organization, link }) => (
    <div className="feature-card" style={{ textAlign: 'left' }}>
        <div style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--accent-primary)',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
        }}>{type}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{organization}</p>
        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}>View Details</button>
    </div>
);

const DiscoverPage = () => {
    const { t } = useLanguage();
    return (
        <div className="discover-page" style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t('discover')} {t('opportunities')}</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    {t('findScholarships') || 'Find scholarships, trials, and tournaments curated for you.'}
                </p>
            </div>

            <div className="filters" style={{ marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>{t('all')}</button>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>{t('scholarships') || 'Scholarships'}</button>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>{t('tournaments') || 'Tournaments'}</button>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>{t('trials') || 'Trials'}</button>
            </div>

            <div className="features-grid">
                <OpportunityCard
                    type="Government Scheme"
                    title="Khelo India Scholarship 2026"
                    organization="Ministry of Youth Affairs"
                />
                <OpportunityCard
                    type="Tournament"
                    title="state Level Athletics Meet"
                    organization="Maharashtra Athletics Association"
                />
                <OpportunityCard
                    type="Training"
                    title="Summer High Performance Camp"
                    organization="IIS Vijayanagar"
                />
                <OpportunityCard
                    type="Grant"
                    title="Equipment Support Program"
                    organization="GoSports Foundation"
                />
                <OpportunityCard
                    type="Tournament"
                    title="National School Games Selection"
                    organization="SGFI"
                />
                <OpportunityCard
                    type="Scholarship"
                    title="Reliance Foundation Young Champs"
                    organization="RFYC"
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: 'var(--border-radius)' }}>
                <h3>{t('dontMissOpportunities') || 'Don\'t miss out on opportunities'}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>{t('createAccountToSave') || 'Create an account to save opportunities and apply directly.'}</p>
                <a href="/login" className="btn-primary">{t('createFreeAccount') || 'Create Free Account'}</a>
            </div>
        </div>
    );
};

export default DiscoverPage;
