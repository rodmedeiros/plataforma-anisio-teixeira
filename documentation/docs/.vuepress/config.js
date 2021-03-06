const { description } = require('../../package')

module.exports = {
  title: 'Documentação PAT',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia',
        link: '/guia/',
      },
      {
        text: 'API',
        link: '/api-endpoints/'
      },
      {
        text: 'Pat',
        link: 'http://pat.educacao.ba.gov.br'
      }
    ],
    sidebar: {
      '/guia/': [
        {
          title: 'Guia',
          collapsable: false,
          children: [
            '',
            'estrutura-pastas',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
