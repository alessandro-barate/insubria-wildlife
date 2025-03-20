import { createI18n } from "vue-i18n";
import { parseTranslationText } from "./utils/textParser";
import it from "./locales/it.json";
import en from "./locales/en.json";

export const i18n = createI18n({
  legacy: false,
  locale: "it",
  fallbackLocale: "it",
  messages: { it, en },
  postTranslation: (text) => parseTranslationText(text),
});
