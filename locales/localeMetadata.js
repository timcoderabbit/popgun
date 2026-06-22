// Metadata for all supported locales
// Includes display names, native names, regions, script, and direction

const LOCALE_METADATA = {
  en: {
    name: 'English',
    nativeName: 'English',
    region: 'United States',
    flag: '🇺🇸',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'en-US',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    region: 'France',
    flag: '🇫🇷',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'fr-FR',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    region: 'Germany',
    flag: '🇩🇪',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'de-DE',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    region: 'Spain',
    flag: '🇪🇸',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'es-ES',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    region: 'Italy',
    flag: '🇮🇹',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'it-IT',
  },
  pt_BR: {
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    region: 'Brazil',
    flag: '🇧🇷',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'pt-BR',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
    region: 'Netherlands',
    flag: '🇳🇱',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'nl-NL',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
    region: 'Turkey',
    flag: '🇹🇷',
    script: 'Latn',
    direction: 'ltr',
    bcp47: 'tr-TR',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    region: 'Japan',
    flag: '🇯🇵',
    script: 'Jpan',
    direction: 'ltr',
    bcp47: 'ja-JP',
  },
  zh: {
    name: 'Chinese (Simplified)',
    nativeName: '中文（简体）',
    region: 'China',
    flag: '🇨🇳',
    script: 'Hans',
    direction: 'ltr',
    bcp47: 'zh-CN',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    region: 'South Korea',
    flag: '🇰🇷',
    script: 'Kore',
    direction: 'ltr',
    bcp47: 'ko-KR',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    region: 'Saudi Arabia',  // TODO: split into ar-SA, ar-AE, ar-EG etc. (see dateFormats.js)
    flag: '🇸🇦',
    script: 'Arab',
    direction: 'rtl',
    bcp47: 'ar-SA',
  },
}

/**
 * Returns a sorted array of locale entries suitable for rendering a language picker.
 * Sorted by the locale's English display name.
 *
 * @returns {{ code: string, name: string, nativeName: string, flag: string }[]}
 */
function getLanguageList() {
  return Object.entries(LOCALE_METADATA)
    .map(([code, meta]) => ({ code, name: meta.name, nativeName: meta.nativeName, flag: meta.flag }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

module.exports = { LOCALE_METADATA, getLanguageList }
