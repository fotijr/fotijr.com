module.exports = {
  title: 'Foti Jr',
  description: 'Dominic Foti Jr- a developer using TypeScript, .NET, and other technologies to create web applications.',
  theme: '@vuepress/theme-blog',
  markdown: {
    externalLinks: { target: "_blank" },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '🔗'
    }
  },
  plugins: [
    '@vuepress/blog',
    {
      directories: [
        {
          // Unique ID of current classification
          id: 'blog',
          // Target directory
          dirname: '/blog',
          // Path of the `entry page` (or `list page`)
          path: '/blog',
          itemPermalink: '/blog/:year/:slug',
          pagination: {
            perPagePosts: 2,
          }
        },
      ]
    }
  ],
  head: [
    // favicon links
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]

  ]
}
