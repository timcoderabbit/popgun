const fs = require('fs')
const path = require('path')

// Quick script to validate all locale files have matching keys
// Run with: node locales/validate.js

const BASE_LOCALE = 'en'
const base = JSON.parse(fs.readFileSync(path.join(__dirname, `${BASE_LOCALE}.json`), 'utf8'))

function flattenKeys(obj, prefix = '') {
  return Object.keys(obj).flatMap(key => {
    const fullKey = prefix ? `${prefix}.${key}` : key
    return typeof obj[key] === 'object' ? flattenKeys(obj[key], fullKey) : [fullKey]
  })
}

const baseKeys = flattenKeys(base)

fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.json') && f !== `${BASE_LOCALE}.json`)
  .forEach(file => {
    const locale = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'))
    const localeKeys = flattenKeys(locale)
    const missing = baseKeys.filter(k => !localeKeys.includes(k))
    const extra = localeKeys.filter(k => !baseKeys.includes(k))

    if (missing.length || extra.length) {
      console.warn(`\n⚠️  ${file}`)
      if (missing.length) console.warn('  Missing keys:', missing)
      if (extra.length) console.warn('  Extra keys:', extra)
    } else {
      console.log(`✅  ${file} — OK`)
    }
  })
