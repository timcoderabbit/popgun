// Auto-generated locale loader — do not edit manually
const locales = {}

const files = ['en', 'fr', 'es', 'de', 'ja', 'pt-BR']

files.forEach(lang => {
  locales[lang] = require(`./${lang}.json`)
})

module.exports = locales
