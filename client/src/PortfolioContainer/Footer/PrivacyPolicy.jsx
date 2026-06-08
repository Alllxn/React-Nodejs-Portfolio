import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './PrivacyPolicy.css';

export default function PrivacyPolicy({ onClose }) {
    const { t } = useLanguage();
    const p = t.privacy;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div className="project-screen" onClick={onClose}>
            <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-project-datails" onClick={onClose}>
                    <span>[ X ]</span>
                </button>
                <div className="privacy-details card">
                    <h2>{p.title}</h2>
                    <p className="privacy-date">{p.lastUpdated}</p>
                    <div className="privacy-sections">
                        {p.sections.map((s, i) => (
                            <div key={i} className="privacy-section">
                                <h3>{s.title}</h3>
                                <p>{s.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
