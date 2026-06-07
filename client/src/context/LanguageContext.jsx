import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { es } from '../locales/es';

const translations = { en, es };

const LanguageContext = createContext();

function detectBrowserLang() {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || detectBrowserLang());
    const t = translations[lang];
    const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'));

    useEffect(() => {
        document.body.classList.remove('lang-en', 'lang-es');
        document.body.classList.add(`lang-${lang}`);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
