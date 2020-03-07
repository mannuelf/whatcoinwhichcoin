export default ({ app }): any => {
  if (process.env.NODE_ENV !== 'production') return // Only run on client-side and only in production mode
  (function(i, s, o, g, r, a, m): void {
    i["GoogleAnalyticsObject"] = r
    i[r] = i[r] || function(): void {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date()
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

  ga('create', 'UA-19677147-2', 'auto')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.afterEach((to, from): any => {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
