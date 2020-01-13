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
  ] 
}
