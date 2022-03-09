const locales = {
  English: { native_name: "English", code: "en" },
  Portugese: { native_name: "Português", code: "pt" },
  Spanish: { native_name: "Español", code: "es" },
  Mandarin: { native_name: "中文", code: "zh" },
  Japanese: { native_name: "日本語", code: "ja" },
  German: { native_name: "Deutsch", code: "de" },
  Italian: { native_name: "Italiano", code: "it" },
};
const getLocale = (langName) => {
  return locales[langName];
};

export const getLocaleNativeName = (langName) => {
  return locales[langName].native_name;
};

export const getLocaleCode = (langName) => {
  return locales[langName].code;
};

export default getLocale;
