module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
    }
  },
  css: { extract: false } // this allows vue components to ship with their scoped CSS in SFC Format
}