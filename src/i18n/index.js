import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    fr: {translation: frJson}
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbacking: ["fr"],
        interpolation: {escapeValue: false},
        supportedLngs: Object.keys(resources),
        detection: {convertDetectedLanguage: (lng) => lng.split("-")[0]}
    });