// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: false
    }
  }
}
