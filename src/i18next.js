import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//language files
import english from "./locales/english/translation.json"
import arabic from "./locales/arabic/translation.json"

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: english
        },
        ar: {
            translation: arabic
        }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
      }
})
