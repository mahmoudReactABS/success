import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <TranslationContext.Provider value={{ t, i18n, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {  
  return useContext(TranslationContext);
};