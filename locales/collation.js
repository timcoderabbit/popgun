// Locale-aware string sorting and collation helpers
// Uses Intl.Collator where available; falls back to basic locale comparison

/**
 * Collation sensitivity options per locale.
 * 'base'    — only base letters differ (a ≠ b, a = á, a = A)
 * 'accent'  — base + accents differ  (a ≠ á, a = A)
 * 'case'    — base + case differ     (a = á, a ≠ A)
 * 'variant' — all differences matter (a ≠ á, a ≠ A)  [default]
 */
const COLLATION_OPTIONS = {
  en:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  fr:    { sensitivity: 'accent',  caseFirst: 'upper', ignorePunctuation: false },
  de:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  es:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  it:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  pt_BR: { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  nl:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  tr:    { sensitivity: 'variant', caseFirst: 'upper', ignorePunctuation: false },
  // CJK locales: punctuation is commonly ignored in sort contexts
  ja:    { sensitivity: 'variant', caseFirst: false,   ignorePunctuation: true  },
  zh:    { sensitivity: 'variant', caseFirst: false,   ignorePunctuation: true  },
  ko:    { sensitivity: 'variant', caseFirst: false,   ignorePunctuation: true  },
  // Arabic: accent-sensitive; punctuation ignored by convention
  ar:    { sensitivity: 'accent',  caseFirst: false,   ignorePunctuation: true  },
}

/**
 * Get a collator for the given locale.
 *
 * @param {string} locale  - e.g. 'en', 'fr', 'pt_BR'
 * @param {object} [overrides] - any Intl.Collator option overrides
 * @returns {Intl.Collator}
 */
function getCollator(locale, overrides = {}) {
  const bcp47 = locale.replace('_', '-')
  const opts = { ...(COLLATION_OPTIONS[locale] ?? COLLATION_OPTIONS.en), ...overrides }
  try {
    return new Intl.Collator(bcp47, opts)
  } catch (_) {
    return new Intl.Collator('en', opts)
  }
}

/**
 * Sort an array of strings according to locale collation rules.
 *
 * @param {string[]} arr
 * @param {string} locale
 * @param {object} [overrides]
 * @returns {string[]}
 */
function sortStrings(arr, locale, overrides = {}) {
  const collator = getCollator(locale, overrides)
  return [...arr].sort((a, b) => collator.compare(a, b))
}

/**
 * Sort an array of objects by a string property, locale-aware.
 *
 * @param {object[]} arr
 * @param {string} key       - property name to sort by
 * @param {string} locale
 * @param {object} [overrides]
 * @returns {object[]}
 */
function sortByKey(arr, key, locale, overrides = {}) {
  const collator = getCollator(locale, overrides)
  return [...arr].sort((a, b) => collator.compare(String(a[key] ?? ''), String(b[key] ?? '')))
}

/**
 * Case-insensitive locale-aware search: returns true if haystack contains needle.
 *
 * @param {string} haystack
 * @param {string} needle
 * @param {string} locale
 * @returns {boolean}
 */
function localeIncludes(haystack, needle, locale) {
  if (!needle) return true
  const collator = getCollator(locale, { sensitivity: 'base', usage: 'search' })
  // Walk the haystack comparing slices — Intl.Collator doesn't expose indexOf
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (collator.compare(haystack.slice(i, i + needle.length), needle) === 0) return true
  }
  return false
}

module.exports = { COLLATION_OPTIONS, getCollator, sortStrings, sortByKey, localeIncludes }
