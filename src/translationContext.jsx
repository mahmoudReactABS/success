// src/context/TranslationContext.js

import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context
const TranslationContext = createContext();

// Create a provider component
export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ t, i18n, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Create a custom hook to access the translation context
export const useTranslationContext = () => {  // Corrected to lowercase
  return useContext(TranslationContext);
};
