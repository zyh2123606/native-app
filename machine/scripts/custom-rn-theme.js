const path = require('path')
const fs = require('fs')

const defaultVars = require('antd-mobile-rn/lib/style/themes/default.native')
const customVars = require('../theme')
const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js')

const themeVars = Object.assign({}, defaultVars, customVars)
if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#FF8E44"; var brandPrimaryTap = "#FF8E44";module.exports = ' + JSON.stringify(themeVars)
  )
}