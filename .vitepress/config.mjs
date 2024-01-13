import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ExposerJS",
  description: "API generator Framework based on Express and Prisma",
  head: [['link', { rel: 'icon', href: '/logo-s.ico' }]],
  themeConfig: {
    logo: '/logo-s.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Get started', link: '/guide/get-started' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Default config', link: '/features/default-config' },
          { text: 'Add custom method', link: '/features/custom-method' },
          { text: 'User methods', link: '/features/user-methods' },
          { text: 'Acls', link: '/features/acls' },
        ]
      },
      {
        text: 'Extensions',
        items: [
          { text: 'ORM-Prisma', link: '/extensions/orm-prisma' },
          { text: 'ORM-Studio', link: '/extensions/orm-studio' },
          { text: 'ORM-Sequelize', link: '/extensions/orm-sequelize' },
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'Blog', link: '/blog/blog' },
          { text: 'State', link: '/blog/state' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexmorenograu/exposerjs' }
    ]
  }
})
