// Returns true if the given locale uses right-to-left text direction
const RTL_LOCALES = ['ar', 'he', 'fa', 'ur']

function isRTL(locale) {
  return RTL_LOCALES.includes(locale)
}

function getTextDirection(locale) {
  return isRTL(locale) ? 'rtl' : 'ltr'
}

module.exports = { isRTL, getTextDirection, RTL_LOCALES }
