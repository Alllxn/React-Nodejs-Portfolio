import React, { createContext, useContext, useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_ID = 'G-HGG7TNSY9C';
const STORAGE_KEY = 'cookie_consent';

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
    const [consent, setConsentState] = useState(() => localStorage.getItem(STORAGE_KEY));

    useEffect(() => {
        if (consent === 'accepted') ReactGA.initialize(GA_ID);
    }, []);

    const setConsent = (value) => {
        localStorage.setItem(STORAGE_KEY, value);
        setConsentState(value);
        if (value === 'accepted') ReactGA.initialize(GA_ID);
    };

    return (
        <CookieConsentContext.Provider value={{ consent, setConsent }}>
            {children}
        </CookieConsentContext.Provider>
    );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
