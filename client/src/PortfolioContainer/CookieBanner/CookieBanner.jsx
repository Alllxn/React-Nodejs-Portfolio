import React, { useState } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { useLanguage } from '../../context/LanguageContext';
import './CookieBanner.css';

export default function CookieBanner() {
    const { consent, setConsent } = useCookieConsent();
    const { t } = useLanguage();
    const c = t.cookies;
    const [showPolicy, setShowPolicy] = useState(false);

    if (consent !== null) return null;

    return (
        <>
            <div id="cookie-banner">
                <div id="cookie-banner-inner" className="card">
                    <p id="cookie-banner-header">[ COOKIE_NOTICE ]</p>
                    <p id="cookie-banner-text">{c.bannerText}</p>
                    <div id="cookie-banner-actions">
                        <button className="cookie-btn cookie-btn-accept" onClick={() => setConsent('accepted')}>
                            {c.accept}
                        </button>
                        <button className="cookie-btn cookie-btn-reject" onClick={() => setConsent('rejected')}>
                            {c.reject}
                        </button>
                        <button className="cookie-btn cookie-btn-policy" onClick={() => setShowPolicy(true)}>
                            {c.policyLink}
                        </button>
                    </div>
                </div>
            </div>
            {showPolicy && (
                <div className="project-screen" onClick={() => setShowPolicy(false)}>
                    <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-project-datails" onClick={() => setShowPolicy(false)}>
                            <span>[ X ]</span>
                        </button>
                        <div className="privacy-details card">
                            <h2>{c.policyTitle}</h2>
                            <p className="privacy-date">{c.policyLastUpdated}</p>
                            <div className="privacy-sections">
                                {c.sections.map((s, i) => (
                                    <div key={i} className="privacy-section">
                                        <h3>{s.title}</h3>
                                        <p>{s.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
