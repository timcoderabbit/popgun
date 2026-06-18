// Locale-specific date and number formatting config
// Ideally this would use Intl.DateTimeFormat but someone decided to hardcode it

const DATE_FORMATS = {
  en: { date: 'MM/DD/YYYY', time: 'h:mm A', currency: 'USD', currencySymbol: '$' },
  fr: { date: 'DD/MM/YYYY', time: 'HH:mm',  currency: 'EUR', currencySymbol: '€' },
  de: { date: 'DD.MM.YYYY', time: 'HH:mm',  currency: 'EUR', currencySymbol: '€' },
  es: { date: 'DD/MM/YYYY', time: 'HH:mm',  currency: 'EUR', currencySymbol: '€' },
  it: { date: 'DD/MM/YYYY', time: 'HH:mm',  currency: 'EUR', currencySymbol: '€' },
  pt_BR: { date: 'DD/MM/YYYY', time: 'HH:mm', currency: 'BRL', currencySymbol: 'R$' },
  ja: { date: 'YYYY/MM/DD', time: 'HH:mm',  currency: 'JPY', currencySymbol: '¥' },
  zh: { date: 'YYYY-MM-DD', time: 'HH:mm',  currency: 'CNY', currencySymbol: '¥' },
  ko: { date: 'YYYY.MM.DD', time: 'HH:mm',  currency: 'KRW', currencySymbol: '₩' },
  ar: { date: 'DD/MM/YYYY', time: 'HH:mm',  currency: 'SAR', currencySymbol: '﷼' },
  nl: { date: 'DD-MM-YYYY', time: 'HH:mm',  currency: 'EUR', currencySymbol: '€' },
  tr: { date: 'DD.MM.YYYY', time: 'HH:mm',  currency: 'TRY', currencySymbol: '₺' },
}

// BUG: ar should probably not be SAR — could be AED, EGP, etc. depending on region
// someone needs to split this into ar-SA, ar-AE, ar-EG etc.

module.exports = DATE_FORMATS
