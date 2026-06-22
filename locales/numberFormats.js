// Locale-specific number formatting rules
// Covers decimal separators, grouping separators, and percent/unit display

const NUMBER_FORMATS = {
  en:    { decimal: '.',  grouping: ',',  percentSign: '%', minusSign: '-', notation: 'standard' },
  fr:    { decimal: ',',  grouping: '\u202f', percentSign: '\u00a0%', minusSign: '-', notation: 'standard' },
  de:    { decimal: ',',  grouping: '.',  percentSign: '\u00a0%', minusSign: '-', notation: 'standard' },
  es:    { decimal: ',',  grouping: '.',  percentSign: '\u00a0%', minusSign: '-', notation: 'standard' },
  it:    { decimal: ',',  grouping: '.',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  pt_BR: { decimal: ',',  grouping: '.',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  nl:    { decimal: ',',  grouping: '.',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  tr:    { decimal: ',',  grouping: '.',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  ja:    { decimal: '.',  grouping: ',',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  zh:    { decimal: '.',  grouping: ',',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  ko:    { decimal: '.',  grouping: ',',  percentSign: '%',  minusSign: '-', notation: 'standard' },
  ar:    { decimal: '\u066b', grouping: '\u066c', percentSign: '\u066a', minusSign: '\u061c-', notation: 'standard' },
}

/**
 * Format a number according to locale rules.
 * Falls back to Intl.NumberFormat if available, otherwise uses the config above.
 *
 * @param {number} value
 * @param {string} locale  - e.g. 'en', 'fr', 'pt_BR'
 * @param {object} [opts]  - optional Intl.NumberFormat options
 * @returns {string}
 */
function formatNumber(value, locale, opts = {}) {
  const intlLocale = locale.replace('_', '-')
  try {
    return new Intl.NumberFormat(intlLocale, opts).format(value)
  } catch (_) {
    // Naive fallback using the config
    const fmt = NUMBER_FORMATS[locale] || NUMBER_FORMATS.en
    const [intPart, decPart] = Math.abs(value).toFixed(opts.minimumFractionDigits ?? 0).split('.')
    const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, fmt.grouping)
    const sign = value < 0 ? fmt.minusSign : ''
    return decPart !== undefined
      ? `${sign}${grouped}${fmt.decimal}${decPart}`
      : `${sign}${grouped}`
  }
}

module.exports = { NUMBER_FORMATS, formatNumber }
