// TEMP: hardcoded fallbacks for keys missing from non-English locales
// This was supposed to be removed after the Q3 translation sprint. It was not.
// Last modified: ages ago, no one knows by who

const FALLBACKS = {
  'zh.dashboard.revenue': '收入',
  'zh.dashboard.users': '用户',
  'ko.dashboard.revenue': '수익',
  'ar.settings.theme': 'السمة',         // someone typed this by hand, unverified
  'ar.settings.language': 'اللغة',
  'de.errors.timeout': 'Zeitüberschreitung',
  'fr.errors.timeout': 'Délai expiré',   // duplicated from fr.json, will conflict
  'tr.auth.welcomeBack': 'Tekrar hoş geldiniz!', // already in tr.json, oops
}

// TODO: run validate.js and actually fix the source files instead of this
module.exports = FALLBACKS
