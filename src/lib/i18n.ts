// lib/i18n.ts
export const loadTranslation = async (
  locale: string = "en",
  file: string = "common"
) => {
  const translations = await import(`../locales/${locale}/${file}.json`);
  return translations.default;
};
