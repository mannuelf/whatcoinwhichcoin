module.exports = {
  pwa: {
    name: 'WHATCoin WHICHCoin',
    themeColor: '#1b98e0',
    msTileColor: '#1b98e0',
    appleMobileWebAppCapable: 'yes',
    favicon32: 'assets/icons/favicon-32x32.png',
    favicon16: 'assets/icons/favicon-16x16.png',
    appleTouchIcon: 'assets/icons/icon-48.png',
    maskIcon: 'assets/icons/icon-safari-pinned-tab.svg',
    msTileImage: 'assets/icons/icon-144.png',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: '/src/service-worker.js'
    },
    manifestPath: '/src/manifest.json'
  }
}
