import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import englistLocals from "./en.json";
import georgianLocals from "./ka.json";

i18next.use(initReactI18next).init({
    lng: localStorage.getItem("langCode") || "en",
    fallbackLng:"en",
    resources: {
        en: {
            translation:englistLocals,
        },
        ka: {
            translation:georgianLocals,
        },
    },
});