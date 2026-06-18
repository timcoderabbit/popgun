// Pluralization rules per locale
// Used by the i18n runtime to select the correct plural form

const pluralRules = {
  en: (n) => (n === 1 ? 'one' : 'other'),
  fr: (n) => (n === 0 || n === 1 ? 'one' : 'other'),
  es: (n) => (n === 1 ? 'one' : 'other'),
  de: (n) => (n === 1 ? 'one' : 'other'),
  it: (n) => (n === 1 ? 'one' : 'other'),
  pt_BR: (n) => (n === 1 ? 'one' : 'other'),
  nl: (n) => (n === 1 ? 'one' : 'other'),
  tr: () => 'other', // Turkish has no grammatical plural distinction
  ar: (n) => {
    if (n === 0) return 'zero'
    if (n === 1) return 'one'
    if (n === 2) return 'two'
    if (n % 100 >= 3 && n % 100 <= 10) return 'few'
    if (n % 100 >= 11 && n % 100 <= 99) return 'many'
    return 'other'
  },
  zh: () => 'other', // Chinese has no plural forms
  ko: () => 'other', // Korean has no plural forms
  ja: () => 'other', // Japanese has no plural forms
}

module.exports = pluralRules
